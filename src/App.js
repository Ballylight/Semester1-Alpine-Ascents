// import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import ClimbingDisciplines from './components/ClimbingDisciplines/ClimbingDisciplines';
import Footer from './components/Footer/Footer';
import History from './components/History/History';
import Blog from './components/Blog/Blogpage';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sheltering from './components/Sheltering/Sheltering';

function App() {
  const homeRef = useRef(null);
  const historyRef = useRef(null);
  const shelteringRef = useRef(null);
  const climbingRef = useRef(null);

  // Scroll to the specific section
  const scrollToSection = (sectionId) => {
    switch (sectionId) {
      case 'home-section':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'history-section':
        historyRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'sheltering-section':
        shelteringRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'climbing-section':
        climbingRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  
  return (
    <div className="App">
      <Header />

      
      <section id="home-section" ref={homeRef}>
        <Hero />
      </section>

      <section id="history-section" ref={historyRef}>
        <History />
      </section>

      <section id="sheltering-section" ref={shelteringRef}>
        <Sheltering />
      </section>

      <section id="climbing-section" ref={climbingRef}>
        <ClimbingDisciplines />
      </section>

      <Blog />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
