import React from 'react';
import { Button } from '@mui/material';
import Login from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

function ButtonIconLogin() {
  const navigate = useNavigate();
  const goToLogin = () => navigate("/login");

  return (
    <Button
    color="inherit"
    size='large'
    onClick={goToLogin}
    endIcon={<Login/>}
    >
      Login    
  </Button>
  )
}

export default ButtonIconLogin;