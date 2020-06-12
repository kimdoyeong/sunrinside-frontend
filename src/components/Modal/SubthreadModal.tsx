import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import useModal from "../../hooks/useModal";
import threadSlice from "../../store/slices/thread";
import Thread from "../../lib/api/Thread";

function SubthreadModal() {
  const [text, setText] = useState("");
  const editor = useRef<HTMLTextAreaElement | null>(null);
  const { isOpen, close } = useModal("subthread");
  const { subthreadId } = useSelector((state: RootState) => state.thread);
  const dispatch = useDispatch();

  useEffect(() => {
    !isOpen && dispatch(threadSlice.actions.removeId());
    isOpen && editor.current && editor.current.focus();
  }, [isOpen, dispatch, editor]);

  function onChange(e: any) {
    setText(e.target.value);
  }

  function onSubmit(e: any) {
    e.preventDefault();

    if (!text || !subthreadId) return;
    Thread.postSubthread(subthreadId, text).then(close);
  }

  return (
    <Modal modalName="subthread">
      <EditorWrap onSubmit={onSubmit}>
        <textarea className="text-editor" onChange={onChange} ref={editor} />
        <Button full>작성</Button>
      </EditorWrap>
    </Modal>
  );
}

const EditorWrap = styled.form`
  width: 400px;

  > .text-editor {
    width: 100%;
    height: 50vh;
    max-height: 300px;
    resize: none;
    overflow-y: auto;
    border: 0;
  }
`;
export default SubthreadModal;
