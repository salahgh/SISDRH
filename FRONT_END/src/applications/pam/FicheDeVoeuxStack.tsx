import {FicheVoeux} from "../../_generated_gql_/graphql";
import {List, ListItem, ListItemText, Stack, Typography} from "@mui/material";

export const FicheDeVoeuxStack = ({fiche ,lang}: { fiche: FicheVoeux , lang : 'ar' , 'fr' }) => {

   switch (lang){

      case "fr" : return (
         <Stack
            width={'100%'}
            direction={'column'}
            justifyContent={'center'}
            alignItems={"center"}
            spacing={1}
         >
            <List>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite1?.abreviationFr + '/' + fiche.rhRunite1?.regionMilitaire?.libAbrRegionFr}
                     </Typography>
                     {
                        fiche?.obs1 && <Typography>
                           {fiche?.obs1}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite2?.abreviationFr + '/' + fiche.rhRunite2?.regionMilitaire?.libAbrRegionFr}
                     </Typography>
                     {
                        fiche?.obs2 && <Typography>
                           {fiche?.obs2}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite3?.abreviationFr + '/' + fiche.rhRunite3?.regionMilitaire?.libAbrRegionFr}
                     </Typography>
                     {
                        fiche?.obs3 && <Typography>
                           {fiche?.obs3}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               {
                  fiche?.obsChef && <ListItem>
                       <ListItemText primary={fiche?.obsChef}></ListItemText>
                   </ListItem>
               }
               {
                  fiche?.obsDrsn && <ListItem>
                       <ListItemText primary={fiche?.obsDrsn}></ListItemText>
                   </ListItem>
               }
               {
                  fiche?.obsBsn && <ListItem>
                       <ListItemText primary={fiche?.obsBsn}></ListItemText>
                   </ListItem>
               }
            </List>
         </Stack>
      )
      case "ar" :  return (
         <Stack
            width={'100%'}
            direction={'column'}
            justifyContent={'center'}
            alignItems={"center"}
            spacing={1}
         >
            <List>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite1?.abreviationAr + '/' + fiche.rhRunite1?.regionMilitaire?.libAbrRegionAr}
                     </Typography>
                     {
                        fiche?.obs1 && <Typography>
                           {fiche?.obs1}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite2?.abreviationAr + '/' + fiche.rhRunite2?.regionMilitaire?.libAbrRegionAr}
                     </Typography>
                     {
                        fiche?.obs2 && <Typography>
                           {fiche?.obs2}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               <ListItem>
                  <Stack width={'%100'}>
                     <Typography>
                        {fiche?.rhRunite3?.abreviationAr + '/' + fiche.rhRunite3?.regionMilitaire?.libAbrRegionAr}
                     </Typography>
                     {
                        fiche?.obs3 && <Typography>
                           {fiche?.obs3}
                         </Typography>
                     }
                  </Stack>
               </ListItem>
               {
                  fiche?.obsChef && <ListItem>
                       <ListItemText primary={fiche?.obsChef}></ListItemText>
                   </ListItem>
               }
               {
                  fiche?.obsDrsn && <ListItem>
                       <ListItemText primary={fiche?.obsDrsn}></ListItemText>
                   </ListItem>
               }
               {
                  fiche?.obsBsn && <ListItem>
                       <ListItemText primary={fiche?.obsBsn}></ListItemText>
                   </ListItem>
               }
            </List>
         </Stack>
      )
   }


}