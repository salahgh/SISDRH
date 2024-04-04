import {
    Button,
    ButtonBase, Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton, LinearProgress,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {ChangeEvent, useEffect, useState} from "react";
import {useLazyQuery, useQuery} from "@apollo/client";
import {PaginationInput, SearchUsersByTokenDocument} from "../../../_generated_gql_/graphql";
import {UserCard} from "../../rh/UserCard";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Theme} from "@mui/material/styles";
import {blueGrey} from "@mui/material/colors";
import {Close} from "@mui/icons-material";
import ASSETS from "../../../resources/ASSETS";
import { NetWorkErrorComponent } from "./errors/NetWorkErrorComponent.tsx";

export const SelectUser = ({open , setOpen , onComplete , selectedUsers , setSelectedUsers}) => {

    const [searchToken, setSearchToken] = useState<string>('');
    const [pageable, setPageable] = useState<PaginationInput>({
        pageNumber: 0, pageSize: 100 , sort : {
            orders : [{ property : 'personnel.pamOff2024.trieAnciennete' }]
        }
    });

    // todo pagination should be implemented correctly in production

    const handleChange = (e: ChangeEvent) => {
        setSearchToken(e.target.value)
    }

    const [trigger , {data: users, loading, error}] = useLazyQuery(SearchUsersByTokenDocument, {
        variables: {
            pageable: pageable,
            searchToken: searchToken
        }
    })

    useEffect(() => {
        if(open){
            trigger()
        }
    }, [open]);


    const handleUserClicked = (userId) => {
        let oldValues = Array.from(selectedUsers);
        const index = selectedUsers.indexOf(userId);
        if (index === -1) {
            setSelectedUsers([...oldValues, userId])
        } else {
            oldValues.splice(index, 1)
            setSelectedUsers(oldValues)
        }
    }
    // todo use the vuexy style for chosing a list of users (send email)

    //todo the email view in vuexy is great can be used in issues view ...

    //todo add email to folder take a look
//animating lists entrance

    return (
        <Dialog maxWidth={"xl"} open={open} fullWidth={true}>
            <DialogTitle>
                <Stack direction={'row'}>
                    <Typography>selecrt a user</Typography>
                    <Stack flex={1}></Stack>
                    <IconButton onClick={() => setOpen(false)}>
                        <Close></Close>
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent style={{ height : 'calc(100vh - 100px)' }}>
                <Stack width={'100%'} height={'100%'} spacing={1}>
                    <TextField fullWidth={true} value={searchToken} onChange={handleChange}></TextField>
                    {
                        loading && <LinearProgress sx={{ width : '100%' }}/>
                    }
                    <Stack
                        flex={1}
                        // bgcolor={'#d59595'}
                        overflow={'auto'}
                        padding={1}>
                        <Grid2
                            height={'100%'}
                            // bgcolor={'#328293'}
                            container={true} spacing={1} justifyContent={'center'} alignItems={'center'}>
                            {
                                !loading && users?.searchUsersByToken?.content?.length === 0 &&
                                <img src={ASSETS.empty} style={{ width : 180 }} alt={'no result'}/>
                            }
                            {
                                error && <NetWorkErrorComponent error={error} size={150}/>
                            }
                            {
                                users?.searchUsersByToken?.content?.map((user) => {
                                    return (
                                        <Grid2>
                                            <ButtonBase
                                                onClick={() => handleUserClicked(user?.id)}
                                                sx={{
                                                    padding : 1,
                                                    bgcolor: (theme: Theme) => selectedUsers?.includes(user?.id) ? theme?.palette.mode == 'dark' ? blueGrey[800] : blueGrey[300] : null
                                                }}
                                            >
                                                <UserCard
                                                    matricule={user?.personnel?.id}
                                                    noma={user?.personnel?.noma}
                                                    pnoma={user?.personnel?.pnoma}
                                                    grade={user?.personnel?.grade?.grade}
                                                    arme={user?.personnel?.arme?.id}
                                                    size={160}>
                                                </UserCard>
                                            </ButtonBase>
                                        </Grid2>
                                    )
                                })
                            }
                        </Grid2>
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onComplete(selectedUsers)}> ok </Button>
            </DialogActions>
        </Dialog>
    )

}

