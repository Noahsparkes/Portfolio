import { useState } from "react";
import "./App.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import IntroSection from "./components/IntroSection";

const App = () => {
  return (
    
      <div className="container mx-auto">
        <Header />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    
  );
};

export default App;
