import {useSelector} from "react-redux";
import {FetchResult, useMutation, useQuery} from "@apollo/client";
import {
   CreatePhotoDocument,
   CreatePhotoMutation,
   PamOff2024,
   PhotoByMatriculeDocument
} from "../../_generated_gql_/graphql";
import {Paper, Stack} from "@mui/material";
import {buildPhotoSrc} from "../../resources/ASSETS";
import {MyAvatarEditor} from "../allAps/components/MyAvatarEditor";
import {LoadingButton} from "@mui/lab";
import {useState} from "react";
import useSnackBarNotifications from "../allAps/notifications/useSnackBarNotifications";

export interface CroppingRectangle {
   x: number,
   y: number,
   width: number,
   height: number,
   rotation: number
}

export const PhotoEditing = ({selectedPersonnel}) => {

   const {data: photo, loading, error, refetch} = useQuery(PhotoByMatriculeDocument, {
      variables: {
         matricule: selectedPersonnel?.matricule
      }
   })

   const [trigger, {data, loading: creatingPhoto, error: errorCreatingPhoto}] = useMutation(CreatePhotoDocument, {
      refetchQueries: [{
         query: PhotoByMatriculeDocument, variables: {
            matricule: selectedPersonnel?.matricule
         }
      }]
   })

   const [croppingRectangle, setCroppingRectangle] = useState<CroppingRectangle | null>(null);

   const {handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar} = useSnackBarNotifications()

   const handleSave = () => {
      trigger({
         variables: {
            ff: {
               translateX: croppingRectangle?.x,
               translateY: croppingRectangle?.y,
               width: croppingRectangle?.width,
               height: croppingRectangle?.height,
               rotation: croppingRectangle?.rotation,
               photoData: photo?.photoByMatricule?.photoData as string,
               format: photo?.photoByMatricule?.format,
               personnel: {
                  matricule: photo?.photoByMatricule?.personnel?.matricule
               }
            }
         }
      }).then((r) => {
         handleShowInfoSnackBar('success')
         setDetectedPhoto(r)
      })
         .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)))
   }

   const [detectedPhoto, setDetectedPhoto] = useState<FetchResult<CreatePhotoMutation> | null>(null);


   return (
      <Stack
          height={'calc(100vh - 70px)'}
          alignItems={'center'}
          padding={3}
          spacing={3}
      >
         <Paper>
            <LoadingButton
                variant={'contained'}
                onClick={handleSave}
            >
               save
            </LoadingButton>
            {
               detectedPhoto && <img
                   src={
                       buildPhotoSrc(
                          detectedPhoto?.data?.createPhoto?.photo?.photoData,
                          detectedPhoto?.data?.createPhoto?.photo?.format
                       )}
                   style={{
                       width: 500, height: 500, objectFit: 'contain'
                    }}
                />
            }
            {/*<img*/}
            {/*   src={buildPhotoSrc(photo?.photoByMatricule?.th?.[0]?.thumbData, photo?.photoByMatricule?.format)}/>*/}
            <MyAvatarEditor
                photo={buildPhotoSrc(photo?.photoByMatricule?.photoData, 'jpg')}
                croppingRectangle={croppingRectangle}
                setCroppingRectangle={setCroppingRectangle}
                serverPreview={buildPhotoSrc(photo?.photoByMatricule?.photoData, 'jpg')}
            />
         </Paper>
      </Stack>
   )
}

