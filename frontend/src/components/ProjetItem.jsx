/* eslint-disable react/prop-types */
import "./ProjetItem.css";

export default function ProjetItem({ projet }) {
  const { name, detail, image, category } = projet;

  return (
    <div className="card">
      <img className="card-picture" src={image} alt={`${name} cover`} />
      <div className="card-body">
        <div className="card-infos">
          <div className="card-category-link">{name}</div>
          <div className="card-date">{detail}</div>
          <div className="card-link">{category}</div>
        </div>
      </div>
    </div>
  );
}
