import {RoleDto} from "../../../../redux/mainApi";
import {Avatar, Box, Dialog, DialogContent, DialogTitle, IconButton, Stack, Typography} from "@mui/material";
import {Close, Edit} from "@mui/icons-material";
import TransferList from "../TransferList";
import {useQuery} from "@apollo/client";
import {FindRoleByIdDocument} from "../../../../_generated_gql_/graphql";

export function TranserListDialog(
    props:
        {
            open: boolean,
            roleId: string | undefined | null,
            onClick: () => void,
            transferListOpen: (value: (((prevState: boolean) => boolean) | boolean)) => void
        }) {

    const {data: role, error, loading} = useQuery(FindRoleByIdDocument,
        {
            variables: {roleId: props.roleId}
        }
    )

    return (
        <Dialog open={props.open} maxWidth={"md"} fullWidth>
            <DialogTitle
                sx={{bgcolor: "#84ecbd"}}
            >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Avatar sx={{bgcolor: "#fdfdfd"}}><Edit color={"success"}/></Avatar>
                    <Typography variant={"h5"}>{role?.findRoleById?.name}</Typography>
                    <Box flex={1}/>
                    <IconButton onClick={props.onClick} color={"error"}><Close/></IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                {
                    props?.roleId && <Stack justifyContent={"center"} alignItems={"center"}>
                        <TransferList setTransferListOpen={props.transferListOpen} role={role?.findRoleById}/>
                    </Stack>
                }
            </DialogContent>
        </Dialog>
    )

}