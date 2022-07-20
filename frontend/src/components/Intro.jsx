import React from "react";
import FloatingDiv from "./FloatingDiv";
import "./Intro.css";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import boy from "../assets/boy.png";
import Dev from "../assets/Dev.png";
import Mobil from "../assets/Mobil.png";
import Desktop from "../assets/Desktop.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello ! Je Suis </span>
          <span>Nicolas AUVRAY </span>
          <span>Je suis développeur web...</span>
        </div>
        <div>
          <a href="mettre à jour plus tard" className="i-button">
            <span />
            <span />
            <span />
            <span />
            Contact
          </a>
        </div>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={Dev} alt="" />
        <div style={{ top: "-4%", left: "60%" }}>
          <FloatingDiv image={Desktop} />
        </div>
        <div style={{ top: "30%" }}>
          <FloatingDiv image={Mobil} />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
