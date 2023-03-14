import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import data from '../dataset.json'
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
const GetVuelo= () => {
  

  const [vuelo, setVuelo] = useState([]);


  useEffect(() => {
    setVuelo(data)
  
    
  }, [])

  return vuelo
}



 export const GetFlight = ({SearchToGet}) => {

  
    
  const vueloEncontrado = GetVuelo()


return (


          <>


                      
                      <Box sx={{
                        maxWidth:1800,
                        display:'flex',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        justifyContent:'center'
                      }}>
                      {vueloEncontrado.filter((item) => item.price < SearchToGet ).map(item => {
                            
                          return (
                                  <>
                                  
                                  <Card sx={{ minWidth: 275 }}>
                                <CardContent>

                                  <Box sx={{
                                      display:'flex',
                                      justifyContent:'space-around'
                                  }}>
                                      <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" > 
                                  <FlightTakeoffIcon fontSize='large'/>
                                  {item.origin}
                                  </Typography>
                                  <Typography sx={{ fontSize: '1.5rem' }} color="text.secondary" > 
                                  <FlightLandIcon fontSize='large'/>
                                  {item.destination}
                                  </Typography>
                                  </Box>
                                  
                                  
                                  
                                  {/* <Typography variant="body2" >
                                    {bull}Cantidad de pasajes
                                  </Typography> */}
                                  <Typography  variant="body2" >
                                  {bull}Fecha {item.date}
                                  </Typography>
                                  <Typography variant="body2">
                                  {bull}Precio {item.price}
                                  <Typography variant="body2" >
                                    {bull}Asientos Disponibles {item.availability}
                                  </Typography>
                                    <br />
                                    
                                  </Typography>
                                </CardContent>
                                <CardActions>
                                  <Button color="primary" size="small" variant='contained'>comprar</Button>
                                </CardActions>
                              </Card>
                                  
                                  </>
                              )
                        })}
                        

                      </Box>

        </>  
      )

            }
        // vueloBuscado.Origen  =  data.find( item =>-(item.origin === 'MDZ' && item.destination === 'EPA')).origin;
        // vueloBuscado.Destino = data.find( item => (item.origin === 'MDZ' && item.destination === 'EPA')).destination;
        // vueloBuscado.Precio  =  data.find( item => (item.origin === 'MDZ' && item.destination === 'EPA')).price;


        // <>
                          
        // <span> {item.origin} </span>
        // <span> {item.destination} </span>
        // </>



  
        

// console.log(data);
//   console.log(vueloBuscado);
    
  
//   return (vueloBuscado);


  