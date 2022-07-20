import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Creations from "./components/Creations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Creations />
    </div>
  );
}

export default App;
