import { useCart } from '../../contexts/CartContext'
import Item from '../catalogo/Item/Item'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

export var cartSum = []


const Cart = () => {
   const {cart, setTotalPrice} = useCart();
   const fixedCart = fixCart(cart)
   cartSum = removeDuplicates(doCartSum(fixedCart, cart))

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
            {Boolean(cartSum.length) && (<h2><b>Precio total: ${totalPrice(cartSum, setTotalPrice)}</b></h2>)}
            {Boolean(cartSum.length) && (<Button component={Link} to="/form" ><h2><b>Finalizar compra</b></h2></Button>)}
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
//export default howMany;

const fixCart = (cart) => {
    var uniq = [...new Set(cart)];
    return uniq
}; 

const removeDuplicates = (cart) => {
    let index = -1;
    let unique_array = cart

    for (let i=1; i<=15; i++){
        if (howMany(cart, i.toString()) >1){
            index = cart.findIndex((obj) => { if (obj.id == i.toString()) { return true } else { return false }});
            unique_array = unique_array.filter(f => f !== cart[index])
        }
    }
    return unique_array
}

const doCartSum = (fixedCart, cart) => {
    var cartSum = []
 
   for (var product of fixedCart) {
       var prod = {"id": product.id, "quantity": howMany(cart, product.id), "totalPrice": (parseInt(product.price)*howMany(cart, product.id)), "product": product }
       cartSum.push(prod)
    }
   return cartSum
}

const totalPrice = (cartSum, setTotalPrice) => {
    let totalPrice =0
    for (var product of cartSum){
        totalPrice += product.totalPrice
    }
    setTotalPrice(totalPrice)
    return totalPrice
}

export default Cart;