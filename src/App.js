// import logo from './logo.svg';
import './App.css';
import ClimbingDisciplines from './components/ClimbingDisciplines/ClimbingDisciplines';
import Footer from './components/Footer/Footer';
import History from './components/History/History';
import Blog from './components/Blog/Blogpage';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Sheltering from './components/Sheltering/Sheltering';




function App() {
  return (
    <div className="App">
      <Header />

      <Hero/>

      <History />

      <Sheltering />


      <div id="other-sections"></div>

      <ClimbingDisciplines />

      <Blog />

      <Footer />
    </div>
  );
}

export default App;
