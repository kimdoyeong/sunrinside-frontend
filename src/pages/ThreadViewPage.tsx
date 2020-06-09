import React, { useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import Loader from "react-loader";
import styled from "styled-components";
import Layout from "../components/Layout";
import useAsync from "../hooks/useAsync";
import Thread from "../lib/api/Thread";
import ThreadContent from "../components/ThreadContent";
import Heading from "../components/UI/Heading";

function ThreadViewPage({
  match: { params },
}: RouteComponentProps<{ id: string }>) {
  const func = useCallback(() => Thread.getThread(params.id), [params.id]);
  const { data, loading } = useAsync(func, { errorToast: true });

  return (
    <Layout title={loading ? "로딩 중..." : data.title}>
      <Loader loaded={!loading}>
        <Heading>{data && data.title}</Heading>
        <ThreadList>
          <ThreadContent {...data} />
        </ThreadList>
      </Loader>
    </Layout>
  );
}

const ThreadList = styled.div``;
export default ThreadViewPage;
