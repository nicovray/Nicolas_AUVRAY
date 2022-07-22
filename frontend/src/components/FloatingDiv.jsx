/* eslint-disable react/prop-types */
import React from "react";
import "./FloatingDiv.css";

export default function FloatingDiv({ image }) {
  return (
    <div className="floatingDiv">
      <img src={image} alt="" />
    </div>
  );
}
