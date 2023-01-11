import { Alert, Box, Modal, Button } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ModalAlertDeleteAccount({ open, close }) {
  const { deleteProfile } = useContext(AuthContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <Modal open={open} onClose={close} aria-labelledby="warning">
        <Box sx={style}>
          <Alert severity="warning">
            <Box>
              <Box sx={{ pb: 1 }}>
                Deleting your account is irreversible. Are you sure you want to
                proceed?
              </Box>
              <Box
                sx={{
                  dispay: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ py: 1 }}>
                  <Button
                    fullWidth
                    startIcon={<ArrowBackIosIcon />}
                    variant="contained"
                    color="primary"
                    onClick={close}
                  >
                    No, go back!
                  </Button>
                </Box>
                <Box sx={{ py: 1 }}>
                  <Button
                    fullWidth
                    endIcon={<DeleteIcon />}
                    variant="contained"
                    color="secondary"
                    onClick={deleteProfile}
                  >
                    Yes, delete
                  </Button>
                </Box>
              </Box>
            </Box>
          </Alert>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalAlertDeleteAccount;
