import React, { useContext } from "react";
import { Fab } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { AuthContext } from "../context/AuthContext";

function ButtonIconBelayRequest({ id }) {
  const { requestBelay } = useContext(AuthContext);

  return (
    <>
      <Fab
        variant="extended"
        aria-label="belay-request"
        onClick={() => requestBelay(id)}
      >
        <LabelImportantIcon sx={{ mr: 1 }} />
        Ask for a belay
      </Fab>
    </>
  );
}

export default ButtonIconBelayRequest;
