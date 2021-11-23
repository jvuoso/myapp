import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import paella from './paella.jpg';
import ItemCount from '../ItemCount'

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image= {paella}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paella
        </Typography>
        <Typography variant="body2" color="text.secondary">
        La paella es quizá el platillo de origen español más conocido en el mundo y recibe su nombre por la gran sartén en la que se cocina. Se originó entre los siglos XV y XVI cerca del lago Albufera en Valencia, España, como un alimento de campesinos y pastores.
        </Typography>
        <ItemCount stock={5} initial={2} />
      </CardContent>
      <CardActions>
        <Button size="small">Add to chart</Button>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
