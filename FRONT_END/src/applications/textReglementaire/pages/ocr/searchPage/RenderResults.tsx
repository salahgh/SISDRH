import {
  SearchHitOcrResultEntityElastic2,
  SearchHitsOcrResultEntityElastic2,
} from "../../../../../redux/mainApi";
import {
  LinearProgress,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { DragHandle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectelasticSearchInput,
  selectselectedFileId,
  selectselectedLine,
  setselectedLine,
  setselectedPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { Dispatch, SetStateAction, useState } from "react";
import { Pagination } from "../../../../../_generated_gql_/graphql";
import { CustomPagination } from "../../../../pam/mainDataGrid/CustomPagination";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay";
import { Theme } from "@mui/material/styles";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid";

export const RenderResults = ({
  data,
  error,
  isFetching,
  setInnerHitsPage,
  innerHitsPage,
  setPageIndex,
}: {
  data: SearchHitsOcrResultEntityElastic2;
  setPageIndex: Dispatch<SetStateAction<number>>;
  setInnerHitsPage: Dispatch<SetStateAction<Pagination>>;
  innerHitsPage: Pagination;
  isFetching: boolean;
  error: boolean;
}) => {
  const selectedFileId = useSelector(selectselectedFileId);
  const selectedLine = useSelector(selectselectedLine);
  const searchInput = useSelector(selectelasticSearchInput);
  const dispatch = useDispatch();
  const [currentResult, setCurrentResult] = useState(1);

  const columns: GridColDef[] = [
    {
      field: "result",
      headerName: "",
      width: 190,
      renderCell: ({ row }) => (
        <ListItemButton
          selected={row?.content?.id_line === selectedLine?.content?.id_line}
          onClick={() => {
            dispatch(setselectedLine(row));
            dispatch(
              setselectedPageIndex(
                parseInt(row?.content?.id_line?.split("_")[1]),
              ),
            );
          }}
        >
          <DragHandle sx={{ marginRight: 1 }} />
          <ListItemText
            primary={
              <Typography variant={"h6"} fontWeight={"bold"}>
                {"P" +
                  " " +
                  row?.content?.id_line.split("_")[1] +
                  " -> L " +
                  row?.content?.id_line.split("_")[2] +
                  " "}
              </Typography>
            }
          ></ListItemText>
        </ListItemButton>
      ),
    },
  ];

  // todo display page miniature instedd of lines

  const selectedOuterHit: SearchHitOcrResultEntityElastic2 =
    data?.searchHits?.filter((hit) => hit.id === selectedFileId)[0];

  const innerHits = selectedOuterHit?.innerHits?.[
    "pages.paragraphs.lines"
  ].searchHits?.map((item) => ({
    ...item,
    id: item.id + item.content.id_line,
    key: item.id + item.content.id_line,
  }));

  // todo add multiple lines per page

  if (innerHits?.length > 0) {
    if (!selectedLine) {
      dispatch(setselectedLine(innerHits[0]));
      dispatch(
        setselectedPageIndex(
          parseInt(innerHits[0]?.content?.id_line?.split("_")[1]),
        ),
      );
    }
  }

  const handleGoLeft = () => {
    setCurrentResult((old) => old - 1);
  };

  const handleGoRight = () => {
    setCurrentResult((old) => old + 1);
  };

  return (
    <Stack direction={"column"} spacing={1}>
      {/*<Paper>*/}
      {/*    <Stack direction={'row'} padding={1} spacing={1} justifyItems={'center'} alignItems={'center'}>*/}
      {/*        <Button onClick={() => handleGoLeft()} variant={'outlined'}>*/}
      {/*            <ChevronLeft></ChevronLeft>*/}
      {/*        </Button>*/}
      {/*        <Button onClick={() => handleGoRight()} variant={'outlined'}>*/}
      {/*            <ChevronRight></ChevronRight></Button>*/}
      {/*        <Typography fontWeight={'bold'} fontSize={20}>*/}
      {/*            {currentResult}/{selectedOuterHit?.innerHits ? selectedOuterHit?.innerHits?.['pages.paragraphs.lines'].totalHits : 0}*/}
      {/*        </Typography>*/}
      {/*    </Stack>*/}
      {/*</Paper>*/}
      <Paper sx={{ width: 220, height: "calc(100vh - 200px)" }}>
        <StripedDataGrid
          rowHeight={65}
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
          rows={innerHits ? innerHits : []}
          columns={columns}
          slots={{
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoResultOverlay,
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          error={error}
          loading={isFetching}
          autoPageSize={true}
          disableSelectionOnClick={true}
          onPaginationModelChange={(model, details) => {
            if (!model.page) {
              setInnerHitsPage((old) => ({ ...old, pageSize: model.pageSize }));
            }

            setInnerHitsPage((old) => ({
              ...old,
              pageSize: model.pageSize,
              pageNumber: model.page,
            }));
          }}
          paginationMode={"server"}
          rowCount={
            selectedOuterHit?.innerHits
              ? selectedOuterHit?.innerHits?.["pages.paragraphs.lines"]
                  .totalHits
              : 0
          }
          hideFooterSelectedRowCount={true}
        />
      </Paper>
    </Stack>
  );
};
