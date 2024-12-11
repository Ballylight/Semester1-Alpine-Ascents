
import './App.css';
import ClimbingDisciplines from './components/ClimbingDisciplines/ClimbingDisciplines';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Sheltering from './components/Sheltering/Sheltering';


function App() {
  return (
    <div className="App">
        <Header />
         <Sheltering />
        <ClimbingDisciplines />
        <Footer />
       
    </div>
  );
}

export default App;
