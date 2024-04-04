import {ErrorResponse} from "../../../redux/mainApi";
import {
   AlertColor,
   Button,
   Card, CardActions,
   CardContent, Stack,
   Typography
} from "@mui/material";
import StackTrace from "./StackTrace";
import {red} from "@mui/material/colors";
import {NetWorkErrorComponent} from "../../errors/NetWorkErrorComponent";
import {useTheme} from "@mui/material/styles";


const ErrorResponseCard = ({
                              errorRespone,
                              status,
                              ...others
                           }: { errorRespone: ErrorResponse | undefined, status: string | undefined }) => {

   const theme = useTheme()
   return (
      <Card sx={{
         width: 400, height: 300, bgcolor: red["200"]
      }}>
         <CardContent>

            <Stack sx={{paddingBottom : 2}} direction={'row'} spacing={2} alignItems={'center'} justifyContent={'center'}>
               <NetWorkErrorComponent size={50} error={''} />
               <Typography color={theme.palette.error.dark} variant={'h4'} flex={1}>
                  {
                     status
                  }
               </Typography>
            </Stack>

            {
               errorRespone?.errors?.map((item) => {
                     return (
                        <>
                           {
                              item.message && <Typography variant={'body1'}>
                                 {
                                    item.fieldName + ' ' + item.message
                                 }
                              </Typography>
                           }
                        </>
                     )
                  }
               )
            }
            {
               // @ts-ignore
               errorRespone?.inCodeStackTrace && <StackTrace stackTrace={errorRespone?.inCodeStackTrace}/>
            }

         </CardContent>
         <CardActions>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   )
}

export default ErrorResponseCard;
