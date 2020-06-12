import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Loader from "react-loader";
import styled from "styled-components";
import Layout from "../components/Layout";
import ThreadContent from "../components/ThreadContent";
import Heading from "../components/UI/Heading";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import { getThreadThunk } from "../store/slices/thread";

function ThreadViewPage({
  match: { params },
}: RouteComponentProps<{ id: string }>) {
  const dispatch = useDispatch();
  const { loading, thread } = useSelector((state: RootState) => state.thread);

  useEffect(() => {
    dispatch(getThreadThunk(params.id));
  }, [params.id, dispatch]);

  return (
    <Layout title={loading ? "로딩 중..." : thread && thread.title}>
      <Loader loaded={!loading}>
        <Heading>{thread && thread.title}</Heading>
        <ThreadList>
          <ThreadContent {...thread} />
        </ThreadList>
      </Loader>
    </Layout>
  );
}

const ThreadList = styled.div``;
export default ThreadViewPage;
