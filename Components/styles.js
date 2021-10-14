import styled, { createGlobalStyle, css } from 'styled-components';

export const ListItemsMap = styled.ul`
  height: 100vmin;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
`;
export const ListItem = styled.li`
  padding: 1em;
  border: 1px solid transparent;
  ${({ isSelected }) =>
    isSelected
      ? css`
          border-color: red;
        `
      : css`
          background-color: #000;
          color: #fff;
        `}
  ${({ isCompleted }) =>
    isCompleted
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
  position: relative;
  ::after {
    content: attr(key, 'fail');
    position: absolute;
  }
`;

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  :root{
    --bg-dark: #000814;
    --bg-light: #001d3d;
    --primary: #ffd60a;
    --secondary: #003566;
    --warning: #ffd166;
    --error: #ef476f;
    
    --border: 1px solid var(--fr-dark);
    --border-radius: 20px;

    --btn-padding: 1em;
  }

  body, html {
    margin: 0;
    padding: 0;

    width: 100%;
    height: 100%;

    overflow: hidden;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }

  * {
    box-sizing: border-box;
  }
`;
