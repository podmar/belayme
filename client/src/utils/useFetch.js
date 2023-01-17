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

// import { useCallback, useEffect, useState } from "react";

// export const useFetch = (query) => {
//   const [loadingStatus, setLoadingStatus] = useState("idle");
//   const [fetchedData, setFetchedData] = useState({});

//   const fetchData = useCallback(async () => {
//     setLoadingStatus("loading");
//     console.log(loadingStatus);
//     try {
//       const responce = await fetch(query);
//       const data = await responce.json();
//       //   setFetchedData({ data: data, loading: false });
//       setFetchedData(data);
//       setLoadingStatus("loaded");
//       console.log(loadingStatus);
//     } catch (error) {
//       setLoadingStatus("errored");
//       console.log("Fetching data failed.", error);
//       console.log(loadingStatus);
//     }
//   }, [query]);

//   useEffect(() => {
//     fetchData();
//   }, [query]);

//   return { fetchedData, loadingStatus };
// };
