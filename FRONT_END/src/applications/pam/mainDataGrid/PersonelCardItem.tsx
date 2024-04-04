import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {FindPam2024Query, PamOff2024} from "../../../_generated_gql_/graphql";
import AvatarPhoto from "../../allAps/UserAdministration/AvatarPhoto";

type PamOff2024ElementType = FindPam2024Query['findPam2024']['content'][0];

export default function PersonelCardItem({
                                            pam2024
                                         }: {
   pam2024: PamOff2024ElementType
}) {
   return (
      <Card sx={{maxWidth: 345}}>
         <CardMedia
            component="img"
            alt="green iguana"
            height="140"
         >
            {/*<AvatarPhoto matricule={pam2024.} imageSize={} size={}*/}
         </CardMedia>
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
               Lizards are a widespread group of squamate reptiles, with over 6,000
               species, ranging across all continents except Antarctica
            </Typography>
         </CardContent>
         <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
         </CardActions>
      </Card>
   );
}
