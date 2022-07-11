import { Box, Typography, Modal, Paper } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import ButtonSubmitInputProfileChange from './ButtonSubmitInputProfileChange';
import ImageSelectionInput from './ImageSelectionInput';

function ModalPhotoUpload(props) {
const { handleImageSelectionChange, uploadImage, image } = useContext(AuthContext);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
        height: 100,
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 0.25,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center", 
      };


  return (
        <Modal

        open={props.open}
        onClose={props.close}
        aria-labelledby="photo-upload"
        >
        <Paper>
          <Box component="form" sx={style} >
            <ImageSelectionInput onChange={handleImageSelectionChange}/>
            {image && <Typography variant='body2'>{image.name}</Typography>}
            <ButtonSubmitInputProfileChange onClick={uploadImage} />
          </Box>
        </Paper>
        </Modal>
  )
}

export default ModalPhotoUpload;