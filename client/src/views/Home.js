import { Button, Typography } from '@mui/material';
import React from 'react';
import belayme_background from "../belayme_background_v2.svg";
// import NavBar from '../components/NavBar'

function Home() {
  return (
    <div>
    {/* <div className='home-background'> */}
        <Typography variant='h1' className='app-title'>
            belayme
        </Typography>
        <Button 
            variant="contained"
            color="secondary"
            size='large'>
            Find a belayer
        </Button>
        {/* <NavBar/> */}
    </div>
  )
}

export default Home