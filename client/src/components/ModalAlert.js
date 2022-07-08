import { Alert, Box, Typography, Modal } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function ModalAlert() {
const {openModal, handleCloseModal, modalMessage, modalType} = useContext(AuthContext);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

  return (
    <div>
        <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby={modalType}
        >
        <Box sx={style}>
            <Alert severity={modalType}>{modalMessage}</Alert>
        </Box>
        </Modal>
    </div>
  )
}

export default ModalAlert