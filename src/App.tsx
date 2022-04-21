import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Gallery />
      <Description />
    </div>
  );
}

export default App;
