import MaskedFormikMuiTextField from "./MaskedFormikMuiTextField";
import {Tooltip} from "@mui/material";
import RenderToolTip from "./RenderToolTip";
import React from "react";

// @ts-ignore
export const PasswordWithToolTipInput = (props) => {

   const {field, form, meta, mask, inputProps, ...others} = props

    // todo check for formik errors lower case

   return (
      <Tooltip
         componentsProps={{
            tooltip: {
               sx: {
                  bgcolor: 'rgba(18,18,18,0)'
               }
            }
         }}
         {...others}
         placement={'left'}
         arrow
         title={<RenderToolTip form={form.errors}/>

         }
      >
         <MaskedFormikMuiTextField inputProps={inputProps} mask={mask} field={field} form={form}
                                   meta={meta} {...others}/>
      </Tooltip>
   );
}

