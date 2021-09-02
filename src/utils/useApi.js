import { useState, useEffect } from "react";
import { SUMMARY_API } from "../constants";
import { networkCall } from "./APIUtils";

// custom hook to provide api response with status, error, refresh methods
export default function useApi(url, method) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [url, method]);

  const fetchData = () => {
    setLoading(true);
    networkCall(SUMMARY_API, "GET")
      .then(function (response) {
        setResponse(response);
      })
      .catch(function (error) {
        setError(error);
      })
      .finally(function () {
        setLoading(false);
      });
  };

  const refresh = () => {
    // do any other cleanups required here
    fetchData();
  };

  return [response, loading, error, refresh];
}
