import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import { Routes, Route } from "react-router-dom";
import { Spacer } from "@chakra-ui/react";
function App() {
  return (
    <div>
      <Navbar />
      <Spacer h={50} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
