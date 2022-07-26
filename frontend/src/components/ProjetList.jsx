import "./ProjetList.css";
import { useState, useEffect } from "react";
import ProjetItem from "./ProjetItem";

export default function ProjetList() {
  const [projet, setProjet] = useState([]);
  const [filteredProjet, setFilteredProjet] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/projet`)
      .then((res) => res.json())
      .then((data) => {
        setProjet(data);
        setFilteredProjet(data);
      });

    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  const handleFilter = (e) => {
    const filter = e.target.value;

    if (filter === 0) {
      setFilteredProjet(projet);
    } else {
      setFilteredProjet(
        projet.filter((project) => project.category_id === filter)
      );
    }
  };

  return (
    <div>
      <div className="filter">
        <select
          className="plantadd_input select"
          name="category"
          id="category"
          onChange={handleFilter}
        >
          <option value="0">Tous les types de projets</option>
          {category.map((categorie) => (
            <option value={categorie.id} key={categorie.id}>
              {categorie.name}
            </option>
          ))}
        </select>
      </div>

      <div className="card-list">
        {filteredProjet.map((project) => {
          return <ProjetItem projet={project} />;
        })}
      </div>
    </div>
  );
}
