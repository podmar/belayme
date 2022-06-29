import React, { useContext } from 'react';
import { Button} from '@mui/material';
import


function ButtonLogout() {
const {logout} = useContext(AuthContext);

  return (
    <Button
    onClick={logout}
    >
    Logout
    </Button>
  )
}

export default ButtonLogout; 