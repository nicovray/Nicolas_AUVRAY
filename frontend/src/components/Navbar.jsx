import React from "react";
import "./Navbar.css";

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
            <li>Accueil</li>
            <li>Créations</li>
            <li>Stack</li>
            <li>Témoignages</li>
          </ul>
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
    </div>
  );
}
