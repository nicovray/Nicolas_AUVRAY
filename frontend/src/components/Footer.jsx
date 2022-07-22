import React from "react";
import "./Footer.css";
import wave from "../assets/wave.png";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";

export default function Footer() {
  return (
    <div className="footer">
      <img src={wave} alt="" />
      <div className="f-content">
        <span>nicovray@protonmail.com</span>
        <div className="f-icons">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
}
