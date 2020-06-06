import React, { useEffect } from "react";
import Modal from "../UI/Modal";
import Input, { WrapInput } from "../UI/Input";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { toast } from "react-toastify";
import { Login } from "../../store/slices/auth";
import useModal from "../../hooks/useModal";
function LoginModal() {
  const { register, handleSubmit } = useForm();
  const { close } = useModal("login");

  const dispatch = useDispatch();
  const { error, pending, isLogin } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  useEffect(() => {
    isLogin && close();
  }, [isLogin, close]);

  function onsubmit(data: any) {
    dispatch(Login(data));
  }
  return (
    <Modal modalName="login">
      <h1>로그인</h1>

      <form style={{ width: 300 }} onSubmit={handleSubmit(onsubmit)}>
        <WrapInput fieldName="아이디">
          <Input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
        </WrapInput>
        <WrapInput fieldName="비밀번호">
          <Input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
        </WrapInput>
        <Button full disabled={pending}>
          {!pending ? "로그인" : "처리 중"}
        </Button>
        <hr />
        <Link to="/signup">회원가입</Link>
      </form>
    </Modal>
  );
}

export default LoginModal;
