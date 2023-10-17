import backgroundImg from "../assets/rocks.jpg";
import Banner from "../components/Banner";
import ItemLocation from "../components/ItemLocation";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { getData } from "../utils/Functions.jsx";
import "../App.css";

export default function Homepage() {
  const [locations, setLocations] = useState([]);

  useEffect(function () {
    getData(setLocations);
  }, []);
  let text = "Chez vous, partout et ailleurs";
  return (
    <>
      <main className="fade-in">
        <Banner src={backgroundImg} text={text} />
        <section className="container ">
          <ListItems locations={locations} />
        </section>
      </main>
      <Footer />
    </>
  );
}

function ListItems({ locations }) {
  return <div className="container-list">{locations && locations.map((item) => <ItemLocation itemLocation={item} key={item.id} />)}</div>;
}
