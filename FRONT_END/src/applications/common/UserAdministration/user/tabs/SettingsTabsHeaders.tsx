import { Box, Tab } from "@mui/material";
import { TabList } from "@mui/lab";
import React from "react";
import { useGetTabsArray } from "../useGetTabsArray.tsx";

interface TabsProps {
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  value: string;
}

export const SettingsTabsHeaders = (props: TabsProps) => {
  const { onChange, value } = props;
  const tabs = useGetTabsArray(value);

  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <TabList aria-label="lab API tabs example" onChange={onChange}>
        {tabs.map((tab) => {
          return (
            <Tab
              icon={tab.icon}
              label={tab.label}
              sx={tab.sx}
              value={tab.value}
            ></Tab>
          );
        })}
      </TabList>
    </Box>
  );
};
