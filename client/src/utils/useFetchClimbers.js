import { useEffect, useState } from "react";
import serverURL from "../config";

export const useFetchClimbers = () => {
  const [climbers, setClimbers] = useState(null);
  const [climberCount, setClimberCount] = useState([0]);

  const fetchClimbers = async () => {
    try {
      const response = await fetch(serverURL + "climbers/all");
      const climbersData = await response.json();
      setClimbers(climbersData.allClimbers);
      setClimberCount(climbersData.results);
      console.log(climbersData);
    } catch (error) {
      console.log("cannot fetch climbers", error);
    }
  };

  useEffect(() => {
    fetchClimbers();
  }, []);
  return { climbers, setClimbers, climberCount, setClimberCount };
};
