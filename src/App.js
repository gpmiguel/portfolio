import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

export default function App() {
  return(
    <main className="text-gray-400 bg-gray-900 body-font">
      <Nav className="px-0"/>
      <div className="px-10">
        <About />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
