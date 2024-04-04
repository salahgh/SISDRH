import {useState} from "react";
import {SortingFieldsInterface} from "./types";
import {Direction, PaginationInput, PamOff2024} from "../../../_generated_gql_/graphql";
import {getSort} from "./StripedDataGrid";


export const usePam2024DataGridState = () => {

    let tmp: PamOff2024 = {
        libArmeAr: null,
        fonction: null,
        csn: null,
        matricule: null,
        g: null,
        noma: null,
        pnoma: null,
        ens: null,
        dureeS: null,
        dureeN: null,
    }

    const [sortingFields, setSortingFields] = useState<SortingFieldsInterface[]>(
        Object.keys(tmp).map((item): SortingFieldsInterface => {
            return {
                lib: item, id: item, direction: Direction.Asc
            }
        })
    )

    const [page, setPage] = useState<PaginationInput>({
        pageNumber: 0,
        pageSize: 5,
        sort: getSort(sortingFields)
    });

    const [avatarEditorDialogueOpen, setAvatarEditorDialogueOpen] = useState(false);
    const [personelCardOpen, setPersonelCardOpen] = useState<boolean>(false);
    const [selectedPersonel, setSelectedPersonel] = useState<PamOff2024 | null | undefined>(null);
    const [noteDialogueOpen, setNoteDialogueOpen] = useState<boolean>(false);
    const [reportDialogOpen, setReportDialogOpen] = useState<boolean>(false);
    const [rowCount, setRowCount] = useState(0);
    const [photoEditorDialogueOpen, setPhotoEditorDialogueOpen] = useState(false);


    return {
        page, setPage,
        avatarEditorDialogueOpen, setAvatarEditorDialogueOpen,
        personelCardOpen, setPersonelCardOpen,
        selectedPersonel, setSelectedPersonel,
        noteDialogueOpen, setNoteDialogueOpen,
        reportDialogOpen, setReportDialogOpen ,
        sortingFields , rowCount , setRowCount,
        photoEditorDialogueOpen , setPhotoEditorDialogueOpen
    }

}
