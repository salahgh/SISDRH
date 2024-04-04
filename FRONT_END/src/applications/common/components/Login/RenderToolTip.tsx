import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@mui/material";
import {CheckCircle , Error} from "@mui/icons-material";
import {useTheme} from '@mui/material/styles'
import { errorTexts } from "../../../../redux/RtkQueryApis/constants.ts";

const RenderToolTip = ({form}) => {

   const theme = useTheme()

   return (
      <Paper>
         <List>
            {errorTexts.map((item, index) => {
                  let isError = false;
                  if (form) {
                     isError = form.passwordErrorsAsArray?.includes(index + 1)
                  }
               return (
                     <ListItem
                     >
                        <ListItemIcon>
                           {
                              isError ?
                                 <Error
                                    sx={{
                                       color: isError ? theme.palette.warning.dark : theme.palette.success.dark
                                    }}
                                 /> :
                                 <CheckCircle color={'success'}/>
                           }
                        </ListItemIcon>
                        <ListItemText
                           primary={item}
                           sx={{
                              color: isError ? theme.palette.warning.main : theme.palette.success.main
                           }}
                        >
                        </ListItemText>
                     </ListItem>
                  );
               }
            )}
         </List>
      </Paper>
   );
}

export default RenderToolTip ;
