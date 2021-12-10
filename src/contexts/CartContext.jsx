import { createContext, useState, useContext } from "react"

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const value = {cart, setCart}
    
    const addItem = (item) => {
        //function
        console.log("here i am")
    }

    const isInCart = (item) => {
        //return cart.some(cartItem => cartItem.id === item.id)
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

};