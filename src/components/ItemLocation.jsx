import React from "react";
import { Link } from "react-router-dom";

export default function ItemLocation({ itemLocation }) {
  const { id, cover, title } = itemLocation;
  return (
    <Link className="item" key={id} to={`/location/${id}`}>
      <img src={cover} alt="COVER" />
      <div className="overlay overlay-items"></div>
      <p>{title}</p>
    </Link>
  );
}
