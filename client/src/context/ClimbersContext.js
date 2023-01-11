import React, { createContext, useEffect, useState } from 'react'
import serverURL from "../config";

export const ClimbersContext = createContext();
export const ClimbersContextProvider = (props) => {
  const [climbers, setClimbers] = useState(null);
  const [climberCount, setClimberCount] = useState([0]);
  // const [singleClimber, setSingleClimber] = useState(null);


  //TODO change this to get climbers by location based on current location / browser location / location search by user

  const fetchClimbers = async () => {
      try {
          const response = await fetch(serverURL+"climbers/all");
          const climbersData = await response.json();
          setClimbers(climbersData.allClimbers);
          setClimberCount(climbersData.results);
          console.log(climbersData);
      } catch (error) {
          console.log("cannot fetch climbers", error);
      }
  };

//   const fetchSingleClimber = async (climberID) => {
//     try {
//         const response = await fetch(serverURL+"climbers/"+climberID);
//         const singleClimberData = await response.json();
//         setSingleClimber(singleClimberData.allClimbers);
//     } catch (error) {
//         console.log("cannot fetch this climber", error);
//     }
// };

  useEffect(() => {
    fetchClimbers()
  }, [])

  return (
    <ClimbersContext.Provider
    value = {{climbers, setClimbers, climberCount, setClimberCount}}
    >
      {props.children}
    </ClimbersContext.Provider>
  )
}

export default ClimbersContext