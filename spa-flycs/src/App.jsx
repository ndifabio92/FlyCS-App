import * as React from 'react';

import './styles.css';

import ResponsiveAppBar from './components/NavBar';
import { Grid } from '@mui/material';
// import CardFlight from './components/CardFlight';
import { GetFlight } from './components/GetFlight';
// import { GetVuelo } from './components/GetVuelo';
// import Vuelo from './components/GetVuelo';
import { SearchFlights,datos } from './components/SearchFlights';


function App() {

  
  


  return (

   <>   

              
             <ResponsiveAppBar/>
            <SearchFlights />


            <Grid container spacing={2} sx={{
              mt:'30px',
              display:'flex',
              justifyContent: 'center',

            }}  >

                    {/* <CardFlight/> */}
                    <GetFlight/>
                  

            </Grid>
   </>
  );
}

export default App;
