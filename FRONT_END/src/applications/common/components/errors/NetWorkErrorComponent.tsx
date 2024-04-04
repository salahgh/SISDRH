// @ts-ignore
import {Avatar, Stack, Typography} from "@mui/material";
import {ErrorOutline} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";

export const NetWorkErrorComponent = ({
                                           size,
                                           error,
                                           ...others
                                      }: { size?: number | undefined, error?: any | undefined }) => {

     const theme = useTheme()

     const default_size = 100;
     const size_ = size ? size : default_size

     return (
          <Stack
               {
                    ...others
               }
               alignItems={'center'}
               justifyContent={'center'}
               height={'100%'}
               padding={0}
               margin={0}
          >
               <Avatar
                    sx={{
                         width: size_, height: size_, bgcolor: red["100"], padding: 0
                    }}
               >
                    <ErrorOutline
                         sx={{
                              width: size_ * 0.8, height: size_ * 0.8, color: theme.palette.error.dark
                         }}
                    >

                    </ErrorOutline>
               </Avatar>
               {
                    error && <Typography
                       variant={'body2'}
                       color={theme.palette.error.dark}
                       padding={3}
                   >
                         {
                              JSON.stringify(error)
                         }
                   </Typography>
               }
          </Stack>
     )
}
