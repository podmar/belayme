import React from 'react'
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
            onClick={props.onClick}
        >
            Save
        </Button>
    </div>
  )
}

export default ButtonSubmitInputProfileChange;