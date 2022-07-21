import React from "react";
import "./Creations.css";
import CV from "../assets/CV.pdf";
// import Card from "./Card";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import js from "../assets/js.png";
import ProjetList from "./ProjetList";

export default function Creations() {
  return (
    <div className="creations" id="Créations">
      <div className="c-title">
        <span>Mes projets récents</span>
        <span>Applications web et web mobile</span>
        <span>Lorem ipsum is simpley dummy text of printing...</span>
        <a className="button" href={CV} download>
          <span />
          <span />
          <span />
          <span />
          Télécharger mon CV
        </a>
      </div>
      <div className="cards" style={{ left: "15rem" }}>
        <ProjetList />
      </div>
    </div>
  );
}
