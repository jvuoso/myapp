import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import paella from './paella.jpg';
import ItemCount from '../ItemCount'
//import ItemDetail from '../ItemDetail'
import { Link } from "react-router-dom"

export default function Item({name, stock, description, image, id}) {
  console.log("id ", id)
  if (!description) {description = "More information"}
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {image}
        alt= {name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link to={`/item/${id}`}>
            {description}
          </Link>
        </Typography>
        <ItemCount stock={stock} initial={1} />
      </CardContent>
      <CardActions>
        <Button size="small">Add to chart</Button>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
