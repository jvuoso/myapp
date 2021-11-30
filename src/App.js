import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/catalogo/ItemListContainer'
import ItemDetailContainer from './components/catalogo/ItemDetailContainer';


function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="item/:id" element={<ItemDetailContainer/>} />
      </Routes>
         
    </div>
  );
}

export default App;
