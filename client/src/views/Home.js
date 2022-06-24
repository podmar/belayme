import { Button, Typography } from '@mui/material'
import React from 'react'
// import NavBar from '../components/NavBar'

function Home() {
  return (
    <div>
        <Typography variant='h2'>
            belayme
        </Typography>
        <Button 
            variant="contained"
            color="secondary">
            Find a belayer
        </Button>
        {/* <NavBar/> */}
    </div>
  )
}

export default Home