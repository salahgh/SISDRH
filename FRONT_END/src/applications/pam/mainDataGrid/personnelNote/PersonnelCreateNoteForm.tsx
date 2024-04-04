import {
    Avatar,
    ButtonBase,
    darken,
    lighten,
    LinearProgress,
    Paper,
    Stack,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {NoteAdd, Save} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {PersonelCard} from "../../PersonelCard";
import {PersonnelNoteList} from "./PersonnelNoteList";
import {LoadingButton} from "@mui/lab";
import {Theme} from "@mui/material/styles";
import {usePersonnelNoteDataService} from "./usePersonnelNoteDataService";
import {AuthorizedUsersGrid} from "./AuthorizedUsersGrid";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { useAnimation } from "../../../common/animations/useAnimation.ts";
import { SelectUser } from "../../../common/components/SelectUser.tsx";
import { parseAndFormatDate } from "../../../common/utilities/utilities.ts";

export const PersonnelCreateNoteForm = ({
                                            selectedPersonel,
                                            setNoteDialogueOpen,
                                            noteDialogueOpen,
                                            initialSelectedNote
                                        }) => {

    const {
        notes,
        notesLoading,
        refetchNotes,
        creatingNote,
        selectUserOpen,
        setSelectUserOpen,
        selectedNote,
        setSelectedNote,
        handleAddPersonnelNote,
        handleDeleteNote,
        handleComplete,
        handleDeleteAuthorizedUser,
        noteContent,
        setNoteContent,
        selectedUsers,
        setSelectedUsers,
        handleUpdateNoteContent,
        updatingNoteContent,
        deletingNote
    } = usePersonnelNoteDataService(selectedPersonel)

    const props = useAnimation(true)
    const loggedInUser = useSelector(selectLoggedInUser)

    useEffect(() => {
        if (initialSelectedNote) {
            setSelectedNote(initialSelectedNote)
        }
    }, [initialSelectedNote]);

    useEffect(() => {
        if (selectedNote && notes) {
            setSelectedNote(notes?.findPersonnelNotesByUserAndPersonnel?.filter((note) => note.id === selectedNote.id)[0])
        } else {
            if (notes?.findPersonnelNotesByUserAndPersonnel?.length > 0 && selectedNote === null) {
                setSelectedNote(notes?.findPersonnelNotesByUserAndPersonnel?.[0])
            }
        }
    }, [notes]);

    useEffect(() => {
        if (noteDialogueOpen) {
            refetchNotes().then((r) => null)
        }
    }, [noteDialogueOpen]);

    const handleAddAuthorizedUser = () => {
        setSelectUserOpen(true)
    }

    useEffect(() => {
        setNoteContent(selectedNote?.observation ? selectedNote?.observation : '')
        setSelectedUsers(selectedNote?.authorizedUsers?.map((user) => user?.personnel?.matricule))
    }, [selectedNote]);

    const [alignment, setAlignment] = useState('left');

    if (notesLoading) return <LinearProgress sx={{width: '100%'}}/>

    return (
        <Stack
            direction={'row'}
            width={'100%'}
            height={'100%'}
        >
            <SelectUser
                open={selectUserOpen} setOpen={setSelectUserOpen} onComplete={handleComplete}
                selectedUsers={selectedUsers}
                setSelectedUsers={setSelectedUsers}
            ></SelectUser>
            <Stack flex={1.5}>
                <PersonnelNoteList
                    selectedNote={selectedNote}
                    setSelectedNote={setSelectedNote}
                    notes={notes}
                    personnel={selectedPersonel}
                    loading={creatingNote || notesLoading || deletingNote}
                    handleAddPersonnelNote={handleAddPersonnelNote}
                    handleDeleteNote={handleDeleteNote}
                ></PersonnelNoteList>
            </Stack>
            <Stack
                flex={3.5}
                spacing={1}
                padding={1}
                height={'100%'}
            >
                <Stack
                    flex={1}
                >
                    <Paper
                        sx={{
                            padding: 1, overflow: 'auto',
                            height: '100%',
                        }}
                    >
                        <Stack height={'100%'} spacing={1}>
                            <Typography> {parseAndFormatDate(selectedNote?.dateCreation)} </Typography>
                            <Stack flex={1} justifyContent={'center'} alignItems={'center'} spacing={1}
                                   sx={{
                                       borderWidth: 3,
                                       borderStyle: 'solid',
                                       bgcolor: (theme) => lighten(theme.palette.warning.light, 0.85),
                                       borderColor: (theme) => theme.palette.warning.dark,
                                       padding: 2,
                                       borderRadius: 5
                                   }}
                            >
                                {
                                    notes?.findPersonnelNotesByUserAndPersonnel?.length > 0 ?
                                        <Stack spacing={1} flex={1} width={'100%'}>
                                            <Stack direction={'row'} spacing={1}>
                                                <ToggleButtonGroup
                                                    exclusive={true}
                                                    value={alignment}
                                                    onChange={(e, value) => setAlignment(value)}
                                                >
                                                    <ToggleButton value={'left'}>
                                                        <FormatAlignRightIcon></FormatAlignRightIcon>
                                                    </ToggleButton>
                                                    <ToggleButton value={'right'}>
                                                        <FormatAlignLeftIcon></FormatAlignLeftIcon>
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            </Stack>
                                            <TextField
                                                // onFocus={(e) => console.log(e)}
                                                // onFocusCapture={(e) => console.log(e)}
                                                // onBlur={(e) => console.log(e)}
                                                // onBlurCapture={(e) => console.log(e)}
                                                style={{textAlign: alignment === 'left' ? 'left' : 'right'}}
                                                disabled={selectedNote?.user?.id !== loggedInUser.matricule}
                                                value={noteContent}
                                                onChange={(e) => setNoteContent(e.target.value)}
                                                sx={{
                                                    height: '100%', '& .MuiInputBase-root': {
                                                        height: '100%',
                                                        alignItems: 'start',
                                                        fontSize: 25
                                                    },
                                                }}
                                                multiline={true}
                                                label={'note'}
                                                fullWidth={true}
                                            ></TextField>
                                        </Stack>
                                        :
                                        <ButtonBase onClick={() => handleAddPersonnelNote()}>
                                            <Avatar sx={{
                                                width: 200, height: 200, position: 'relative',
                                                bgcolor: (theme: Theme) => {
                                                    return (
                                                        theme?.palette?.mode === 'dark' ?
                                                            darken(theme?.palette?.warning.main as string, 0.8) :
                                                            lighten(theme?.palette?.warning.main as string, 0.8)
                                                    )
                                                }
                                            }}>
                                                <NoteAdd sx={{
                                                    width: 160, height: 160, position: 'absolute',
                                                    color: (theme: Theme) => theme.palette.warning.main
                                                }}/>
                                            </Avatar>
                                        </ButtonBase>
                                }
                                {
                                    notes?.findPersonnelNotesByUserAndPersonnel?.length > 0 &&
                                    <Stack direction={'row'}>
                                        <Stack flex={1}>
                                        </Stack>
                                        <LoadingButton
                                            disabled={(selectedNote?.user?.id !== loggedInUser.matricule) ||
                                                noteContent === selectedNote?.observation
                                            }
                                            loading={updatingNoteContent || notesLoading}
                                            color={'primary'}
                                            variant={'contained'}
                                            onClick={handleUpdateNoteContent}
                                            endIcon={<Save/>}
                                        > save </LoadingButton>
                                    </Stack>
                                }
                            </Stack>
                        </Stack>
                    </Paper>
                </Stack>
                {
                    selectedNote?.user?.id === loggedInUser.matricule && notes?.findPersonnelNotesByUserAndPersonnel?.length > 0 &&
                    <AuthorizedUsersGrid
                        personnel={selectedPersonel}
                        handleAddAuthorizedUser={handleAddAuthorizedUser}
                        selectedNote={selectedNote}
                        handleDeleteAuthrizedUser={handleDeleteAuthorizedUser}
                    />
                }
            </Stack>
            <Stack flex={1.9} height={'100%'} overflow={'auto'} padding={3}>
                <PersonelCard pamOff24Id={selectedPersonel.matricule} refetch={() => null}/>
            </Stack>
        </Stack>
    )

}
