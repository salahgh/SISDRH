import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogTitle,
   IconButton,
   Stack,
   ToggleButtonGroup,
   Typography
} from "@mui/material";
import {Dispatch, SetStateAction, useState} from "react";
import {Close} from "@mui/icons-material";
import {AnimationConfig, useSpring} from "react-spring";
import {AnimatedIconToggleButton} from "./AnimatedToggleButton";
import axios from "axios";
import {baseUrl_, exportToExcelUrl, exportToPhotoUrl} from "../../../redux/RtkQueryApis/constants";
import {ExportImagesLoading} from "./ExportImagesLoading";
import {handle_} from "./service";
import {useSelector} from "react-redux";
import {selectFilteringFields} from "../../../redux/features/pam/pamSlice";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";


export const thumbSizes = [
   {size: 100, type: 'normal', imageSize: 50},
   {size: 200, type: 'normal', imageSize: 70},
   {size: 500, type: 'normal', imageSize: 90},
   {size: 1000, type: 'normal', imageSize: 120},
   {size: 2100, type: 'face', imageSize: 50},
   {size: 2200, type: 'face', imageSize: 70},
   {size: 2500, type: 'face', imageSize: 100},
   {size: 21000, type: 'face', imageSize: 120}

]


export const ExportDialog = ({open, setOpen}:
                                {
                                   open: boolean,
                                   setOpen: Dispatch<SetStateAction<boolean>>
                                }) => {


   const [selectedSizes, setSelectedSizes] = useState([]);

   const config: Partial<AnimationConfig> = {
      tension: 300,
      bounce: 8,

   }

   const {scale} = useSpring({
      from: {scale: 1},
      to: {scale: selectedSizes.includes(100) ? 0.8 : 1},
      config,
   });

   const handleReset = () => {
      setSelectedSizes([])
   }

   const handleOk = () => {
      handleExport(selectedSizes)
   }

   const [loading, setLoading] = useState(false);

   const {handleShowInfoSnackBar} = useSnackBarNotifications();

   const filteringFields = useSelector(selectFilteringFields)

   const handleExport = async (sizes) => {

      setLoading(true)
      try {
         // Send a GET request to the Spring Boot endpoint with progress tracking
         const response = await axios.post(exportToPhotoUrl , {
            sizes : sizes ,
            filteringParams : filteringFields
         }, {
            responseType: 'arraybuffer',
            onDownloadProgress: (progressEvent) => {
               // Calculate and update the download progress
               const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
               console.log(progressEvent)
            },
         });

         handle_(response.data , 'export.zip' , 'application/zip')

         handleShowInfoSnackBar('success')
         setLoading(false)
         setOpen(false)

      } catch (error) {
         console.error('Error exporting images:', error);
         // Handle the error as needed
         // Reset the progress in case of an error
         setLoading(false)
      }
   };


   return (
      <Dialog open={open} maxWidth={'lg'} fullWidth={true}>

         <DialogTitle>
            <Stack
               direction={'row'}
               justifyContent={'center'}
               alignItems={'center'}
               spacing={1}
               padding={1}
            >
               <Typography>
                  تحميل الصور
               </Typography>
               <Stack flex={1}></Stack>
               <IconButton onClick={() => setOpen(false)} disabled={loading}>
                  <Close onClick={() => setOpen(false)}></Close>
               </IconButton>
            </Stack>
         </DialogTitle>
         <DialogContent>
            <Stack width={'100%'} alignItems={'center'}>
               {
                  !loading && <ToggleButtonGroup value={selectedSizes} onChange={(e, v) => setSelectedSizes(v)}>
                     {
                        thumbSizes.map((item, index) => {
                           return (
                              <AnimatedIconToggleButton
                                 value={item}
                                 selected={selectedSizes.includes(item?.size)}
                                 imageIconSize={item?.imageSize}
                              />
                           )
                        })
                     }
                   </ToggleButtonGroup>
               }
               {
                  loading && <ExportImagesLoading/>
               }
            </Stack>
         </DialogContent>
         <DialogActions>
            <Button
               variant={'outlined'}
               color={'secondary'}
               onClick={handleReset}
               disabled={loading}
            >
               reset
            </Button>
            <Button variant={'contained'}
                    onClick={handleOk}
                    disabled={loading}
            >
               ok
            </Button>
         </DialogActions>
      </Dialog>
   )

}

