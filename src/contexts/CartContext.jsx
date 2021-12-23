import { createContext, useState, useContext } from "react"

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

var array = []

export const CartProvider = ({children}) => {

    const [item] = useState(null);
    const [id] = useState(null);
    //const [ishere] = useState(Boolean);
    const [cart, setCart] = useState([])
    const [ready, setReady] = useState(Boolean)
    const [totalPrice, setTotalPrice] = useState(0);
    //const value = {cart, setCart}
    const value = { cart, item, id, addProd, ready, setReady, delProd, totalPrice, setTotalPrice } 

    function addProd(item, quantity){
        var counter = 0;
        
        for (1; counter < quantity; counter++) {
            array.push(item)
        }
        setCart([...array])
        setReady(true);

    }

    function delProd (item, quantity){

        array = array.filter(f => f !== item)
        setCart([...array])
    }
    

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

};