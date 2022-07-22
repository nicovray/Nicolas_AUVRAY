import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">MON PORTFOLIO</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy to="Navbar" smooth activeClass="activeClass">
              <li>ACCUEIL</li>
            </Link>
            <Link spy to="Créations" smooth activeClass="activeClass">
              <li>CREATIONS</li>
            </Link>
            <Link spy to="Stack" smooth activeClass="activeClass">
              <li>STACK</li>
            </Link>
          </ul>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}
