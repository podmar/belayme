import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ButtonRegister() {
    const navigate = useNavigate();
    const goToRegister = () => navigate("/register");

  return (
    <Button
      onClick={goToRegister}
      >
      Go to registration page
    </Button>
  )
}

export default ButtonRegister