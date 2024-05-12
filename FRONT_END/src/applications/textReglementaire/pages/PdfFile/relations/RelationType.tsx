import { Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";

export const RelationType = ({ libTypRelationFr, id }) => {
  return (
    <ToggleButton value={id}>
      <div
        style={{ width: 200, height: 100 }}
        className={"flex flex-row justify-center items-center"}
      >
        <Typography>{libTypRelationFr}</Typography>
      </div>
    </ToggleButton>
  );
};
