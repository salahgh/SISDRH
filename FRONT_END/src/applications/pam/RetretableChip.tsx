import {Stack, Typography} from "@mui/material";
import * as React from "react";


export const RetretableChip = ({matricule}: { matricule?: String }) => {

    return (
        <>
            {
                matricule.slice(0, 4) <= 1999 && <Stack sx={{
                    width: 25, height: 25,
                    bgcolor: '#e49f83',
                    borderRadius: 2,
                }}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Typography
                        color={'#070202'}
                    > R </Typography>

                </Stack>
            }
        </>


    )
}
