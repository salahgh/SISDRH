import {useState} from "react";
import {PaginationInput, PersonnelNoteSearchParamsInput} from "../../../../_generated_gql_/graphql";


export const usePersonnelNotesDataGridState = () => {

    const [searchParams, setSearchParams] = useState<PersonnelNoteSearchParamsInput>({ownership: '4', searchToken: ''});
    const [selectedNote, setSelectedNote] = useState(null);
    const [personnelNoteDialogueOpen, setPersonnelNoteDialogueOpen] = useState(false);

    return{
        searchParams , setSearchParams,
        selectedNote , setSelectedNote ,
        personnelNoteDialogueOpen , setPersonnelNoteDialogueOpen,
    }
}
