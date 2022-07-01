import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';



function ButtonDelete() {
  return (
    <>
        <IconButton 
            aria-label="delete"
            >
            <DeleteIcon />
        </IconButton>
    </>
  )
}

export default ButtonDelete