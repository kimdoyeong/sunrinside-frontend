import React, { useEffect } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/UI/Heading";
import User from "../lib/api/user";
import { toast } from "react-toastify";

function VerifyPage({
  match: {
    params: { id, code },
  },
}: RouteComponentProps<{ id: string; code: string }>) {
  const history = useHistory();

  useEffect(() => {
    User.verifyCode({ id, code })
      .then(() => {
        toast.done("인증이 완료되었습니다.");
        history.replace("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }, [id, code, history]);
  return (
    <Page>
      <Heading>인증을 진행하고 있습니다.</Heading>
      <p>잠시만 기다려주세요.</p>
    </Page>
  );
}
const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  * {
    margin-bottom: 0 !important;
  }
`;
export default VerifyPage;
