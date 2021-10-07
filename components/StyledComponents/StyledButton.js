import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid #000;
  padding: ${(props) => (props.p ? props.p + 'px' : '.5em')};
  width: ${(props) => (props.width ? props.width + 'px' : '100%')};
  :focus {
    background-color: #fff;
  }
`;
