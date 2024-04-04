import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Box, IconButton, ListItemIcon, ListItemText, MenuList} from "@mui/material";
import { DeleteForever, MoreVert} from "@mui/icons-material";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../../redux/features/auth/userSlice";
import {useMutation} from "@apollo/client";
import {
    FindAllOcrResultEntityByFoldersContainingDocument,
    PinOcrResultDocument, PrivilegesEnum, UnpinOcrResultDocument
} from "../../../../../_generated_gql_/graphql";
import {selectSelectedFolder} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import ASSETS from "../../../../../resources/ASSETS";
import {useState} from "react";
import UsersChoiceDialog from "./UsersChoice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { useGetAuthories, useHasAuthorities } from "../../../../../security/useHasAuthoritie.ts";


export default function ActionsMenu({row, page, size, handleDeletePdfFromFolder}:
                                        {
                                            row?: any,
                                            page: number,
                                            size: number,
                                            handleDeletePdfFromFolder: any
                                        }) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>(undefined);
    const open = Boolean(anchorEl);
    const [usersOpen, setUsersOpen] = useState(false)
    const userName: string = useSelector(selectLoggedInUser).matricule
    const {handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar} = useSnackBarNotifications()
    const selectedFolder = useSelector(selectSelectedFolder)
    const PRIVILIGES = useGetAuthories();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [pinFile, {loading: pinningFile}] = useMutation(PinOcrResultDocument, {
        refetchQueries: [{
            query: FindAllOcrResultEntityByFoldersContainingDocument, variables: {
                folderId: selectedFolder?.id,
                pagination: {
                    pageSize: size,
                    pageNumber: page
                }
            }
        }]
    })

    const [unpinFile, {loading: unpinninOcrResult}] = useMutation(UnpinOcrResultDocument, {
        refetchQueries: [{
            query: FindAllOcrResultEntityByFoldersContainingDocument, variables: {
                folderId: selectedFolder?.id,
                pagination: {
                    pageSize: size,
                    pageNumber: page
                }
            }
        }]
    })


    function togglePinned(e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLLIElement>, row: any) {

        if (row?.ocrResultPinned) {
            unpinFile({
                variables: {
                    id: row?.id
                }
            }).then((result) => {
                handleShowInfoSnackBar('unpinned avec succés')
                setAnchorEl(null)
            })
                .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
        } else {
            pinFile({
                variables: {
                    ocrResultId: row?.id
                }
            }).then((result) => {
                handleShowInfoSnackBar('pinned avec succés')
                setAnchorEl(null)
            })
                .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
        }
    }

    const handleToggleGrant = (row) => {

        if (row?.ocrResultPinned) {
            unpinFile({
                variables: {
                    id: row?.id
                }
            }).then((result) => {
                handleShowInfoSnackBar('unpinned avec succés')
                setAnchorEl(null)
            })
                .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
        } else {
            pinFile({
                variables: {
                    ocrResultId: row?.id
                }
            }).then((result) => {
                handleShowInfoSnackBar('pinned avec succés')
                setAnchorEl(null)
            })
                .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
        }

    }

    const hasPinAuthoritie = useHasAuthorities(PrivilegesEnum.OcrResultPin)
    const hasOcrResultDirectGrant = useHasAuthorities(PrivilegesEnum.OcrResultDirectGrant)

    return (
        <>
            <UsersChoiceDialog
                open={usersOpen}
                afterOk_={() => setAnchorEl(null)}
                afterAnnuler_={() => setAnchorEl(null)}
                setOpen={setUsersOpen}
                ocrResultId={row?.id}
            />
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVert sx={{
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
                        PRIVILIGES.OcrResultPin && <MenuItem
                            key={'1'}
                            onClick={(e) => togglePinned(e, row)}
                        >
                            <ListItemIcon>
                                <Box
                                    sx={{
                                        width: 50
                                    }}
                                >
                                    {
                                        row?.ocrResultPinned ? (
                                                <img style={{
                                                    width: '35px',
                                                    height: '35px'
                                                }} src={ASSETS.PINNED} alt={'pin'}
                                                />
                                            )
                                            : <img style={{
                                                width: '35px',
                                                height: '35px'
                                            }} src={ASSETS.PAPER_PIN} alt={'unpin'}/>
                                    }
                                </Box>
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    marginLeft: 1
                                }}
                            >{'ajouter a l\'ecran d\'accuil'}</ListItemText>
                        </MenuItem>
                    }

                    {
                        selectedFolder?.id != -2 && selectedFolder?.id != -1 && <MenuItem
                            key={'2'}
                            onClick={() => handleDeletePdfFromFolder(row)}
                        >
                            <ListItemIcon>
                                <DeleteForever
                                    sx={{
                                        width: 35, height: 35, color: '#c40f0f'
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    marginLeft: 1
                                }}
                            >{'Supprimer'}</ListItemText>
                        </MenuItem>
                    }
                    {
                        PRIVILIGES.OcrResultDirectGrant && <MenuItem
                            key={'4'}
                            onClick={() => setUsersOpen(true)}
                        >
                            <ListItemIcon>
                                <img src={ASSETS.HAND} alt={'hand'} style={{
                                    width: '35px',
                                    height: '35px'
                                }}/>
                            </ListItemIcon>
                            <ListItemText
                                sx={{
                                    marginLeft: 1
                                }}
                            >{'autoriser'}</ListItemText>
                        </MenuItem>
                    }

                </MenuList>
            </Menu>
        </>
    );
}
