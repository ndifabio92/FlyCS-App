import * as React from 'react';

import './styles.css';
import { SearchFlights } from './components/SearchFlights';
import ResponsiveAppBar from './components/NavBar';
import BasicCard from './components/Card';
import { Grid } from '@mui/material';




function App() {
  return (

   <>   

             <ResponsiveAppBar/>
            <SearchFlights/>

            <Grid container spacing={2} sx={{
              mt:'30px',
              display:'flex',
              justifyContent: 'center',

            }}  >

                    <BasicCard/>
                    <BasicCard/>

            </Grid>
                  

           
            
          
        
   </>
  );
}

export default App;
