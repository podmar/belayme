import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../context/AuthContext';
import Logout from '@mui/icons-material/Logout';


function ButtonIconLogout() {
    const {user, logout} = useContext(AuthContext);

  return (
    <>
    {user && 
      <Button
        color="inherit"
        size='large'
        onClick={logout}
        endIcon={<Logout/>}
        >
          {`Hi ${user.nickname}!`}    
      </Button>
    }
    </>
    // <IconButton
    //   color="inherit"
    //   size='large'
    //   onClick={logout}
    //   >
    //   <Logout/>
    // </IconButton>
  )
}

export default ButtonIconLogout;