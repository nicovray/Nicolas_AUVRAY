/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";

export default function Card({ emoji, heading, detail, color }) {
  return (
    <div className="card" style={{ borderColor: { color } }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button" type="button">
        DETAIL
      </button>
    </div>
  );
}
