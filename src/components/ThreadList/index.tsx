import React, { useCallback } from "react";
import useAsync from "../../hooks/useAsync";
import Thread from "../../lib/api/Thread";
import ThreadComponents from "./Thread";

interface ThreadListProps {
  type?: string;
}
function ThreadList({ type = "recent" }: ThreadListProps) {
  const func = useCallback(() => Thread.getThreadList({ type }), [type]);
  const { loading, data } = useAsync(func, {
    errorToast: true,
  });

  if (loading) return <div>로드 중...</div>;
  return (
    <div>
      {data.map((v: any) => (
        <ThreadComponents key={v._id} {...v} />
      ))}
    </div>
  );
}
export default ThreadList;
