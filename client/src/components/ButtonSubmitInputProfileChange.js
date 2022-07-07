import React, { useContext, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import { AuthContext } from '../context/AuthContext';

function ButtonSubmitInputProfileChange() {
  const {updateProfile} = useContext(AuthContext);

  return (
    <div>
        <Button
            type='submit'
            endIcon={<SaveIcon />}
            variant='outline'
            color='primary'
            onClick={updateProfile}
        >
            Save
        </Button>
    </div>
  )
}

export default ButtonSubmitInputProfileChange