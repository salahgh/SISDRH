import {Avatar, Chip, Typography} from "@mui/material";
import * as React from "react";
import {CSSProperties} from "react";

export const PamChip = ({dureeN , style} : {dureeN : number , style? : CSSProperties}) => {

   if(dureeN == -1){
      return (
          <Chip
              {...style}
              variant={'outlined'}
              size={'small'}
              avatar={dureeN == -1 ? undefined
                  :
                  <Avatar sx={{bgcolor: '#fda626'}}>
                     <Typography color={'#ffffff'} fontWeight={'bold'}>{dureeN}</Typography>
                  </Avatar>
              }
              label={<Typography fontWeight={'bold'}> PAM OUI </Typography>}
              color={'warning'}
          >
          </Chip>
      )
   }

   if(dureeN == -2){
      return (
          <Chip
              {...style}
              variant={'outlined'}
              size={'small'}
              avatar={dureeN == -2 ? undefined
                  :
                  <Avatar sx={{bgcolor: (theme) => theme.palette.success.main}}>
                     <Typography color={'#ffffff'} fontWeight={'bold'}>{dureeN}</Typography>
                  </Avatar>
              }
              label={<Typography fontWeight={'bold'}> PAM NON </Typography>}
              color={'success'}
          >
          </Chip>
      )
   }

   return (
      <>
         {
            dureeN >= 3 && <Chip
                {...style}
                variant={'outlined'}
                size={'small'}
                avatar={dureeN == '-1' ? undefined
                  :
                  <Avatar sx={{bgcolor: '#fda626'}}>
                     <Typography color={'#ffffff'} fontWeight={'bold'}>{dureeN}</Typography>
                  </Avatar>
               }
                label={<Typography fontWeight={'bold'}> {'PAM'} </Typography>}
                color={'warning'}
            >
            </Chip>
         }
         {
            dureeN < 3 && dureeN >= 0 && <Typography
                textAlign={'center'}
                width={70}
                fontWeight={'bold'}>{dureeN}</Typography>
         }
      </>
   )
}