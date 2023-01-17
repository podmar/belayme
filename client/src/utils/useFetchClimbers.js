import { useEffect, useState } from "react";
import serverURL from "../config";

export const useFetchClimbers = () => {
  const [climbers, setClimbers] = useState(null);
  const [climberCount, setClimberCount] = useState([0]);
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const fetchClimbers = async () => {
    setLoadingStatus("loading");
    try {
      const response = await fetch(serverURL + "climbers/all");
      const climbersData = await response.json();
      setClimbers(climbersData.allClimbers);
      setClimberCount(climbersData.results);
      setLoadingStatus("loaded");
      console.log(climbersData);
    } catch (error) {
      setLoadingStatus("errored");
      console.log("Fetching climbers failed.", error);
    }
  };

  useEffect(() => {
    fetchClimbers();
  }, []);

  useEffect(() => {
    console.log(loadingStatus);
  }, [loadingStatus]);

  return {
    climbers,
    setClimbers,
    climberCount,
    setClimberCount,
    loadingStatus,
  };
};
