import React from "react";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function ButtonIconBack() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Fab color="secondary" size="large" onClick={goBack}>
      <ArrowBackIosIcon />
    </Fab>
  );
}

export default ButtonIconBack;
