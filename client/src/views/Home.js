import { Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ButtonLogout from "../components/ButtonLogout";
import ModalAlertSuccess from '../components/ModalAlertSuccess';

function Home() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register")
  }

  return (
    <div>
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
        <div>
          <ButtonLogout/>
        </div>
        <ModalAlertSuccess/>
    </div>
  )
}

export default Home