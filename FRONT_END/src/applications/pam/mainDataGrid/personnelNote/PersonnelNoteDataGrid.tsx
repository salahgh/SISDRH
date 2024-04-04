import {Theme} from "@mui/material/styles";
import {rowHeight, StripedDataGrid} from "../StripedDataGrid";
import {CustomPagination} from "../CustomPagination";
import {Dialog, DialogContent, LinearProgress, Stack} from "@mui/material";
import {CustomNoResultOverlay} from "../CustomNoResultOverlay";
import {useQuery} from "@apollo/client";
import {
    FindPersonnelNotesByUserDocument,
    PaginationInput
} from "../../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import {useEffect, useState} from "react";
import {usePersonnelNotesDataGridColums} from "./usePersonnelNotesDataGridColums";
import {PersonnelCreateNoteDialogue} from "./PersonnelCreateNoteDialogue";
import {PersonelCard} from "../../PersonelCard";
import { Pam2024DataGrid } from "../Pam2024DataGrid.tsx";

export const PersonnelNoteDataGrid = () => {

    const user = useSelector(selectLoggedInUser)

    const [page, setPage] = useState<PaginationInput>({ pageSize: 20, pageNumber: 0 });
    const [rowCount, setRowCount] = useState(0);

    const { data: notesByUser, loading: loadingNotesByUser, error: errorNotesByUser, refetch: refetchNotesByUser }
      = useQuery(FindPersonnelNotesByUserDocument, {
        variables: {
            userId: user?.matricule, pageable: page
        }
    })

    const {
        columns,
        selectedPersonnel,
        selectedNote,
        setPersonnelNoteDialogueOpen,
        personnelNoteDialogueOpen,
        personnelDetailsDialogueOpen,
        setPersonnelDetailsDialogueOpen,
    } = usePersonnelNotesDataGridColums()

    useEffect(() => {
        if (notesByUser) {
            setRowCount(notesByUser?.findPersonnelNotesByUser?.totalElements)
        }
        return () => {
        };
    }, [notesByUser]);

    useEffect(() => {
        refetchNotesByUser()
    }, [refetchNotesByUser]);


    return (
      <Stack style={{ height: 'calc(100vh - 65px)' }}>
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
                    refetch={() => null}
                  />}
              </DialogContent>
          </Dialog>

          <StripedDataGrid
            rows={
                // @ts-ignore
                notesByUser?.findPersonnelNotesByUser?.content
                && notesByUser?.findPersonnelNotesByUser?.content?.length > 0 ?
                  notesByUser?.findPersonnelNotesByUser?.content : []
            }
            density={'standard'}
            columns={columns}
            error={errorNotesByUser}
            loading={loadingNotesByUser}
            autoPageSize={true}
            paginationModel={{
                page: page.pageNumber,
                pageSize: page.pageSize
            }}
            onPaginationModelChange={(model, details) => {
                setPage((old) => ({ ...old, pageSize: model.pageSize, pageNumber: model.page }))
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
    )

}
