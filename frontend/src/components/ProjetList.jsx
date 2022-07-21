import "./ProjetList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjetItem from "./ProjetItem";

export default function ProjetList() {
  const [projet, setProjet] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projet`)
      .then((res) => setProjet(res.data))
      .catch((error) => {
        console.error(error);
      });

    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div id="wj-shopping-list">
      <div className="filter">
        <select className="plantadd_input select" name="category" id="category">
          <option value="0">Tous les types de projets</option>
          {category.map((e) => (
            <option key={e.id}>{e.name}</option>
          ))}
        </select>
      </div>

      <div className="parent">
        {projet.map((e) => {
          return (
            <Link key={e.id} to={`/admin/projet/${e.id}`}>
              <ProjetItem projet={e} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
