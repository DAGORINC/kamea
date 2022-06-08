import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Kruszywa from './components/Templates/Kruszywa/Kruszywa';
import Wegiel from './components/Templates/Wegiel/Wegiel';
import Contact from './components/Contact/Contact';
import About_us from './components/About_us/About_us';
import Find_us from './components/Find_us/Find_us';


function App() {
  return (
    <div className="App">
      <div className="generalView">
      <Navbar />
      <Header />
      <Kruszywa />
      <Wegiel />
      </div>
    </div>
  );
}

export default App;
