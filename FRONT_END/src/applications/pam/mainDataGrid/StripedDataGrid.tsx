import {alpha, styled} from "@mui/material/styles";
import {DataGrid, gridClasses} from "@mui/x-data-grid";
import {darken} from "@mui/material";
import {NullHandling, SortInput} from "../../../_generated_gql_/graphql";
import {SortingFieldsInterface} from "./types";

export const rowHeight = 60
const ODD_OPACITY = 0.3

export const getBgColor = (idCsn: String | null | undefined) => {
   if (idCsn == null) return
   const tmp_ = Number.parseInt(idCsn?.slice(0, 1))
   if (tmp_ == 3 || tmp_ == 4 || tmp_ == 6) return '#c5bd85'
}

export const getAlreadySouth = (dureeS: number | undefined | null) => {
   if (dureeS && dureeS != null) {
      if (dureeS > 3) return ''
   }
}

export function getSort(sortingFields: SortingFieldsInterface[]): SortInput {

   const sortInput: SortInput = {
      orders: sortingFields.map((item) => {
         return {
            direction: item.direction,
            property: item.lib,
            ignoreCase: true,
            nullHandlingHint: NullHandling.NullsLast
         }
      })
   }
   return sortInput
}


export const StripedDataGrid = styled(DataGrid)(({theme}) => ({
   [`& .${gridClasses.row}.even`]: {
      backgroundColor: darken(theme.palette.background.paper, 0.08),
      borderColor : theme.palette.primary ,
      '&:hover, &.Mui-hovered': {
         backgroundColor: theme.palette.action.hover,
         '@media (hover: none)': {
            backgroundColor: 'transparent',
         },
      },
      '&.Mui-selected': {
         backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
         ),
         '&:hover, &.Mui-hovered': {
            backgroundColor: alpha(
               theme.palette.primary.main,
               ODD_OPACITY +
               theme.palette.action.selectedOpacity +
               theme.palette.action.hoverOpacity,
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
               backgroundColor: alpha(
                  theme.palette.primary.main,
                  ODD_OPACITY + theme.palette.action.selectedOpacity,
               ),
            },
         },
      },
   },
}));