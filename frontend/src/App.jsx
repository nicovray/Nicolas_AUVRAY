import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Creations from "./components/Creations";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Creations />
      <Stack />
      <Contact />
    </div>
  );
}

export default App;
