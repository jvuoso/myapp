//import ItemDetailContainer from './ItemDetailContainer'
//import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import Item from "./Item/Item";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { Link, Navigate } from "react-router-dom"

function endPurchase(e) {
    e.preventDefault();
    return  <Navigate  to="/cart" />
  }

const ItemDetail = ({ product }) => {
 
    //console.log("id ", id)
    return (
    <div>
        <h3>hola soy {product.name}</h3>
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
          <p>${product.price}</p>
          <Typography variant="body2" color="text.secondary">
              {product.description}
          </Typography>
          <ItemCount stock={product.stock} initial={1} />
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          {/* <Button onClick={endPurchase} size="small">Finalizar compra</Button> */}
        <Link to={`/cart`}>
            Finalizar Compra
        </Link>
        </CardActions>
      </Card>
    </div>
    );
  }

 
export default ItemDetail ; 
