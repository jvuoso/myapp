import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
//import {useState} from "react"

const CartWidget = () => {
     
    //const [count, setCount] = useState(cart)

        return  (           
            <IconButton
            size="large"
            aria-label="show 10 new items in the cart"
            color="inherit"
        >
            <Badge badgeContent="15" color="error">
            <ShoppingCartIcon  />
            </Badge>
        </IconButton>);
}


export default CartWidget; 