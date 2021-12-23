//import ItemDetailContainer from './ItemDetailContainer'
//import { Routes, Route } from "react-router-dom";
//import {useState, useEffect} from 'react';
//import Item from "./Item/Item";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
//import { Link } from "react-router-dom"
//import {useState} from "react"
//import {useCart} from '../../contexts/CartContext'
/* import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'; */

const ItemDetail = ({ product }) => {

    return (
    <div>
        <h1></h1>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          component="img"
          height="250"
          image= {product.image}
          alt= {product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <b>${product.price}</b>
          <Typography variant="body2" color="text.secondary">
              {product.description}
          </Typography>
          <ItemCount stock={product.stock} initial={1} product={product}/>
          {/* <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> */}
        </CardContent>
{/*           <Button onClick = {onAddToCart}>
            Agregar al carrito
            <AddShoppingCartIcon />
          </Button> */}
        <CardActions>
          {/* <Link to={`/cart`}>Finalizar compra</Link> */}
        </CardActions>
      </Card>
    </div>
    );
  }

 
export default ItemDetail ; 
