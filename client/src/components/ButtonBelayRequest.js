import { Button } from '@mui/material';
import React, { useContext } from 'react';
import {ClimbersContext} from "../context/ClimbersContext.js";

function ButtonBelayRequest() {
    const {requestBelay} = useContext(ClimbersContext);

  return (
    <Button 
    size="small"
    onClick={requestBelay}
    >
        Ask for a belay
        </Button>
  )
}

export default ButtonBelayRequest;