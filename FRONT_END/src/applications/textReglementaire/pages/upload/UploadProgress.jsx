import {CircularProgress} from "@mui/material";


const CircularUploadProgress = ({percentage}) => {

    return (
        <CircularProgress value={percentage}>

        </CircularProgress>
    )
}
export default CircularUploadProgress ;