import React from "react";

export default function Banner({ src, text }) {
  return (
    <div className="banner">
      <div className="banner-img">
        <img src={src} alt="banner" />
        <div className="overlay"></div>
      </div>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
