import {
  Box,
  LinearProgress,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { orange } from "@mui/material/colors";
import {
  AutoStoriesOutlined,
  Error,
  PictureAsPdfOutlined,
} from "@mui/icons-material";

import { useQuery } from "@apollo/client";
import {
  FindAllOcrResultEntityByFoldersContainingDocument,
  FindAllOcrResultEntityByFoldersContainingQuery,
  PaginationInput,
} from "../../../../../_generated_gql_/graphql";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid.tsx";
import { Theme } from "@mui/material/styles";
import { CustomPagination } from "../../../../pam/mainDataGrid/CustomPagination.tsx";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { ConfidentialiteChip } from "../../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";

const rowHeight = 60;

export const FilesDataGrid = ({ selectedFolderId, setSelectedFile }) => {
  const [paginationInput, setPaginationInput] = useState<PaginationInput>({
    pageNumber: 0,
    pageSize: 100,
  });

  const { data, loading } = useQuery(
    FindAllOcrResultEntityByFoldersContainingDocument,
    {
      variables: {
        folderId: selectedFolderId,
        pagination: {
          pageSize: paginationInput.pageSize,
          pageNumber: paginationInput.pageNumber,
        },
      },
    },
  );

  const columns: GridColDef[] = [
    {
      field: "icon",
      headerName: "",
      width: 60,
      renderCell: () => (
        <ListItem>
          <PictureAsPdfOutlined
            sx={{
              width: 35,
              height: 35,
              color: "#fa7d15",
            }}
          />
        </ListItem>
      ),
    },
    {
      field: "type",
      headerName: "نوع النص القانوني",
      width: 120,
      renderCell: ({
        row,
      }: {
        row: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0];
      }) => (
        <Box>
          <Typography
            sx={{ width: 120, fontWeight: "bold", textAlign: "center" }}
          >
            {row.typeTexteReglementaire.libTypeTexteAr}
          </Typography>
        </Box>
      ),
    },
    {
      field: "reference",
      headerName: "المرجع",
      width: 80,
      renderCell: ({
        row,
      }: {
        row: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0];
      }) => (
        <Box className={"flex flex-row justify-center w-full"}>
          <Typography sx={{ fontWeight: "bold" }}>{row?.reference}</Typography>
        </Box>
      ),
    },
    {
      field: "date referencedf",
      headerName: "تاريخ المرجع",
      width: 110,
      renderCell: ({
        row,
      }: {
        row: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0];
      }) => (
        <Box className={""} overflow={"auto"}>
          <Typography sx={{ fontWeight: "bold" }}>
            {row.dateReference}
          </Typography>
        </Box>
      ),
    },

    {
      field: "resultd",
      headerName: "درجة السرية",
      width: 130,
      renderCell: ({
        row,
      }: {
        row: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0];
      }) => (
        <Box className={"flex flex-row justify-center w-full"}>
          <ConfidentialiteChip
            confidentialite={{
              libConfidentialiteAr: row?.confidentialite.libConfidentialiteAr,
            }}
          />
        </Box>
      ),
    },

    {
      field: "originalFileName",
      headerName: "إسم الملف",
      width: 320,
      renderCell: ({
        row,
      }: {
        row: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0];
      }) => (
        <>
          <ListItem
            sx={{
              width: "100%",
            }}
          >
            <Typography>{row.originalFileName}</Typography>
          </ListItem>
        </>
      ),
    },
    {
      field: "ocrDone",
      headerName: "عدد الصفحات",
      width: 130,
      renderCell: (rowParams) => {
        return (
          <Stack
            direction={"row"}
            spacing={4}
            justifyContent={"center"}
            className={"w-full"}
          >
            <Stack
              sx={{ padding: 1, width: 70 }}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
              className={"justify-center"}
            >
              <AutoStoriesOutlined />
              <Typography fontSize={20}>
                {rowParams.row.numberOfPapers}
              </Typography>
            </Stack>

            {rowParams?.row?.ocrDone !== "o" ? (
              <>
                <Stack
                  sx={{ padding: 1 }}
                  direction={"row"}
                  alignItems={"center"}
                  spacing={1}
                >
                  <Error sx={{ color: orange["800"], width: 35, height: 35 }} />
                  <Typography
                    fontWeight={"bold"}
                    fontSize={20}
                    color={orange["800"]}
                  >
                    OCR
                  </Typography>
                </Stack>
              </>
            ) : null}
            <Stack
              sx={{ padding: 1 }}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            ></Stack>
          </Stack>
        );
      },
    },
  ];

  const [rowCount, setRowCount] = useState(0);

  // todo display the actions only when the row is hoverd

  useEffect(() => {
    if (data) {
      setRowCount(
        data?.findAllOcrResultEntityByFoldersContaining?.totalElements,
      );
    }
  }, [data]);

  const [rowSelectionModel, setRowSelectionModel] = useState();

  return (
    <div>
      <Stack sx={{ height: "calc(100vh - 200px)" }} className={"p-1"}>
        <StripedDataGrid
          rowHeight={rowHeight}
          rows={
            data?.findAllOcrResultEntityByFoldersContaining?.content &&
            data?.findAllOcrResultEntityByFoldersContaining?.content?.length > 0
              ? data?.findAllOcrResultEntityByFoldersContaining?.content
              : []
          }
          density={"standard"}
          columns={columns}
          // error={error}
          loading={loading}
          autoPageSize={true}
          paginationModel={{
            page: paginationInput?.pageNumber,
            pageSize: paginationInput?.pageSize,
          }}
          onPaginationModelChange={(model) => {
            setPaginationInput({
              pageNumber: model.page,
              pageSize: model.pageSize,
            });
          }}
          // getRowId={(row) => row?.matricule}
          paginationMode={"server"}
          sortingMode={"server"}
          rowCount={rowCount}
          // disableSelectionOnClick={true}
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
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          // getCellClassName{(params) => 'allCels'}
          slots={{
            pagination: CustomPagination,
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoResultOverlay,
          }}
          // slotsProps={{
          //   loadingOverlay: {
          //     pageSize: paginationInput.pageSize,
          //   },
          // }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setSelectedFile(newRowSelectionModel?.[0]);
            setRowSelectionModel(rowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </Stack>
    </div>
  );
};
