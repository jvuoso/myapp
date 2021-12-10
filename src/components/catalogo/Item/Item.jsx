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


export default function Item({product, isCart, quantity, totalPrice}) {
  
   return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {product.image}
        alt= {product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        {!isCart && (<h3><b>${product.price}</b></h3>)}
        {!isCart &&(<Link to={`/item/${product.id}`}>More information</Link>)}
      </CardContent>
      <CardActions>
      {!isCart &&(<Button size="small">Share</Button>)}
      {!isCart &&(<Button size="small">Learn More</Button>)}
      </CardActions>
    </Card>
    </div>
  );
}

