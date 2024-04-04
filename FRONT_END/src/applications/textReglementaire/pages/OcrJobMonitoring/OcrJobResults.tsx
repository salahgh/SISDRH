import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardContent,
  LinearProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedItem } from "../../../../redux/features/elasticSearch/OcrJobSlice";
import MyCard from "./MyCard";
import { useQuery } from "@apollo/client";
import {
  Direction,
  FindAllOcrResultsPagedDocument,
  PaginationInput,
} from "../../../../_generated_gql_/graphql";
import { format } from "date-fns";

const OcrJobResults = () => {
  const [pageRequest, setPageRequest] = useState<PaginationInput>({
    pageNumber: 0,
    pageSize: 7,
    sort: {
      orders: [
        { property: "ocrDone", direction: Direction.Asc },
        {
          property: "createdDate",
          direction: Direction.Desc,
        },
      ],
    },
  });

  const { data, refetch, error, loading } = useQuery(
    FindAllOcrResultsPagedDocument,
    {
      variables: {
        pageable: pageRequest,
      },
      pollInterval: 3000,
    },
  );

  useEffect(() => {
    refetch();
  }, [pageRequest, refetch]);

  const selectedItem = useSelector(selectSelectedItem);

  function PaginationRounded() {
    return (
      <Stack spacing={2}>
        <TablePagination
          component="div"
          slotProps={{
            select: {
              "aria-label": "rows per page",
            },
            actions: {
              showFirstButton: true,
              showLastButton: true,
            },
          }}
          count={data?.findAllOcrResultsPaged?.totalElements}
          page={pageRequest.pageNumber}
          onPageChange={(e, page) =>
            setPageRequest((old) => ({
              ...old,
              pageNumber: page,
            }))
          }
          rowsPerPage={pageRequest.pageSize ? pageRequest.pageSize : 10}
          onRowsPerPageChange={(params) =>
            setPageRequest((old) => {
              return {
                ...old,
                pageSize: params.target.value,
                pageNumber: old.pageNumber,
              };
            })
          }
          rowsPerPageOptions={[7, 10, 15]}
        />
      </Stack>
    );
  }

  return (
    <Stack direction={"row"} paddingTop={1} spacing={1}>
      <Stack
        flex={2}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={1}
      >
        <Stack spacing={1} width={"100%"} height={"100%"}>
          {data?.findAllOcrResultsPaged?.content?.map((item) => (
            <MyCard item={item}></MyCard>
          ))}
          {loading && <LinearProgress sx={{ width: "100%" }} />}
        </Stack>
        <PaginationRounded />
      </Stack>
      <Stack flex={1}>
        {selectedItem && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {selectedItem.originalFileName}
                </Typography>
                <Typography color="textSecondary">
                  OCR effectué:{" "}
                  {selectedItem.ocrDone === "o"
                    ? "oui"
                    : selectedItem.ocrDone === "c"
                      ? "en cours"
                      : "pas encors"}
                </Typography>
                <Typography color="textSecondary">
                  Created by: {selectedItem.createdBy}
                </Typography>
                <Typography color="textSecondary">
                  Created date:{" "}
                  {format(
                    new Date(selectedItem.createdDate),
                    "dd/MM/yyyy HH:mm",
                  )}
                </Typography>
                <Typography color="textSecondary">
                  Executed at:{" "}
                  {format(
                    new Date(selectedItem.executedAt),
                    "dd/MM/yyyy HH:mm",
                  )}
                </Typography>
                <Typography color="textSecondary">
                  Terminated at:{" "}
                  {format(
                    new Date(selectedItem.terminatedAt),
                    "dd/MM/yyyy HH:mm",
                  )}
                </Typography>
                <Typography color="textSecondary">
                  Nombre de page: {selectedItem.numberOfPapers}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Stack>
    </Stack>
  );
};

export default OcrJobResults;
