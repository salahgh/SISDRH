import ASSETS from "../../../resources/ASSETS";
import {Stack} from "@mui/material";

export const CustomNoResultOverlay = () => {


   return(
      <Stack
          justifyContent={'center'}
          alignItems={'center'}
          width={'100%'}
          height={'100%'}
      >
         <img src={ASSETS.empty} style={{ width : 180 }} alt={'no result'}/>
      </Stack>

   )
}
