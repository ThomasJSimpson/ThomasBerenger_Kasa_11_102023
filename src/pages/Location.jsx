import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../utils/Functions.jsx";
import Gallery from "../components/Gallery.jsx";
import starActive from "../assets/star-active.svg";
import starInactive from "../assets/star-inactive.svg";
import Tag from "../components/Tag.jsx";
import Collapse from "../components/Collapse.jsx";
import Footer from "../components/Footer.jsx";

export default function Location() {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData(setItemData, id);
  }, [setItemData, id]);

  if (itemData === undefined) {
    navigate("*");
  }

  return (
    itemData && (
      <>
        <main className="fade-in">
          <Gallery pictures={itemData.pictures} />
          <LocationInfo host={itemData.host} title={itemData.title} location={itemData.location} tags={itemData.tags} rating={itemData.rating} />
          <div className="descriptions">
            <Collapse description={itemData.description} />
            <Collapse equipments={itemData.equipments} />
          </div>
        </main>
        <Footer />
      </>
    )
  );
}

function LocationInfo({ title, location, tags, host, rating }) {
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

function Profil({ host }) {
  return (
    <div className="profil">
      <div className="profil-name">
        <p>{host.name.split(" ")[0]}</p>
        <p>{host.name.split(" ")[1]}</p>
      </div>
      <div className="profil-img">
        <img src={`${host.picture}`} alt="Profil" />
      </div>
    </div>
  );
}

function TagsList({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
}

function Rating({ rating }) {
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
