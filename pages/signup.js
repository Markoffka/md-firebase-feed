import { useEffect } from "react";
import { useMap } from "react-use";

import styled from "styled-components";

const Demo = () => {
  const [map, { get, remove, reset, set, setAll }] = useMap();

  useEffect(() => {
    setAll(
      { dateTime: new Date().toISOString() }
    )
  }, [setAll])

  return (
    <>
      <StyledContainer>
        <pre>{JSON.stringify(map, null, 2)}</pre>
      </StyledContainer>
    </>
  )
};

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1d1d1d;
  color: #c3c3c3;

  display: grid;
  justify-content: center;
  align-content: center;

  width: 100%;
  padding: 5em;
  gap: 3em;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export default Demo;