import React from "react";
import styled from "styled-components";
import viewport from "../../lib/viewport";
import UISwitch from "../UI/Switch";
import useDarkMode from "../../hooks/useDarkMode";
function Header() {
  const { isDark, setDarkMode } = useDarkMode();
  return (
    <Wrap>
      <div className="left">
        <UISwitch
          falseText={
            <span role="img" aria-label="Light">
              ☀️
            </span>
          }
          trueText={
            <span role="img" aria-label="Dark">
              🌒
            </span>
          }
          state={isDark}
          onChange={setDarkMode}
        />
      </div>
      <div className="right">
        <div className="login" role="button">
          로그인
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  .login {
    cursor: pointer;
    padding: 0.5em 1em;
  }

  @media screen and (min-width: ${viewport.desktop}) {
    padding-left: 10vw;
    padding-right: 10vw;
    height: 80px;
  }
`;

export default Header;
