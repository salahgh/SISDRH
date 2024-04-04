import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import {StackTraceElementDto} from "../../../redux/mainApi";


const StackTrace = ({stackTrace} : {stackTrace : StackTraceElementDto[]}) => {
   return (
      <Box>
         {
            stackTrace.map((item) => {
               return(
                <>
                   {
                      item.fileName &&   <Typography variant={'body2'} >
                         {
                            item.fileName + ' ' + item.lineNumber + ' ' + item.methodName
                         }
                      </Typography>
                   }
                </>



               )
            })
         }
      </Box>
   )
}

export default StackTrace