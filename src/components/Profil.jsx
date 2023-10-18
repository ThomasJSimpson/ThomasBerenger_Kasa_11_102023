import React from "react";

export default function Profil({ host }) {
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
