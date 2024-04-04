import React, {useState} from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.css";
import {Box, Button, Paper, Stack} from "@mui/material";

const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const Demo = () => {

    const [image, setImage] = useState(defaultSrc);

    const [cropData, setCropData] = useState("#");

    const [cropper, setCropper] = useState();

    const onChange = (e) => {

        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <Box sx={{width : '400' }}>

            <Stack
                direction={'column'}
                sx={{width: "100%"}}
            >
                <Stack
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    spacing={1}
                >
                    <input type="file" onChange={onChange}/>
                    <Button variant={'outlined'}>Use default img</Button>
                </Stack>

                <Stack direction={'row'} spacing={1} margin={1}>
                    <Paper sx={{flex : 2 , bgcolor : '#e58484'}} >
                        <Cropper
                            style={{height: 450, width: "100%"}}
                            zoomTo={0.3}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                            guides={true}
                        />
                    </Paper>

                    <Paper sx={{flex : 1 , bgcolor : '#e13737' }} className={"img-preview"}>


                    </Paper>
                </Stack>
            </Stack>

        </Box>
    );
};

export default Demo;
