import React from "react";
import Rating from "../components/Rating.jsx";
import TagsList from "../components/TagsList.jsx";
import Profil from "../components/Profil.jsx";

export default function LocationInfo({ title, location, tags, host, rating }) {
  return (
    <div className="locationInfos">
      <div className="info-1">
        <h1>{title}</h1>
        <p>{location}</p>
        <TagsList tags={tags} />
      </div>
      <div className="info-2">
        <Profil host={host} />
        <Rating rating={rating} />
      </div>
    </div>
  );
}
