import * as React from "react";
import { Paper, Stack } from "@mui/material";
import SettingTabs2 from "./tabs/SettingTabs2";

const SettingTabs = () => {
  return (
    <Stack direction={"row"} sx={{ height: "100%" }} flexGrow={1} spacing={2}>
      <Paper sx={{ width: "100%", height: "100%", padding: 0 }}>
        <SettingTabs2></SettingTabs2>
      </Paper>
    </Stack>
  );
};

export default SettingTabs;
