import {Button, Dialog, DialogContent, DialogTitle, IconButton, Stack} from "@mui/material";
import {Close, Download} from "@mui/icons-material";
import {useState} from "react";
import Lottie from "lottie-react";
import {ASSETS_LOTTIE} from "../../../resources/lotties/ASSETS_LOTTIE";
import axios from "axios";
import {exportToExcelUrl} from "../../../redux/RtkQueryApis/constants";
import {useSelector} from "react-redux";
import {selectFilteringFields} from "../../../redux/features/pam/pamSlice";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";
import { handle_ } from "../photosExport/service.ts";


const ExportToExcel = () => {

   const [exportingToExcel, setExportingToExcel] = useState(false);

   const {handleShowInfoSnackBar} = useSnackBarNotifications()

   const filteringFields = useSelector(selectFilteringFields)
   const handleExportToExcel = async () => {

      // setExportingToExcel(true)
      //
      // setTimeout(() => setExportingToExcel(false), 5000)

      try {
         // Send a GET request to the Spring Boot endpoint with progress tracking
         const response = await axios.post(exportToExcelUrl, filteringFields, {
            responseType: 'arraybuffer',
            onDownloadProgress: (progressEvent) => {
               // Calculate and update the download progress
               const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
               console.log(progressEvent)
            },
         })

         handle_(
            response.data,
            'export.xlsx',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
         )
         handleShowInfoSnackBar('success')

      } catch (error) {
         console.error('Error exporting images:', error);
         // Handle the error as needed
         // Reset the progress in case of an error
      }
   }


   return (
      <Stack>
         <Dialog open={exportingToExcel} maxWidth={'lg'} fullWidth={true}>
            <DialogTitle>
               <IconButton onClick={() => setExportingToExcel(false)}>
                  <Close/>
               </IconButton>
            </DialogTitle>
            <DialogContent
               // sx={{bgcolor: '#5fa2d3'}}
            >
               <Stack
                   padding={10}
                   justifyContent={'center'}
                   alignItems={'center'}
                   width={'100%'}
                   height={'100%'}
                   borderRadius={20}
                  // sx={{backgroundColor: 'rgba(218,92,92,0.45)'}}
               >
                  <Lottie
                      animationData={ASSETS_LOTTIE.excel}
                  />
               </Stack>
               {/*<StarLoading/>*/}
            </DialogContent>
         </Dialog>
         <Button
             endIcon={<Download sx={{width: 30, height: 30}}/>}
             variant={'contained'}
             color={'success'}
             onClick={handleExportToExcel}>  </Button>
      </Stack>
   )
}

export default ExportToExcel;
