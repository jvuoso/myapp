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
   var cartSum = removeDuplicates(doCartSum(fixedCart, cart))
   //cartSum = doSuperFix(cartSum)
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
            {!Boolean(cartSum.length) && (<h3>UPS! Tu carrito se encuentra vacio.</h3>)}
            {!Boolean(cartSum.length) && (<Button component={Link} to="/" > Home</Button>)}
            {Boolean(cartSum.length) && (<h2><b>Precio total: ${totalPrice(cartSum)}</b></h2>)}
           
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
    //console.log("hay", quantity, "elementos")
    return quantity;
}

const fixCart = (cart) => {
    //console.log("Cart: ", cart)
    var uniq = [...new Set(cart)];
    //console.log("Uniq: ", uniq)
    return uniq
    //return array.some(cartItem => cartItem.id === item.id)
}; 

const removeDuplicates = (cart) => {
/*     let unique_array = cart.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    }); */
    let index = -1;
    let unique_array = cart
   // console.log("queda asi: ", unique_array )

     for (let i=1; i<=15; i++){
        if (howMany(cart, i.toString()) >1){

            index = cart.findIndex((obj) => { if (obj.id == i.toString()) { return true } else { return false }});
            console.log("El item ",index, "esta repetido")
            unique_array = unique_array.filter(f => f !== cart[index])
        }
            
    }
    console.log("queda asi: ", unique_array)
    return unique_array
}

const doCartSum = (fixedCart, cart) => {
    var cartSum = []
  // if (cart.) 
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

const doSuperFix = (cartSum) =>{

    let counts = 0
    cartSum.forEach( (x) => counts = (counts + 1))
    //cartSum.forEach(  (x) => { counts[x] = (counts[x] || 0) + 1 });
    let i = "1";
    for (let prod of cartSum){
        if ((howMany(cartSum, i))>1){
            cartSum = cartSum.filter(f => f !== prod)
        }
    }
    
    return cartSum
}

export default Cart