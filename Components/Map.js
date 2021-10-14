import styled from 'styled-components';
import { useDashboard } from "./InitialData";


export function Map (props) {
  const { data, onChangeData, selected } = useDashboard();
  return <StyledMap></StyledMap>;
}
const StyledMap = styled.div`
  width: 100%;
  height: 100%;
`;
