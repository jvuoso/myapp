import { createContext, useState, useContext } from "react"

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

var array = []

export const CartProvider = ({children}) => {

    const [item, setSelectedItem] = useState(null);
    const [id, setSelectedItemId] = useState(null);
    const [ishere, setIsHere] = useState(Boolean);
    const [cart, setCart] = useState([])
    const [ready, setReady] = useState(Boolean)
    //const value = {cart, setCart}
    const value = { cart, item, id, ishere, addProd, ready, setReady, delProd } 

    function addProd(item, quantity){
        var counter = 0;
        
        for (1; counter < quantity; counter++) {
            array.push(item)
        }
        const message = `Agregaste ${quantity} ${item.name} `;
        
        //(quantity===1) ? alert(message) : alert(`${message}s`)

        //setCart([...cart, {quantity: quantity, data: array}])

        setCart([...array])
        setReady(true);

    }

    function delProd (item, quantity){

        //console.log("borrando ese item:", item);
        for (let i=0 ;i<quantity; i++){
            array.pop(item)
        } 
        
        console.log("array after delete: ",array)
        setCart([...array])
    }
    

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

};