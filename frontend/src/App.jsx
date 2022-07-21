import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjetList from "./components/ProjetList";
import ProjetDetail from "./components/ProjetDetail";
import LayoutAdmin from "./admin/LayoutAdmin";
import ProjetAdd from "./admin/ProjetAdd";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route index element={<ProjetList />} />
          <Route path="/admin/listprojet" element={<ProjetList />} />
          <Route path="/admin/projet/:id" element={<ProjetDetail />} />
          <Route path="/admin/addprojet" element={<ProjetAdd />} />
        </Route>
      </Routes>
    </div>
  );
}
