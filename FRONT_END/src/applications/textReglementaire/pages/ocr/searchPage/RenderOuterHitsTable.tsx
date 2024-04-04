import {
  Badge,
  LinearProgress,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { ChevronLeft, PictureAsPdf } from "@mui/icons-material";
import { GridColDef } from "@mui/x-data-grid";
import {
  SearchHitOcrResultEntityElastic2,
  SearchHitsOcrResultEntityElastic2,
} from "../../../../../redux/mainApi";
import { orange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  selectelasticSearchInput,
  selectselectedFileId,
  setselectedFileId,
  setselectedLine,
  setselectedPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { ConfidentialiteChip } from "../../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip";
import { Theme } from "@mui/material/styles";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid";
import { CustomPagination } from "../../../../pam/mainDataGrid/CustomPagination";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay";
import { Dispatch, SetStateAction } from "react";
import { Pagination } from "../../../../../_generated_gql_/graphql";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

const RenderOuterHitsTable = ({
  data,
  isFetching,
  setHitsPage,
  hitsPage,
}: {
  data?: SearchHitsOcrResultEntityElastic2;
  isFetching: boolean;
  error?: FetchBaseQueryError | SerializedError | undefined;
  hitsPage: Pagination;
  setHitsPage: Dispatch<SetStateAction<Pagination>>;
}) => {
  // todo change the display for the name

  const dispatch = useDispatch();
  const selectedFileId = useSelector(selectselectedFileId);
  const searchInput = useSelector(selectelasticSearchInput);

  const columns: GridColDef[] = [
    {
      field: "result",
      headerName: "TEXT",
      width: 600,
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <ListItemButton
          onClick={() => {
            dispatch(setselectedFileId(row.id));
            dispatch(setselectedLine(null));
            dispatch(setselectedPageIndex(1));
          }}
          selected={row.id === selectedFileId}
        >
          <ListItemAvatar>
            <Avatar
              variant={"rounded"}
              sx={{ bgcolor: orange["100"], width: 45, height: 45 }}
            >
              <PictureAsPdf
                sx={{ color: orange["800"], width: 35, height: 35 }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ padding: 0, margin: 0, border: 0 }}
            primary={
              <Typography fontWeight={"bold"} fontSize={20}>
                {row?.content?.libTypeTexteFr +
                  "  " +
                  row?.content?.reference +
                  " du " +
                  row?.content?.dateReference}
              </Typography>
            }
          ></ListItemText>
          <ConfidentialiteChip
            confidentialite={{
              libConfidentialiteAr: row?.content.libConfidentialiteAr,
            }}
          />
          <ListItemIcon>
            {searchInput.searchToken !== "" && (
              <>
                <Badge
                  overlap={"circular"}
                  variant={"standard"}
                  sx={{ alignItems: "center", justifyContent: "center" }}
                  color="secondary"
                  badgeContent={
                    row.innerHits
                      ? row.innerHits["pages.paragraphs.lines"].totalHits
                      : null
                  }
                >
                  <ChevronLeft sx={{ width: 35, height: 35 }} />
                </Badge>
              </>
            )}
            {searchInput.searchToken === "" && (
              <ChevronLeft sx={{ width: 40, height: 40 }} />
            )}
          </ListItemIcon>
        </ListItemButton>
      ),
    },
  ];

  return (
    <Paper sx={{ width: 630, padding: 1 }}>
      <StripedDataGrid
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
        slots={{
          pagination: CustomPagination,
          loadingOverlay: LinearProgress,
          noRowsOverlay: CustomNoResultOverlay,
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        onPaginationModelChange={(model, details) => {
          if (!model.page) {
            setHitsPage((old) => ({ ...old, pageSize: model.pageSize }));
          }

          setHitsPage((old) => ({
            ...old,
            pageSize: model.pageSize,
            pageNumber: model.page,
          }));
        }}
        paginationModel={{
          page: hitsPage.pageNumber,
          pageSize: hitsPage.pageSize ? hitsPage.pageSize : 10,
        }}
        rowHeight={55}
        rows={data?.searchHits ? data?.searchHits : []}
        columns={columns}
        // error={error}
        loading={isFetching}
        autoPageSize={true}
        paginationMode={"server"}
        rowCount={data?.totalHits ? data?.totalHits : 0}
        hideFooterSelectedRowCount={true}
      />
    </Paper>
  );
};

export default RenderOuterHitsTable;
