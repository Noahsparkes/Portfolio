import { useState } from 'react'
import './App.css'
import "./index.css"
// App.jsximport React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;