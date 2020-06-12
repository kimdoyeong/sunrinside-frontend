import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../components/Layout";
import Heading from "../components/UI/Heading";
import Button from "../components/UI/Button";
import Thread from "../lib/api/Thread";

function WritePage() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();

  function onchange(setter: any) {
    return (e: any) => {
      setter(e.target.value);
    };
  }
  function onsubmit(e: any) {
    e.preventDefault();

    if (!title || !content) return;
    Thread.postThread(title, content)
      .then((id) => {
        history.replace("/thread/" + id);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  }

  return (
    <Layout>
      <Form onSubmit={onsubmit}>
        <header className="header">
          <Heading>글 쓰기</Heading>
          <Button>작성</Button>
        </header>
        <div className="main">
          <input
            type="text"
            placeholder="제목"
            onChange={onchange(setTitle)}
            value={title}
            className="title"
          />
          <textarea
            className="article"
            value={content}
            onChange={onchange(setContent)}
          />
        </div>
      </Form>
    </Layout>
  );
}
const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main {
      flex: 1;
      display: flex;
      flex-direction: column;

    .title {
        display: block;
        width: 100%;
        font-size: 1.5em;
    }
    .article {
        resize: none;
        flex: 1;
        font-size: 1rem;
    }
  .
  }
`;
export default WritePage;
