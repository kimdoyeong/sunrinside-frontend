import React from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";
import {Helmet} from "react-helmet";

import Header from "./Header";
import useTheme from "../../hooks/useTheme";
import viewport from "../../constants/viewport";

interface LayoutProps {
  children?: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link
          rel="stylesheet"
          href="'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap')"
        />
      </Helmet>
      <Wrap>
        <GlobalStyle />
        <Header />
        <article>{children}</article>
      </Wrap>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`

    body {
        margin: 0;
        transition: background 0.5s, color 0.5s;
    }
    * {
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 'Noto Sans KR', sans-serif;
    }
    form {
      -webkit-appearance: none;
    }

    a {
      color: #0073ff;
      text-decoration: none;
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
const Wrap = styled.div`
  & > article {
    margin: 0 auto;
    box-sizing: border-box;
    padding: 1em;

    @media screen and (min-width: ${viewport.desktop}) {
      padding: 1em 8vw;
    }
  }
`;

export default Layout;
