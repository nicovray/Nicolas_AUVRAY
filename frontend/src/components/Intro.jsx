import React from "react";
import { motion } from "framer-motion";
import FloatingDiv from "./FloatingDiv";
import "./Intro.css";
import boy from "../assets/boy.jpg";
import Dev from "../assets/Dev.png";
import Mobil from "../assets/Mobil.png";
import Desktop from "../assets/Desktop.png";
import Button from "./Button";

export default function Intro() {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hello ! Je suis </span>
          <span>Nicolas AUVRAY </span>
          <span>Je suis développeur web...</span>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="i-right">
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-25%" }}
          whileInView={{ left: "-5%" }}
          transition={transition}
          src={Dev}
          alt="dev"
        />
        <motion.div
          initial={{ top: "5%", left: "60%" }}
          whileInView={{ left: "50%" }}
          transition={transition}
        >
          <FloatingDiv image={Desktop} />
        </motion.div>
        <motion.div
          initial={{ left: "4rem", top: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <FloatingDiv image={Mobil} />
        </motion.div>
      </div>
    </div>
  );
}
