import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import { Link } from "react-router-dom";
import Button from "../components/UI/Button";
import useLogin from "../hooks/useLogin";
import ListPage from "./ListPage";

function IndexPage() {
  const login = useLogin();
  if (login.isLogin) return <ListPage />;
  return (
    <Layout>
      <Style>
        <div className="typography">
          <Heading className="title">Sunrinside</Heading>
          <Heading tag="h3" tagStyle="h6" className="description">
            선린인터넷고등학교 익명 커뮤니티
          </Heading>
          <p>sunrint.hs.kr 이메일로 가입하실 수 있습니다.</p>
        </div>
        <div className="join">
          <Link to="/signup">
            <Button>가입하기</Button>
          </Link>
        </div>
      </Style>
    </Layout>
  );
}

const Style = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .typography {
    text-align: center;
  }
  .title {
    margin-bottom: 0 !important;
  }
  .description {
    margin-bottom: 0 !important;
  }
`;
export default IndexPage;
