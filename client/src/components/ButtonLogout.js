import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';


function ButtonLogout() {
    const {logout} = useContext(AuthContext);

  return (
    <Button
    variant="contained"
    color="secondary"
    size='large'
    onClick={logout}
    >
    Logout
    </Button>
  )
}

export default ButtonLogout