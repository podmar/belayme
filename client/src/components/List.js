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

  if (user && climbers) {
    climbersToDisplay = climbers.filter((climber) => climber._id !== user._id);
  }

  return (
    <div>
      <Typography variant="body2">
        {climberCount && `Found ${climberCount} people nearby you.`}
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

//TODO change this to get user by location based on current location

// Work in progress (not functionalgs): waiting for user / climbers: if refreshing on a list view, the list breaks (climber or user misssing values?)
// const [climbersToDisplay, setClimbersToDisplay] = useState(null);

// useEffect(() => {
//   if (user && climbers) {
//     setClimbersToDisplay(
//       climbers.filter((climber) => climber._id !== user._id)
//     );
//   } else {
//   }
//   setClimbersToDisplay(null);
// }, [user, climbers]);

export default List;
