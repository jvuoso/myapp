import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

    return (
    <div>
      <h1> </h1>
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
        </CardContent>
        <CardActions>
        </CardActions>
      </Card>
    </div>
    );
  }

 
export default ItemDetail ; 
