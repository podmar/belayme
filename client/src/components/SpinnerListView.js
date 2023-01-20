import React from "react";
import { CircularProgress, Typography } from "@mui/material";

export const SpinnerListView = () => {
  return (
    <div className="list-view-spacing">
      <CircularProgress />
      <Typography variant="body2">Looking for people nearby...</Typography>
    </div>
  );
};
