import { React, useState } from "react";
import arrow from "../assets/arrow-gallery.svg";

export default function Gallery({ pictures }) {
  const [indexPicture, setIndexPicture] = useState(0);

  function handleNextPicture() {
    const newIndex = indexPicture === pictures.length - 1 ? 0 : indexPicture + 1;
    setIndexPicture(newIndex);
  }

  function handlePrevPicture() {
    const newIndex = indexPicture === 0 ? pictures.length - 1 : indexPicture - 1;
    setIndexPicture(newIndex);
  }

  return (
    <div className="gallery">
      <img className="gallery-img" src={`${pictures[indexPicture]}`} alt={`gallery-pic-${indexPicture + 1}`} />

      {pictures.length > 1 && (
        <>
          <img className="arrow-gallery arrow-gallery--left" src={arrow} alt="arrow left" onClick={handlePrevPicture} />
          <img className="arrow-gallery arrow-gallery--right" src={arrow} alt="arrow right" onClick={handleNextPicture} />
          <p className="pagination">
            {indexPicture + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
}
