import {Avatar} from "@mui/material";
import {getArmeImage} from "../../resources/ASSETS_ARMES";

export const ArmeAvatar = ({armeId , width}) => {
   return(
      <Avatar
         variant={'rounded'}
         sx={{
            width: width ,
            height : width ,

      }} src={getArmeImage(armeId)}></Avatar>
   )
}