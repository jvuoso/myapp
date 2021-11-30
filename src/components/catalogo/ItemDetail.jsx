import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from "react-router-dom";
import Item from "./Item/Item"

const ItemDetail = ({ product} ) => {
    console.log("productitos: ", product) 
    return(
        <div>
            <h3>hola soy {product.name}</h3>
            <Item 
                    name = {product.name}
                    description={product.description}
                    id = {product.id}
                    stock = {product.stock}
                    image = {product.image}
            />
        </div>
    );
}

export default ItemDetail ; 
/* 
<Routes>
<Route path="item/:id" element={<ItemDetailContainer/>} /> */
