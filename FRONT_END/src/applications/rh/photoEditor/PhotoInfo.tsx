import {Stack, TextField, Typography} from "@mui/material";
import {Photo} from "../../../_generated_gql_/graphql";


export const PhotoInfo = ({photo} : {photo : Photo}) => {

    return(
        <Stack spacing={1}>
            <TextField size={'small'} disabled={true} label={'translateX'} value={photo.translateX}></TextField>
            <TextField size={'small'} disabled={true} label={'translateY'} value={photo.translateY}></TextField>
            <TextField disabled={true} size={'small'} label={'width'} value={photo.width}></TextField>
            <TextField size={'small'} disabled={true} label={'height'} value={photo.height}></TextField>
            <TextField size={'small'} disabled={true} label={'format'} value={photo.format}></TextField>
        </Stack>
    )
}