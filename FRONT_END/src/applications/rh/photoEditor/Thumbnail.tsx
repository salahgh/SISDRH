import {lighten, Paper, Stack, Typography} from "@mui/material";
import {buildPhotoSrc} from "../../../resources/ASSETS";
import {PhotoByMatriculeQuery} from "../../../_generated_gql_/graphql";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';
import {Theme} from "@mui/material/styles";

export const Thumbnail = ({
                              selectedPhoto,
                              thumbSize
                          }: { selectedPhoto: PhotoByMatriculeQuery["photoByMatricule"][0] }) => {

    const thumb = selectedPhoto?.thumbnails?.filter((thumb) => {
        return thumb.thumbSize == thumbSize
    })?.[0];

    return (
        <Stack spacing={1} justifyContent={'center'} alignItems={'center'}>
            {
                thumb ? <img src={buildPhotoSrc(thumb.thumbData, selectedPhoto.format)}
                    style={{width: 140, height: 140}}
                /> : <Paper
                    sx={{
                        height: 140,
                        width: 140,
                        bgcolor: (theme: Theme) => lighten(theme.palette.warning.light, 0.5)
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Stack
                        width={'100%'}
                        height={'100%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <BrokenImageIcon
                            sx={{width: 50, height: 50, color: (theme: Theme) => theme.palette.warning.dark}}/>
                    </Stack>
                </Paper>
            }
            <Typography> {thumbSize} </Typography>
        </Stack>
    )
}