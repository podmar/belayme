import { useEffect, useState } from "react";
import serverURL from "../config";

export const useFetch = (query) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState("idle");

  const fetchData = async () => {
    setLoadingStatus("loading");
    const fetchURL = `${serverURL}${query}`;

    try {
      const responce = await fetch(fetchURL);
      const data = await responce.json();
      setFetchedData(data);
      setLoadingStatus("loaded");
    } catch (error) {
      setLoadingStatus("errored");
      console.log("Fetching data failed.", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(loadingStatus);
  }, [loadingStatus]);

  return { fetchedData, loadingStatus };
};
