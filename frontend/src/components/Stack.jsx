import React from "react";
import { motion } from "framer-motion";
import "./Stack.css";
import CV from "../assets/CV.pdf";
import react from "../assets/react.png";
import node from "../assets/node.png";
import mysql from "../assets/mysql.png";
import wp from "../assets/wp.png";
import opensrc from "../assets/opensrc.png";

export default function Stack() {
  return (
    <div className="stack" id="Stack">
      <div className="s-left">
        <div className="s-title">
          <span>Stack Technique</span>
          <span>Langages & Programmes</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
          </span>
          <a className="dwl-btn" href={CV} download>
            <span />
            <span />
            <span />
            <span />
            Télécharger mon CV
          </a>
        </div>
      </div>
      <div className="s-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
