import React from 'react'
import './CardCharacters.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardCharacters = ({name, image, status, species, gender }) => {
  return (
    
    <Card className='carta' sx={{ maxWidth: 250 }} >
      <CardMedia className='img'
        component="img"
         image={image}
         alt={name}
         sx={{objectFit: "cover", height: "200px", width: "100%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='name'>
          {name}
        </Typography>
        <Typography  variant="body2">
         Estado: {status} | Especie: {species} | Genero: {gender}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver más detalles</Button>
      </CardActions>
    </Card>
  );
}


export default CardCharacters;
