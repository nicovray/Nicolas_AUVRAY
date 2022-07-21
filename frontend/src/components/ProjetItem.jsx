/* eslint-disable react/prop-types */
import "./ProjetItem.css";

export default function ProjetItem({ projet }) {
  const { name, detail, image, category } = projet;

  return (
    <div className="wj-projet-item">
      <img className="wj-projet-item-cover" src={image} alt={`${name} cover`} />
      <div className="legende">
        <div className="infos">
          <div className="name">{name}</div>
          <div className="category">{category}</div>
          <div className="name">{detail}</div>
        </div>
      </div>
    </div>
  );
}
