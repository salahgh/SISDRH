import { QueryResult } from "@apollo/client";
import {
  CandidatSearchDtoInput,
  PaginationInput,
  SearchCandidatQuery,
  SearchCandidatQueryVariables,
} from "../../_generated_gql_/graphql.ts";
import {
  Avatar,
  Box,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { StripedDataGrid } from "../pam/mainDataGrid/StripedDataGrid.tsx";
import * as React from "react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Theme } from "@mui/material/styles";
import { CustomPagination } from "../pam/mainDataGrid/CustomPagination.tsx";
import { CustomNoResultOverlay } from "../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { GridColDef } from "@mui/x-data-grid";
import { highlightSearchTokenWithSpan } from "../common/utilities/tools.ts";
import ASSETS from "../../resources/ASSETS.ts";
import { CandidatDetailsDialog } from "./CandidatDetailsDialog.tsx";

export function formatPhoneNumber(telephone: string) {
  if (telephone == null) return;

  return (
    telephone.substring(0, 2) +
    "." +
    telephone.substring(2, 4) +
    "." +
    telephone.substring(4, 6) +
    "." +
    telephone.substring(6, 8) +
    "." +
    telephone.substring(8, 10)
  );
}

function getDiplomeCivile(
  diplomes:
    | Array<{
        __typename?: "CandidatDiplome";
        id?: string | null;
        anne?: number | null;
        diplomesecole?: string | null;
        moyenne?: number | null;
        diplomeCivile?: {
          __typename?: "RDiplomeCivile";
          libAr?: string | null;
          codeDipCiv?: string | null;
        } | null;
        specialite?: {
          __typename?: "Specialite";
          libAr?: string | null;
          id?: string | null;
        } | null;
      } | null>
    | undefined,
) {
  return undefined;
}

export function CandidatDataGrid(props: {
  candidatQuery: QueryResult<SearchCandidatQuery, SearchCandidatQueryVariables>;
  pageable: PaginationInput;
  setPageable: Dispatch<SetStateAction<PaginationInput>>;
  candidatSearchDto: CandidatSearchDtoInput;
}) {
  const { candidatQuery, setPageable, pageable, candidatSearchDto } = props;
  const { data: candidats, loading, error, refetch } = candidatQuery;

  const [rowCount, setRowCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const [selectedCandidatId, setSelectedCandidatId] = useState(null);

  console.log(candidatSearchDto);

  useEffect(() => {
    if (candidats) {
      setRowCount(candidats?.searchCandidat?.totalElements);
    }
  }, [candidats, setRowCount]);

  const columns: GridColDef[] = [
    {
      field: "nom",
      headerName: "nom",
      width: 250,
      renderCell: ({
        row,
      }: {
        row: SearchCandidatQuery["searchCandidat"]["content"][0];
      }) => (
        <ListItem
          sx={{ textAlign: "left" }}
          onDoubleClick={() => {
            setSelectedCandidatId(row?.id);
            setVisible(true);
          }}
        >
          <ListItemAvatar>
            <Avatar src={ASSETS.AVATAR_MALE}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                fontWeight={"bold"}
                style={{
                  width: "100%",
                }}
              >
                <span
                  dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
                    row?.noma + " " + row?.pnoma,
                    candidatSearchDto.token,
                  )}
                />
              </Typography>
            }
          ></ListItemText>
        </ListItem>
      ),
    },
    {
      field: "noma",
      headerName: "noma",
      width: 400,
      renderCell: ({ row }) => (
        <ListItem sx={{ textAlign: "right" }}>
          <ListItemText
            primary={
              <Typography
                fontWeight={"bold"}
                style={{
                  width: "100%",
                }}
              >
                <span
                  dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
                    row?.nom + " " + row?.pnom,
                    candidatSearchDto.token,
                  )}
                />
              </Typography>
            }
          ></ListItemText>
        </ListItem>
      ),
    },
    {
      field: "dn",
      headerName: "dn",
      width: 100,
    },
    {
      field: "aaa",
      headerName: "wr",
      width: 100,
      renderCell: ({
        row,
      }: {
        row: SearchCandidatQuery["searchCandidat"]["content"][0];
      }) => {
        console.log(row?.diplomes);
        return (
          <Typography
            fontWeight={"bold"}
            style={{
              width: "100%",
            }}
            overflow={"auto"}
          >
            {row?.wr?.libAr}
          </Typography>
        );
      },
    },
    {
      field: "adsfdfaa",
      headerName: "code",
      width: 100,
      renderCell: ({
        row,
      }: {
        row: SearchCandidatQuery["searchCandidat"]["content"][0];
      }) => {
        console.log(row?.diplomes);
        return (
          <Typography
            fontWeight={"bold"}
            style={{
              width: "100%",
            }}
            overflow={"auto"}
          >
            <Avatar>{row?.wr?.id}</Avatar>
          </Typography>
        );
      },
    },
    {
      field: "adsfdfaasdf",
      headerName: "region",
      width: 100,
      renderCell: ({
        row,
      }: {
        row: SearchCandidatQuery["searchCandidat"]["content"][0];
      }) => {
        console.log(row?.diplomes);
        return (
          <Typography
            fontWeight={"bold"}
            style={{
              width: "100%",
            }}
            overflow={"auto"}
          >
            <Avatar>{row?.wn?.regionMilitaire?.id}</Avatar>
          </Typography>
        );
      },
    },
    {
      field: "telephone",
      headerName: "telephone",
      width: 150,
      renderCell: ({ row }) => (
        <Typography
          fontWeight={"bold"}
          style={{
            width: "100%",
          }}
        >
          <span
            dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
              formatPhoneNumber(row?.telephone),
              formatPhoneNumber(candidatSearchDto.telephone),
            )}
          />
        </Typography>
      ),
    },
    {
      field: "azer",
      headerName: "telephone",
      width: 150,
      renderCell: ({
        row,
      }: {
        row: SearchCandidatQuery["searchCandidat"]["content"][0];
      }) => {
        console.log(row?.diplomes);
        return (
          <Typography
            fontWeight={"bold"}
            style={{
              width: "100%",
            }}
            overflow={"auto"}
          >
            {getDiplomeCivile(row?.diplomes)}
          </Typography>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "calc(100vh - 152px)" }}>
      <CandidatDetailsDialog
        visible={visible}
        setVisible={setVisible}
        selectedCandidatId={selectedCandidatId}
      ></CandidatDetailsDialog>
      <StripedDataGrid
        rows={
          candidats?.searchCandidat?.content &&
          candidats?.searchCandidat?.content.length > 0
            ? candidats?.searchCandidat?.content
            : []
        }
        density={"standard"}
        columns={columns}
        loading={loading}
        autoPageSize={true}
        paginationModel={{
          page: pageable.pageNumber,
          pageSize: pageable.pageSize,
        }}
        onPaginationModelChange={(model) => {
          setPageable((old) => ({
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
        // rowHeight={55}
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
            pageSize: pageable.pageSize,
          },
        }}
      />
    </Box>
  );
}
