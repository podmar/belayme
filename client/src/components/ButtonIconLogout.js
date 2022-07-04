import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Logout from '@mui/icons-material/Logout';


function ButtonIconLogout() {
    const {logout} = useContext(AuthContext);

  return (
    <IconButton
      color="inherit"
      // size='large'
      onClick={logout}
      >
      <Logout/>
    </IconButton>
  )
}

export default ButtonIconLogout;