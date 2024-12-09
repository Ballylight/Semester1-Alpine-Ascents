// import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ClimbingDisciplines from './components/ClimbingDisciplines/ClimbingDisciplines';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <HeroSection />
      {/* Placeholder for other sections */}
      <div id="other-sections"></div>
        <ClimbingDisciplines />
        <Footer />
    </div>
  );
}

export default App;
