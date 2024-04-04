import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {IconButton, ListItemIcon, ListItemText, MenuList} from "@mui/material";
import {DriveFileMove, Folder as FolderIcon} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../../redux/features/auth/userSlice";
import {useMutation, useQuery} from "@apollo/client";
import {
    AddOcrResultToFolderDocument,
    GetOwnedFoldersDocument,
} from "../../../../../_generated_gql_/graphql";
import {selectSelectedFolder} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import {GridSelectionModel} from "@mui/x-data-grid";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";

export default function BasicMenu({selectedPdfIds, row}:
                                      {
                                          selectedPdfIds?: GridSelectionModel | undefined,
                                          row?: any
                                      }) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const userName: string = useSelector(selectLoggedInUser).matricule
    const {handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar} = useSnackBarNotifications()
    const selectedFolder = useSelector(selectSelectedFolder)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const {data: ownedFolders, error: error_, loading} = useQuery(GetOwnedFoldersDocument, {
        variables: {
            username_: userName
        }
    })


    const data_ = ownedFolders?.ownedFolders?.filter(
        item => item?.id !== '-1'
            && item?.id !== selectedFolder?.id
            && item?.description !== 'FAVORITE'
    );
    // const newVariables: FindAllOcrResultEntityByFoldersContainingQueryVariables = {}

    const [addOcrResultsToFolder, {data, loading: addingOcrResultsLoading, error}] =
        useMutation(AddOcrResultToFolderDocument);

    function handleAddPdfToFolder(id: number) {
        addOcrResultsToFolder({
            variables: {
                folderId: id,
                ocrResultId: row?.id
            }
        }).then((result) => {
            handleShowInfoSnackBar('ajouté avec succés')
            setAnchorEl(null)
        })
            .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
    }

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <DriveFileMove sx={{
                    width: 30, height: 30, color: '#fc8f52'
                }}/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuList>
                    {
                        data_?.map((item) => (
                            <MenuItem
                                key={JSON.stringify(item)}
                                onClick={
                                    () => {
                                        {
                                            handleAddPdfToFolder(item?.id)
                                        }
                                    }}
                            >
                                <ListItemIcon>
                                    <FolderIcon sx={{
                                        width: 30, height: 30
                                    }} fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>{item?.name}</ListItemText>
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Menu>
        </>
    );
}
