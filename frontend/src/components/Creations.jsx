import React from "react";
import "./Creations.css";
import CV from "../assets/CV.pdf";
import Card from "./Card";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";

export default function Creations() {
  return (
    <div className="creations">
      <div className="c-title">
        <span>Mes plus belles</span>
        <span>Créations</span>
        <span>Lorem ipsum is simpley dummy text of printing...</span>
        <a className="button" href={CV} download>
          <span />
          <span />
          <span />
          <span />
          Télécharger mon CV
        </a>
      </div>
      <div className="cards">
        <div style={{ left: "60rem" }}>
          <Card
            emoji={html}
            heading="Design"
            detail="Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"
          />
        </div>
        <div style={{ top: "5rem", left: "20rem" }}>
          <Card
            emoji={css}
            heading="Developer"
            detail="Html, Css, JavaScript, React, Nodejs, Express"
          />
        </div>
        <div style={{ top: "10rem", left: "40rem" }}>
          <Card
            emoji={js}
            heading="UI/UX"
            detail="Lorem ispum dummy text are usually use in section where we need some random text"
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
      </div>
    </div>
  );
}
