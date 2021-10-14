import styled from 'styled-components';
import { useDashboard } from './InitialData';

export function Overview(props) {
  const { selected } = useDashboard();
  return (
    <StyledOverview>
      {selected != null ? (
        <p>{JSON.stringify(selected, null, 2)}</p>
      ) : (
        <p>Item not selected</p>
      )}
    </StyledOverview>
  );
}
const StyledOverview = styled.div`
  position: sticky;
`;
