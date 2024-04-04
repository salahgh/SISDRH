import {useMutation, useQuery} from "@apollo/client";
import {
    CreatePersonnelNoteDocument,
    DeleteAuthorizedUserDocument,
    DeletePersonnelNoteDocument,
    FindPersonnelNotesByUserAndPersonnelDocument,
    PersonnelNote,
    UpdatePersonnelNoteContentDocument,
    UpdatePersonnelNoteGrantedUsersDocument
} from "../../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import {enqueueSnackbar} from "notistack";
import {useState} from "react";


export const usePersonnelNoteDataService = (personnel) => {

    const user = useSelector(
        selectLoggedInUser)

    const [selectedNote,
        setSelectedNote] = useState<PersonnelNote | null>(null);
    const [selectUserOpen,
        setSelectUserOpen] = useState(false);
    const [noteContent,
        setNoteContent] = useState<string | null>(null);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [editingNoteContent,
        setEditingNoteContent] = useState(false);

    const {
        data: notes,
        loading: notesLoading,
        error: notesError,
        refetch: refetchNotes,
        networkStatus: notesNetworkStatus
    } = useQuery(FindPersonnelNotesByUserAndPersonnelDocument, {
        variables: {
            userId: user?.matricule,
            pesonnelId: personnel?.matricule,
            includeAllNotes: true
        },
        notifyOnNetworkStatusChange: true
    })

    const [updatePerosnnelNoteGrantedUsers] = useMutation(UpdatePersonnelNoteGrantedUsersDocument, {
        refetchQueries: [{
            query: FindPersonnelNotesByUserAndPersonnelDocument, variables: {
                userId: user?.matricule,
                pesonnelId: personnel?.matricule,
                includeAllNotes: true
            }
        }],
        awaitRefetchQueries: true
    })

    const [createNote, {error: errorCreatingNote, loading: creatingNote}] =
        useMutation(CreatePersonnelNoteDocument, {
            refetchQueries: [{
                query: FindPersonnelNotesByUserAndPersonnelDocument, variables: {
                    userId: user.matricule,
                    pesonnelId: personnel?.matricule,
                    includeAllNotes: true
                }
            }],
            awaitRefetchQueries: true
        })

    const [deleteNote, {loading: deletingNote}] = useMutation(DeletePersonnelNoteDocument, {
        refetchQueries: [{
            query: FindPersonnelNotesByUserAndPersonnelDocument, variables: {
                userId: user?.matricule,
                pesonnelId: personnel?.matricule,
                includeAllNotes: true
            }
        }],
        awaitRefetchQueries: true
    })

    const [updatePersonnelNoteContent, {loading: updatingNoteContent}] = useMutation(UpdatePersonnelNoteContentDocument, {
        refetchQueries: [{
            query: FindPersonnelNotesByUserAndPersonnelDocument, variables: {
                userId: user.matricule,
                pesonnelId: personnel?.matricule,
                includeAllNotes: true
            }
        }],
        awaitRefetchQueries: true
    })

    const [deleteAuthorizedUser, {error: errorDeletingAuthorizedUser, loading: deltingAuthorizedUser}]
        = useMutation(DeleteAuthorizedUserDocument, {
        refetchQueries: [{
            query: FindPersonnelNotesByUserAndPersonnelDocument, variables: {
                userId: user?.matricule,
                pesonnelId: personnel?.matricule,
                includeAllNotes: true
            }
        }],
        awaitRefetchQueries: true
    })


    const handleComplete = (selectedUsers) => {
        console.log("handle complete")
        setSelectUserOpen(false)
        updatePerosnnelNoteGrantedUsers({
            variables: {
                PsesonnelNoteId: selectedNote?.id,
                userIds: selectedUsers
            }
        }).then((r) => enqueueSnackbar("sucess", {variant: 'success'}))
            .catch(e => enqueueSnackbar(JSON.stringify(e), {autoHideDuration: 3000, variant: 'error'}))
    }

    const handleAddPersonnelNote = () => {
        createNote({
            variables: {
                note: {
                    user: {
                        id: user.matricule,
                    },
                    pamOff2024: {
                        matricule: personnel?.matricule
                    }
                }
            }
        }).then((r) => null)
    }

    const handleNoteSelectionChange = (noteId) => {
        if (selectedNote?.observation != noteContent) alert("ddd")
        setSelectedNote(notes?.findPersonnelNotesByUserAndPersonnel?.filter((note) => note.id === noteId)[0])
    }


    const handleDeleteNote = (id: number) => {
        deleteNote({variables: {id: id}})
            .then((r) => enqueueSnackbar("success", {variant: 'success'}))
            .catch((e) => enqueueSnackbar(JSON.stringify(e), {variant: 'error'}))
    }

    const handleDeleteAuthorizedUser = (noteId, userId) => {
        deleteAuthorizedUser({
            variables: {
                noteId: noteId, userName: userId
            }
        }).then((r) => {
            enqueueSnackbar("success", {variant: 'success'})
            console.log(userId, selectedUsers)
            setSelectedUsers((old) => old.filter((item) => item.id !== userId))
        })
            .catch((e) => enqueueSnackbar(JSON.stringify(e), {variant: "error"}))
    }

    const handleUpdateNoteContent = () => {
        if (noteContent === selectedNote?.observation) return
        updatePersonnelNoteContent({
            variables: {
                personnelId: selectedNote?.id,
                noteContent: noteContent
            }
        }).then((r) => enqueueSnackbar("success", {variant: 'success'}))
            .catch((e) => enqueueSnackbar(JSON.stringify(e), {variant: 'error'}))
    }

    return ({
        notes, notesError, notesLoading, refetchNotes, updatePerosnnelNoteGrantedUsers,
        selectedNote, setSelectedNote, selectUserOpen, setSelectUserOpen,
        createNote, errorCreatingNote, creatingNote, handleAddPersonnelNote, handleComplete,
        handleDeleteNote, handleDeleteAuthorizedUser,
        noteContent, setNoteContent, selectedUsers, setSelectedUsers,
        editingNoteContent, setEditingNoteContent, updatePersonnelNoteContent,
        handleUpdateNoteContent, handleNoteSelectionChange, updatingNoteContent, notesNetworkStatus,
        deletingNote
    })


}
