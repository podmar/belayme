import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'


function ButtonBelayRequest({id}) {
  const {requestBelay} = useContext(AuthContext);

  return (
    <Button 
    size="small"
    onClick={() => requestBelay(id)}
    >
        Ask for a belay
        </Button>
  )
}

export default ButtonBelayRequest;