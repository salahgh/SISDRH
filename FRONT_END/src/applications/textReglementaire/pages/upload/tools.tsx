import {DownloadDone, Error, ErrorOutline, Upload} from "@mui/icons-material";
import {CircularProgress} from "@mui/material";
import {green, orange, red} from "@mui/material/colors";
import * as React from "react";
import { UPLOAD_STATUS } from "./uploadMainPage/constants.ts";

export const getStatusIcon = (status: string) => {
    switch (status) {
        case UPLOAD_STATUS.NEW :
            return <Upload fontSize={'large'}/>;
        case UPLOAD_STATUS.UPLOADING :
            return <CircularProgress/>
        case UPLOAD_STATUS.DONE_UPLOADING :
            return <DownloadDone/>
        case UPLOAD_STATUS.SUCCESS :
            return <DownloadDone sx={{color: green["900"]}}/>
        case UPLOAD_STATUS.ALREADY_EXIST :
            return <ErrorOutline sx={{color: orange["900"]}}/>
        case UPLOAD_STATUS.NEED_EDITING : return <Error fontSize={'large'} sx={{color: red["900"]}}/>
    }
}

export const getBgColor = (param: string, hoverd: boolean, selected: boolean) => {
    switch (param) {
        case UPLOAD_STATUS.NEW :
            if (!selected && !hoverd) return green['200']
            if (selected && !hoverd) return green['400']
            if (hoverd && !selected) return green['300']
            return green["600"]
        case UPLOAD_STATUS.NEED_EDITING :
            if (!selected && !hoverd) return red['200']
            if (selected && !hoverd) return red['400']
            if (hoverd && !selected) return red['300']
            return red["600"]
        case UPLOAD_STATUS.UPLOADING :
            return undefined;
        case UPLOAD_STATUS.DONE_UPLOADING :
            return undefined;
        case UPLOAD_STATUS.SUCCESS :
            if (!selected && !hoverd) return green['200']
            if (selected && !hoverd) return green['400']
            if (hoverd && !selected) return green['300']
            return green["600"]
        case UPLOAD_STATUS.ALREADY_EXIST :
            if (!selected && !hoverd) return orange['200']
            if (selected && !hoverd) return orange['400']
            if (hoverd && !selected) return orange['300']
            return orange["600"]
    }
}

export const getAvatarBgColor = (param: any) => {
    switch (param) {
        case UPLOAD_STATUS.NEW :
            return undefined;
        case UPLOAD_STATUS.UPLOADING :
            return undefined;
        case UPLOAD_STATUS.DONE_UPLOADING :
            return undefined;
        case UPLOAD_STATUS.SUCCESS :
            return green["500"];
        case UPLOAD_STATUS.ALREADY_EXIST :
            return orange["500"];
    }
}
