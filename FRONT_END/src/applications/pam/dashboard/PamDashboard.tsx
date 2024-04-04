import {Paper, Stack} from "@mui/material";
import {useQuery} from "@apollo/client";
import {ReportPosteRealiseDocument} from "../../../_generated_gql_/graphql";
import {ReportPosteRealisePieCharts} from "./ReportPosteRealisePieCharts";


export const PamDashboard = () => {

   const {data , loading , error , refetch} = useQuery(ReportPosteRealiseDocument)

   return(
      <Stack
          direction={'row'}
          height={'100%'}
          width={'100%'}
      >
            <ReportPosteRealisePieCharts width={900}/>
      </Stack>
   )
}
