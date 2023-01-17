import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [fetchStatus, setFetchStatus] = useState("idle");
  const [fetchedData, setFetchedData] = useState({});

  const fetchData = useCallback(async () => {
    setFetchStatus("loading");
    console.log(fetchStatus);
    try {
      const responce = await fetch(url);
      const data = await responce.json();
      //   setFetchedData({ data: data, loading: false });
      setFetchedData(data);
      setFetchStatus("loaded");
      console.log(fetchStatus);
    } catch (error) {
      setFetchStatus("errored");
      console.log("Fetching data failed.", error);
      console.log(fetchStatus);
    }
  }, [url])

  useEffect(() => {
    fetchData();
  }, [url]);

  return { fetchedData, fetchStatus };
};
