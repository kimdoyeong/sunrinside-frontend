import React from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import colors from "../constants/colors";
import Button from "./UI/Button";
import useModal from "../hooks/useModal";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/reducers";
import threadSlice from "../store/slices/thread";

interface ThreadContentProps {
  by: {
    userId: number;
    isWriter?: boolean;
  };
  createdAt: string;
  title?: string;
  content: string;
  vote: {
    up: number;
    down: number;
  };
  subthreads: any[];
  level?: number;
  _id: string;
}
function ThreadContent({
  vote,
  by,
  content,
  createdAt,
  subthreads,
  _id,
  level = 0,
}: ThreadContentProps) {
  const formattedDate = moment(createdAt).format("YYYY-MM-DD hh:mm:ss");
  const modal = useModal("subthread");
  const { isDark } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  function openModal() {
    dispatch(threadSlice.actions.setId(_id));
    modal.open();
  }
  const jsx = (
    <Wrap level={level}>
      <header
        className={["header", by.isWriter && "writer"]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="user">
          {by.isWriter && (
            <span role="img" aria-label="writer">
              🖋
            </span>
          )}{" "}
          #{by.userId}번 작성자
        </span>
        <span className="date">{formattedDate}</span>
      </header>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <footer className="footer">
        <div className="buttons">
          <Button>
            <span role="img" aria-label="thumbs-up">
              👍
            </span>{" "}
            추천 {vote.up}
          </Button>
          <Button>
            <span role="img" aria-label="thumbs-down">
              👎
            </span>{" "}
            비추천 {vote.down}
          </Button>
          <Button
            color={!isDark ? colors.black : colors.white}
            background={!isDark ? colors.white : colors.black}
            onClick={openModal}
          >
            답글 달기
          </Button>
        </div>
      </footer>
    </Wrap>
  );

  if (subthreads.length > 0)
    return (
      <>
        {jsx}
        {subthreads.map((v: any, i: any) => (
          <ThreadContent key={i} level={level + 1} {...v} />
        ))}
      </>
    );
  return jsx;
}

const Wrap = styled.div<{ level: number }>`
  background: ${({ theme }) =>
    !theme.isDark ? colors.primaryWhite1 : colors.primaryBlack1};
  border-radius: 0.5em;

  ${({ level }) =>
    level > 1 &&
    css`
      margin-left: ${level}em;
    `}
  .header {
    padding: 1em 1.5em;
    display: flex;
    justify-content: space-between;

    &.writer {
      background: ${colors.primary};
      color: white;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
    }
  }
  .article {
    font-size: 1.2em;
    padding: 1em;
  }
  .footer {
    padding: 0 1em 1em;
    .buttons {
      display: flex;
      > * {
        margin-right: 1em;
      }
    }
  }
  margin-bottom: 2em;
`;
export default ThreadContent;
