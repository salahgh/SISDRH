import {Box, Skeleton} from "@mui/material";
import * as React from "react";


const SkeletonList = (props: { size: any; }) => {
    const {size} = props

    let array = new Array(size)

    for (let i = 0; i < size; i++) {
        array[i] = i + 1;
    }

    return <Box>
        {
            <>
                {
                    array.map((item) => {

                            return (
                                <>
                                    <Skeleton variant="rectangular" width={210} height={60}/>
                                    <Box height={10}/>
                                </>

                            )
                        }
                    )
                }
            </>

        }
    </Box>
}

export default SkeletonList ;