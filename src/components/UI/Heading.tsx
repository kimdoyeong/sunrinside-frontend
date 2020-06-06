import React from "react";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps {
  tag: HeadingTags;
  style: HeadingTags;
  children?: React.ReactNode;
}
function Heading({ tag = "h1", style = "h1", children }: HeadingProps) {
  const Tag = tag;
  const styles = {
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    h6: "1em",
  };
  return (
    <Tag
      style={{
        fontSize: styles[style],
      }}
    >
      {children}
    </Tag>
  );
}

export default Heading;
