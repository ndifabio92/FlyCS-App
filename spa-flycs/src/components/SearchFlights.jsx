import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';



export const SearchFlights = () => {
  return (
    <>
   
   
   <Box sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center'

   }}>
      
         
      <img className="logo" src="FlyCS-App\spa-flycs\src\img\nemo.jpg" alt="logo" />
        <div className="container">
    
      
      
           
        <TextField color='text' id="outlined-basic" label="origen" variant="filled" />
        <TextField color='text' id="outlined-basic" label="destino" variant="filled" />
        <TextField color='text' id="outlined-basic" label="presupuesto" variant="filled" />
        <Button sx={{
          mt:2
        }} variant='contained' color="primary">buscar vuelos baratos </Button>
    

        
           
      
     </div>
        
        </Box>
    </>
  )
}
