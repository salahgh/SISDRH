import {
  Badge, Box,
  LinearProgress, ListItem,
  ListItemIcon,
  Typography
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
import { useSelector } from "react-redux";
import {
  selectelasticSearchInput,
  selectselectedFileId, setselectedFileId
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
import { useAppDispatch } from "../../../../../redux/hooks.ts";


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

  const appDispatch = useAppDispatch();
  const selectedFileId = useSelector(selectselectedFileId);
  const searchInput = useSelector(selectelasticSearchInput);

  const handleRowSelectionChange = (newSelection) => {
    if(newSelection[0]) {
      appDispatch(setselectedFileId(newSelection[0]))
    }
  }

  const columns: GridColDef[] = [
    {
      field: "icon",
      headerName: "",
      width: 75,
      renderCell: () => (
        <ListItem >
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
        </ListItem>
      ),
    },
    {
      field: "date reference",
      headerName: "تاريخ المرجع",
      width: 120,
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <Box className={''}>
          <Typography sx={{fontWeight : 'bold'}}>{
            row.content.dateReference
          }</Typography>
        </Box>
      ),
    },
    {
      field: "reference",
      headerName: "المرجع",
      width: 80,
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <Box>
          <Typography sx={{width : 100 , fontWeight : 'bold'}}>{
            row.content.reference
          }</Typography>
        </Box>
      ),
    },
    {
      field: "type",
      headerName: "نوع النص القانوني",
      width: 120,
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <Box>
          <Typography sx={{width : 100 , fontWeight : 'bold'}}>{
            row.content.libTypeTexteAr
          }</Typography>
        </Box>
      ),
    },
    {
      field: "resultd",
      headerName: "درجة السرية",
      width: 150,
      renderCell: ({ row }: { row: SearchHitOcrResultEntityElastic2 }) => (
        <Box className={'flex flex-row items-center'}>
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
        </Box>
      ),
    },
  ];


  return (
      <StripedDataGrid
        sx={{
          padding: 1 ,
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
        onPaginationModelChange={(model) => {
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
        rowSelectionModel={[selectedFileId]}
        onRowSelectionModelChange={handleRowSelectionChange}
      />
  );
};

export default RenderOuterHitsTable;
