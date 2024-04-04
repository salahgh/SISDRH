import {DiaglogError} from "../../../components/Login/SignIn/MuiSignIn";
import {closeSnackbar, OptionsObject, useSnackbar} from "notistack";
import {Button} from "@mui/material";

const useSnackBarNotifications = () => {

   const {enqueueSnackbar} = useSnackbar()

   const handleShowErrorSnackBar = (diaglogError: DiaglogError, options?: OptionsObject) => {
      enqueueSnackbar(JSON.stringify(diaglogError), {
         autoHideDuration: 5000,
         anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
         }
         // children: (key, message) => (
         //    <Box /*severity={severity} variant={'filled'}*/>
         //       <ErrorResponseCard errorRespone={diaglogError.errorResponse} status={diaglogError.status}/>
         //    </Box>
         // ),
      });
   };

   const handleShowGraphQlErrorSnackBar = (error: string, options?: OptionsObject) => {
      enqueueSnackbar(JSON.stringify(error), {
         autoHideDuration: 5000,
         // children: (key, message) => (
         //    <Box /*severity={severity} variant={'filled'}*/>
         //       {/*<ErrorResponseCard errorRespone={diaglogError.errorResponse} status={diaglogError.status}/>*/}
         //       {error}
         //    </Box>
         // ),
      });
   };

   const handleShowInfoSnackBar = (message_: string | undefined) => {
      enqueueSnackbar(message_, {
         variant : 'info',
         autoHideDuration: 3000
      });
   };

   const handleShowRefreshNotification = () => {
      enqueueSnackbar('' , {
         variant : 'refetchedNotification' ,
         autoHideDuration : 1000
      })
   }

   const handleShowSessionExpiredNotification = (message) => {
      enqueueSnackbar(message , {
         variant : 'error' ,
         persist : true ,
         action : (key) => {
            return(
                <Button onClick={() => { closeSnackbar(key) }}> close </Button>
            )
         }
      })
   }

   const handleNewIssueNotificaton = (notification) => {
      enqueueSnackbar('aa', {
         autoHideDuration: 3000,
         variant: 'singleNotification',
         anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
         },
      });
   };

   const handleShowCopied = (matricule) => {
      enqueueSnackbar('', {
         autoHideDuration: 1500,
         variant: 'copiedInfo',
         anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
         },
         matricule : matricule
      });
   };

   return {
      handleShowErrorSnackBar,
      handleShowInfoSnackBar,
      handleShowGraphQlErrorSnackBar,
      handleNewIssueNotificaton ,
      handleShowCopied,
      handleShowRefreshNotification ,
      handleShowSessionExpiredNotification
   }

}

export default useSnackBarNotifications

