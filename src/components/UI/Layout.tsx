import React from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";

import useDarkMode from "../../hooks/useDarkMode";

function Layout() {
  const darkMode = useDarkMode();

  const theme = {
    darkMode,
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <GlobalStyle />
      </Wrap>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;

        
    }
    
    /* Dark Mode*/
    ${(props) =>
      props.theme.darkMode &&
      css`
        body {
          background: #242526;
          color: white;
        }
      `}
`;
const Wrap = styled.div``;

export default Layout;
