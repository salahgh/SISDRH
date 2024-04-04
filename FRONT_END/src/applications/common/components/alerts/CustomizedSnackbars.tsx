import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {DiaglogError} from "../Login/SighUp/MuiSignUp";

const Alert = React.forwardRef(function Alert(props, ref) {
   // @ts-ignore
   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({open, setOpen, errorResponse}:
                                               { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, errorResponse: DiaglogError }) {

   const handleClick = () => {
      setOpen(true);
   };

   const handleClose = (event: any, reason: string) => {
      if (reason === 'clickaway') {
         return;
      }

      setOpen(false);
   };

   return (
      <Stack spacing={2} sx={{width: '100%'}}>
         <Button variant="outlined" onClick={handleClick}>
            Open success snackbar
         </Button>
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            {
               // @ts-ignore
               <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                  This is a success message!
               </Alert>
            }
         </Snackbar>
      </Stack>
   );
}