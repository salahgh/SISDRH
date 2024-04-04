import {Stack, Typography} from "@mui/material";
import * as React from "react";


export const DemandeRadiatioinChip = () => {

   return (
      <Stack
         sx={{
            width: 25,
            height: 25,
            bgcolor: '#643c3c',
            borderRadius: 2,
         }}
         alignItems={'center'}
         justifyContent={'center'}
      >
         <Typography
            color={'#d5cacd'}
         > D </Typography>

      </Stack>
   )
}