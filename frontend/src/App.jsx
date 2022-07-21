import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjetList from "./components/ProjetList";
import ProjetDetail from "./components/ProjetDetail";
import LayoutAdmin from "./admin/LayoutAdmin";
import ProjetAdmin from "./admin/ProjetAdmin";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet" element={<ProjetList />} />
        <Route path="/projet/:id" element={<ProjetDetail />} />
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route index element={<ProjetAdmin />} />
          <Route path="/admin/accueil" element={<ProjetAdmin />} />
        </Route>
      </Routes>
    </div>
  );
}
