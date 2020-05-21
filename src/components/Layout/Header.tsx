import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Wrap>
      <div className="left"></div>
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
`;

export default Header;
