import { useState } from 'react'
import './App.css'
import "./index.css"
// App.jsximport React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import IntroSection from './components/IntroSection';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <ThemeToggle />
      <IntroSection />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default App;