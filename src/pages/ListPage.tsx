import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import ThreadList from "../components/ThreadList";
import Button from "../components/UI/Button";
import { Link } from "react-router-dom";

function ListPage() {
  return (
    <Layout>
      <Style>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link to="/write">
            <Button>
              <span role="img" aria-label="pen">
                🖋
              </span>{" "}
              글쓰기
            </Button>
          </Link>
        </div>
        <Heading>지금 뜨고 있는 글</Heading>
        <ThreadList type="trending" />
      </Style>
    </Layout>
  );
}

const Style = styled.div`
  flex: 1;
  margin-top: 2em;
`;
export default ListPage;
