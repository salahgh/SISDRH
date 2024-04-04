import {
    Avatar,
    Box,
    Breakpoint,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import {Close, Edit} from "@mui/icons-material";
import {Dispatch, ReactElement, SetStateAction} from "react";

export function EditEntityDialog({
                                     open,
                                     setOpen,
                                     title,
                                     content,
                                     fullWidth,
                                     maxWidth
                                 }
                                     : {
    open: boolean,
    setOpen: Dispatch<SetStateAction<any>>,
    title: string,
    content: ReactElement,
    fullWidth: true,
    maxWidth: false | Breakpoint | undefined
}) {
    return (
        <Dialog
            open={open}
            fullWidth={fullWidth}
            maxWidth={maxWidth}
        >
            <DialogTitle
                sx={{bgcolor: '#ead48d'}}
            >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                    <Avatar sx={{bgcolor: '#fdfdfd'}}><Edit color={'warning'}/></Avatar>
                    <Typography variant={"h5"}>{title}</Typography>
                    <Box flex={1}/>
                    <IconButton onClick={() => setOpen(false)} color={"error"}><Close/></IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                {content}
            </DialogContent>
        </Dialog>
    )
}