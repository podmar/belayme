import React from 'react'; 
import { IconButton } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

function ButtonIconBelayRequest(props) {
  return (
    <>
        <IconButton 
            aria-label="belay-request"
            
            >
            <LabelImportantIcon />
        </IconButton>
    </>
  )
}

export default ButtonIconBelayRequest