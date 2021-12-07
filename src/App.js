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
          <Route path="/" element={<ItemListContainer greeting="Productos disponibles para compra"/>} />
          {/* <Route path="category/:cat" element={<ItemListContainer greeting="Productos de categoria"/>} /> */}
          <Route path="item/:id" element={<ItemDetailContainer/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="cat/:cat" element={<ItemListContainer greeting="Categoria:"/> }/>
      </Routes>
      </Grid>
         
    </div>
  );
}

export default App;
