import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [fetchStatus, setFetchStatus] = useState("idle");
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    // setFetchedData((fetchedData) => ({ data: fetchData.data, loading: true }));
    if (!url) return;
    console.log(fetchStatus);

    const fetchData = async () => {
      setFetchStatus("loading");
      console.log(fetchStatus);
      try {
        const responce = await fetch(url);
        const data = await responce.json();
        //   setFetchedData({ data: data, loading: false });
        setFetchedData(data);
        setFetchStatus("complete");
        console.log(fetchStatus);
      } catch (error) {
        setFetchStatus("failed");
        console.log("Fetching data failed.", error);
        console.log(fetchStatus);
      }
    };
    fetchData();
  }, [url]);
  return { fetchedData, fetchStatus };
};
