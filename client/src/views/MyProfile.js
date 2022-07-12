import { Avatar, Badge, Button, Typography } from '@mui/material';
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
//TODO made badge with a photo being a button to change image
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
        <Button
          onClick={editImageToggle}
        >
          <div className='avatar-component'>
            <Badge badgeContent={<PhotoCamera />} overlap="circular">
              <Avatar
                src={user.image}
                alt={`Photo of ${user.nickname}`}
                sx={{ width: 200, height: 200 }}
              />
            </Badge>
          </div>
        </Button>
        <ModalPhotoUpload open={editImage} close={() => {setEditImage(false)}} />
        <Typography variant='h4'>{user.nickname}</Typography>
        <CardProfile/>
      </div> : 
      <Typography variant='body2'>
        Loading
      </Typography>
      }
      <ModalAlert/>

    </>
  )
}

export default MyProfile