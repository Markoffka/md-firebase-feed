import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 56px;
  border-bottom: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  background-color: #c3c3c3;
  z-index: 69;
`;

export const MenuContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: auto;
  height: 100%;
  display: inline-flex;
  flex-wrap: nowrap;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export const MenuButton = styled.li`
  height: 100%;
  min-width: 64px;
  width: auto;
  padding: 1em;
  list-style: none;
`;
