import React from "react";
import "./Stack.css";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";
import wp from "../assets/wp.png";
import opensrc from "../assets/opensrc.png";

export default function Stack() {
  return (
    <div className="stack" id="stack">
      <div className="s-left">
        <div className="s-title">
          <span>Stack Technique</span>
          <span>Languages & Programmes</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
          </span>
          <a className="button" href="mettre à jour plus tard">
            <span />
            <span />
            <span />
            <span />
            Contact
          </a>
        </div>
      </div>
      <div className="s-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={opensrc} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={wp} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={mysql} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
