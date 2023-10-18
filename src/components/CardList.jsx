import React from "react";
import Card from "./Card";

export default function CardsList({ locations }) {
  return (
    <ul className="container-list">
      {locations.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
}
