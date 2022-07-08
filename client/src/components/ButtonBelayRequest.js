import { Button } from '@mui/material';
import React, { useContext } from 'react';
import {ClimbersContext} from "../context/ClimbersContext.js";

function ButtonBelayRequest(props) {
    const {requestBelay} = useContext(ClimbersContext);
    const requestBelayID = requestBelay(props.id);

  return (
    <Button 
    size="small"
    onClick={requestBelayID}
    >
        Ask for a belay
        </Button>
  )
}

export default ButtonBelayRequest;