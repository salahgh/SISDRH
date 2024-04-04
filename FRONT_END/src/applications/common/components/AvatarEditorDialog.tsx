import {Button, Dialog, DialogActions, DialogContent,
    DialogTitle, IconButton, Stack, Typography} from "@mui/material";
import {Dispatch, ReactNode, SetStateAction} from "react";
import {Close} from "@mui/icons-material";


export const AvatarEditorDialog = ({
                                      open ,
                                      setOpen,
   children
} : {
   open : boolean ,
   setOpen : Dispatch<SetStateAction<boolean>>
    children : ReactNode
}) => {

   return(
      <Dialog open={open} fullWidth={true} maxWidth={'xl'}>
         <DialogTitle>
            <Stack direction={'row'} spacing={1} padding={1}>
               <Typography> edit avatar </Typography>
               <Stack flex={1}></Stack>
               <IconButton onClick={() => setOpen(false)}>
                  <Close></Close>
               </IconButton>
            </Stack>
         </DialogTitle>
         <DialogContent>
            {
               children
            }
         </DialogContent>
         <DialogActions>
            <Button/>
            <Button/>
         </DialogActions>
      </Dialog>
   )
}
