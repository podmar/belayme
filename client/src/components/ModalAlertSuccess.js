import { Alert, Box, Typography, Modal } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

function ModalAlertSuccess() {
const {openSuccessModal, handleCloseSuccessModal, modalMessage, modalType} = useContext(AuthContext);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };

  return (
    <div>
        <Modal
        open={openSuccessModal}
        onClose={handleCloseSuccessModal}
        aria-labelledby={modalType}
        >
        <Box sx={style}>
            <Alert severity={modalType}>{modalMessage}</Alert>
        </Box>
        </Modal>
    </div>
  )
}

export default ModalAlertSuccess