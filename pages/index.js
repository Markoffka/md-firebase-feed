import { Dashboard } from '../Components/Dashboard';
import styled, { ThemeProvider } from 'styled-components';
import { useState } from 'react';

/**
 *    |HEADER|HEADER
 *    | LIST | ADD
 *    | LIST |
 *    | LIST |
 */

export default function Home() {
  const [theme, setTheme] = useState({
    borderRadius: '1em',
    primaryColor: '#fff',
  });
  return (
    <ThemeProvider {...{ theme }}>
      <StyledWrapper>
        <StyledHeader>
          <HeaderGroup>
            <Button>First</Button>
            <Button>Second</Button>
          </HeaderGroup>
        </StyledHeader>
        <StyledList>
          <label>
            borderRadius
            <input
              type="number"
              max={50}
              min={0}
              value={theme.borderRadius}
              onChange={(e) => {
                setTheme((prev) => {
                  return { ...prev, borderRadius: `${e.target.value}` };
                });
              }}
            />
          </label>
        </StyledList>
        <StyledAdd></StyledAdd>
      </StyledWrapper>
    </ThemeProvider>
  );
}

const HeaderGroup = styled.div`
  display: flex;
  height: 100%;
`;

const Button = styled.div`
  height: 100%;
  width: max-content;

  padding: var(--btn-padding);
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--primary);

  font-weight: 400;

  :hover {
    background-color: var(--secondary);
    cursor: pointer;
  }
`;

const StyledWrapper = styled.div`
  display: grid;
  padding: ${({ theme }) => `${theme.borderRadius}px`};
  grid-template-areas: ${({ template }) =>
    template
      ? template
      : `
        'h h h h' 
        '. l l a'
        `};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 64px 1fr;
  grid-gap: ${({ theme }) => `${theme.borderRadius}px`};
  background-color: var(--bg-dark);
  width: 100%;
  height: 100vmin;

  color: ${({ theme }) => `${theme.primaryColor}`};
`;

const StyledHeader = styled.div`
  grid-area: h;
  background-color: var(--bg-light);
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  overflow: hidden;
`;

const StyledList = styled.div`
  grid-area: l;
  background-color: var(--bg-light);
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
  padding: ${({ theme }) => `${theme.borderRadius}px`};
`;

const StyledAdd = styled.div`
  grid-area: a;
  background-color: var(--bg-light);
  border-radius: ${({ theme }) => `${theme.borderRadius}px`};
`;
