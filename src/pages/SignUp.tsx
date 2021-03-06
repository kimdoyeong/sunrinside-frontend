import React from "react";
import { css } from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import Input, { WrapInput } from "../components/UI/Input";
import Flex from "../components/UI/Flex";
import viewport from "../constants/viewport";
import Button from "../components/UI/Button";
import User from "../lib/api/user";

function SignUpPage() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });
  const history = useHistory();
  const password = watch("password");

  function onSubmit(data: any) {
    User.createUser(data)
      .then(() => {
        history.replace("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }
  return (
    <Layout center>
      <div style={{ maxWidth: 640, width: "100%", marginTop: "3em" }}>
        <Heading>회원가입</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <WrapInput fieldName="아이디" error={errors.username}>
            <Input
              type="text"
              autoComplete="username"
              name="username"
              ref={register({
                required: "아이디를 입력해주세요.",
                minLength: {
                  value: 6,
                  message: "아이디는 6자 이상이어야 합니다.",
                },
                validate: async (username) =>
                  !(await User.checkExists(username)) ||
                  "이미 있는 유저입니다.",
              })}
            />
          </WrapInput>
          <Flex css={flexCss}>
            <WrapInput fieldName="비밀번호" error={errors.password}>
              <Input
                type="password"
                autoComplete="new-password"
                name="password"
                ref={register({
                  required: "비밀번호를 입력해주세요.",
                  minLength: {
                    value: 8,
                    message: "비밀번호는 8자 이상이어야 합니다.",
                  },
                })}
              />
            </WrapInput>
            <WrapInput fieldName="비밀번호 확인" error={errors.passwordAccept}>
              <Input
                type="password"
                autoComplete="new-password"
                name="passwordAccept"
                ref={register({
                  validate: (value) =>
                    password === value || "비밀번호를 다시 확인해주세요.",
                })}
              />
            </WrapInput>
          </Flex>
          <WrapInput fieldName="이메일" error={errors.email}>
            <Input
              type="email"
              autoComplete="email"
              name="email"
              ref={register({
                required: true,
                pattern: {
                  message: "@sunrint.hs.kr 이메일이 필요합니다.",
                  value: /@sunrint\.hs\.kr$/,
                },
              })}
            />
          </WrapInput>
          <WrapInput fieldName="이름" error={errors.name}>
            <Input
              type="text"
              placeholder="실명을 입력해주세요. (노출되지 않습니다.)"
              name="name"
              autoComplete="name"
              ref={register({ required: "이름을 입력해주세요." })}
            />
          </WrapInput>
          <Button full>회원가입</Button>
          <p>회원가입 후, 인증 이메일을 확인해주세요.</p>
        </form>
      </div>
    </Layout>
  );
}

const flexCss = css`
  > * {
    flex: 1;
  }
  > *:first-child {
    margin-right: 1em;
  }

  @media screen and (max-width: ${viewport.mobile}) {
    display: block;
    > *:first-child {
      margin-right: 0;
    }
  }
`;
export default SignUpPage;
