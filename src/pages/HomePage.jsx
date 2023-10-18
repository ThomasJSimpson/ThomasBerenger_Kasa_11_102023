import backgroundImg from "../assets/rocks.jpg";
import Banner from "../components/Banner";
import CardsList from "../components/CardList";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { getData } from "../utils/Functions.jsx";
import "../App.css";

export default function Homepage() {
  const [locations, setLocations] = useState([]);
  let textBanner = "Chez vous, partout et ailleurs";

  useEffect(function () {
    getData(setLocations);
  }, []);

  return (
    <>
      <main className="fade-in">
        <Banner src={backgroundImg} text={textBanner} />
        <section className="container ">
          <CardsList locations={locations} />
        </section>
      </main>
      <Footer />
    </>
  );
}
