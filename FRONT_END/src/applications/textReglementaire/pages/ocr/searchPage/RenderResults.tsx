import { SearchHitsOcrResultEntityElastic2 } from "../../../../../redux/mainApi";
import {
  LinearProgress,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import * as React from "react";
import { DragHandle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedFileId,
  selectSelectedLine,
  setSelectedLine,
  setSelectedPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Pagination } from "../../../../../_generated_gql_/graphql";
import { CustomNoResultOverlay } from "../../../../pam/mainDataGrid/CustomNoResultOverlay";
import { Theme } from "@mui/material/styles";
import { StripedDataGrid } from "../../../../pam/mainDataGrid/StripedDataGrid";

export const RenderResults = ({
  data,
  isFetching,
  setInnerHitsPage,
}: {
  data: SearchHitsOcrResultEntityElastic2;
  setInnerHitsPage: Dispatch<SetStateAction<Pagination>>;
  innerHitsPage: Pagination;
  isFetching: boolean;
}) => {
  const selectedFileId = useSelector(selectSelectedFileId);
  const selectedLine = useSelector(selectSelectedLine);
  const dispatch = useDispatch();

  const [innerHits, setInnerHits] = useState(null);
  const [selectedOuterHit, setSelectedOuterHit] = useState(null);

  const columns: GridColDef[] = [
    {
      field: "result",
      headerName: "",
      width: 190,
      renderCell: ({ row }) => {
        return (
          <ListItemButton
            selected={row?.content?.id_line === selectedLine?.content?.id_line}
            onClick={() => {
              dispatch(setSelectedLine(row));
              dispatch(
                setSelectedPageIndex(
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
        );
      },
    },
  ];

  // todo display page miniature instedd of lines

  useEffect(() => {
    setSelectedOuterHit(
      data?.searchHits?.filter((item) => item?.id === selectedFileId)?.[0],
    );
    setInnerHits(
      data?.searchHits
        ?.filter((item) => item?.id === selectedFileId)?.[0]
        ?.innerHits["pages.paragraphs.lines"]?.searchHits?.map((item) => ({
          ...item,
          id: item.id + item.content?.id_line,
          key: item.id + item.content?.id_line,
        })),
    );
  }, [data?.searchHits, selectedFileId]);

  // todo add multiple lines per page

  useEffect(() => {
    if (innerHits) {
      dispatch(setSelectedLine(innerHits?.[0]));
      dispatch(
        setSelectedPageIndex(
          parseInt(innerHits?.[0]?.content?.id_line?.split("_")[1]),
        ),
      );
    }
  }, [dispatch, innerHits]);

  return (
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
      loading={isFetching}
      autoPageSize={true}
      // disableSelectionOnClick={true}
      onPaginationModelChange={(model) => {
        console.log(model);
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
          ? selectedOuterHit?.innerHits?.["pages.paragraphs.lines"].totalHits
          : 0
      }
      hideFooterSelectedRowCount={true}
      // onRowSelectionModelChange={(model,details) => dispatch(setSelect) }
      // rowSelectionModel={[selectedLine?.id]}
    />
  );
};
