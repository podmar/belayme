import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
// import NavBar from '../components/NavBar'

function Home() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <div>
    {/* <div className='home-background'> */}
        <Typography variant='h2' className='app-title'>
            belayme
        </Typography>
        <Button 
            variant="contained"
            color="secondary"
            size='large'
            onClick={goToRegister}
            >
            Find a belayer
        </Button>
        {/* <NavBar/> */}
    </div>
  )
}

export default Home