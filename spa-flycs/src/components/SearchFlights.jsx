import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import {GetFlight} from './GetFlight';
 import { useEffect } from 'react';
// import { GetVuelo } from './GetVuelo';


export const SearchFlights = () => {

    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [price, setPrice] = useState(0.0)
    const onOriginChange = (e) => {
      
    setOrigin(e.target.value);
    
  }

  const onDestinationChange = (e) =>{
    setDestination(e.target.value);
    
  }

  const onPriceChange = (e) =>{
    setPrice(e.target.value);
    
  }

const [datos, setDatos] = useState( {

  origen:'',
  destino:'',
  precio:0,
});


  const SearchToGet =() =>{
    
    setDatos({ ...datos, precio:price,  origen:origin,destino:destination });
    
    console.log(datos);
    
    
}
  useEffect(() => { 
   
  }, [datos])
  


  return (
    <>
    
  
  <Box sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center'

  }}>
      
      
        
        <div className="container">
    
        <TextField 
        color='text' 
        id="outlined-basic" 
        label="origen" 
        variant="filled"
        type="text"
        value={origin}
        onChange={onOriginChange}
        
        />
        
        
        <TextField 
        color='text' 
        id="outlined-basic" 
        label="Destino" 
        variant="filled" 
        type="text"
        value={destination}
        onChange={onDestinationChange}
        />




        <TextField 
        color='text' 
        id="outlined-basic" 
        label="Presupuesto" 
        variant="filled" 
        value={price}
        onChange={onPriceChange}
        />
                
        <Button onClick={() => SearchToGet()} sx={{
          height:'56px'
        }} variant='contained' color="primary">
          <SearchIcon/> buscar vuelos baratos 
          </Button>
  
        </div>
        <GetFlight SearchToGet={datos}/>
        </Box>
    </>
  )
}
