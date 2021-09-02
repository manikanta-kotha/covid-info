import React from "react";
import { useTranslation } from "react-i18next";

import InfoItem from "../InfoItem";

import { MainContainer } from "./styles";

export default function Summary(props) {
  const { t } = useTranslation();
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
        title={t("confirmed")}
        confirmed
        newCases={NewConfirmed}
        totalCases={TotalConfirmed}
      />
      <InfoItem
        title={t("recovered")}
        recovered
        newCases={NewRecovered}
        totalCases={TotalRecovered}
      />
      <InfoItem
        title={t("deceased")}
        newCases={NewDeaths}
        totalCases={TotalDeaths}
      />
    </MainContainer>
  );
}
