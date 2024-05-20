import { List, Paper } from "@mui/material";
import { FindPersonnelNotesByUserAndPersonnelQuery } from "../../../../_generated_gql_/graphql";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../redux/features/auth/userSlice";
import { NoteAdd } from "@mui/icons-material";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import { PersonnelNoteListItem } from "./PsersonnelNoteListItem";
import { FormDialogue } from "../../../common/components/dialogs/FormDialogue.tsx";

export const PersonnelNoteList = ({
  handleDeleteNote,
  setSelectedNote,
  selectedNote,
  notes,

  handleAddPersonnelNote,
  loading,
  handleNoteSelectionChange,
}: {
  notes: FindPersonnelNotesByUserAndPersonnelQuery;
  personnel: any;
  selectedNote: any;
  setSelectedNote: any;
  handleAddPersonnelNote: any;
  loading: boolean | undefined;
  handleDeleteNote: (id: number) => void;
  handleNoteSelectionChange: (noteId) => void;
}) => {
  const loggedInUser = useSelector(selectLoggedInUser);
  const [createNoteOpen, setCreateNoteOpen] = useState(false);

  let tmpArrary: FindPersonnelNotesByUserAndPersonnelQuery["findPersonnelNotesByUserAndPersonnel"];
  if (notes) {
    tmpArrary = Array.from(notes?.findPersonnelNotesByUserAndPersonnel);
  }

  //todo updated the selectedUsers whene deleting a user or use the authorizedUsers directly to keep
  // the server state and the client state in sync
  // todo for the selected users list the available users are loaded when the dialogue is opened use lazy query to delay
  // the loading of the list of users

  const sortedNotes: FindPersonnelNotesByUserAndPersonnelQuery["findPersonnelNotesByUserAndPersonnel"] =
    tmpArrary?.sort((a, b) => {
      if (a?.user?.id === b?.user?.id) {
        return a?.dateCreation < b?.dateCreation;
      } else {
        if (a?.user?.id === loggedInUser.matricule) return false;
      }
      return true;
    });

  return (
    <Paper sx={{ overflow: "auto", height: "100%", padding: 1 }}>
      <FormDialogue
        open={createNoteOpen}
        setOpen={setCreateNoteOpen}
        title={"create a note"}
        content={<div> create a note </div>}
        fullWidth={true}
        maxWidth={"md"}
        padding={10}
      />
      {notes?.findPersonnelNotesByUserAndPersonnel?.length > 0 ? (
        <LoadingButton
          loading={loading}
          color={"warning"}
          startIcon={<NoteAdd sx={{ width: 35, height: 35 }} />}
          onClick={handleAddPersonnelNote}
          variant={"contained"}
          fullWidth={true}
          sx={{ padding: 1 }}
        >
          {" "}
          ajouter une note{" "}
        </LoadingButton>
      ) : null}
      <List>
        {sortedNotes?.map((item, index) => {
          return (
            <PersonnelNoteListItem
              handleDeleteNote={handleDeleteNote}
              note={item}
              setSelectedNote={setSelectedNote}
              selectedNote={selectedNote}
              index={index}
              handleNoteSelectionChange={handleNoteSelectionChange}
            />
          );
        })}
      </List>
    </Paper>
  );
};
