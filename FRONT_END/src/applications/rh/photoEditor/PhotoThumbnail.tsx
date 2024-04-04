import {PhotoByMatriculeQuery} from "../../../_generated_gql_/graphql";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Thumbnail} from "./Thumbnail";
import {Dispatch, SetStateAction} from "react";
import {PhotoPreview} from "./PhotoEditorDialogue";


interface PhotoThumbnailProps {
    selectedPhoto: PhotoByMatriculeQuery["photoByMatricule"][0] ,
    setSelectedPreview : Dispatch<SetStateAction<PhotoPreview>>
}

const thumbSizes = ['100', '200', '500', '1000', '2100', '2200', '2500', '2000']

export const PhotoThumbnail = (props: PhotoThumbnailProps) => {

    const {selectedPhoto , setSelectedPreview} = props

    return (
        <Grid2 container={true} spacing={2}>
            {
                thumbSizes?.map((thumbSize) => {
                    return (
                        <Grid2 lg={3} sm={3} md={3} xl={3} onDoubleClick={() => setSelectedPreview({
                            format : selectedPhoto.format ,
                            photoData : selectedPhoto?.thumbnails?.filter((thumb) => {
                                return thumb.thumbSize == thumbSize
                            })?.[0].thumbData ,
                            photoSize : thumbSize
                        })}>
                            <Thumbnail thumbSize={thumbSize} selectedPhoto={selectedPhoto}/>
                        </Grid2>
                    )
                })
            }
        </Grid2>
    )
}

