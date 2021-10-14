import { useState } from 'react';
import styled from 'styled-components';
import { List } from './List';
import { Overview } from './Overview';
import { Map } from './Map';
import { DashboardProvider } from './InitialData';
import { Header } from './Header';

export function Dashboard (props) {
  const [data, setData] = useState([
    'first element',
    'second element',
    'third element',
  ]);

  const [selected, setSelected] = useState(null);

  function onChangeData (newData) {
    setData(newData);
  }

  function onSetSelected (itemId) {
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
const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 1fr;
  width: 100%;
  height: 100%;
`;
Dashboard.Header = Header;
Dashboard.List = List;
Dashboard.Overview = Overview;
Dashboard.Map = Map;
