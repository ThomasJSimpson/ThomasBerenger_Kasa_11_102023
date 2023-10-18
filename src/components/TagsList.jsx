import React from "react";
import Tag from "./Tag.jsx";

export default function TagsList({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
}
