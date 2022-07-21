import "./ProjetList.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjetItem from "./ProjetItem";

export default function ProjetList() {
  const [projet, setProjet] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/projet`)
      .then((res) => setProjet(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes Applications web et web mobile</h1>

      <div className="wj-projet-list">
        <ul>
          {projet.map((e) => {
            return (
              <li>
                <Link key={e.id} to={`/plants/${e.id}`}>
                  <ProjetItem projet={e} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
