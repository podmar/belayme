import React from "react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ButtonIconSeeClimberDetail({ id }) {
  const navigate = useNavigate();

  return (
    <IconButton onClick={() => navigate(`/detail/${id}`)}>
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

export default ButtonIconSeeClimberDetail;
