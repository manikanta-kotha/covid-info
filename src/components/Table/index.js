import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { MainContainer } from "./styles";

// TODO: header names should be translated
const columns = [
  {
    field: "Country",
    headerName: "Country",
    width: 150,
  },
  {
    field: "NewConfirmed",
    headerName: "New Confirmed",
    type: "number",
    width: 200,
  },
  {
    field: "NewRecovered",
    headerName: "New Recovered",
    type: "number",
    width: 200,
  },
  {
    field: "NewDeaths",
    headerName: "New Deaths",
    type: "number",
    width: 200,
  },
  {
    field: "TotalConfirmed",
    headerName: "Total Confirmed",
    type: "number",
    width: 200,
  },
  {
    field: "TotalRecovered",
    headerName: "Total Recovered",
    type: "number",
    width: 200,
  },
  {
    field: "TotalDeaths",
    headerName: "Total Deaths",
    type: "number",
    width: 200,
  },
];

export default function DataTable(props) {
  const { data } = props;

  return (
    <MainContainer>
      <DataGrid
        getRowId={(row) => row.ID}
        rows={data}
        columns={columns}
        pageSize={7}
      />
    </MainContainer>
  );
}
