import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Layout from "../components/Layout";

function ThreadViewPage({
  match: { params: id },
}: RouteComponentProps<{ id: string }>) {
  return <Layout></Layout>;
}

export default ThreadViewPage;
