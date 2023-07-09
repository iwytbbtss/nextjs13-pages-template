import { createGlobalStyle } from 'styled-components';
import color from '../color';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html, body {
  max-width: 100vw;
  min-height: calc(100vh - env(safe-area-inset-bottom));
  overflow-x: hidden;
  position: relative;
  overscroll-behavior-y: none;
  background-color: ${color.primary};
  color: ${color.secondary};
  font-size: 20px;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
