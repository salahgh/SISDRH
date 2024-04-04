import {lighten, LinearProgress, Stack, Typography} from "@mui/material";
import {ASSETS_LOTTIE} from "../../../resources/lotties/ASSETS_LOTTIE";
import Lottie from "lottie-react";
import {Theme} from "@mui/material/styles";

export function ExportImagesLoading() {

   return <Stack justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100%'} spacing={2}>
      <Typography>
         جاري تحميل الصور
      </Typography>
      <LinearProgress sx={{width: '100%'}}/>
      <Stack
         justifyContent={'center'}
         alignItems={'center'}
         borderRadius={20}
         bgcolor={(theme : Theme) => lighten(theme.palette.warning.main , 0.8)}
         height={'100%'}
         width={'100%'}
         border={ (theme : Theme) =>  'solid 3px ' + theme.palette.warning.main}
      >
         <Lottie speed={1.2} animationData={ASSETS_LOTTIE.animation_1}/>
      </Stack>

   </Stack>;
}