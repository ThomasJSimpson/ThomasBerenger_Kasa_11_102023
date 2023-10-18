import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getData } from "../utils/Functions.jsx";
import Gallery from "../components/Gallery.jsx";
import LocationInfo from "../components/LocationInfo.jsx";
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
