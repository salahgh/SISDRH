import * as React from "react";
import { Paper, Stack } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { SettingsTabsHeaders } from "./SettingsTabsHeaders.tsx";
import OcrResultUserGrants from "./UserDirectGrantsPerFile/OcrResultUserGrants.tsx";
import UserOcrResultsGrants from "./UserDirectGrantPerUser/UserOcrResultsGrants.tsx";
import RolesAsociatedPriviligesList from "./roleComposition/RolesAsociatedPriviligesList.tsx";
import DemandInscriptionManagement from "./demandeInscription/DemandeInscriptionManageemnt.tsx";
import { UserRolesAndPrivilegesMain } from "./userRolesAndPrivileges/UserRolesAndPrivilegesMain.tsx";

const SettingTabs = () => {
  const [value, setValue] = React.useState("3");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack direction={"row"} sx={{ height: "100%" }} flexGrow={1} spacing={2}>
      <Paper sx={{ width: "100%", height: "100%", padding: 0 }}>
        <Stack flex={1}>
          <TabContext value={value}>
            <SettingsTabsHeaders value={value} onChange={handleChange} />
            <TabPanel sx={{ padding: 1 }} value="1">
              <OcrResultUserGrants />
            </TabPanel>
            <TabPanel sx={{ padding: 1 }} value="2">
              <UserOcrResultsGrants />
            </TabPanel>
            <TabPanel
              sx={{ height: "calc(100vh - 165px)", padding: 1 }}
              value="3"
            >
              <UserRolesAndPrivilegesMain />
            </TabPanel>
            <TabPanel
              sx={{ height: "calc(100vh - 195px)", padding: 1 }}
              value="4"
            >
              <RolesAsociatedPriviligesList />
            </TabPanel>
            <TabPanel
              sx={{ height: "calc(100vh - 195px)", padding: 1 }}
              value="5"
            >
              <DemandInscriptionManagement />
            </TabPanel>
          </TabContext>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default SettingTabs;
