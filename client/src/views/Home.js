import { Button, Typography } from '@mui/material';
import React from 'react';
// import NavBar from '../components/NavBar'

function Home() {
  return (
    <div>
    {/* <div className='home-background'> */}
        <Typography variant='h2' className='app-title'>
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