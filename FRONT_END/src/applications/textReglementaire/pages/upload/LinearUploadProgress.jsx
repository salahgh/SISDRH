import {LinearProgress} from "@mui/material";


const LinearUploadProgress = ({percentage}) => {
    return (
        <LinearProgress
            value={percentage}
        />
    )
}

export default LinearUploadProgress ;