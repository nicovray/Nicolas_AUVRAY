import { Outlet } from "react-router-dom";
import NavAdmin from "./NavAdmin";
import "./NavAdmin.css";
import "./LayoutAdmin.css";

export default function LayoutAdmin() {
  return (
    <div className="layout">
      <NavAdmin />
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
}
