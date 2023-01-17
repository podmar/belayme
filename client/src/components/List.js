import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ClimbersContext from "../context/ClimbersContext";
import CardClimber from "./CardClimber";
import CardClimberLoggedOut from "./CardClimberLoggedOut";

function List() {
  const { climbers, climberCount } = useContext(ClimbersContext);
  const { user } = useContext(AuthContext);
  let climbersToDisplay = null;

  //TODO if refreshing on a list view, the list breaks (climber or user misssing values?)
  if (user && climbers) {
    climbersToDisplay = climbers.filter((climber) => climber._id !== user._id);
  }

  //TODO change this to get user by location based on current location

  return (
    <div>
      <Typography variant="body2">
        {climberCount
          ? `Found ${climberCount} people nearby you.`
          : "Looking for people nearby..."}
      </Typography>
      {climbersToDisplay
        ? climbersToDisplay.map((climber) => {
            return <CardClimber climber={climber} key={climber._id} />;
          })
        : climbers.map((climber) => {
            return <CardClimberLoggedOut climber={climber} key={climber._id} />;
          })}
    </div>
  );
}

export default List;
