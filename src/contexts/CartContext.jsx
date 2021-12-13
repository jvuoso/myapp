import { createContext, useState, useContext } from "react"

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [item, setSelectedItem] = useState(null);
    const [id, setSelectedItemId] = useState(null);
    const [ishere, setIsHere] = useState(Boolean);
    const [cart, setCart] = useState([])
    //const value = {cart, setCart}
    const value = { cart, item, id, ishere, addProd } 

    function addProd(item, quantity){
        var counter = 0;
       // var array = cart
        for (1; counter < quantity; counter++) {
            cart.push(item)
        }
        const message = `Agregaste ${quantity} ${item.name} `;
        //
        (quantity===1) ? alert(message) : alert(`${message}s`)

        //setCart([...cart, {quantity: quantity, data: array}])

        setCart(cart)

    }
    

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

};