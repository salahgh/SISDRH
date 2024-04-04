import {Box} from "@mui/material";
import ASSETS from "../../../../../resources/ASSETS";
import {People} from "@mui/icons-material";
import React from "react";

export const ParTextReglementaireIcon = () => {
    return (
        <Box sx={{
            "position": "relative"
        }}
        >
            <img
                alt="PDF_64"
                src={ASSETS.PDF_64}
                style={{"width": 60}}
            />

            <People sx={{
                "color": "#2ea100",
                "width": 26,
                "height": 26
            }}
            />
        </Box>
    )
}

