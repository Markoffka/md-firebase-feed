import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns != null ? columns : 'repeat(auto-fill, minmax(200px, 1fr))'};
  padding: 1em;
  gap: 1em;
  border: 1px solid #eee;
  border-radius: 6px;
`;
