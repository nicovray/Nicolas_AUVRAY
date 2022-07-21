import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjetList from "./components/ProjetList";
import ProjetDetail from "./components/ProjetDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<ProjetList />} />
        <Route path="/projet/:id" element={<ProjetDetail />} />
        {/* <Route path="/admin/" element={<LayoutAdmin />}> */}
        {/* <Route index element={<ContentHome />} /> */}
        {/* <Route path="/admin/login" element={<Login />} /> */}
        {/* <Route path="/admin/accueil" element={<ContentHome />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}
