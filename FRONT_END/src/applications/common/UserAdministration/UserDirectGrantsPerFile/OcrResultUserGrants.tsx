import {useQuery} from "@apollo/client";
import {
    AllOcrResultUsersGrantsPagedDocument,
    OcrResultUserGrantsDocument,
    PaginationInput
} from "../../../../_generated_gql_/graphql";
import {useState} from "react";
import {ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography} from "@mui/material";
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import ASSETS from "../../../../resources/ASSETS";

const OcrResultUserGrants = () => {

    const [
        paginationInput,
        setPaginationInput
    ] = useState<PaginationInput>({
        pageNumber: 0,
        pageSize: 10
    })

    const [rowSelectionModel, setRowSelectionModel] = useState<GridSelectionModel>()

    const {
        data,
        loading,
        error
    } = useQuery(AllOcrResultUsersGrantsPagedDocument, {
        variables: {
            pageable: paginationInput
        }
    })

    const {
        data: ocrResultUserGrants,
        loading: ocrResultUserGrantsLoading,
        error: ocrResultUserGrantsError
    } = useQuery(OcrResultUserGrantsDocument, {
        variables: {
            fileSignatue: '1'
        }
    })

    const columns: GridColDef[] = [
        {
            field: 'originalFileName',
            headerName: 'text reglementaire',
            width: 500,
            renderCell: ({row}) => (
                <ListItem>
                    <ListItemAvatar>
                        <img src={ASSETS.PDF_64} style={{width: 45, height: 45}}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography
                                variant={'h6'}
                                fontWeight={'bold'}
                            >
                                {row?.originalFileName}
                            </Typography>
                        }
                    >
                    </ListItemText>
                </ListItem>
            )
        },
        {
            field: 'confidentialite',
            headerName: 'utilisateurs',
            width: 500,
            renderCell: ({row}) => (
                <OcrResultUserGrantsAvatarGroup
                    borderWidth={3}
                    borderColor={'#2ea100'}
                    size={60}
                    userIds={
                        row?.ocrResultUserGrants?.filter((grant) => grant?.id?.type === 'GRANT').map((grant) => grant?.user?.personnel?.matricule)
                    }
                    onClick={() => {
                        setOcrResultId(row?.id)
                        setOpen(true)
                    }}/>
            )
        },
        {
            field: 'typeTexteReglementaire',
            headerName: 'utilisateur',
            width: 500,
            renderCell: (rowParams) => (
                <Stack direction={'row'}>
                    <OcrResultUserGrantsAvatarGroup
                        borderWidth={3}
                        borderColor={'#880000'}
                        size={60}
                        userIds={
                            rowParams?.row?.ocrResultUserGrants?.filter((grant) => grant?.id?.type === 'REVOKE').map((grant) => grant?.user?.personnel?.matricule)
                        }
                        onClick={() => {
                            setOcrResultId(rowParams?.row?.id)
                            setOpen(true)
                        }}/>
                </Stack>
            )
        },
    ];

    const [open, setOpen] = useState(false)
    const [ocrResultId, setOcrResultId] = useState('')


    return (
        <Stack
            direction={'row'}
            sx={{
                padding: 0,
                height: 'calc(100vh - 208px)'
            }} spacing={0}>
            <UsersChoiceDialog
                open={open}
                setOpen={setOpen}
                ocrResultId={ocrResultId}
            />
            <Paper sx={{flex: 1, height: '100%'}}>
                <DataGrid
                    sx={{}}
                    rowHeight={80}
                    rows={data?.allOcrResultUsersGrantsPaged?.content ? data?.allOcrResultUsersGrantsPaged?.content : []}
                    columns={columns}
                    error={error}
                    loading={loading}
                    autoPageSize={true}
                    onPageSizeChange={(newPageSize) => {
                        setPaginationInput((pageable) => ({...pageable, pageSize: newPageSize}))
                    }}
                    onPageChange={(newPage) => setPaginationInput((old) => ({...old, pageNumber: newPage}))}
                    paginationMode={'server'}
                    rowCount={data?.allOcrResultUsersGrantsPaged?.totalElements}
                    onSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                    }}
                    selectionModel={rowSelectionModel}
                    disableSelectionOnClick={false}
                />
            </Paper>
        </Stack>
    )
}

export default OcrResultUserGrants
