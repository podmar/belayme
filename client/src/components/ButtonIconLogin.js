import React from 'react';
import { IconButton } from '@mui/material';
import Login from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';


function ButtonIconLogin() {
    const navigate = useNavigate();
    const goToLogin = () => navigate("/login");

  return (
    <IconButton
      color="inherit"
      size='large'
      onClick={goToLogin}
      >
      <Login/>
    </IconButton>
  )
}

export default ButtonIconLogin;