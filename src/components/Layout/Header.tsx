import React from "react";
import styled from "styled-components";
import viewport from "../../constants/viewport";
import UISwitch from "../UI/Switch";
import useDarkMode from "../../hooks/useDarkMode";
import useModal from "../../hooks/useModal";
import useLogin from "../../hooks/useLogin";
function Header() {
  const { isDark, setDarkMode } = useDarkMode();
  const login = useLogin();
  const { open } = useModal("login");

  const loginButton = (
    <div className="login" role="button" onClick={open}>
      로그인
    </div>
  );
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
      <div className="right">{!login.isLogin && loginButton}</div>
    </Wrap>
  );
}

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: 1em;
  padding-right: 1em;

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
