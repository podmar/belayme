import React from 'react';
// import { IconButton, Typography } from '@mui/material';
import { Button, Typography } from '@mui/material';
import Login from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';

function ButtonIconLogin() {
  const navigate = useNavigate();
  const goToLogin = () => navigate("/login");

  return (
    // <IconButton
    //   color="inherit"
    //   size='large'
    //   onClick={goToLogin}
    //   >
    //   <Typography variant='h6'>
    //     Login
    //   </Typography>
    //   <Login/>
    // </IconButton>
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