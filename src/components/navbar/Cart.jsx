//import {useState, useEffect} from 'react'
import { useCart } from '../../contexts/CartContext'
import Item from '../catalogo/Item/Item'
//import axios from "axios"
//import {useState} from 'react'
import { Link } from "react-router-dom"
//import {set} from '../../contexts/CartContext'
import Button from '@mui/material/Button';


const Cart = () => {
   const {cart} = useCart();
   //const {setReady} = useCart();
   const fixedCart = fixCart(cart)
   const cartSum = doCartSum(fixedCart, cart)

   //setReady(false);

    return( 
        <div>
            <h1>Carrito de compras</h1>
            {cartSum.map(product => {
                return(
                <div key={product.id}>
                <Item 
                product = {product.product}
                isCart={true}
                totalPrice = {product.totalPrice}
                quantity = {product.quantity}
                />
                </div>
                );
            })}
            {!Boolean(fixedCart.length) && (<h3>UPS! Tu carrito se encuentra vacio.</h3>)}
            {!Boolean(fixedCart.length) && (<Button component={Link} to="/" > Home</Button>)}
            {Boolean(fixedCart.length) && (<h2><b>Precio total: ${totalPrice(cartSum)}</b></h2>)}
           
        </div>

    );
};

const howMany = (cart, id) => {
    let quantity =0
    for (var product of cart){
        if (product.id === id) {
            quantity+=1
        } 
    }
    return quantity;
}

const fixCart = (cart) => {
    var uniq = [...new Set(cart)];
    return uniq
    //return array.some(cartItem => cartItem.id === item.id)
}; 

const doCartSum = (fixedCart, cart) => {
    var cartSum = []
   for (var product of fixedCart) {
       var prod = {"id": product.id, "quantity": howMany(cart, product.id), "totalPrice": (parseInt(product.price)*howMany(cart, product.id)), "product": product }
       cartSum.push(prod)
   }
   return cartSum
}

const totalPrice = (cartSum) => {
    let totalPrice =0
    for (var product of cartSum){
        totalPrice += product.totalPrice
    }
    return totalPrice
}

export default Cart