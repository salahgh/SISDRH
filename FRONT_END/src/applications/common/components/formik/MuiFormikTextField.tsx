import {TextField} from "@mui/material";
import {FieldInputProps, FieldMetaProps, FormikFormProps} from "formik";


export const MuiFormikTextField = ({
                                     field , form , meta , ...other
                                   } : {
   field : FieldInputProps<any> ,
   form : FormikFormProps ,
   meta : FieldMetaProps<any>
}) => {

   return (
      <TextField
         {...field}
         {...other}
      />
   )
}