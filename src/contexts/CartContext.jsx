import { createContext, useState, useContext } from "react"

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

/* export class Cart  {
    constructor(){
        this.list = [];
        this.totalPrice = 0;
    }
}
 */
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const value = {cart, setCart}
    
    const addItem = (item) => {
        //function
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