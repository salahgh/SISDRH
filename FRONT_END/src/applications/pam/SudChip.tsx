import {Avatar, Chip, lighten, Typography} from "@mui/material";
import * as React from "react";

export const SudChip = ({NDureeS}) => {
   // if(NDureeS > 3){
   //    return (
   //       <Typography width={'100%'}>{NDureeS}</Typography>
   //    )
   // }
   return (
      <Chip
         variant={'outlined'}
         color={NDureeS < 3 ? 'warning' : 'success'}
         size={'small'}
         // sx={{
         //    backgroundColor:
         //
         // }}
         avatar={
            <Avatar
               sx={{backgroundColor: NDureeS < 3 ? '#eb6c02' : "#2e7c32"}}>
               <Typography
                  color={'#ffffff'}
                  // fontWeight={'bold'}
               > {NDureeS}
               </Typography>
            </Avatar>
         }
         label={<Typography fontWeight={'bold'} color={NDureeS < 3 ? '#eb6c02' : "#2e7c32"}> SUD </Typography>}>
      </Chip>
   )
}

export const SudChipFilter = ({sudValue}: { sudValue: number }) => {

   return (
      <Chip
         size={'small'}
         sx={{
            bgcolor: sudValue == 0 ? lighten('#eb6c02', 0.6) : lighten("#2e7c32", 0.6)
         }}
         label={
            <Typography
               fontWeight={'bold'}
               color={sudValue == 0 ? '#eb6c02' : "#2e7c32"}
            >
               {
                  sudValue == 0 ? 'SUD NON' : 'SUD OUI'
               }
            </Typography>}>
      </Chip>
   )

}