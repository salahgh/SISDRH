import {Paper, Stack} from "@mui/material";
import {DataGrid, GridInputRowSelectionModel} from "@mui/x-data-grid";
import {
    selectSelectedUser,
    setSelectedUser
} from "../../../../redux/features/userAdministration/userAdministrationSlice";
import * as React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import User from "./User";
import {useDataService} from "./useDataService";
import {DataGridColums} from "./dataGridColums";

const rowHeight = 80

const UsersDataGrid = () => {

    const dispatch = useDispatch();
    const selectedMatricule: string = useSelector(selectSelectedUser)
    const {users, error, refetch, loading, setPageable, pageable} = useDataService()
    const columns = DataGridColums
    const [rowSelectionModel, setRowSelectionModel] = useState<GridInputRowSelectionModel>();

    // @ts-ignore
    useEffect(
        () => {
            if (users && !selectedMatricule) {
                dispatch(setSelectedUser(users?.allUsersPaged?.content?.at(0)?.id))
            }
        }, [users, selectedMatricule, dispatch]
    )

    // @ts-ignore
    return (
        <Stack direction={'row'} sx={{padding: 0, height: '100%'}} spacing={1}>
            <Paper sx={{width : 300, height: '100%'}}>
                <DataGrid
                    sx={{}}
                    rowHeight={rowHeight}
                    rows={users && users?.allUsersPaged?.content ? users?.allUsersPaged?.content : []}
                    columns={columns}
                    error={error}
                    loading={loading}
                    autoPageSize={true}
                    onPageSizeChange={(newPageSize) => {
                        setPageable((pageable) => ({...pageable, pageSize: newPageSize}))
                    }}
                    onPageChange={(newPage) => setPageable((old) => ({...old, pageNumber: newPage}))}
                    paginationMode={'server'}
                    rowCount={users?.allUsersPaged?.totalElements}
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                        dispatch(setSelectedUser(newRowSelectionModel[0]))
                    }}
                    rowSelectionModel={rowSelectionModel}
                />
            </Paper>
            <Paper sx={{flex: 4}}>
                {
                    <User matricule={selectedMatricule}/>
                }
            </Paper>
        </Stack>
    )

}

export default UsersDataGrid
