import {Dialog, DialogContent, DialogTitle} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Close} from "@mui/icons-material";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
import {buildPhotoSrc} from "../../../resources/ASSETS";
import {PhotoPreview} from "./PhotoEditorDialogue";

export const PhotoPanAndZoom = ({open , setOpen , photoPreview} : {photoPreview : PhotoPreview}) => {

    return(
        <Dialog maxWidth={'xl'} open={open} fullWidth={true} fullScreen={true}>
            <DialogTitle>
                <IconButton>
                    <Close onClick={() => setOpen(false)}></Close>
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ height : 600 }}>
                <TransformWrapper
                    initialScale={0.5}
                    initialPositionX={0}
                    initialPositionY={0}
                >
                    {
                        ({
                             zoomIn,
                             zoomOut,
                             resetTransform,
                             centerView,
                             zoomToElement,
                             ...rest
                         }) => (
                            <>
                                <div className="tools">
                                    <button onClick={() => zoomIn()}>+</button>
                                    <button onClick={() => zoomOut()}>-</button>
                                    <button onClick={() => resetTransform()}>x</button>
                                </div>
                                <TransformComponent wrapperStyle={{width: '100%'}} contentStyle={{width: '100%'}}>
                                    <img src={buildPhotoSrc(photoPreview.photoData , photoPreview.format)} style={{
                                        width : '100%' , objectFit : 'contain'
                                    }} alt={photoPreview.format}/>
                                </TransformComponent>
                            </>
                        )
                    }

                </TransformWrapper>
            </DialogContent>
        </Dialog>
    )
}