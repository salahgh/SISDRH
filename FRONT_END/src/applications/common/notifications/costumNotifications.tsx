import {lighten, Stack, Typography} from "@mui/material";
import {Theme} from "@mui/material/styles";
import {forwardRef} from "react";
import {ContentPaste, Refresh} from "@mui/icons-material";


export const RefetchedNotification = forwardRef(
   ({style , ...other} , ref) => {
      return(
         <Stack
            ref={ref}
            // style={{...style}}
            sx={{
               width: '100%',
               height: 40 ,
               padding : 5 ,
               borderRadius: 5,
               left : 0 ,
               bgcolor : (theme : Theme) => lighten(theme.palette.success.light , 0.7)
         }}
            justifyContent={'center'}
            alignItems={'center'}
         >
            <Stack sx={{ width : '100%' }}></Stack>
            <Refresh sx={{ width : 35 , height : 35 , color : (theme : Theme) => theme.palette.success.dark }}/>
         </Stack>
      )
   }
)

export const CopiedNotification = forwardRef(({style, matricule, ...other}, ref) => {

      return (
         <Stack
            ref={ref}
            style={{...other?.style}}
            sx={{width: 250, height: 130}}
            padding={1}
         >
            <Stack
               flex={1}
               sx={{
                  width: '100%',
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                  bgcolor: (theme: Theme) => theme.palette.primary.main
               }}
            ></Stack>
            <Stack
               flex={2}
               spacing={2}
               padding={3}
               sx={{
                  width: '100%',
                  borderBottomRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  bgcolor: (theme: Theme) => theme.palette.background.default
               }}
               direction={'row'}
               justifyContent={'center'}
               alignItems={'center'}
            >

               <Stack sx={{
                  borderRadius: 2,
                  height : 50 ,
                  bgcolor: (theme: Theme) => theme?.palette.background.paper
               }}
                      justifyContent={'center'}
                      alignItems={'center'}
               >
                  <ContentPaste sx={{ width : 30 , height : 30 }}/>
               </Stack>
               <Stack sx={{
                  width: '100%',
                  height: 50,
                  borderRadius: 3,
                  justifyContent : 'center' ,
                  alignItems : 'center' ,
                  bgcolor: (theme: Theme) => theme?.palette.background.paper
               }}>
                  <Typography fontWeight={'bold'} fontSize={'medium'}> {matricule} </Typography>
               </Stack>
            </Stack>
         </Stack>
      )
   }
)

