import { Typography } from '@mui/material';
import React, { useContext } from 'react'
import CardProfile from '../components/CardProfile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../context/AuthContext';
import { Box } from '@mui/system';
import ModalAlert from '../components/ModalAlert';

function MyProfile() {
  const {user} = useContext(AuthContext);

  return (
    <>
      { user ?
      <div>
        {/* {user.avatar ? user.avatar: <AccountCircleIcon/>} */}
        <div className='no-avatar-component'>
          <AccountCircleIcon color='inherit' fontSize='inherit'/>
        </div>
        <Typography variant='h4'>{user.nickname}</Typography>
        <CardProfile/>
      </div> : 
      <p>Loading</p>
      }
      <ModalAlert/>

    </>
  )
}

export default MyProfile