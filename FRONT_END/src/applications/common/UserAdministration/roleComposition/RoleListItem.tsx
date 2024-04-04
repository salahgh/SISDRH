import {Avatar, IconButton, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import {AddCircleOutline, DeleteForever} from "@mui/icons-material";
import {Dispatch, SetStateAction} from "react";
import {red} from "@mui/material/colors";
import {ListItemProps} from "@mui/material/ListItem/ListItem";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications";

export interface RoleListItemProps {
    role: {
        __typename?: 'Role',
        id?: any | null,
        description?: string | null,
        name?: string | null,
        privileges?: Array<{
            __typename?: 'Privilege',
            name?: string | null,
            description?: string | null,
            id?: any | null
        } | null> | null
    } | null,
    isSelected?: boolean,
    setSelectedRoleId?: Dispatch<SetStateAction<String | null | undefined>>,
    setTransferListOpen?: Dispatch<SetStateAction<boolean>>,
    displayId?: boolean,
    bgcolor?: string,
    listItemProps?: ListItemProps
}

export function RoleListItem(
    {
        role,
        isSelected,
        setSelectedRoleId,
        setTransferListOpen,
        displayId,
        bgcolor,
    }: RoleListItemProps
) {

    const {handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar} = useSnackBarNotifications()

    return (
        <ListItemButton
            selected={isSelected}
            sx={{margin: 0.3, bgcolor: bgcolor ? bgcolor : '#e8e8e8', borderRadius: 8}}
            onClick={() => setSelectedRoleId && setSelectedRoleId(role?.id)}
        >
            <Avatar
                sx={{
                    bgcolor: red["300"],
                    transform: 'translate(5)'
                }}
            >
                R
            </Avatar>
            <ListItemText
                sx={{paddingLeft: 2}}
                primary={
                    <Typography
                        variant={'h6'}
                    >
                        {role?.name}
                    </Typography>
                }
                secondary={displayId && role?.id}
            >
            </ListItemText>
            {
                setTransferListOpen &&
                <IconButton onClick={() => setTransferListOpen(true)}>
                    <AddCircleOutline sx={{fontSize: 35}}>
                    </AddCircleOutline>
                </IconButton>
            }
            <IconButton
                sx={{width: 50, height: 50}}
                // onClick={() => handleDelete(role)}
            >
                <DeleteForever sx={{color: '#d22f2f', width: 40, height: 40}}/>
            </IconButton>
        </ListItemButton>
    );
}