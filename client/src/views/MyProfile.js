import { IconButton, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import CardProfile from '../components/CardProfile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../context/AuthContext';
import { Box } from '@mui/system';
import ModalAlert from '../components/ModalAlert';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import ModalPhotoUpload from '../components/ModalPhotoUpload';

function MyProfile() {
  // const {user} = useContext(AuthContext);
  const {user, handleImageSelectionChange, uploadImage} = useContext(AuthContext);

  const [editImage, setEditImage] = useState(false);

  const handleSubmitProfileChange = (event) => {
    // event.preventDefault();
    uploadImage();
    setEditImage(false);
  }

  const editImageToggle = () => {
    if (!editImage) {
      setEditImage(true);
      console.log("photo toggle on")
    } else {
      setEditImage(false);
      console.log("photo toggle off")
    };
  }; 

  return (
    <>
      { user ?
      <div>
        {/* {user.avatar ? user.avatar: <AccountCircleIcon/>} */}
        <div className='no-avatar-component'>
          <AccountCircleIcon color='inherit' fontSize='inherit'/>
        </div>
        <div className='photo-upload-edit-button'>
          <IconButton
            onClick={editImageToggle}
            color="primary" 
            aria-label="upload picture" 
            component="span"
            >
              <PhotoCamera />
            </IconButton>
            <ModalPhotoUpload open={editImage} close={() => {setEditImage(false)}} />
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