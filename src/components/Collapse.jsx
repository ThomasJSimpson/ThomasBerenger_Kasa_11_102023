import React, { useState } from "react";
import arrow from "../assets/arrow-collapse.svg";

export default function Collapse({ description, equipments, aboutTitle, aboutText }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTextDisplay() {
    setIsOpen(() => !isOpen);
  }

  return (
    <div className={`collapse collapse-${description || equipments ? "location" : aboutTitle && aboutText && "about"}`}>
      <div className="collapse-title" onClick={handleTextDisplay}>
        {description ? <p>Description</p> : equipments ? <p>Équipements</p> : aboutTitle && <p>{aboutTitle}</p>}
        <img className={`arrow ${isOpen ? "arrow-up" : ""}`} src={arrow} alt={`arrow ${isOpen ? "arrow-up" : ""}`} />
      </div>
      {isOpen && (
        <div className="collapse-text">
          {description ? (
            <p>{description}</p>
          ) : equipments ? (
            <ul>
              {equipments.map((el) => (
                <li style={{ listStyleType: "none" }} key={el}>
                  {el}
                </li>
              ))}
            </ul>
          ) : (
            aboutText && <p>{aboutText}</p>
          )}
        </div>
      )}
    </div>
  );
}
