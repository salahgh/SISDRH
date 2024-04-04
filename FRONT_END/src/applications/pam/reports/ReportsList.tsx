import {Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack} from "@mui/material";
import {AllReportsDocument, ReportNames} from "../../../_generated_gql_/graphql";
import ASSETS from "../../../resources/ASSETS";
import {Dispatch, SetStateAction} from "react";
import {useQuery} from "@apollo/client";

// const getReportNameFromKey = (key: string) => {
//
//    // todo you know what to do ...
//
//    switch (key) {
//       case  ReportNames.[key]  :
//          return ReportNames.TedPostes
//       case ReportNames.CountPosteGradeCrossTab :
//          return ReportNames.CountPosteGradeCrossTab
//    }
// }

export const ReportsList = (
   {setReportName, reportName}:
      {
         reportName: ReportNames | null,
         setReportName: Dispatch<SetStateAction<ReportNames | null>>
      }) => {

   const {data , loading , error , refetch} = useQuery(AllReportsDocument)


   return (
      <Stack sx={{height: '100%', width: 300}}
             // bgcolor={'#efe5e5'}
             borderRadius={5} padding={1}>
         <List>
            {
               data?.allReports?.map((key) => {
                  return (
                     <ListItem>
                        <ListItemButton onClick={() => setReportName(ReportNames[key?.fileName])}
                                        selected={key?.fileName === reportName?.toString()}>
                           <ListItemAvatar>
                              <Avatar sx={{}} variant={'square'} src={ASSETS.PDF}></Avatar>
                           </ListItemAvatar>
                           <ListItemText primary={key?.nomAR} secondary={key?.fileName}></ListItemText>
                        </ListItemButton>
                     </ListItem>
                  )
               })
            }
         </List>
      </Stack>
   )
}