import {DPersonnelDto, EntityModelDPersonnelDto, useGetPhotoQuery} from "../../../../redux/mainApi";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {TOOLS} from "../../../../redux/RtkQueryApis/constants";


const UserDetails = ({personel, handleClose}: { personel: EntityModelDPersonnelDto | DPersonnelDto, handleClose: any }) => {

   const {data, error, isLoading} = useGetPhotoQuery({
      matricule: personel.matricule ? personel.matricule : ' ',
      size: 1000
   })

   return (
      <Card sx={{maxWidth: 300}}>
         <CardActionArea>
            <CardMedia
               component="img"
               height="400"
               width="150"
               image={TOOLS.getSrcFromBase64String(data?.data)}
               alt="green iguana"
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button size="small" color="primary" onClick={handleClose}>
               Share
            </Button>
         </CardActions>
      </Card>
   )
}

export default UserDetails