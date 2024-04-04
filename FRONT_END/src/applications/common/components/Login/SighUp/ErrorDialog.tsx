import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import * as React from "react";
import {DiaglogError} from "./MuiSignUp";
import jsonData from "../../../resources/httpCodesEn.json";
import {Dispatch, SetStateAction} from "react";


// @ts-ignore
const ErrorDialog = ({diaglogError ,setDiaglogError , children  , ...others} : {diaglogError : DiaglogError , setDiaglogError : Dispatch<SetStateAction<DiaglogError>>, children  : any}) => {


   const handleClose = () => {
      setDiaglogError((oldState) => ({
         ...oldState , open : false
      }))
   }


   return (
      // @ts-ignore
      <Dialog x={{
         width : 300 , height : 300
      }} maxWidth={'lg'}
              open={false}
              onClose={(a) => handleClose()}
      >
         <DialogTitle>
            {
               // @ts-ignore
               diaglogError.status + " " + jsonData[diaglogError.status].message
            }
         </DialogTitle>
         <DialogContent>
            {
               children
            }
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
               Save
            </Button>
         </DialogActions>
      </Dialog>
   )
}

export default ErrorDialog
