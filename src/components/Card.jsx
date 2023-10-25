import React from "react";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { id, cover, title } = card;

  return (
    <Link to={`/location/${id}`}>
      <li className="card" key={id}>
        <img src={cover} alt={`cover-${title}`} />
        <div className="overlay overlay-cards"></div>
        <p>{title}</p>
      </li>
    </Link>
  );
}
