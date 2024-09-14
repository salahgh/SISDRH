import { TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";

export const CreateCourrierTabHeader = ({ onChange, value }) => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <TabList aria-label="lab API tabs example" onChange={onChange}>
        <Tab label={"tab1"} value={1}></Tab>
        <Tab label={"tab1"} value={2}></Tab>
      </TabList>
    </Box>
  );
};
