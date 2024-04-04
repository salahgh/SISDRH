import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    Typography
} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useLazyQuery} from "@apollo/client";
import {PamOff2024, PhotoByMatriculeDocument} from "../../../_generated_gql_/graphql";
import {PhotoThumbnail} from "./PhotoThumbnail";
import {buildPhotoSrc} from "../../../resources/ASSETS";
import CropFreeIcon from '@mui/icons-material/CropFree';
import {PhotoInfo} from "./PhotoInfo";
import {PhotoPanAndZoom} from "./PhotoPanAndZoom";
import CropRotateIcon from '@mui/icons-material/CropRotate';


interface PhotoEditorDialogueProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    selectedPersonnel: PamOff2024
}

export interface PhotoPreview {
    photoData: string,
    photoSize: number,
    format: string
}

export const PhotoEditorDialogue = (props: PhotoEditorDialogueProps) => {

    const {open, setOpen, selectedPersonnel} = props

    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const [trigger, {
        data: photos,
        loading,
        error
    }] = useLazyQuery(PhotoByMatriculeDocument, {variables: {matricule: selectedPersonnel?.matricule}})

    useEffect(() => {
        if (open) trigger()
    }, [open]);

    useEffect(() => {
        if (photos && photos.photoByMatricule?.length >= 0) {
            setSelectedPhoto(photos?.photoByMatricule?.[0])
        }
    }, [photos]);

    const [fullScreenPreviewOpen, setFullScreenPreviewOpen] = useState(false);
    const [selectedPreview, setSelectedPreview] = useState<PhotoPreview>({
        photoData: '', photoSize: 0, format: ''
    });

    useEffect(() => {
            setFullScreenPreviewOpen(true)
    }, [selectedPreview]);

    const handleCropFace = () => {

    }


    return (
        <Dialog open={open} fullWidth={true} maxWidth={'lg'} sx={{height: '900px'}}>
            <DialogTitle>
                <Stack direction={'row'}>
                    <Typography variant={'h4'} fontWeight={'bold'}> تعديل الصورة </Typography>
                    <Stack flex={1}></Stack>
                    <IconButton onClick={() => setOpen(false)}>
                        <Close sx={{width: 35, height: 35}}></Close>
                    </IconButton>
                </Stack>
            </DialogTitle>
            <DialogContent>
                {
                    !loading && !error && <>
                        <PhotoPanAndZoom
                            open={fullScreenPreviewOpen}
                            setOpen={setFullScreenPreviewOpen}
                            photoPreview={selectedPreview}
                        ></PhotoPanAndZoom>
                        <Stack width={'100%'} height={'100%'} spacing={1}>
                            {
                                !selectedPhoto && <div> no photos </div>
                            }
                            {
                                selectedPhoto && <Stack direction={'row'} spacing={1}>
                                    <Stack flex={2} alignItems={'center'}>
                                        <PhotoThumbnail setSelectedPreview={setSelectedPreview} selectedPhoto={selectedPhoto}/>
                                        <Stack direction={'row'} spacing={1}>
                                            <Button
                                                variant={'contained'}
                                                onClick={handleCropFace}
                                                endIcon={<CropFreeIcon/>}
                                            >
                                                التعرف التلقائي على الوجه
                                            </Button>
                                            <Button
                                                variant={'outlined'}
                                                color={'secondary'}
                                                onClick={handleCropFace}
                                                endIcon={<CropRotateIcon/>}
                                            >
                                                تعديل يدوي
                                            </Button>
                                        </Stack>
                                    </Stack>
                                    <Stack flex={1} alignItems={'center'}>
                                        <Box onDoubleClick={() => setSelectedPreview({
                                            format : selectedPhoto.format ,
                                            photoData : selectedPhoto.photoData ,
                                            photoSize : selectedPhoto.size
                                        })}>
                                            <img src={buildPhotoSrc(selectedPhoto.photoData, selectedPhoto.format)}
                                                style={{width: 300, height: 300, objectFit: 'contain'}}
                                                alt={'alt'}
                                            />
                                        </Box>
                                        <PhotoInfo photo={selectedPhoto}/>
                                    </Stack>
                                    <Stack></Stack>
                                </Stack>
                            }
                        </Stack>
                    </>
                }
                {
                    error && <NetWorkErrorComponent error={error} size={200}/>
                }
            </DialogContent>
            <DialogActions>
                <Button> ok </Button>
            </DialogActions>
        </Dialog>
    )


}
