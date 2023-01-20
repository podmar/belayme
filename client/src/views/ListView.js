import { CircularProgress, Typography } from "@mui/material";
import React, { useContext } from "react";
import List from "../components/List";
import ModalAlert from "../components/ModalAlert";
import ClimbersContext from "../context/ClimbersContext";

function ListView() {
  const { climbers } = useContext(ClimbersContext);
  return (
    <>
      <div>
        {climbers ? (
          <List />
        ) : (
          <div className="list-view-spacing">
            <CircularProgress />
            <Typography variant="body2">
              "Looking for people nearby..."
            </Typography>
          </div>
        )}
      </div>
      <ModalAlert />
    </>
  );
}

export default ListView;
