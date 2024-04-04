import {GetReportDocument, ReportFormats, ReportNames, ReportsSubFolder} from "../../../_generated_gql_/graphql";
import {useQuery} from "@apollo/client";
import {CircularProgress, Stack, Typography} from "@mui/material";
import React, {useEffect} from "react";
import useSnackBarNotifications from "../../allAps/notifications/useSnackBarNotifications";
import {NetWorkErrorComponent} from "../../../components/errors/NetWorkErrorComponent";


export const ReportDisplay = (

   {reportName, format, reportSubFolder, shouldRefetch}:
      {
         reportName: ReportNames,
         format: ReportFormats,
         reportSubFolder: ReportsSubFolder,
         shouldRefetch: boolean
      }) => {

   const {data: report, loading, error, refetch} = useQuery(GetReportDocument, {
      variables: {
         format: format,
         reportName: reportName,
         reportsSubFolder: reportSubFolder
      }
   })

   useEffect(() => {
      refetch().then((r) => r).catch((e) => e)
      return () => {

      };
   }, [reportName]);


   const {handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar} = useSnackBarNotifications()

   useEffect(() => {

      if (shouldRefetch) {
         refetch()
            .then((r) => {

               handleShowInfoSnackBar('su515412')
            })
            .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)))
      }
   }, [shouldRefetch]);


   return (
      <Stack sx={{height: '100%', width: '100%'}}>
         {
            loading && <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                 <CircularProgress/>
             </Stack>
         }
         {
            !loading && error && <Stack spacing={1}>
                 <NetWorkErrorComponent/>
                 <Typography>{JSON.stringify(error.graphQLErrors)}</Typography>
             </Stack>
         }
         {
            !loading && !error && <iframe
                 src={"data:application/pdf;base64," + report?.report}
                 width="100%"
                 height="100%"
             />
         }

      </Stack>
   )
}