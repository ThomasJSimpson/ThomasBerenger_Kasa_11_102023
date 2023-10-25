import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getData } from "../utils/Functions.jsx";
import Gallery from "../components/Gallery.jsx";
import LocationInfo from "../components/LocationInfo.jsx";
import Collapse from "../components/Collapse.jsx";
import Footer from "../components/Footer.jsx";

export default function Location() {
  const [itemData, setItemData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData(setItemData, id);
  }, [setItemData, id]);

  if (itemData === undefined) {
    return <Navigate to="*" />;
  }
  if (itemData) {
    const { pictures, host, title, location, tags, rating, description, equipments } = itemData;
    return (
      <>
        <main className="fade-in">
          <Gallery pictures={pictures} />
          <LocationInfo host={host} title={title} location={location} tags={tags} rating={rating} />
          <div className="descriptions">
            <Collapse description={description} />
            <Collapse equipments={equipments} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
