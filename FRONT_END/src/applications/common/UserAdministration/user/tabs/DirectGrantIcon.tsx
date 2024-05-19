import { Person } from "@mui/icons-material";
import ASSETS from "../../../../../resources/ASSETS";
import { Box } from "@mui/material";
import React from "react";

export const DirectGrantIcon = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Person
        sx={{
          color: "#2ea100",
          width: 50,
          height: 50,
        }}
      />

      <img
        alt="PDF_64"
        src={ASSETS.PDF_64}
        style={{
          width: 22,
          top: 30,
          left: 42,
          position: "absolute",
        }}
      />

      <img
        alt="PDF_64"
        src={ASSETS.PDF_64}
        style={{
          width: 22,
          left: 35,
          top: 20,
          position: "absolute",
        }}
      />
    </Box>
  );
};
