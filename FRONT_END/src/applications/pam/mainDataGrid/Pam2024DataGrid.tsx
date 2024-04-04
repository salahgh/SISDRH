import * as React from "react";
import {useEffect} from "react";
import {PamOff2024} from "../../../_generated_gql_/graphql";
import {GridColDef,} from "@mui/x-data-grid";
import {
    Avatar,
    Box,
    Chip,
    Dialog,
    DialogContent,
    LinearProgress,
    ListItem, ListItemAvatar,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {FilterForm} from "./FilterForm";
import {directeur} from "../../../redux/RtkQueryApis/constants";
import {PostChip} from "../PostChip";
import {SudChip} from "../SudChip";
import {PersonelCard} from "../PersonelCard";
import {ArrowBack} from "@mui/icons-material";
import {DemandeRadiatioinChip} from "../DemandeRadiatioinChip";
import {RetretableChip} from "../RetretableChip";
import {StructureTreeView} from "../StructureTreeView";
import {PamChip} from "../PamChip";
import {FormationChip} from "../FormationChip";
import {Theme} from "@mui/material/styles";
import {CustomPagination} from "./CustomPagination";
import {useSelector} from "react-redux";
import {selectFilteringFields} from "../../../redux/features/pam/pamSlice";
import {CustomNoResultOverlay} from "./CustomNoResultOverlay";
import {rowHeight, StripedDataGrid} from "./StripedDataGrid";
import '../../../index.css';
import {PamDataGridAvatarPhoto} from "./PamDataGridAvatarPhoto";
import {PersonnelCreateNoteDialogue} from "./personnelNote/PersonnelCreateNoteDialogue";
import {usePam2024DataGridState} from "./usePam2024DataGridState";
import {usePam2024DataGridDataService} from "./usePam2024DataGridDataService";
import {ActionsCell} from "./ActionSell";
import FormationMilitaireChip from "../FormationMilitaireChip";
import FormationCivileChip from "../FormationCivileChip";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";
import { AvatarEditorDialog } from "../../common/components/AvatarEditorDialog.tsx";
import { downloadPhoto, highlightSearchTokenWithSpan } from "../../common/utilities/tools.ts";
import { Matricule } from "../../common/components/Matricule.tsx";
import { ArmeAvatar } from "../../rh/ArmeAvatar.tsx";
import GradeAvatar from "../../rh/GradeAvatar.tsx";
import { ThumbnailsPreview } from "../../rh/ThumbnailsPreview.tsx";
import { PhotoEditorDialogue } from "../../rh/photoEditor/PhotoEditorDialogue.tsx";


// todo implment table theme cosimization or theme creator functionality


export const Pam2024DataGrid = () => {

    // todo review the use of redux typscript

    const filteringFields = useSelector(selectFilteringFields)

    const {
        page, setPage,
        selectedPersonel, setSelectedPersonel,
        avatarEditorDialogueOpen, setAvatarEditorDialogueOpen,
        rowCount, setRowCount,
        noteDialogueOpen, setNoteDialogueOpen,
        setPersonelCardOpen, personelCardOpen,
        photoEditorDialogueOpen, setPhotoEditorDialogueOpen
    } = usePam2024DataGridState()

    const {pam2024, refetch, loading, error, handleSubmit} = usePam2024DataGridDataService(page)

    const {handleShowInfoSnackBar} = useSnackBarNotifications()

    // useEffect(() => {
    //     console.log('page effect')
    //     console.log(page)
    //     setPage((old) => {
    //         const tmp: PaginationInput = {
    //             ...page, sort: getSort(sortingFields)
    //         }
    //         return tmp
    //     })
    // }, [page , getSort]);

    useEffect(() => {
        console.log('pam effect')
        if (pam2024) {
            setRowCount(pam2024?.findPam2024?.totalElements)
        }
    }, [pam2024, setRowCount]);

    const handleAvatarClicked = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, altKeyPressed, hovered, row) => {
        if (e.ctrlKey) {
            setSelectedPersonel(row)
            setAvatarEditorDialogueOpen(true)
        }
        if (altKeyPressed && hovered) {
            downloadPhoto(row?.matricule).then((r) => handleShowInfoSnackBar(
                "success"
            ))
        }
    }

    const columns: GridColDef[] = [
        {
            field: 'matricule',
            headerName: '',
            width: 100,
            renderCell: ({row}: { row: PamOff2024 }) => (
                <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <PamDataGridAvatarPhoto
                        onClick={(e, altKeyPressed, hovered) => handleAvatarClicked(e, altKeyPressed, hovered, row)}
                        row={row}
                        size={48}
                        handleDoubleClick={() => {
                            setSelectedPersonel(row)
                            setPhotoEditorDialogueOpen(true)
                        }}
                    />
                    {

                        row.demandeRadiations?.length !== 0 && <DemandeRadiatioinChip/>
                    }
                    {
                        row?.matricule !== directeur && <RetretableChip matricule={row?.matricule}></RetretableChip>
                    }
                </Stack>
            ),
        },
        {
            field: 'noma',
            headerName: 'الإسم و اللقب',
            width: 150,
            renderCell: ({row}: { row: PamOff2024 }) => (
                <ListItem sx={{textAlign: 'right'}}>
                    <ListItemText
                        primary={
                            <Typography
                                fontWeight={'bold'}
                                style={{
                                    width: '100%'
                                }}
                            >
                        <span
                            dangerouslySetInnerHTML={highlightSearchTokenWithSpan(row?.noma + " " + row?.pnoma, filteringFields.searchToken)}/>
                            </Typography>}
                        secondary={<Matricule matricule={row?.matricule} highlight={filteringFields.searchToken}/>}>
                    </ListItemText>
                </ListItem>
            ),
        },
        {
            field: 'grade',
            headerName: '',
            width: 130,
            renderCell: ({row}: { row: PamOff2024 }) => (

                    <Stack
                        width={'100%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        direction={'row'}
                        spacing={0.5}
                        flex={1}
                    >
                        <GradeAvatar
                            gradeId={row?.g}
                            width={70}
                            armeId={row?.arme}
                            promotionNumber={row?.promotionNumber}/>
                        <Stack direction={'row'} justifyContent={'center'} width={80}>
                            <PostChip poste={row?.poste}></PostChip>
                        </Stack>
                        <FormationChip visible={row?.formation === 'نعم'}/>
                    </Stack>
            ),
        },
        {
            field: 'arme',
            headerName: '',
            width: 140,
            renderCell: ({row}: { row: PamOff2024 }) => (
                <Stack
                    width={'100%'}
                    height={'100%'}
                    justifyContent={'start'}
                    alignItems={'center'}
                    direction={'row'}
                    spacing={0.5}
                >
                    <ArmeAvatar armeId={row?.arme} width={46}></ArmeAvatar>
                    {
                        row?.matricule !== directeur ? <SudChip NDureeS={row?.NDureeS}/> :
                            <Typography fontWeight={'bold'} width={'100%'}>{row?.NDureeS}</Typography>
                    }
                </Stack>
            ),
        },
        {
            field: 'csn',
            headerName: 'الوظيفة',
            width: 420,
            renderCell: ({row}: { row: PamOff2024 }) => (
                <Stack
                    overflow={'auto'}
                    direction={'row'}
                    width={'100%'}
                    spacing={1}
                    padding={1}
                >
                    <Typography fontWeight={'bold'}>
                        {row?.structureSn?.runite?.abreviationAr + "/" + row?.structureSn?.runite?.regionMilitaire?.libAbrRegionAr}
                    </Typography>
                    <ArrowBack></ArrowBack>
                    <Typography>
                        {row?.fonction}
                    </Typography>
                </Stack>
            ),
        },
        // {
        //     field: 'dureeN',
        //     headerName: 'الأقدمية في الوحدة',
        //     width: 90,
        //     renderCell: ({row}: { row: PamOff2024 }) => (
        //         <Stack
        //             // justifyContent={}
        //             // alignItems={'center'}
        //             width={'100%'}
        //             direction={'row'}
        //             spacing={1}
        //         >
        //             <PamChip style={{visibility: row?.matricule !== directeur ? 'hidden' : 'visible'}}
        //                 dureeN={row?.dureeN}/>
        //
        //             {/*{*/}
        //             {/*    row?.personnelNotes?.length > 0 && <Note color={'warning'}></Note>*/}
        //             {/*}*/}
        //         </Stack>
        //     ),
        // },
        // {
        //     field: 'dureeNdf',
        //     headerName: 'الأقدمية في الوحدة',
        //     width: 20,
        //     renderCell: ({row}: { row: PamOff2024 }) => (
        //         <Stack
        //             // justifyContent={}
        //             // alignItems={'center'}
        //             width={'100%'}
        //             direction={'row'}
        //             spacing={1}
        //         >
        //             <Chip
        //                 style={{visibility: row?.ficheVoeuxes?.length > 0 ? 'visible' : 'hidden'}}
        //                 variant={'outlined'}
        //                 color={'secondary'}
        //                 size={'small'}
        //                 label={'FV'}>
        //             </Chip>
        //         </Stack>
        //     ),
        // },
        {
            field: 'dff',
            headerName: '',
            width: 130,
            renderCell: ({row}: { row: PamOff2024 }) => <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FormationMilitaireChip
                            width={40}
                            height={40}
                            codeDiplomeMilitaire={row?.code_dip_mil}
                            libDiplomeAr={row?.dip_mil}
                        ></FormationMilitaireChip>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography fontWeight='bold'>{row?.dipmil?.abrFr}</Typography>}
                ></ListItemText>
            </ListItem>
        },
        {
            field: 'ddff',
            headerName: '',
            width: 70,
            renderCell: ({row}: { row: PamOff2024 }) =>  <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FormationCivileChip
                            size={40}
                            codeDiplomeCivile={row?.code_dip_civ}
                            libDiplomeAr={row?.dip_civ}
                        />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={<Typography>{row?.dipcivil?.abrFr}</Typography>}>
                </ListItemText>
            </ListItem>
        },
        {
            field: 'df',
            headerName: '',
            width: 300,
            renderCell: ({row}: { row: PamOff2024 }) => <ActionsCell
                row={row}
                setSelectedPersonel={setSelectedPersonel}
                setNoteDialogueOpen={setNoteDialogueOpen}
                setPersonelCardOpen={setPersonelCardOpen}
            />
        }
    ]

    // todo error state for the datagrid componenet not working

    return (
        <Stack
            sx={{width: '100%', height: '100%'}}
            padding={1}
            spacing={1}
        >
            <div className={'p-1'} style={{height : 200}}>
                <FilterForm handleSubmit={handleSubmit}/>
            </div>

            <AvatarEditorDialog
                open={avatarEditorDialogueOpen}
                setOpen={setAvatarEditorDialogueOpen}>
                <ThumbnailsPreview matricule={selectedPersonel?.matricule}/>
            </AvatarEditorDialog>

            <PersonnelCreateNoteDialogue
                setNoteDialogueOpen={setNoteDialogueOpen}
                noteDialogueOpen={noteDialogueOpen}
                selectedPersonel={selectedPersonel}
            >

            </PersonnelCreateNoteDialogue>

            <Dialog
                open={personelCardOpen}
                maxWidth={'xs'}
                fullWidth={true}
                onClose={(e, r) => setPersonelCardOpen(false)}
            >
                <DialogContent
                    sx={{
                        padding: 0,
                        height: 900
                    }}
                >
                    <PersonelCard
                        pamOff24Id={selectedPersonel?.matricule}
                        refetch={refetch}/>
                </DialogContent>
            </Dialog>

            <PhotoEditorDialogue
                open={photoEditorDialogueOpen}
                setOpen={setPhotoEditorDialogueOpen}
                selectedPersonnel={selectedPersonel}
            />

            <Stack direction={'row'} width={'100%'} height={'100%'}>

                <Stack height={'calc(100vh - 320px)'} width={380}>
                    <StructureTreeView/>
                </Stack>

                <StripedDataGrid
                    rows={
                        // @ts-ignore
                        pam2024?.findPam2024?.content
                        && pam2024?.findPam2024?.content?.length > 0 ?
                            pam2024?.findPam2024?.content : []
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
                    onPaginationModelChange={(model) => {
                        setPage((old) => ({...old, pageSize: model.pageSize, pageNumber: model.page}))
                    }}

                    getRowId={(row) => row?.matricule}
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

