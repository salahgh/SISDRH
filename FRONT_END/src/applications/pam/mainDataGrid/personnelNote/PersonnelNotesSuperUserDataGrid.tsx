import {Theme} from "@mui/material/styles";
import {rowHeight, StripedDataGrid} from "../StripedDataGrid";
import {CustomPagination} from "../CustomPagination";
import {
    Avatar, Dialog,
    DialogContent,
    LinearProgress,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {CustomNoResultOverlay} from "../CustomNoResultOverlay";
import * as React from "react";
import {useEffect, useState} from "react";
import {usePersonnelNotesDataGridColums} from "./usePersonnelNotesDataGridColums";
import {
    FindAllPersonnelNotesPagedDocument,
    PaginationInput,
    PrivilegesEnum,
} from "../../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import {useQuery} from "@apollo/client";
import {Note, Share} from "@mui/icons-material";
import AllOutIcon from "@mui/icons-material/AllOut";
import {PersonnelCreateNoteDialogue} from "./PersonnelCreateNoteDialogue";
import {PersonelCard} from "../../PersonelCard";
import {useHasAuthorities} from '../../../../security/useHasAuthoritie'
export const PersonnelNotesSuperUserDataGrid = () => {

    const {
        columns, setSearchParams, searchParams, selectedPersonnel, setSelectedPersonnel,
        personnelNoteDialogueOpen, setPersonnelNoteDialogueOpen , setPersonnelDetailsDialogueOpen , personnelDetailsDialogueOpen,
        selectedNote , setSelectedNote
    } = usePersonnelNotesDataGridColums()
    const user = useSelector(selectLoggedInUser)

    const [rowCount, setRowCount] = useState(0);
    const [page, setPage] = useState<PaginationInput>({pageSize: 10, pageNumber: 0});

    const {data: allNotes, loading, error, refetch} = useQuery(FindAllPersonnelNotesPagedDocument,
        {
            variables: {pageable: page, searchParams: searchParams}
        })

    useEffect(() => {
        if (allNotes) {
            setRowCount(allNotes?.findAllPersonnelNotesPaged?.totalElements)
        }
    }, [allNotes]);

    useEffect(() => {
        refetch().then((r) => null)
    }, [refetch, searchParams]);

    const canSeeAll = useHasAuthorities(PrivilegesEnum.PersonnelNotesSeeAll);
    console.log('can see all' + canSeeAll)

    return (
        <Stack
            spacing={1}
            padding={1}
        >
            <Stack
                direction={'row'}
                spacing={1}
            >
                <PersonnelCreateNoteDialogue
                    selectedPersonel={selectedPersonnel}
                    selectedNote={selectedNote}
                    setNoteDialogueOpen={setPersonnelNoteDialogueOpen}
                    noteDialogueOpen={personnelNoteDialogueOpen}
                />

                <Dialog
                    open={personnelDetailsDialogueOpen}
                    maxWidth={'xs'}
                    fullWidth={true}
                    onClose={(e, r) => setPersonnelDetailsDialogueOpen(false)}
                >
                    <DialogContent
                        sx={{
                            padding: 0,
                            height: 900
                        }}
                    >
                        {selectedPersonnel && <PersonelCard
                            pamOff24Id={selectedPersonnel.matricule}
                            refetch={refetch}/>}
                    </DialogContent>
                </Dialog>
                <ToggleButtonGroup
                    exclusive={true}
                    onChange={(e, v) => setSearchParams((old) => ({...old, ownership: v}))}
                    value={searchParams.ownership}
                >
                    <ToggleButton value={'1'}>
                        <Stack alignItems={'center'}>
                            <Avatar sx={{bgcolor: (theme) => theme.palette.warning.light}}>
                                <Note></Note>
                            </Avatar>
                            <Typography>owner</Typography>
                        </Stack>
                    </ToggleButton>
                    <ToggleButton value={'2'}>
                        <Stack alignItems={'center'}>
                            <Avatar sx={{bgcolor: (theme) => theme.palette.warning.light}}>
                                <Share></Share>
                            </Avatar>
                            <Typography>shared</Typography>
                        </Stack>
                    </ToggleButton>
                    {
                        canSeeAll.hasAthoritie && <ToggleButton value={'3'}>
                            <Stack alignItems={'center'}>
                                <Avatar sx={{bgcolor: (theme) => theme.palette.warning.light}}>
                                    <AllOutIcon></AllOutIcon>
                                </Avatar>
                                <Typography>privilege</Typography>
                            </Stack>
                        </ToggleButton>
                    }
                    <ToggleButton value={'4'}>
                        <Stack alignItems={'center'}>
                            <Avatar sx={{bgcolor: (theme) => theme.palette.warning.light}}>
                                <Typography>T</Typography>
                            </Avatar>
                            <Typography>tout</Typography>
                        </Stack>
                    </ToggleButton>
                </ToggleButtonGroup>
                <TextField
                    value={searchParams.searchToken}
                    onChange={(e) => setSearchParams((old) => ({...old, searchToken: e.target.value}))}
                ></TextField>
            </Stack>
            <Stack sx={{height: 'calc(100vh - 200px)'}}>
                <StripedDataGrid
                    rows={
                        // @ts-ignore
                        allNotes?.findAllPersonnelNotesPaged?.content
                        && allNotes?.findAllPersonnelNotesPaged?.content?.length > 0 ?
                            allNotes?.findAllPersonnelNotesPaged?.content : []
                    }
                    density={'standard'}
                    columns={columns}
                    error={error}
                    loading={loading}
                    autoPageSize={true}
                    paginationModel={{
                        page: page.pageNumber,
                        pageSize: page.pageSize
                    }}
                    onPaginationModelChange={(model, details) => {
                        setPage((old) => ({...old, pageSize: model.pageSize, pageNumber: model.page}))
                    }}

                    getRowId={(row) => row?.id}
                    paginationMode={'server'}
                    sortingMode={'server'}
                    rowCount={rowCount}
                    disableSelectionOnClick={true}
                    sx={{
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                        '& .MuiDataGrid-cell': {
                            // backgroundColor: (theme : Theme) => theme.palette.background.default,
                            borderColor: (theme: Theme) => theme.palette.divider
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            // backgroundColor: (theme : Theme) => theme.palette.background.default,
                            borderColor: (theme: Theme) => theme.palette.divider
                        },
                        '& .MuiDataGrid-footerContainer': {
                            // backgroundColor: (theme : Theme) => theme.palette.background.default,
                            borderColor: (theme: Theme) => theme.palette.divider
                        },
                        '& .super-app-theme--header': {
                            backgroundColor: '#121212',
                        },
                    }}
                    rowHeight={rowHeight}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                    // getCellClassName{(params) => 'allCels'}
                    slots={{
                        pagination: CustomPagination,
                        loadingOverlay: LinearProgress,
                        noRowsOverlay: CustomNoResultOverlay
                    }}
                    slotsProps={{
                        loadingOverlay: {
                            pageSize: page.pageSize
                        }
                    }}
                />
            </Stack>
        </Stack>
    )
}
