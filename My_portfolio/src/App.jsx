import "./App.css";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import IntroSection from "./components/IntroSection";
import CustomCursor from "./components/CustomCursor";

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
        <CustomCursor />
      </div>
    
  );
};

export default App;


// to do:
// add custom cursor
// add a scroll feature?
// finish animations
// make it functional + projects.