import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experiences from "./components/Experiences";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Element name="title">
        <Title />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <Projects />
      </Element>

      <Element name="experiences">
        <Experiences />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
