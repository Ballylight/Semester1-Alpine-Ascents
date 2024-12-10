// import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ClimbingDisciplines from './components/ClimbingDisciplines/ClimbingDisciplines';
import Footer from './components/Footer/Footer';
import History from './components/History/History';
import Blog from './components/Blog/Blogpage';


function App() {
  return (
    <div className="App">
      <HeroSection />

      <History />

      <div id="other-sections"></div>

      <ClimbingDisciplines />

      <Blog />

      <Footer />
    </div>
  );
}

export default App;
