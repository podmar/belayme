import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Logout from '@mui/icons-material/Logout';


function ButtonIconLogout() {
    const {logout} = useContext(AuthContext);

  return (

      <Button
        color="inherit"
        size='large'
        onClick={logout}
        endIcon={<Logout/>}
        >
          Logout
      </Button>
  )
}

export default ButtonIconLogout;