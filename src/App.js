import './App.css';
import Navbar from './components/navbar/navbar';
import Cart from './components/navbar/Cart';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from './components/catalogo/ItemListContainer'
import ItemDetailContainer from './components/catalogo/ItemDetailContainer';
import Grid from '@mui/material/Grid'


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
        <Route path="item/:id" element={<ItemDetailContainer/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
      </Grid>
         
    </div>
  );
}

export default App;
