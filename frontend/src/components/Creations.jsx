import React from "react";
import Button from "./Button";
import "./Creations.css";
import ProjetList from "./ProjetList";

export default function Creations() {
  return (
    <div className="creations" id="Créations">
      <div className="c-title">
        <span>Mes projets récents</span>
        <span>Applications web et web mobile</span>
        <span>Lorem ipsum is simpley dummy text of printing...</span>
        <Button />
      </div>
      <div className="cards" style={{ left: "10rem" }}>
        <ProjetList />
      </div>
    </div>
  );
}
