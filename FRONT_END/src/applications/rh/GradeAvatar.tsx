import {Avatar, Badge, Stack, Typography} from "@mui/material";
import {getGradeImage} from "../../resources/ASSETS_GRADES";
import * as React from "react";


const GradeAvatar = ({gradeId, armeId, width, promotionNumber}) => {

    return (
        <>
            <Stack
                padding={0.3}
                sx={{
                    // bgcolor: promotionNumber >= 1 ? "#bddcc0" : null ,
                    width: width
                }}>
                <Badge
                    overlap={'circular'}
                    invisible={!promotionNumber || promotionNumber < 1}
                    badgeContent={
                        <Typography>
                            {promotionNumber}
                        </Typography>}
                    color={"info"}
                >
                    <Avatar sx={{
                        width: width,
                        height: width / 3,
                        objectFit: 'none',
                        '.MuiAvatar-img': {objectFit: 'contain', transform: 'scaleX(-1)'}
                    }}
                        variant={'rounded'}
                        src={getGradeImage(gradeId, armeId)}
                    />
                </Badge>
            </Stack>
        </>

    )
}

export default GradeAvatar