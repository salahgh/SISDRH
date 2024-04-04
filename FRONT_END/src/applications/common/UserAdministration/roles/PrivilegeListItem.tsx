import {PrivilegeDto} from "../../../../redux/mainApi";
import {Avatar, IconButton, ListItemButton, ListItemText, Typography} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import {green} from "@mui/material/colors";
import {DeleteForever} from "@mui/icons-material";
import {selectSelectedUser} from "../../../../redux/features/userAdministration/userAdministrationSlice";
import {useSelector} from "react-redux";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications";

export function PrivilegeListItem(
    {
        selectedPrivilege,
        privilege,
        tileVariant,
        displayId,
        handleDelete
    } :
        {
            selectedPrivilege?: PrivilegeDto | null,
            privilege: {
                __typename?: 'Privilege',
                id?: any | null,
                description?: string | null,
                name?: string | null
            } | null,
            handleSelectPrivilege?: Dispatch<SetStateAction<PrivilegeDto | null>>,
            tileVariant?: string,
            displayId?: boolean,
            handleDelete?: any
        }
) {

    // todo delete icon displayed only when hovered

    const matricule: string = useSelector(selectSelectedUser)

    const {handleShowErrorSnackBar, handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar} = useSnackBarNotifications()

    // @ts-ignore

    return (
        <ListItemButton
            sx={{margin: 0.3, bgcolor: '#e8e8e8', borderRadius: 3}}
            selected={selectedPrivilege == privilege}
        >
            <Avatar
                sx={{
                    bgcolor: green["300"]
                }}
            >
                P
            </Avatar>
            <ListItemText
                sx={{marginLeft: 2, overflow: 'auto'}}
                // @ts-ignore
                primary={<Typography variant={tileVariant ? tileVariant : 'h6'}>{privilege.name}</Typography>}
                secondary={displayId && privilege?.id}
            >
            </ListItemText>
            <IconButton
                sx={{width: 50, height: 50}}
                onClick={() => handleDelete(privilege)}
            >
                <DeleteForever sx={{color: '#d22f2f', width: 40, height: 40}}/>
            </IconButton>
        </ListItemButton>
    )
}
