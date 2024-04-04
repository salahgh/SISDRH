import {TablePaginationProps} from "@mui/material";
import {
   gridPageCountSelector,
   gridPageSelector, gridPageSizeSelector, GridPagination,
   gridRowCountSelector,
   useGridApiContext,
   useGridSelector
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import * as React from "react";


function MyPagination({
                         page,
                         onPageChange,
                         className,
                      }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {

   const apiRef = useGridApiContext();
   const rowCount = useGridSelector(apiRef , gridRowCountSelector);
   const pageSize = useGridSelector(apiRef , gridPageSizeSelector)


   // @ts-ignore
   return (
      <Pagination
         variant={'outlined'}
         size={'large'}
         color="primary"
         shape={'rounded'}
         className={className}
         count={Math.trunc(rowCount / pageSize) + 1}
         page={page + 1}
         onChange={(event, newPage) => {
            onPageChange(event as any, newPage - 1);
         }}
      />
   );
}

export function CustomPagination(props: any) {
   // @ts-ignore
   return <GridPagination ActionsComponent={MyPagination} {...props} />
}