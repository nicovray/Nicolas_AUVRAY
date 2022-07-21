/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjetDetail.css";

export default function ProjetDetail() {
  const { id } = useParams();
  const [projet, setProjet] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/projet/${id}`)
      .then((response) => response.json())
      .then((data) => setProjet(data));
  }, []);

  return (
    <div id="wj-projet-detail">
      <div className="image half">
        <img src={projet.image} alt="" />
      </div>

      <div className="detail half">
        <h1>{projet.name}</h1>

        <div className="data">
          <div className="category">Category : {projet.category}</div>
        </div>
      </div>
    </div>
  );
}
