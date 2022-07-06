import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';

function ButtonSubmitInputProfileChange(props) {

  return (
    <div>
        <Button
            type='submit'
            endIcon={<SaveIcon />}
            variant='outline'
            color='primary'
            // onClick={TYPE HERE A FUNCTION}
        >
            Save
        </Button>
    </div>
  )
}

export default ButtonSubmitInputProfileChange