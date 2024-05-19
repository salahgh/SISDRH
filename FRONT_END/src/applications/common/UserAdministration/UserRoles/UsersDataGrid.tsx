import { LinearProgress, Paper, Stack } from "@mui/material";
import {
  selectSelectedUser,
  setSelectedUser,
} from "../../../../redux/features/userAdministration/userAdministrationSlice";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import { DataGridColums } from "./dataGridColums";
import { Theme } from "@mui/material/styles";
import { CustomNoResultOverlay } from "../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { StripedDataGrid } from "../../../pam/mainDataGrid/StripedDataGrid.tsx";
import {
  AllUsersPagedDocument,
  PaginationInput,
} from "../../../../_generated_gql_/graphql.ts";
import { useQuery } from "@apollo/client";

const rowHeight = 80;

const UsersDataGrid = () => {
  const dispatch = useDispatch();
  const selectedMatricule: string = useSelector(selectSelectedUser);
  const [rowSelectionModel, setRowSelectionModel] = useState();
  const columns = DataGridColums;

  const [pageable, setPageable] = useState<PaginationInput>({
    pageNumber: 0,
    pageSize: 100,
    sort: {
      orders: [{ property: "personnel.grade.grade", direction: "ASC" }],
    },
  });

  const { data: users, loading } = useQuery(AllUsersPagedDocument, {
    variables: {
      pageable: pageable,
    },
  });

  useEffect(() => {
    if (users && !selectedMatricule) {
      dispatch(setSelectedUser(users?.allUsersPaged?.content?.at(0)?.id));
    }
  }, [users, selectedMatricule]);

  const [rowCount, setRowCount] = useState();

  useEffect(() => {
    console.log("pam effect");
    if (users) {
      setRowCount(users?.allUsersPaged?.totalElements);
    }
  }, [users, setRowCount]);

  console.log("pageable ", pageable);

  const handleRowSelectionChange = (newSelection) => {
    console.log(newSelection);
    setRowSelectionModel(rowSelectionModel);
    dispatch(setSelectedUser(newSelection?.at(0)));
  };

  return (
    <Stack direction={"row"} sx={{ padding: 0, height: "100%" }} spacing={1}>
      <Paper sx={{ width: 300, height: "100%" }}>
        <StripedDataGrid
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-cell": {
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .MuiDataGrid-footerContainer": {
              borderColor: (theme: Theme) => theme.palette.divider,
            },
            "& .super-app-theme--header": {
              backgroundColor: "#121212",
            },
          }}
          rows={
            users?.allUsersPaged?.content ? users?.allUsersPaged?.content : []
          }
          rowHeight={rowHeight}
          columns={columns}
          loading={loading}
          autoPageSize={true}
          slots={{
            loadingOverlay: LinearProgress,
            noRowsOverlay: CustomNoResultOverlay,
          }}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          onPaginationModelChange={(model) => {
            console.log("model ", model);
            setPageable((old) => ({
              ...old,
              pageSize: model.pageSize,
              pageNumber: model.page,
            }));
          }}
          paginationModel={{
            page: pageable.pageNumber,
            pageSize: pageable.pageSize,
          }}
          paginationMode={"server"}
          rowCount={rowCount}
          hideFooterSelectedRowCount={true}
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={handleRowSelectionChange}
        />
      </Paper>
      <Paper sx={{ flex: 4 }}>{<User matricule={selectedMatricule} />}</Paper>
    </Stack>
  );
};

export default UsersDataGrid;
