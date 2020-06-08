import React from "react";
import styled from "styled-components";
import colors from "../../constants/colors";
import viewport from "../../constants/viewport";
import { Link } from "react-router-dom";

interface ThreadProps {
  _id: string;
  title: string;
  vote: {
    up: number;
    down: number;
  };
  subthreads: number;
}
function Thread({ _id, title, vote, subthreads }: ThreadProps) {
  return (
    <Link
      to={"/thread/" + _id}
      style={{ all: "unset", cursor: "pointer", display: "block" }}
    >
      <Wrap>
        <div className="info">
          <span role="img" aria-label="upvote">
            👍
          </span>{" "}
          {vote.up}
          <span role="img" aria-label="downvote">
            👎
          </span>{" "}
          {vote.down}
        </div>
        <div className="article">
          <h1 className="title">
            {title.slice(0, 20)}
            {title.length > 20 && "..."}
          </h1>
        </div>
        <div className="threads">{subthreads}</div>
      </Wrap>
    </Link>
  );
}
const Wrap = styled.div`
  display: flex;
  background: ${colors.primaryWhite1};
  border-radius: 0.5em;
  padding: 0.5em 1em;
  align-items: center;

  @media screen and (max-width: ${viewport.mobile}) {
    font-size: 0.8rem;
  }
  .article {
    flex: 1;
  }
  .info {
    margin: 0 1.5em;
    @media screen and (max-width: ${viewport.mobile}) {
      margin: 0 0.5em;
    }
  }
  .threads {
    margin-right: 1em;
    font-size: 1.5em;

    @media screen and (max-width: ${viewport.mobile}) {
      margin-right: 10px;
    }
  }
  margin-bottom: 2em;
`;
export default Thread;
