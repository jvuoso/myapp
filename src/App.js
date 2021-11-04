//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
//import List from './components/list/list';
//import TitleComponent from './components/catalogo/title/title';
import Catalogo from './components/catalogo/catalogo'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Catalogo/> 
    </div>
  );
}

export default App;
