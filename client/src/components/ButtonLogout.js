import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';


function ButtonLogout() {
    const {logout} = useContext(AuthContext);

  return (
    <Button
    color="primary"
    size='large'
    onClick={logout}
    >
    Logout
    </Button>
  )
}

export default ButtonLogout