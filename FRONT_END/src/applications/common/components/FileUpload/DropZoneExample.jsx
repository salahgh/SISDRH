import React, {useCallback, useMemo, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import {Box, Paper, Stack, Typography} from "@mui/material";
import {acceptStyle, baseStyle, focusedStyle, img, rejectStyle, thumb, thumbInner} from "./DropZoneStyles";
import {blueGrey} from "@mui/material/colors";
import {CloudUpload} from "@mui/icons-material";

function MyDropzone() {

    const [binaryStr, setBinaryStr] = useState([]);
    const [files, setFiles] = useState([]);
    const [filesUris, setFilesUris] = useState([]);
    const [numPages, setNumPages] = React.useState(null);
    const [pageNumber, setPageNumber] = React.useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    const onDrop = useCallback((acceptedFiles) => {


        setBinaryStr([])
        setFiles([])
        setFilesUris([])
        acceptedFiles.forEach((file) => {

            setFiles((old) => [...old, file])
            setFilesUris((old) => [...old, URL.createObjectURL(file)])
            const reader = new FileReader()
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                console.log('loaded ' + file)
                // Do whatever you want with the file contents
                setBinaryStr((old) => [...old, reader.result])
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            onDrop,
            accept: {
                // 'image/png': ['.png', '.jpeg'],
                // 'application/pdf': ['.pdf'],
            }
        }
    )

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    const thumbs = filesUris.map(fileUri => (
        <div style={thumb} key={fileUri}>
            <div style={thumbInner}>
                <img
                    src={fileUri}
                    style={img}
                    // Revoke data uri after image is loaded
                    // onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </div>
        </div>
    ));

    const renderFiles = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    console.log(filesUris)

    return (
        <>
            <Box sx={{margin: 1}} {...getRootProps()}>
                <input {...getInputProps()} />
                <Stack onClick={() => console.log('clicked')} sx={{
                    bgcolor: blueGrey[100],
                    width: '100%',
                    height: 200,
                    borderWidth: 3,
                    borderStyle: 'dotted',
                    borderRadius: 5,
                    padding: 1
                }}
                       alignItems={'center'}
                >
                    <Typography variant={'h5'} color={blueGrey[500]}>Browse file to upload</Typography>
                    <CloudUpload sx={{width: 90, height: 90, color: blueGrey[500]}}/>
                    <Typography variant={'h6'} color={blueGrey[500]}>Supported files JPG , PDF ...</Typography>
                </Stack>
            </Box>

            <Paper>
                {renderFiles}
            </Paper>

            <Paper>
                {thumbs}
            </Paper>

            <Paper sx={{bgcolor: '#ee5d5d', height: 500, width: 400}}>
                {
                    <iframe style={{
                        height: 500,
                        width: 400
                    }} src={filesUris[0]}/>
                }
            </Paper>
        </>

    )


}

export default MyDropzone;
