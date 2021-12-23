import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import ItemCount from '../ItemCount'
import { Link } from "react-router-dom"
//import styled from 'styled-components';
import { useCart } from '../../../contexts/CartContext'
//import Box from '@mui/material/Box';
//import Divider from '@mui/material/Divider';


export default function Item({product, isCart, quantity, totalPrice}) {
 
  const { delProd } = useCart();

  const onDelete = () => {
    delProd(product, quantity)
  }
  
   return (
    <div>
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="300"
        image= {product.image}
        alt= {product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        {!isCart && (<h3><b>${product.price}</b></h3>)}
        {isCart && (<h3><b>${totalPrice}</b></h3>)}
        {isCart && (<h3><b>Cantidad: {quantity}</b></h3>)}
        {isCart && (<Button onClick = { onDelete }><h3><b>Quitar</b></h3></Button>)}
        {!isCart &&(<Button component={Link} to={`/item/${product.id}`}> More information</Button>)}  
      </CardContent>
      <CardActions>
      {Boolean(0) &&(<Button size="small">Share</Button>)}
      {Boolean(0) &&(<Button size="small">Learn More</Button>)}
      </CardActions>
    </Card>
    </div>
  );
}




