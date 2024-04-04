import {Dialog, Stack} from "@mui/material";
import {useQuery} from "@apollo/client";
import {PhotoByMaticuleWithThumbsDocument, PhotoByMatriculeDocument} from "../../_generated_gql_/graphql";
import {buildPhotoSrc} from "../../resources/ASSETS";


export const ThumbnailsPreview = ({matricule}) => {

   const {data, loading, error} = useQuery(PhotoByMaticuleWithThumbsDocument, {
      variables: {
         matricule: matricule
      }
   })


   return (
      <Stack width={'100%'} spacing={1} direction={'row'} alignItems={'center'}>
         {
            data?.photoByMatricule?.thumbnails?.map((thumb) => {
               return (
                  <>
                     {
                        ( thumb?.thumbSize < 1000 || thumb?.thumbSize == 2500 )  && <img
                             src={buildPhotoSrc(thumb?.thumbData, data?.photoByMatricule?.format)}
                             style={{
                                height: 500, width: 500
                             }}
                             alt={thumb?.thumbSize + ' ' + thumb?.id}
                         />
                     }
                  </>
               )
            })
         }
         {/*<img*/}
         {/*   src={buildPhotoSrc(data?.photoByMatricule?.photoData, data?.photoByMatricule?.format)}*/}
         {/*   style={{*/}
         {/*      height: 1000, width: 1000*/}
         {/*   }}*/}
         {/*   alt={'df'}*/}
         {/*/>*/}
      </Stack>
   )
}