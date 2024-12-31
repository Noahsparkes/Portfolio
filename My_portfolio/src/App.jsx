import { useState } from 'react'
import './App.css'
import "./index.css"
// App.jsximport React from 'react';
import Header from './components/Header';
import About from './components/About';
import About2 from './components/About2';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <About2 />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
};

export default App;