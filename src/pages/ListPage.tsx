import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";

function ListPage() {
  return (
    <Layout>
      <Style>
        <Heading>지금 뜨고 있는 글</Heading>
      </Style>
    </Layout>
  );
}

const Style = styled.div`
  flex: 1;
  margin-top: 2em;
`;
export default ListPage;
