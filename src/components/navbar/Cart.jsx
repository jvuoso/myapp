//import {useState, useEffect} from 'react'
import {useCart} from '../../contexts/CartContext'
import Item from '../catalogo/Item/Item'

const Cart = () => {
   const {cart} = useCart();
   console.log("hola", cart[0].data)
    return(
        <div>
            <h1>Carrito de compras</h1>
            <Item product={cart[0].data} isCart={true} ></Item> 
        </div>

    );
};

export default Cart