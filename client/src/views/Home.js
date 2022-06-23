import { Button, Typography } from '@mui/material'
import React from 'react'

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
    </div>
  )
}

export default Home