import {
   Box,
   Card, CardActionArea,
   CardContent,
   CardMedia,
   Skeleton,
   Typography
} from "@mui/material";
import {NetWorkErrorComponent} from "./errors/NetWorkErrorComponent";
import {TOOLS} from "../redux/RtkQueryApis/constants";
import { DPersonnelDto, useGetPhotoQuery} from "../redux/mainApi";
import {useTheme} from "@mui/material/styles";

const PersonDetails = ({
                          person,
                          width ,
                          handleSelection,
                          selectedPerson
                       }:
                          {
                             person: DPersonnelDto | undefined,
                             width?: number ,
                             handleSelection : (selectedPerson: DPersonnelDto | undefined) => void,
                             selectedPerson? : DPersonnelDto | undefined

                          }) => {

   const matricule = person ? person.matricule ? person.matricule : ' ' : ' '
   const {data: photo, error, isFetching} = useGetPhotoQuery({
      matricule: matricule,
      size: 500
   })

   const theme = useTheme()
   const width_ = width ? width : 300

   // @ts-ignore
   return (
      <Card elevation={5} sx={{
         width: width_,
         transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
         })
      }}>
         {
            person && error && <NetWorkErrorComponent error={error} size={140}/>
         }
         {
            !person && <div>select a person</div>
         }
         {
            person && !error &&
            <>
               <CardActionArea
               onClick={() => handleSelection(person)}
               >
                  {
                     !isFetching ?
                        <CardMedia
                           component="img"
                           height={width_ * 1.2}
                           width={width_}
                           image={TOOLS.getSrcFromBase64String(photo?.data)}
                           alt={matricule}
                        /> : <Box sx={{height: 1.2 * width_}}>
                           <Skeleton
                              variant={'circular'}
                              sx={{height: 1.2 * width_}}
                           />
                        </Box>
                  }
                  <CardContent>
                     <Typography variant="h5">
                        {
                           // @ts-ignore
                           person.noma + ' ' + person.pnoma
                        }
                     </Typography>
                     <Typography variant="h6">
                        {TOOLS.formatMatricule(person.matricule)}
                     </Typography>
                  </CardContent>

               </CardActionArea>
            </>
         }
      </Card>
   )
}
export default PersonDetails