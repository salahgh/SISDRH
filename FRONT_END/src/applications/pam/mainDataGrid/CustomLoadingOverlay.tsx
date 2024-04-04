import {darken, LinearProgress, Skeleton, Stack} from "@mui/material";
import {rowHeight} from "./Pam2024DataGrid";
import {Theme} from "@mui/material/styles";


export const CustomLoadingOverlay = () => {

   const myArray = Array.from({length: 5}, (_, index) => index + 1);
   return (
      <Stack width={'100%'} padding={1}>
         {
            myArray.map((item , index) => {
               return (
                  <Skeleton
                     style={{ boxSizing : 'content-box' }}
                     sx={{
                        bgcolor : (theme : Theme) => index % 2 == 0 ? darken(theme.palette.background.paper,0.1) : theme.palette.background.paper ,
                        // padding : 1 ,
                     }}
                     height={rowHeight} width={'100%'} variant={'rectangular'} animation={'wave'}></Skeleton>
               )
            })
         }
      </Stack>
   )

}
