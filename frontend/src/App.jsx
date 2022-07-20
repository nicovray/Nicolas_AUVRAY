import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Creations from "./components/Creations";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Creations />
      <Stack />
    </div>
  );
}

export default App;
