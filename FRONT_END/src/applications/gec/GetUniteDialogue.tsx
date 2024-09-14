import {
  Avatar,
  Box,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  FindAllCourrierAutoriteByLibDocument,
  FindAllCourrierAutoriteByLibQuery,
  Pagination,
  PamOff2024,
} from "../../_generated_gql_/graphql.ts";
import { Theme } from "@mui/material/styles";
import {
  rowHeight,
  StripedDataGrid,
} from "../pam/mainDataGrid/StripedDataGrid.tsx";
import { CustomPagination } from "../pam/mainDataGrid/CustomPagination.tsx";
import { CustomNoResultOverlay } from "../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import * as React from "react";
import { GridColDef } from "@mui/x-data-grid";

export const GetUniteDialogue = () => {
  const [searchToken, setSearchToken] = useState("");
  const [page, setPage] = useState<Pagination>({
    pageNumber: 0,
    pageSize: 20,
  });
  const [rowCount, setRowCount] = useState(0);

  const { data: unites, loading } = useQuery(
    FindAllCourrierAutoriteByLibDocument,
    {
      variables: {
        lib: searchToken,
        pageable: page,
      },
    },
  );

  useEffect(() => {
    console.log("pam effect");
    if (unites) {
      setRowCount(unites?.findAllCourrierAutoriteByLib?.totalElements);
    }
  }, [unites, setRowCount]);

  const columns: GridColDef[] = [
    {
      field: "matricule",
      headerName: "code",
      width: 100,
      renderCell: ({
        row,
      }: {
        row: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0];
      }) => <Typography>{row?.id}</Typography>,
    },
    {
      field: "rhRunite",
      headerName: "lib fr",
      width: 400,
      renderCell: ({
        row,
      }: {
        row: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0];
      }) => <Typography>{row?.rhRunite?.libUniteeAr}</Typography>,
    },
    {
      field: "id",
      headerName: "lib ar",
      width: 400,
      renderCell: ({
        row,
      }: {
        row: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0];
      }) => <Typography>{row?.rhRunite?.libUniteeFr}</Typography>,
    },
    {
      field: "idd",
      headerName: "lib ar",
      width: 400,
      renderCell: ({
        row,
      }: {
        row: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0];
      }) => <Typography>{row?.rhRunite?.abreviationFr}</Typography>,
    },
  ];

  return (
    <Stack>
      <TextField
        value={searchToken}
        onChange={(e) => setSearchToken(e?.target?.value)}
      ></TextField>
      <Box sx={{ height: "calc(100vh - 250px)" }}>
        <StripedDataGrid
          rows={
            unites?.findAllCourrierAutoriteByLib?.content &&
            unites?.findAllCourrierAutoriteByLib?.content?.length > 0
              ? unites?.findAllCourrierAutoriteByLib?.content
              : []
          }
          density={"standard"}
          columns={columns}
          loading={loading}
          autoPageSize={true}
          paginationModel={{
            page: page.pageNumber,
            pageSize: page.pageSize,
          }}
          onPaginationModelChange={(model) => {
            setPage((old) => ({
              ...old,
              pageSize: model.pageSize,
              pageNumber: model.page,
            }));
          }}
          paginationMode={"server"}
          sortingMode={"server"}
          rowCount={rowCount}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-cell": {
              // backgroundColor: (theme : Theme) => theme.palette.background.default,
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .MuiDataGrid-columnHeaders": {
              // backgroundColor: (theme : Theme) => theme.palette.background.default,
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .MuiDataGrid-footerContainer": {
              // backgroundColor: (theme : Theme) => theme.palette.background.default,
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .super-app-theme--header": {
              backgroundColor: "#121212",
            },
          }}
          rowHeight={rowHeight}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          // getCellClassName{(params) => 'allCels'}
          slots={{
            pagination: CustomPagination,
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoResultOverlay,
          }}
          slotsProps={{
            loadingOverlay: {
              pageSize: page.pageSize,
            },
          }}
        />
      </Box>
    </Stack>
  );
};
