import {useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(parseInt(initial))

    function addItem () {
        if ( (count+1) <= stock) {
            setCount(count+1)
        } 
    }

    onAdd = () => {
        alert(`Adding ${count} elements to the cart`)
        //setCart(count)
    }

    function quitItem () {
        if( (count-1) >= initial) {
            setCount(count-1)
        }
    }

    
    return (
        <div>
            <h1> Contador</h1>
            <Stack spacing={2} direction="column">
                <div>
                    <Button variant="outlined" onClick={addItem}>+</Button>
                    <h2>{ count }</h2>
                    <Button variant="outlined" onClick={quitItem}>-</Button>
                </div>
                <div>
                    <Button variant="contained" onClick={onAdd}>Agregar al carrito</Button>
                </div>
            </Stack>
        </div>
    );
}



export default ItemCount;