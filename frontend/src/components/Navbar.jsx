import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">PORTFOLIO</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy to="Navbar" smooth activeClass="activeClass">
              <li>Accueil</li>
            </Link>
            <Link spy to="Créations" smooth activeClass="activeClass">
              <li>Créations</li>
            </Link>
            <Link spy to="Stack" smooth activeClass="activeClass">
              <li>Stack</li>
            </Link>
          </ul>
        </div>
        <div>
          <a className="button" href="#Contact">
            <span />
            <span />
            <span />
            <span />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
