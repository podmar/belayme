import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ButtonSeeClimberDetail({ id }) {
  const navigate = useNavigate();

  return (
    <Button size="small" onClick={() => navigate(`/detail/${id}`)}>
      See profile
    </Button>
  );
}

export default ButtonSeeClimberDetail;
