import {
  Box,
  LinearProgress,
  ListItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { GridColDef, GridEventListener } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { AutoStoriesOutlined, PictureAsPdfOutlined } from "@mui/icons-material";

import { useMutation, useQuery } from "@apollo/client";
import {
  AddOcrResultToFolderDocument,
  DeletePdfFileFromFolderDocument,
  FindAllOcrResultEntityByFoldersContainingDocument,
  FindAllOcrResultEntityByFoldersContainingQuery,
  GetFovoriteFolderDocument,
  PrivilegesEnum,
} from "../../../../../_generated_gql_/graphql";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPage,
  selectSelectedFolder,
  setPage,
} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import { useNavigate } from "react-router-dom";
import { getLink, routs } from "../../../../../routing/routs";
import { setSelectedFileId } from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { PagePreview } from "./PagePreview";
import ASSETS from "../../../../../resources/ASSETS";
import { ConfidentialiteChip } from "./ConfidentialiteChip";
import UsersChoiceDialog from "./UsersChoice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { useHasAuthorities } from "../../../../../security/useHasAuthoritie.ts";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid.tsx";
import { Theme } from "@mui/material/styles";
import { CustomPagination } from "../../../../pam/mainDataGrid/CustomPagination.tsx";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { ActionBar } from "../folders/ActionBar.tsx";
import { PdfFileActions } from "./PdfFileActions.tsx";
import { SearchHitOcrResultEntityElastic2 } from "../../../../../redux/mainApi.ts";
import { useAppSelector } from "../../../../../redux/hooks.ts";
import { OcrDoneChip } from "../../PdfFile/relations/OcrDoneChip.tsx";

const rowHeight = 60;

// @ts-ignore
const ToolTipChildWrapper = React.forwardRef(({ children, ...other }, ref) => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      direction={"row"}
      ref={ref}
      {...other}
    >
      {children}
    </Stack>
  );
});

export function RenderPageOcrResultTable() {
  const [confidentialiteOpen, setConfidentialiteOpen] = useState(false);
  const selectedFolder = useSelector(selectSelectedFolder);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const hasOcrResultDirectGrant = useHasAuthorities(
    PrivilegesEnum.OcrResultDirectGrant,
  );

  const paginationInput = useAppSelector(selectPage);

  const OcrResultPin = useHasAuthorities(PrivilegesEnum.OcrResultPin);

  const { data, error, loading, refetch } = useQuery(
    FindAllOcrResultEntityByFoldersContainingDocument,
    {
      variables: {
        folderId: selectedFolder?.id,
        pagination: {
          pageSize: paginationInput.pageSize,
          pageNumber: paginationInput.pageNumber,
        },
      },
    },
  );

  const [deletePdfFromFolder, { loading: deletingPdfFromFolder }] = useMutation(
    DeletePdfFileFromFolderDocument,
    {
      refetchQueries: [
        {
          query: FindAllOcrResultEntityByFoldersContainingDocument,
          variables: {
            folderId: selectedFolder?.id,
            pagination: {
              pageSize: paginationInput.pageSize,
              pageNumber: paginationInput.pageNumber,
            },
          },
        },
      ],
    },
  );

  const [addOcrResultsToFolder, { loading: addingOcrResultsLoading }] =
    useMutation(AddOcrResultToFolderDocument, {
      refetchQueries: [
        {
          query: FindAllOcrResultEntityByFoldersContainingDocument,
          variables: {
            folderId: selectedFolder?.id,
            pagination: {
              pageSize: paginationInput.pageSize,
              pageNumber: paginationInput.pageNumber,
            },
          },
        },
      ],
    });

  const { data: fovoriteFolder } = useQuery(GetFovoriteFolderDocument);

  const handleRowClick: GridEventListener<"rowMouseEnter"> = (params) => {};
  const [usersChoiceDialogOpen, setUsersChoiceOpen] = useState<boolean>(false);
  const [ocrResultId, setOcrResultId] = useState<string>(null);
  const [rowCount, setRowCount] = useState();

  // useEffect(() => {}, [selectedFolder, refetch, page, size]);

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const handleDeletePdfFromFolder = (row) => {
    deletePdfFromFolder({
      variables: {
        folderId: selectedFolder?.id,
        pdfId: row?.id,
      },
    })
      .then(() => {
        handleShowInfoSnackBar("deleted");
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  };

  // todo add loading state for favorite and delete files from folders individually

  function toggleFavorite(
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    row: any,
  ) {
    const isFavorite =
      row.folders?.filter((item: any) => item?.description === "FAVORITE")
        .length !== 0;
    if (!isFavorite) {
      addOcrResultsToFolder({
        variables: {
          folderId: fovoriteFolder?.favoriteFolder?.id,
          ocrResultId: row?.id,
        },
      })
        .then((result) => {
          handleShowInfoSnackBar("ajouté avec succés");
        })
        .catch((error) =>
          handleShowGraphQlErrorSnackBar(JSON.stringify(error)),
        );
    } else {
      deletePdfFromFolder({
        variables: {
          folderId: fovoriteFolder?.favoriteFolder?.id,
          pdfId: row?.id,
        },
      })
        .then((result) => {
          handleShowInfoSnackBar("supprimé avec succés");
        })
        .catch((error) =>
          handleShowGraphQlErrorSnackBar(JSON.stringify(error)),
        );
    }
  }

  function handleShowPdf(row) {
    dispatch(setSelectedFileId(row.id));
    // navigate(getLink(routs.PdfFilePage));
    navigate(`${getLink(routs.PdfFilePage)}/${row?.id}`);
  }

  // todo add the privilege check for pin add

  const columns: GridColDef[] = [
    {
      field: "icon",
      headerName: "",
      width: 60,
      renderCell: () => (
        <ListItem>
          <PictureAsPdfOutlined
            onClick={() => handleShowPdf(row)}
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
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <Box className={"flex flex-row justify-center w-full"}>
          <Typography sx={{ fontWeight: "bold" }}>{row.reference}</Typography>
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
      renderCell: ({ row }: { row: any }) => (
        <>
          <ListItem
            sx={{
              width: "100%",
            }}
          >
            <Tooltip
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "rgba(218,213,213,0.48)",
                  },
                },
              }}
              title={
                <PagePreview
                  shouldNavigate={true}
                  fileId={row.id}
                  pageIndex={0}
                  width={"500px"}
                />
              }
              placement={"right"}
              arrow
              sx={{ padding: 0, margin: 0 }}
            >
              <Typography>{row.originalFileName}</Typography>
            </Tooltip>
          </ListItem>
        </>
      ),
    },
    {
      field: "ocrDone",
      headerName: "عدد الصفحات",
      width: 150,
      renderCell: (rowParams) => {
        return (
          <Stack
            direction={"row"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
            className={"w-full"}
          >
            <Stack
              sx={{ padding: 1, width: 80 }}
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
            {/*{hasOcrResultDirectGrant && (*/}
            {/*  <OcrResultUserGrantsAvatarGroup*/}
            {/*    userIds={rowParams?.row?.ocrResultUserGrants?.map(*/}
            {/*      (grant) => grant?.user?.personnel?.matricule,*/}
            {/*    )}*/}
            {/*    onClick={() => {*/}
            {/*      setOcrResultId(rowParams?.row?.id);*/}
            {/*      setUsersChoiceOpen(true);*/}
            {/*    }}*/}
            {/*  />*/}
            {/*)}*/}

            <OcrDoneChip
              // showDone={true}
              ocrDone={rowParams?.row?.ocrDone}
            ></OcrDoneChip>
          </Stack>
        );
      },
    },
    {
      field: "ocrResultPinned",
      headerName: "",
      width: 50,
      renderCell: ({ row }: { row: any }) => {
        if (!OcrResultPin) return <></>;
        return (
          <Stack
            direction={"row"}
            width={50}
            alignItems={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            {row?.ocrResultPinned && (
              <img
                src={ASSETS.PINNED}
                alt={"pinned"}
                style={{
                  width: 35,
                  height: 35,
                }}
              />
            )}
          </Stack>
        );
      },
    },
    {
      field: "id",
      headerName: "",
      width: 300,
      renderCell: (row) => (
        <PdfFileActions
          handleDeletePdfFromFolder={handleDeletePdfFromFolder}
          selectedFileId={row?.id}
          handleShowPdf={handleShowPdf}
          page={paginationInput.pageNumber}
          size={paginationInput.pageSize}
          row={row}
        ></PdfFileActions>
      ),
    },
  ];

  // todo display the actions only when the row is hoverd

  useEffect(() => {
    if (data) {
      setRowCount(
        data?.findAllOcrResultEntityByFoldersContaining?.totalElements,
      );
    }
  }, [data, setRowCount]);

  const [rowSelectionModel, setRowSelectionModel] = useState();

  return (
    <Stack flex={1}>
      <UsersChoiceDialog
        open={usersChoiceDialogOpen}
        setOpen={setUsersChoiceOpen}
        ocrResultId={ocrResultId}
      />
      <ActionBar setConfidentialiteOpen={setConfidentialiteOpen} />
      {/*<ConfidentialiteForm*/}
      {/*  open={confidentialiteOpen}*/}
      {/*  setOpen={setConfidentialiteOpen}*/}
      {/*/>*/}
      <Stack flex={1} className={"p-1"}>
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
          error={error}
          loading={loading}
          autoPageSize={true}
          paginationModel={{
            page: paginationInput?.pageNumber,
            pageSize: paginationInput?.pageSize,
          }}
          onPaginationModelChange={(model) => {
            dispatch(
              setPage({ pageNumber: model.page, pageSize: model.pageSize }),
            );
          }}
          // getRowId={(row) => row?.matricule}
          paginationMode={"server"}
          sortingMode={"server"}
          rowCount={rowCount}
          disableSelectionOnClick={true}
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
          slotsProps={{
            loadingOverlay: {
              pageSize: paginationInput.pageSize,
            },
          }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            dispatch(setSelectedFileId(newRowSelectionModel?.[0]));
            setRowSelectionModel(rowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </Stack>
    </Stack>
  );
}
