import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { AuthContext } from '../context/AuthContext';

function ButtonDeleteProfile() {
  const {deleteProfile} = useContext(AuthContext);

  return (
    <div>
        <Button
            type='submit'
            endIcon={<DeleteIcon />}
            variant='outline'
            color='alert'
            onClick={deleteProfile}
        >
            Delete account
        </Button>
    </div>
  )
}

export default ButtonDeleteProfile;