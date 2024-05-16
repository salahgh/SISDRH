import { Box, Stack, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { TedDataGrid } from "./TedDataGrid.tsx";
import { Organigram } from "./organigramme/Organigram.tsx";
import React from "react";

export const Tabs = () => {
  const [value, setValue] = React.useState("3");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack flex={1}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList aria-label="lab API tabs example" onChange={handleChange}>
            <Tab
              // icon={tab.icon}
              label={"TED"}
              // sx={tab.sx}
              value={"1"}
            ></Tab>
            <Tab
              // icon={tab.icon}
              label={"ORGANIGRAMME"}
              // sx={tab.sx}
              value={"2"}
            ></Tab>
          </TabList>
        </Box>

        <TabPanel sx={{ padding: 1 }} value="1">
          <TedDataGrid />
        </TabPanel>

        <TabPanel sx={{ padding: 1 }} value="2">
          <Organigram />
        </TabPanel>
      </TabContext>
    </Stack>
  );
};
