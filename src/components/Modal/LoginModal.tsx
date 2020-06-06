import React from "react";
import Modal from "../UI/Modal";
import Input, { WrapInput } from "../UI/Input";
import Button from "../UI/Button";
function LoginModal() {
  return (
    <Modal modalName="login">
      <h1>로그인</h1>

      <form style={{ width: 300 }}>
        <WrapInput fieldName="아이디">
          <Input type="text" />
        </WrapInput>
        <WrapInput fieldName="비밀번호">
          <Input type="password" />
        </WrapInput>
        <Button full>로그인</Button>
      </form>
    </Modal>
  );
}

export default LoginModal;
