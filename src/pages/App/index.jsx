import React, { useState, useEffect } from "react";

import Summary from "../../components/summary";
import { networkCall } from "../../utils/APIUtils";
import { SUMMARY_API } from "../../constants";

import { AppContainer } from "./styles";
import Spinner from "../../components/Spinner";

function App() {
  const [stats, setStats] = useState({});
  const [isLoading, setLoading] = useState(true);
  // fetching data on app load
  useEffect(() => {
    networkCall(SUMMARY_API, "GET")
      .then(function (response) {
        setStats(response);
        setLoading(false);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const { Global: details } = stats;
  return (
    <AppContainer>
      {isLoading ? <Spinner /> : <Summary details={details} />}
    </AppContainer>
  );
}

export default App;
