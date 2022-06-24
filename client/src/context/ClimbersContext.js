import React, { createContext, useEffect, useState } from 'react'

export const ClimbersContext = createContext();
export const ClimbersContextProvider = (props) => {
  const [climbers, setClimbers] = useState(null);
  const [climberCount, setClimberCount] = useState([0]);
    
  //TODO change this to get user by location based on current location
  const url = "http://localhost:5001/users/all"

  const fetchClimbers = async () => {
      try {
          const response = await fetch(url);
          const climbersData = await response.json();
          console.log(climbersData);
          setClimbers(climbersData.allUsers);
          setClimberCount(climbersData.results);
      } catch (error) {
          console.log("cannot fetch climbers", error);
      }
  };

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