import {Button, Stack} from "@mui/material";
import {arraysContainSameElements} from "../utilities/utilities";
import {ErrorOutline, FilterAlt, FilterAltOff} from "@mui/icons-material";
import * as React from "react";

export const FiltersOnOff = ({selectedOptions, availableOptions, onSelectNone, onSelectAll , disabled}) => {

    const disabled_ = disabled !== undefined ? disabled : arraysContainSameElements(selectedOptions, [])

   return (
      <Stack spacing={1}>
         <Button
             variant={'outlined'}
             disabled={disabled_}
             onClick={onSelectNone}
         >
            <FilterAltOff/>
         </Button>
         {/*<Button*/}
         {/*   variant={arraysContainSameElements(selectedOptions, availableOptions) ? 'contained' : 'outlined'}*/}
         {/*   onClick={onSelectAll}*/}
         {/*>*/}
         {/*   <FilterAltOff/>*/}
         {/*</Button>*/}

         {/*<Stack*/}
         {/*   height={40}*/}
         {/*   alignItems={'center'}*/}
         {/*   justifyContent={'center'}*/}
         {/*   borderRadius={1}*/}
         {/*   border={'solid 1px #eb6c02'}*/}
         {/*   visibility={!arraysContainSameElements(selectedOptions, []) ? 'hidden' : null}*/}
         {/*>*/}
         {/*   <ErrorOutline color={'warning'}></ErrorOutline>*/}
         {/*</Stack>*/}

      </Stack>
   )
}