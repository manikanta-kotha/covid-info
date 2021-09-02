import React from "react";
import { useTranslation } from "react-i18next";

import Summary from "../../components/summary";
import { SUMMARY_API } from "../../constants";

import { AppContainer } from "./styles";
import Spinner from "../../components/Spinner";
import useApi from "../../utils/useApi";
import LoadingButton from "../../components/LoadingButton";
import DataTable from "../../components/Table";

function App() {
  const [stats, isLoading, error, refresh] = useApi(SUMMARY_API, "GET");
  // console.log("newResp", stats, isLoading, error);

  const { t } = useTranslation();

  if (!stats) {
    return <Spinner />;
  }

  const { Global: details, Countries: countries } = stats;
  // TODO: do error handling
  console.log("error", error);

  return (
    <AppContainer>
      <LoadingButton
        title={isLoading ? t("please_wait") : t("refresh")}
        loading={isLoading}
        onClick={refresh}
      />
      <Summary details={details} />
      <DataTable data={countries} />
    </AppContainer>
  );
}

export default App;
