import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { AuthContext } from '../context/AuthContext';

function ButtonDeleteProfile() {
  const {deleteProfile} = useContext(AuthContext);

  //TODO make this button display a modal to delete account to make sure the user does not delete by accident
  return (
    <div>
        <Button
            // type='submit'
            endIcon={<DeleteIcon />}
            variant='outline'
            // color='primary'
            onClick={deleteProfile}
        >
            Delete account
        </Button>
    </div>
  )
}

export default ButtonDeleteProfile;