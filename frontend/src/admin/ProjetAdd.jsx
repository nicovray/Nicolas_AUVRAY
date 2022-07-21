import { useEffect, useState } from "react";
import "./ProjetAdd.css";

export default function ProjetAdd() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/projet`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ name, category_id: categoryId, detail, image }),
    }).then(() => {
      setCategories([]);
      setName("");
      setCategoryId(0);
      setDetail("");
      setImage("");
    });
  };

  return (
    <div id="projetadd">
      <h1 className="projetadd_title">Ajouter un projet</h1>

      <form className="projetadd_form" onSubmit={handleSubmit}>
        <label className="projetadd_label" htmlFor="name">
          Nom du projet
          <input
            className="projetadd_input"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="projetadd_label" htmlFor="category">
          Catégorie
          <select
            className="projetadd_input"
            name="category_id"
            id="category"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="0">Choisir une catégorie... </option>
            {categories.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </label>

        <label className="projetadd_label" htmlFor="detail">
          Description du projet
          <input
            className="projetadd_input"
            id="detail"
            name="detail"
            type="text"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
        </label>

        <label className="projetadd_label" htmlFor="image">
          Image
          <input
            className="projetadd_input"
            id="image"
            name="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <button className="buttonadd" type="submit">
          Ajouter le projet
        </button>
      </form>
    </div>
  );
}
