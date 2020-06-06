import React from "react";
import { css } from "styled-components";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import Input, { WrapInput } from "../components/UI/Input";
import Flex from "../components/UI/Flex";
import viewport from "../constants/viewport";
import Button from "../components/UI/Button";

function SignUpPage() {
  return (
    <Layout>
      <div style={{ maxWidth: 640, margin: "auto" }}>
        <Heading>회원가입</Heading>
        <form>
          <WrapInput fieldName="아이디">
            <Input />
          </WrapInput>
          <Flex css={flexCss}>
            <WrapInput fieldName="비밀번호">
              <Input type="password" />
            </WrapInput>
            <WrapInput fieldName="비밀번호 확인">
              <Input type="password" />
            </WrapInput>
          </Flex>
          <WrapInput fieldName="이름">
            <Input
              type="text"
              placeholder="실명을 입력해주세요. (노출되지 않습니다.)"
            />
          </WrapInput>
          <Button full>회원가입</Button>
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
