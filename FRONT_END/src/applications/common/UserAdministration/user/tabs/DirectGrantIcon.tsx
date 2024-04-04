import {Person} from "@mui/icons-material";
import ASSETS from "../../../../../resources/ASSETS";
import {Box} from "@mui/material";
import React from "react";

export const DirectGrantIcon = () =>  {
    return(
        <Box sx={{
            "position": "relative"
        }}
        >
            <Person sx={{
                "color": "#2ea100",
                "width": 60,
                "height": 60
            }}
            />

            <img
                alt="PDF_64"
                src={ASSETS.PDF_64}
                style={{
                    "width": 25,
                    "top": 35,
                    "left": 45,
                    "position": "absolute"
                }}
            />

            <img
                alt="PDF_64"
                src={ASSETS.PDF_64}
                style={{
                    "width": 25,
                    "left": 40,
                    "top": 25,
                    "position": "absolute"
                }}
            />
        </Box>
    )
}
