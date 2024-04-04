import {AnimationConfig, useSpring, animated} from "react-spring";
import {Stack, ToggleButton, Typography} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import {Theme} from "@mui/material/styles";
import PhotoIcon from "@mui/icons-material/Photo";


export const AnimatedIconToggleButton = ({selected, value, imageIconSize, ...other}) => {

   const config: Partial<AnimationConfig> = {
      tension : 300 ,
      bounce : 2
   }

   const {scale} = useSpring({
      from: {scale: 1},
      to: {scale: selected ? 0.8 : 1},
      config,
   });

   // @ts-ignore
   return (
      <ToggleButton {...other} value={value.size} selected={selected}>
         <Stack>
            <animated.div
               style={{
                  transform: scale.interpolate((s) => `scale(${s})`), // Interpolate the scale value
               }}
            >
               {
                  value?.type === 'normal' ? <PhotoIcon
                       sx={{
                          width: imageIconSize ,
                          height: imageIconSize,
                          color: (theme: Theme) => selected ? theme.palette.primary.dark : null,
                       }}
                   />  :
                     <AccountBoxIcon
                        sx={{
                           width: imageIconSize,
                           height: imageIconSize,
                           color: (theme: Theme) => selected ? theme.palette.primary.dark : null,
                        }}
                     />
               }
            </animated.div>
            <Typography>
               {
                  value?.size > 1000 ? value?.size - 2000 : value?.size
               }
            </Typography>
         </Stack>

      </ToggleButton>
   )
}
