import React from "react";

export default function Tag({ tag }) {
  return (
    <span className="tag" key={tag}>
      {tag}
    </span>
  );
}
