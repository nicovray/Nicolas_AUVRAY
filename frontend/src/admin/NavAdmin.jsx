import { NavLink } from "react-router-dom";

export default function NavAdmin() {
  return (
    <aside>
      <p> Menu </p>
      <NavLink to="/admin/listprojet">Liste des projets</NavLink>
      <NavLink to="/admin/addprojet">Ajouter un projet</NavLink>
      <a href="...">Modifier un projet</a>
      <a href="...">Supprimer un projet</a>
      <NavLink to="/">Se déconnecter</NavLink>
    </aside>
  );
}
