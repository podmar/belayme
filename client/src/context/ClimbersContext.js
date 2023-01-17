import React, { createContext, useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch";
export const ClimbersContext = createContext();
export const ClimbersContextProvider = (props) => {
  //TODO change this to get climbers by location based on current location / browser location / location search by user (add query / url to the custom hook)

  const climbersToDisplayURL = "climbers/all";
  const [climbers, setClimbers] = useState(null);
  const [climberCount, setClimberCount] = useState([0]);
  const { fetchedData, loadingStatus } = useFetch(climbersToDisplayURL);

  useEffect(() => {
    if (loadingStatus === "loaded") {
      setClimbers(fetchedData.allClimbers);
      setClimberCount(fetchedData.results);
    }
  }, [loadingStatus]);

  //TODO create functionality to fetch a single climber and move it to relevant view / component
  // const [singleClimber, setSingleClimber] = useState(null);
  // const fetchSingleClimber = async (climberID) => {
  //     try {
  //         const response = await fetch(serverURL+"climbers/"+climberID);
  //         const singleClimberData = await response.json();
  //         setSingleClimber(singleClimberData.allClimbers);
  //     } catch (error) {
  //         console.log("cannot fetch this climber", error);
  //     }
  // };

  // notes to creating query for climbers
  // const [query, setQuery] = useState("");
  // const url = query && `${serverURL}climbers/all${query}`;
  // const url = useMemo(() => `${serverURL}climbers/all`, [])
  // // const [url, setUrl] = useState(`${serverURL}climbers/all`);

  return (
    <ClimbersContext.Provider
      value={{ climbers, setClimbers, climberCount, setClimberCount }}
    >
      {props.children}
    </ClimbersContext.Provider>
  );
};

export default ClimbersContext;
