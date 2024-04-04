import {useQuery} from "@apollo/client";
import {
   ReportPosteRealiseDocument
} from "../../../_generated_gql_/graphql";
import {PieChart} from "@mui/x-charts";
import {useRef, useState} from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

const aspectRatio = 0.4

export const ReportPosteRealisePieCharts = ({width}) => {

   const {data, loading, error, refetch} = useQuery(ReportPosteRealiseDocument)

   return (
      <Grid2
         container={true}
         width={width}
         height={width * aspectRatio}
         // padding={1}
         // spacing={1}
         sx={{
            borderRadius : 10
         }}
      >
         {
            data?.reportPosteRealise?.map((item) => {
               return (
                  <Grid2
                     padding={0}
                     height={width * aspectRatio * 0.53}
                     md={3}
                     sm={3}
                     lg={3}
                     xl={3}
                     sx={{bgcolor: 'rgba(224,204,105,0)'}}
                  >
                     <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        height={'100%'}
                        sx={{ backgroundColor : '#dcdbd1' , margin : 0.5 }}
                     >

                        <Typography variant={'h5'} fontWeight={'bold'}> { item?.poste } </Typography>
                        <PieChart
                           sx={{
                              width: width / 4,
                              height: (width * aspectRatio) * 0.1,
                           }}
                           slotProps={{
                              legend: {
                                 labelStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                 },
                                 direction: 'column',
                                 // position: {vertical: 'top', horizontal: 'middle'},
                                 padding: 0,
                                 itemMarkWidth: 18,
                                 itemMarkHeight: 18,
                                 itemGap: 10,
                              },
                           }}
                           series={[
                              {
                                 data: [
                                    {value: item?.ted - item?.realise , label : 'reste'},
                                    {value: item?.realise, label: 'realisé'},
                                 ],
                                 arcLabel: (item) => `${item.label} (${(item?.value * 100).toFixed(2) + '%'})`,
                                 outerRadius: width / 16,
                                 innerRadius: width / 16 * 0.5
                              }
                           ]}
                        />
                     </Stack>
                  </Grid2>
               )
            })
         }
      </Grid2>
   )

}

