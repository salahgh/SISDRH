import {
  Button,
  IconButton,
  LinearProgress,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridSelectionModel,
} from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useState } from "react";
import { orange } from "@mui/material/colors";
import {
  AutoStoriesOutlined,
  Error,
  PictureAsPdfOutlined,
  Star,
  StarBorder,
} from "@mui/icons-material";
import BasicMenu from "./BasicMenu";
import { useMutation, useQuery } from "@apollo/client";
import {
  AddOcrResultToFolderDocument,
  DeletePdfFileFromFolderDocument,
  FindAllOcrResultEntityByFoldersContainingDocument,
  GetFovoriteFolderDocument,
  OcrResultEntityJpa,
  PrivilegesEnum,
} from "../../../../../_generated_gql_/graphql";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedFile,
  selectSelectedFolder,
} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import { useNavigate } from "react-router-dom";
import { getLink, routs } from "../../../../../routing/routs";
import {
  selectSelectedFileId,
  setSelectedFileId,
  setSelectedSinglePdfViewerFileId,
  setSelectedSinglePdfViewerPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { PagePreview } from "./PagePreview";
import ASSETS from "../../../../../resources/ASSETS";
import ActionsMenu from "./ActionsMenu";
import { ConfidentialiteChip } from "./ConfidentialiteChip";
import ConfidentialiteForm from "../ConfidentialiteForm";
import OcrResultUserGrantsAvatarGroup from "./OcrResultUserGrantsAvatarGroup";
import UsersChoiceDialog from "./UsersChoice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import {
  useGetAuthories,
  useHasAuthorities,
} from "../../../../../security/useHasAuthoritie.ts";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid.tsx";
import { Theme } from "@mui/material/styles";
import { CustomPagination } from "../../../../pam/mainDataGrid/CustomPagination.tsx";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { ActionBar } from "../folders/ActionBar.tsx";
import { FavoriteButton } from "../../../FavoriteButton.tsx";
import { PdfFileActions } from "./PdfFileActions.tsx";
import { setSelectedUser } from "../../../../../redux/features/userAdministration/userAdministrationSlice.ts";

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
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [confidentialiteOpen, setConfidentialiteOpen] = useState(false);
  const selectedFolder = useSelector(selectSelectedFolder);
  const selectedFileId = useSelector(selectSelectedFileId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const PRIVILIGES = useGetAuthories();
  const hasOcrResultDirectGrant = useHasAuthorities(
    PrivilegesEnum.OcrResultDirectGrant,
  );

  const { data, error, loading, refetch } = useQuery(
    FindAllOcrResultEntityByFoldersContainingDocument,
    {
      variables: {
        folderId: selectedFolder?.id,
        pagination: {
          pageSize: size,
          pageNumber: page,
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
              pageSize: size,
              pageNumber: page,
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
              pageSize: size,
              pageNumber: page,
            },
          },
        },
      ],
    });

  const { data: fovoriteFolder } = useQuery(GetFovoriteFolderDocument);

  useEffect(() => {}, [selectedFolder, refetch, page, size]);

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const handleDeletePdfFromFolder = (row) => {
    deletePdfFromFolder({
      variables: {
        folderId: selectedFolder?.id,
        pdfId: row?.id,
      },
    })
      .then((result) => {
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
    navigate(getLink(routs.PdfFilePage));
  }

  // todo add the privilege check for pin add

  const columns: GridColDef[] = [
    {
      field: "originalFileName",
      headerName: "إسم الملف",
      width: 400,
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
              <ToolTipChildWrapper>
                <ListItemAvatar>
                  <PictureAsPdfOutlined
                    onClick={() => handleShowPdf(row)}
                    sx={{
                      width: 35,
                      height: 35,
                      color: "#fa7d15",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography>{row.originalFileName}</Typography>}
                  // secondary={row.numberOfPapers}
                />
              </ToolTipChildWrapper>
            </Tooltip>
          </ListItem>
        </>
      ),
    },
    {
      field: "ocrDone",
      headerName: "عدد الصفحات",
      width: 80,
      renderCell: (rowParams) => {
        return (
          <Stack direction={"row"} spacing={4} justifyContent={"left"}>
            <Stack
              sx={{ padding: 1, width: 60 }}
              direction={"row"}
              alignItems={"center"}
              spacing={1}
            >
              <AutoStoriesOutlined />
              <Typography fontSize={20}>
                {rowParams.row.numberOfPapers}
              </Typography>
            </Stack>
            {PRIVILIGES.OcrResultDirectGrant && (
              <OcrResultUserGrantsAvatarGroup
                userIds={rowParams?.row?.ocrResultUserGrants?.map(
                  (grant) => grant?.user?.personnel?.matricule,
                )}
                onClick={() => {
                  setOcrResultId(rowParams?.row?.id);
                  setUsersChoiceOpen(true);
                }}
              />
            )}
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
    {
      field: "confidentialite",
      headerName: "Confidentialité",
      width: 150,
      renderCell: ({ row }: { row: any }) => {
        return (
          <Stack
            direction={"row"}
            width={150}
            alignItems={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <ConfidentialiteChip confidentialite={row.confidentialite} />
          </Stack>
        );
      },
    },
    {
      field: "ocrResultPinned",
      headerName: "يب",
      width: 50,
      renderCell: ({ row }: { row: any }) => {
        if (!PRIVILIGES.OcrResultPin) return <></>;
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
      headerName: "actions",
      width: 300,
      renderCell: (row) => (
        <PdfFileActions
          handleDeletePdfFromFolder={handleDeletePdfFromFolder}
          selectedFileId={row?.id}
          handleShowPdf={handleShowPdf}
          page={page}
          size={size}
          row={row}
        ></PdfFileActions>
      ),
    },
  ];

  // todo display the actions only when the row is hoverd

  const handleRowClick: GridEventListener<"rowMouseEnter"> = (params) => {};

  const [usersChoiceDialogOpen, setUsersChoiceOpen] = useState<boolean>(false);
  const [ocrResultId, setOcrResultId] = useState<string>(null);

  const [rowCount, setRowCount] = useState();

  useEffect(() => {
    if (data) {
      setRowCount(
        data?.findAllOcrResultEntityByFoldersContaining?.totalElements,
      );
    }
  }, [data, setRowCount]);

  const [rowSelectionModel, setRowSelectionModel] = useState();

  return (
    <div>
      <UsersChoiceDialog
        open={usersChoiceDialogOpen}
        setOpen={setUsersChoiceOpen}
        ocrResultId={ocrResultId}
      />
      <ActionBar
        PRIVILIGES={PRIVILIGES}
        setConfidentialiteOpen={setConfidentialiteOpen}
      />
      <ConfidentialiteForm
        open={confidentialiteOpen}
        setOpen={setConfidentialiteOpen}
      />
      <Stack sx={{ height: "calc(100vh - 190px)" }} className={"p-1"}>
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
            page: page,
            pageSize: size,
          }}
          onPaginationModelChange={(model) => {
            setPage(model.page);
            setSize(model.pageSize);
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
              pageSize: page,
            },
          }}
          onRowSelectionModelChange={(newRowSelectionModel) => {
            dispatch(setSelectedFileId(newRowSelectionModel?.[0]));
            setRowSelectionModel(rowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
        />
      </Stack>
    </div>
  );
}
