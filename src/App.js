import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/catalogo/ItemListContainer'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemListContainer/> 
    </div>
  );
}

export default App;
