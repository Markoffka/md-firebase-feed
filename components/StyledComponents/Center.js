import styled from 'styled-components';

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 768px;
  width: 100%;

  @media screen and (max-width: 728px) {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    padding: 1em;
    margin-top: 2vh;
    margin-bottom: 2vh;
    max-width: 100%;
  }

  text-align: center;

  label {
    text-align: start;
    width: 100%;
    margin-bottom: 1em;
    input {
      width: 100%;
      padding: 0.5em;
    }
  }
`;
