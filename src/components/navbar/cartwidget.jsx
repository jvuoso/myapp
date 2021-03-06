import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"

const CartWidget = ({products}) => {
        return  (
            <div> 
            {Boolean(products.length) &&(   
                <IconButton
                size="large"
                aria-label="show 10 new items in the cart"
                color="inherit"
                >
                
                <Button component={Link} variant="contained" to="/cart" >
                  <Badge badgeContent={products.length} color="error">
                    <ShoppingCartIcon  />
                  </Badge>
                </Button>
                </IconButton>
              )
            }
            </div>)
            ;
}


export default CartWidget; 