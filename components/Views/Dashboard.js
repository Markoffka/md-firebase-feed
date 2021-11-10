import { Card, InputGroup } from '@blueprintjs/core';
import styled from 'styled-components';
import WithAuth from '../Tools/WithAuth';
import '@blueprintjs/core/lib/css/blueprint.css';
function Dashboard() {
  return (
    <StyledDashboard>
      <Card>
        <h2>Add new delivery</h2>
        <h3>Main cargo information</h3>
        <p>This settings require, write with attention.</p>
        <InputGroup fill placeholder="Delivery short title"></InputGroup>
        <InputGroup fill placeholder="Delivery short description"></InputGroup>
        <InputGroup fill placeholder="Delivery short description"></InputGroup>
      </Card>
    </StyledDashboard>
  );
}

export default WithAuth(Dashboard);

const StyledDashboard = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vmin;
  align-content: flex-start;

  padding-top: 5em;
`;
