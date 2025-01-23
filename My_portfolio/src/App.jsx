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
import ThemeToggle from "./components/ThemeToggle";
import IntroSection from "./components/IntroSection";
import { ThemeProvider,useTheme } from "./Context/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <div className="container mx-auto">
        <Header />
        <ThemeToggle />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
