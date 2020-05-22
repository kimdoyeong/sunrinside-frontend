import React from "react";
import Modal from "react-modal";
import useModal from "../../hooks/useModal";
function LoginModal() {
  const { isOpen, close } = useModal("login");
  return (
    <Modal isOpen={isOpen} onRequestClose={close}>
      <h1>로그인</h1>
    </Modal>
  );
}

export default LoginModal;
