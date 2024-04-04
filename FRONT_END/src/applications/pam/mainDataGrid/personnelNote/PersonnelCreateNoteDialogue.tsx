import {Button, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography} from "@mui/material";
import {PersonnelCreateNoteForm} from "./PersonnelCreateNoteForm";
import * as React from "react";
import {useDispatch,} from "react-redux";
import {Close} from "@mui/icons-material";

export const PersonnelCreateNoteDialogue = ({
                                                selectedPersonel,
                                                setNoteDialogueOpen,
                                                noteDialogueOpen,
                                                selectedNote
                                            }) => {

    const dispatch = useDispatch()

    return (
        <Dialog
            open={noteDialogueOpen}
            maxWidth={'xl'}
            fullWidth={true}
            onClose={(e, r) => setNoteDialogueOpen(false)}
        >
            <DialogTitle bgcolor={theme => theme.palette.warning.main}>
                <Stack direction={'row'} alignItems={'center'}>
                    <Typography variant={'h5'} fontWeight={'bold'}> الملاحظات </Typography>
                    <Stack flex={1}></Stack>
                    <IconButton onClick={() => setNoteDialogueOpen(false)}>
                        <Close sx={{ height : 35 }}/>
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent
                sx={{
                    padding: 0,
                    height: 1000
                }}
            >
                <PersonnelCreateNoteForm
                    selectedPersonel={selectedPersonel}
                    setNoteDialogueOpen={setNoteDialogueOpen}
                    noteDialogueOpen={noteDialogueOpen}
                    initialSelectedNote={selectedNote}
                />
            </DialogContent>
        </Dialog>
    )
}
