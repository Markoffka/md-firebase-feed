import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}

function Dashboard(props) {
  const [data, setData] = useState([
    'first element',
    'second element',
    'third element',
  ]);
  const [selected, setSelected] = useState(null);
  function onChangeData(newData) {
    setData(newData);
  }

  function onSetSelected(itemId) {
    setSelected(data[itemId]);
  }

  return (
    <>
      <DashboardProvider
        value={{ data, onChangeData, onSetSelected, selected }}
      >
        <StyledDashboard>
          <Dashboard.Header />
          <Dashboard.List />
          <Dashboard.Overview />
          <Dashboard.Map />
        </StyledDashboard>
      </DashboardProvider>
    </>
  );
}

function Header(props) {
  const { data, onChangeData } = useDashboard();

  return <></>;
}

function List(props) {
  const { data, onChangeData, onSetSelected } = useDashboard();
  return (
    <ListItemsMap>
      {data && data.length > 0 ? (
        data.map((el, idx) => (
          <ListItem onClick={() => onSetSelected(idx)} key={'item' + idx}>
            {JSON.stringify(el, null, 2)}
          </ListItem>
        ))
      ) : (
        <>No items</>
      )}
    </ListItemsMap>
  );
}
const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 1fr;

  width: 100%;
  height: 100%;
`;

const ListItemsMap = styled.ul`
  height: 100%;
  max-height: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  height: 100%;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  padding: 1em;
  background-color: #ff048e;
`;
function Overview(props) {
  const { selected } = useDashboard();
  return (
    <StyledOverview>
      {selected != null ? (
        <>{JSON.stringify(selected, null, 2)}</>
      ) : (
        <>Item not selected</>
      )}
    </StyledOverview>
  );
}
const StyledOverview = styled.div`
  background-color: #000;
  color: #fff;
`;
function Map(props) {
  const { data, onChangeData, selected } = useDashboard();
  return <StyledMap></StyledMap>;
}

const StyledMap = styled.div`
  background-color: #d24e2d;
  width: 100%;
  height: 100%;
`;

Dashboard.Header = Header;
Dashboard.List = List;
Dashboard.Overview = Overview;
Dashboard.Map = Map;

const InitialData = {
  text: 'initial data',
};

const DashboardContext = createContext(InitialData);

function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (ctx == null) throw new Error('No Context');
  return ctx;
}

function DashboardProvider({ value, children }) {
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
