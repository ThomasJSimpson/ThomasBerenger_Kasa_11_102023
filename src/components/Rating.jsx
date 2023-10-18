import React from "react";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";

export default function Rating({ rating }) {
  const noteMax = 5;
  const stars = [];
  for (let i = 0; i < noteMax; i++) {
    if (i < rating) {
      stars.push(
        <span key={i}>
          <img src={starActive} alt={`Étoile ${i + 1}`} />
        </span>
      );
    } else {
      stars.push(
        <span key={i}>
          <img src={starInactive} alt={`Étoile ${i + 1}`} />
        </span>
      );
    }
  }
  return <div className="rating">{stars}</div>;
}
