import {FindPersonnelNotesByUserQuery} from "../../../../_generated_gql_/graphql";
import {Avatar, ButtonBase, ListItem, ListItemAvatar, ListItemText, Stack, Typography} from "@mui/material";
import {Note, Share} from "@mui/icons-material";
import {Theme} from "@mui/material/styles";
import GradeAvatar from "../../../rh/GradeAvatar";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import AllOutIcon from "@mui/icons-material/AllOut";
import {usePersonnelNotesDataGridState} from "./usePersonnelNotesDataGridState";
import {useState} from "react";
import AvatarPhoto from "../../../common/UserAdministration/AvatarPhoto";
import { parseAndFormatDate } from "../../../common/utilities/utilities";
import { HighlitedTypography } from "../../../common/components/HighlitedTypography";
import { Matricule } from "../../../common/components/Matricule";

export const usePersonnelNotesDataGridColums = () => {

    const loggedInUser = useSelector(selectLoggedInUser)
    const [selectedPersonnel, setSelectedPersonnel] = useState(null);
    const [personnelDetailsDialogueOpen, setPersonnelDetailsDialogueOpen] = useState(false);

    const {
        searchParams, setSearchParams,
        selectedNote, setSelectedNote,
        personnelNoteDialogueOpen, setPersonnelNoteDialogueOpen
    } = usePersonnelNotesDataGridState()

    const columns = [
        {
            field: 'matricule',
            headerName: 'تاريخ الانشاء',
            width: 260,
            renderCell: ({row}: { row: FindPersonnelNotesByUserQuery["findPersonnelNotesByUser"]["content"][0] }) => (
                <ButtonBase
                    onClick={() => {
                        setSelectedNote(row)
                        setSelectedPersonnel(row?.pamOff2024)
                        setPersonnelNoteDialogueOpen(true)
                    }}
                >
                    <ListItem direction={'row'} spacing={1} alignItems={'center'}>
                        <ListItemAvatar>

                            <Avatar sx={{
                                bgcolor: (theme: Theme) => theme?.palette.warning.light
                            }}>
                                {
                                    row?.user.personnel.matricule === loggedInUser.matricule ? <Note></Note> :
                                        row?.authorizedUsers.find((user) => user.id === loggedInUser.matricule) ?
                                            <Share></Share> : <AllOutIcon/>
                                }
                            </Avatar>

                        </ListItemAvatar>
                        <ListItemText
                            primary={parseAndFormatDate(row?.dateCreation)}
                        ></ListItemText>
                    </ListItem>
                </ButtonBase>
            ),
        },
        {
            field: 'noma',
            headerName: 'المعني',
            width: 300,
            renderCell: ({row}: { row: FindPersonnelNotesByUserQuery["findPersonnelNotesByUser"]["content"][0] }) => (
                <ListItem sx={{textAlign: 'left'}}>
                    <ListItemAvatar>
                        <ButtonBase onClick={() => {
                            setSelectedPersonnel(row?.pamOff2024)
                            setPersonnelDetailsDialogueOpen(true)
                        }}>
                            <AvatarPhoto
                                matricule={row?.pamOff2024.matricule}
                                imageSize={2100}
                                avatarVariant={'rounded'}
                                borderRadius={3}
                                size={50}
                            />
                        </ButtonBase>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Stack direction={'row'} spacing={1}>
                                <GradeAvatar
                                    gradeId={row?.pamOff2024.personnel.grade.grade}
                                    armeId={row?.pamOff2024?.arme}
                                    width={60}
                                ></GradeAvatar>
                                <HighlitedTypography
                                    text={
                                        row?.pamOff2024.noma + " "
                                        + row?.pamOff2024.pnoma
                                    }
                                    highlight={searchParams.searchToken}
                                />
                            </Stack>
                        }
                        secondary={<Matricule
                            highlight={searchParams.searchToken}
                            matricule={row?.pamOff2024.matricule}
                        />}
                    >
                    </ListItemText>
                </ListItem>
            ),
        },
        {
            field: 'dfd',
            headerName: 'صاحب الملاحظة',
            width: 260,
            renderCell: ({row}: { row: FindPersonnelNotesByUserQuery["findPersonnelNotesByUser"]["content"][0] }) => (
                <ButtonBase onClick={() => {
                    setSelectedPersonnel(row?.user.personnel)
                    setPersonnelDetailsDialogueOpen(true)
                }}>
                    <ListItem sx={{textAlign: 'right'}}>
                        <ListItemAvatar>
                            <AvatarPhoto
                                matricule={row?.user.personnel.matricule}
                                imageSize={2100}
                                avatarVariant={'rounded'}
                                borderRadius={3}
                                size={50}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Stack direction={'row'} spacing={1}>
                                    <GradeAvatar
                                        gradeId={row?.user.personnel.grade.grade}
                                        armeId={row?.user?.personnel.arme.id}
                                        width={60}
                                    ></GradeAvatar>
                                    <HighlitedTypography text={
                                        row?.user.personnel.noma + " "
                                        + row?.user.personnel.pnoma
                                    }
                                        highlight={searchParams.searchToken}
                                    />
                                </Stack>
                            }
                            secondary={<Matricule highlight={searchParams.searchToken} matricule={row?.user.id}/>}
                        >
                        </ListItemText>
                    </ListItem>
                </ButtonBase>
            ),
        },
        {
            field: 'kjhuh',
            headerName: 'المرخص لهم بالإطلاع على الملاحظة',
            width: 300,
            renderCell: ({row}: { row: FindPersonnelNotesByUserQuery["findPersonnelNotesByUser"]["content"][0] }) => (
                <Stack direction={'row'} spacing={1} overflow={'auto'}>
                    {
                        (row?.user.personnel.matricule === loggedInUser.matricule ||
                            !row?.authorizedUsers.find((user) => user.id === loggedInUser.matricule)) && row?.authorizedUsers.map((user) => {
                            return (
                                <AvatarPhoto
                                    matricule={user?.id}
                                    imageSize={2100}
                                    avatarVariant={'circular'}
                                    borderRadius={3}
                                    size={50}
                                />
                            )
                        })
                    }
                </Stack>
            ),
        },
        {
            field: 'kjhdfuh',
            headerName: 'الملاحظة',
            width: 600,
            renderCell: ({row}: { row: FindPersonnelNotesByUserQuery["findPersonnelNotesByUser"]["content"][0] }) => (
                <Typography overflow={'auto'}>{row?.observation}</Typography>
            ),
        }
    ]

    return {
        columns,
        searchParams,
        setSearchParams,
        selectedPersonnel,
        setSelectedPersonnel,
        personnelNoteDialogueOpen,
        setPersonnelNoteDialogueOpen,
        personnelDetailsDialogueOpen,
        setPersonnelDetailsDialogueOpen,
        setSelectedNote, selectedNote
    }

}
