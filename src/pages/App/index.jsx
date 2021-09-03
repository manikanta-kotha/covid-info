import React from "react";
import { useTranslation } from "react-i18next";
import loadable from "@loadable/component";

import Summary from "../../components/Summary";
import { SUMMARY_API } from "../../constants";

import { AppContainer } from "./styles";
import Spinner from "../../components/Spinner";
import useApi from "../../utils/useApi";
import LoadingButton from "../../components/LoadingButton";
// lazy loading the table component on deamnd
const Table = loadable(() => import("../../components/Table"));

function App() {
  const [stats, isLoading, error, refresh] = useApi(SUMMARY_API, "GET");

  const { t } = useTranslation();

  if (!stats) {
    return <Spinner />;
  }

  const { Global: details, Countries: countries } = stats;
  // TODO: do error toast handling

  return (
    <AppContainer>
      <LoadingButton
        title={isLoading ? t("please_wait") : t("refresh")}
        loading={isLoading}
        onClick={refresh}
      />
      <Summary details={details} />
      <Table data={countries} />
    </AppContainer>
  );
}

export default App;
