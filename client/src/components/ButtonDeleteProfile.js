import React, { useContext, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { AuthContext } from "../context/AuthContext";
import ModalAlertDeleteAccount from "./ModalAlertDeleteAccount";

function ButtonDeleteProfile() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };
  //TODO make this button display a modal to delete account to make sure the user does not delete by accident
  return (
    <div>
      <Button
        // type='submit'
        endIcon={<DeleteIcon />}
        variant="outline"
        // color='primary'
        onClick={() => setOpenDeleteModal(true)}
      >
        Delete account
      </Button>
      <ModalAlertDeleteAccount
        open={openDeleteModal}
        close={handleCloseDeleteModal}
      />
    </div>
  );
}

export default ButtonDeleteProfile;
