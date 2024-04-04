import {Avatar, IconButton, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Theme} from "@mui/material/styles";
import {Delete, Note, Share} from "@mui/icons-material";
import {animated, useSpring} from 'react-spring'
import {useState} from "react";
import {FindPersonnelNotesByUserAndPersonnelQuery} from "../../../../_generated_gql_/graphql";
import AllOutIcon from "@mui/icons-material/AllOut";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import { parseAndFormatDate } from "../../../common/utilities/utilities.ts";
import AvatarPhoto from "../../../common/UserAdministration/AvatarPhoto.tsx";

interface PersonnelNoteListItem {
    note,
    setSelectedNote ,
    selectedNote: FindPersonnelNotesByUserAndPersonnelQuery["findPersonnelNotesByUserAndPersonnel"][0],
    index,
    handleDeleteNote,
    handleNoteSelectionChange : (noteId) => void
}

export const PersonnelNoteListItem = (props: PersonnelNoteListItem) => {

    const {
        selectedNote ,
        setSelectedNote ,
        handleDeleteNote ,
        index ,
        note,
    } = props

    const srpings = useSpring({
        from: {opacity: 0, transform: 'translateY(50px)'},
        to: {opacity: 1, transform: 'translateY(0)'},
        config: {duration: 150},
        delay: (index + 1) * 60,
    });

    const [hovered, setHovered] = useState(false);
    const loggedInUser = useSelector(selectLoggedInUser)

    return (
        <animated.div style={srpings}>
            <ListItemButton
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={() => {
                    // handleNoteSelectionChange(note.id)
                    setSelectedNote(note)
                }}
                selected={note?.id === selectedNote?.id}
            >
                <ListItemAvatar>
                    {
                        !hovered ?
                            <Avatar sx={{
                                bgcolor: (theme: Theme) => theme?.palette.warning.light
                            }}>
                                {/*<Note sx={{*/}
                                {/*    bgcolor: (theme: Theme) => theme?.palette.warning.light*/}
                                {/*}}>*/}

                                {/*</Note>*/}
                                {
                                    note.user.id === loggedInUser.matricule ? <Note></Note> :
                                        note?.authorizedUsers.find((user) => user.personnel.matricule === loggedInUser.matricule) ?
                                            <Share></Share> : <AllOutIcon/>
                                }
                            </Avatar> :
                            <Avatar>
                                <IconButton onClick={() => handleDeleteNote(note?.id)}>
                                    <Delete sx={{width: 35, height: 35}} color={'error'}></Delete>
                                </IconButton>
                            </Avatar>
                    }
                </ListItemAvatar>
                <ListItemText
                    primary={parseAndFormatDate(note?.dateCreation)}
                    secondary={note?.user?.matricule}
                ></ListItemText>
                {
                   note?.user.id !== loggedInUser.matricule && <ListItemIcon>
                        <AvatarPhoto matricule={note.user.id} imageSize={2200} size={50}/>
                    </ListItemIcon>
                }
                {
                    (note?.user.id == loggedInUser.matricule) && note?.authorizedUsers.length > 0
                    && <Share color={'warning'} sx={{ marginRight : 2 }}/>
                }
            </ListItemButton>
        </animated.div>
    )
}
