import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function ButtonLogin() {
    const navigate = useNavigate();
    const goToLogin = () => navigate("/login");

  return (
    <Button
      onClick={goToLogin}
      >
      Go to login page
    </Button>
  )
}

export default ButtonLogin