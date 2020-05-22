import React from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";

import useDarkMode, { useDarkModeEffects } from "../../hooks/useDarkMode";
import Header from "./Header";

function Layout() {
  const { isDark } = useDarkMode();
  useDarkModeEffects();

  const theme = {
    isDark,
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrap>
        <GlobalStyle />
        <Header />
      </Wrap>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: background 0.5s, color 0.5s;

    }
    
    /* Dark Mode*/
    ${(props) =>
      props.theme.isDark &&
      css`
        body {
          background: #242526;
          color: white;
        }
      `}
`;
const Wrap = styled.div``;

export default Layout;
