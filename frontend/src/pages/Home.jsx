import React from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Creations from "../components/Creations";
import Stack from "../components/Stack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <Creations />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
}
