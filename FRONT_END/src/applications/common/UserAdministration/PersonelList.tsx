import {useState} from "react";
import {
   Box,
   Dialog,
   DialogTitle,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   ListItemText,
   Typography
} from "@mui/material";
import UserDetails from "./user/UserDetails";
import SkeletonList from "./SkeletonList";
import AvatarPhoto from "./AvatarPhoto";
import {TOOLS} from "../../../redux/RtkQueryApis/constants";
import * as React from "react";


const PersonelList = () => {

   const [selectedPerson, setSelectedPerson] = useState<EntityModelDPersonnelDto | undefined>();
   const [popupOpen, setPopupOpen] = useState(false);

   function handleClick(person: EntityModelDPersonnelDto | undefined): void {

      // @ts-ignore
      setSelectedPerson(() => person);
      setPopupOpen(true);

   }

   const {data, isLoading, error} = useGetAllPagedQuery({
      pageable: {
         size: 50,
         page: 0,
      }
   })


   return (
      <Box>

         <Dialog open={popupOpen}>
            <DialogTitle>{
               selectedPerson?.noma + ' ' + selectedPerson?.pnoma
            }</DialogTitle>
            {
               selectedPerson && <UserDetails handleClose={() => setPopupOpen(false)} personel={selectedPerson}/>
            }
         </Dialog>

         {
            isLoading && <SkeletonList size={5}/>
         }
         {
            error && JSON.stringify(error)
         }
         <List dense>
            {
               data?._embedded?.dPersonnelDtoList?.map((person) => {


                  // @ts-ignore
                  return (
                     <ListItemButton
                         sx={{
                           padding: 0
                        }}
                         selected={selectedPerson === person.matricule}
                         onClick={() => handleClick(person)}>
                        <ListItem
                            sx={{
                              padding: 0.5
                           }}
                        >
                           <ListItemAvatar>
                              <AvatarPhoto imageSize={2200} matricule={person.matricule} size={200} avatarVariant={'rounded'}/>
                           </ListItemAvatar>
                           <ListItemText
                               sx={{
                                 padding: 0,
                                 margin: 0
                              }}
                               primary={
                                 <Typography variant={'h6'} fontWeight={'bold'}>
                                    {
                                       person.noma + ' ' + person.pnoma
                                    }
                                 </Typography>
                              }
                               secondary={TOOLS.formatMatricule(person.matricule)}
                           >

                           </ListItemText>
                        </ListItem>
                     </ListItemButton>

                  )
               })
            }
         </List>
      </Box>
   )

}

export default PersonelList;