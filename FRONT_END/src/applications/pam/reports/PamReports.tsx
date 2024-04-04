import {ReportsList} from "./ReportsList";
import * as React from "react";
import {useState} from "react";
import {Stack} from "@mui/material";
import {ReportDisplay} from "./ReportDisplay";
import {ReportFormats, ReportNames, ReportsSubFolder} from "../../../_generated_gql_/graphql";

export const PamReports = () => {

   const [reportName, setReportName] = useState<ReportNames | null>(null);

   return(
      <Stack width={'100%'} height={'100%'} direction={'row'} padding={1} spacing={1}
             // bgcolor={'#d3d3d6'}
      >
         <Stack width={'200'} height={'100%'}
                // bgcolor={'#fdfdfd'}
         >
            <ReportsList reportName={reportName} setReportName={setReportName} height={100} width={'500'}/>
         </Stack>
         <Stack flex={1}
                // bgcolor={'#ffffff'}
         >
            {
               reportName && <ReportDisplay
                    reportName={reportName}
                    format={ReportFormats.Pdf}
                    reportSubFolder={ReportsSubFolder.Pam}>
                </ReportDisplay>
            }
         </Stack>

      </Stack>
   )
}