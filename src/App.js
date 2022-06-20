import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Kruszywa from './components/Templates/Kruszywa/Kruszywa';
import Nawozy from './components/Templates/Nawozy/Nawozy';
import Contact from './components/Contact/Contact';
import About_us from './components/About_us/About_us';
import Find_us from './components/Find_us/Find_us';
import Transport from './components/Templates/Transport/Transport';
import Ziemia from './components/Templates/Ziemia/Ziemia';


function App() {
  return (
    <div className="App">
      <div className="generalView">
      <Navbar />
      <Header />
      <Kruszywa />
      <Nawozy />
      <Ziemia />
      <Transport />
      <Find_us />
      <Contact />
      </div>
    </div>
  );
}

export default App;
