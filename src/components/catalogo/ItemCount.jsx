import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
//import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
//import Paper from '@mui/material/Paper';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(parseInt(initial))

    function addItem() {
        if ((count + 1) <= stock) {
            setCount(count + 1)
        }
    }

    onAdd = () => {
        alert(`Adding ${count} elements to the cart`)
        //setCart(count)
    }

    function quitItem() {
        if ((count - 1) >= initial) {
            setCount(count - 1)
        }
    }

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
          <Button onClick = {onAdd}>
            Agregar al carrito
          <AddShoppingCartIcon />
          </Button>
          

      </Box>


      </Box>
      
    );
        

/*return (
         <div>
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
         */
    

}



export default ItemCount;