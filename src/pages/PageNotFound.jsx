import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function PageNonFound() {
  return (
    <>
      <main className="fade-in">
        <div className="errpage">
          <p className="errpage-404">404</p>
          <p className="errpage-text">Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <Link className="link-style errpage-back" to="/">
          Retourner sur la page d’accueil
        </Link>
      </main>
      <Footer />
    </>
  );
}
