import {useState, useEffect} from "react";

const itemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial)

    function addItem () {
        if ( (count+1) <= stock) {
            setCount(count+1)
        } 
    }

    function onAdd () {
        //alert(`Adding ${itemCount} elements to the chart`)
        setChart(itemCount)
    }

    function quitItem () {
        if( (count-1) >= initial) {
            setCount(count-1)
        }
    }
    
    return (
        <>
            <h1> Contador</h1>
            <div>
                <button onClick={addItem}>+</button>
                <h3>{ count }</h3>
                <button onClick={quitItem}>-</button>
            </div>
            <button onClick={onAdd}>Agregar al carrito</button>
        </>
    );
}

export default itemCount;