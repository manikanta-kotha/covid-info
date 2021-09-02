import React from "react";
import InfoItem from "../InfoItem";

import { MainContainer } from "./styles";

export default function Summary(props) {
  console.log("props", props);
  const {
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  } = props?.details;
  return (
    <MainContainer>
      <InfoItem
        title="Confirmed"
        isConfirmed
        newCases={NewConfirmed}
        totalCases={TotalConfirmed}
      />
      <InfoItem
        title="Recovered"
        isRecovered
        newCases={NewRecovered}
        totalCases={TotalRecovered}
      />
      <InfoItem
        title="Deceased"
        newCases={NewDeaths}
        totalCases={TotalDeaths}
      />
    </MainContainer>
  );
}
