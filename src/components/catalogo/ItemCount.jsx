import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
//import Paper from '@mui/material/Paper';
import {useCart} from '../../contexts/CartContext' 
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom"

const ItemCount = ({ stock, initial, product }) => {

    const [count, setCount] = useState(parseInt(initial))

    const { addProd } = useCart();
    const { ready } = useCart();

    //console.log('ready en itemCount es', ready);
    //const { cart } = useCart();

    const onAdd = () => {
      //console.log("Cart antes de agregar: ",cart)
      addProd(product,count)
      //console.log("Cart despues de agregar: ",cart)
    }

    function addItem() {
        if ((count + 1) <= stock) {
            setCount(count + 1)
        }
    }

    function quitItem() {
        if ((count - 1) >= initial) {
            setCount(count - 1)
        }
    }

    //useEffect( () => {onAdd(count)}, [count])

    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      > 
          <RemoveIcon onClick = {quitItem}/>
          <Divider orientation="vertical" variant="middle" flexItem />
          <h3>{count}</h3>
          <Divider orientation="vertical" variant="middle" flexItem />
          <AddIcon onClick = {addItem}/>
          <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        '& svg': {
          m: 1.5,
        },
        '& hr': {
          mx: 0.5,
        },
      }}>
        {!ready  &&(<Button onClick = {onAdd}>Agregar al carrito <AddShoppingCartIcon /></Button>)}
        {ready && (<Link to={`/cart`}>Finalizar compra</Link>)}
      </Box>
      </Box>
      
    );   

}



export default ItemCount;