import {Grid, Stack, Typography} from "@mui/material";

import {useQuery} from "@apollo/client"


export function GetStack({username}: { username: string }) {
   const {
      data,
      loading,
      error,
      refetch
   } = useQuery(GetLoggedInUserDocument, {
      variables: {
         userName: username
      }
   })

   useEffect(
      () => {
         refetch().then(() => null);
      }, []
   )

   const personnel = data?.user?.personnel

   return <Stack
      spacing={2}
      padding={1}
      width={400}
      justifyItems={'center'}
      justifyContent={'center'}
      alignItems={'center'}
   >
      <Stack direction={'row'} spacing={1} alignItems={'center'}>
         <ArmeAvatar width={150} armeId={data?.user?.personnel?.arme?.id}></ArmeAvatar>
         <GradeAvatar gradeId={data?.user?.personnel?.grade?.grade} width={150} armeId={10}/>
      </Stack>
      <Typography variant={'h5'} fontWeight={'bold'}>
         {
            personnel?.matricule + ' ' + personnel?.noma + ' ' + personnel?.pnoma
         }
      </Typography>

      {
         useHasAuthoritie(PrivilegesEnum.HabilitaionsProfileInfo) && <>
              <Typography variant={'h2'} fontWeight={'bold'}>
                 {
                    data?.user?.habilitation?.libHabilitationFr
                 }
              </Typography>
              <Grid container={true}
                    direction={'row'}
                    alignItems={'center'}
                    spacing={1}
                    padding={1}
              >
                 {
                    data?.user?.habilitation?.confidentialites?.map(
                       (item, index) => {
                          return (
                             <Grid item>
                                <Stack
                                   direction={'column'}
                                   justifyContent={'center'}
                                   alignItems={'center'}
                                   spacing={1}
                                >
                                   <ConfidentialiteIcon
                                      libConfidentialiteAr={item?.libConfidentialiteAr ? item?.libConfidentialiteAr : ' '}
                                   />
                                   <ConfidentialiteText
                                      libConfidentialiteAr={item?.libConfidentialiteAr ? item?.libConfidentialiteAr : ' '}
                                   />
                                </Stack>
                             </Grid>
                          )
                       }
                    )
                 }
              </Grid>
          </>
      }

   </Stack>;
}
