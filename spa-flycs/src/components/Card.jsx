import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        <Box sx={{
            display:'flex',
            justifyContent:'space-around'
        }}>
            <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" > 
        <FlightTakeoffIcon fontSize='large'/>
        MDZ
        </Typography>
        <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" > 
        <FlightLandIcon fontSize='large'/>
        BRC
        </Typography>
        </Box>
        
        
        
        <Typography variant="body2" >
          {bull}Cantidad de pasajes
        </Typography>
        <Typography  variant="body2" >
        {bull}Fecha
        </Typography>
        <Typography variant="body2">
        {bull}Precio
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" variant='contained'>comprar</Button>
      </CardActions>
    </Card>
  );
}