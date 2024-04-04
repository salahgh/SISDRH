import {useDispatch, useSelector} from "react-redux";
import {selectSelectedItem} from "../../../../../redux/features/elasticSearch/OcrJobSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Stack} from "@mui/material";
import {Feed} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {OcrResultEntityJpa} from "../../../../../_generated_gql_/graphql";

const cardHeight = 100;

export const OcrResultEntityCard = ({item}: { item: OcrResultEntityJpa | undefined }) => {

   const getIconsColor = () => {

      return selectedItem === item ?
         '#e0e0e0' :
         item?.ocrDone === 'n' ?
            '#ff9595' :
            item?.ocrDone === 'c' ?
               '#fdd794' :
               '#c8f3b1'
   }

   const dispatch = useDispatch();

   const selectedItem = useSelector(selectSelectedItem);

   return (
      <>
         <Card
            // onClick={() => dispatch(setSelectedItem(item))}
            sx={{
               backgroundColor: selectedItem === item ?
                  '#e0e0e0' :
                  item?.ocrDone === 'n' ?
                     '#f0f4fa' :
                     item?.ocrDone === 'c' ?
                        '#fdd794' :
                        '#c8f3b1',
               height: cardHeight,
               borderColor: selectedItem === item ? '#e0e0e0' : item?.ocrDone === 'n' ? '#ffb034' : '#8cff51'
            }}
         >
            <CardContent
               sx={{
                  width: '100%',
                  height: '100%',
               }}
            >
               <Stack height={'100%'} width={'100%'} direction={'row'} alignItems={'center'} alignContent={'center'}
                      justifyContent={'center'}>
                  <Stack
                     alignItems={'center'}
                     justifyContent={'center'}
                     sx={{
                        width: cardHeight * 0.7,
                        height: cardHeight * 0.7
                     }}
                  >
                     <Feed
                        sx={{
                           width: cardHeight * 0.6,
                           height: cardHeight * 0.6,
                           color: '#ffffff'
                        }}
                     />
                  </Stack>

                  <Typography
                     sx={{fontSize: 16, fontWeight: 'bold', marginLeft: 1, width: 250, textJustify: 'left'}}
                     component="h2"
                  >
                     {item?.originalFileName}
                  </Typography>

               </Stack>
            </CardContent>
         </Card>
      </>
   )
}