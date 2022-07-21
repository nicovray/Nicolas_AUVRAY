import React from "react";
import FloatingDiv from "./FloatingDiv";
import "./Intro.css";
import boy from "../assets/boy.png";
import Dev from "../assets/Dev.png";
import Mobil from "../assets/Mobil.png";
import Desktop from "../assets/Desktop.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello ! Je suis </span>
          <span>Nicolas AUVRAY </span>
          <span>Je suis développeur web...</span>
        </div>
        <div>
          <a className="button" href="mettre à jour plus tard">
            <span />
            <span />
            <span />
            <span />
            Contact
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={boy} alt="" />
        <img src={Dev} alt="" />
        <div style={{ left: "60%" }}>
          <FloatingDiv image={Desktop} />
        </div>
        <div style={{ top: "30%", left: "15%" }}>
          <FloatingDiv image={Mobil} />
        </div>
      </div>
    </div>
  );
}
