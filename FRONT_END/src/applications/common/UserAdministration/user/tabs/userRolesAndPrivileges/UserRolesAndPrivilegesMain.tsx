import { Paper, Stack } from "@mui/material";
import * as React from "react";
import UsersDataGrid from "./UsersDataGrid.tsx";
import { UserHabitationsConfidentiality } from "./UserHabitationsConfidentiality.tsx";
import { UserRoles } from "./UserRoles.tsx";
import { SelectedRolePrivileges } from "./SelectedRolePrivileges.tsx";
import { DirectUserPrivileges } from "./DirectUserPrivileges.tsx";
import { useState } from "react";
import { DirectUserRevokePrivilege } from "./DirectUserRevokePrivilege.tsx";

export const UserRolesAndPrivilegesMain = () => {
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  return (
    <Stack direction={"row"} sx={{ padding: 0, height: "100%" }} spacing={1}>
      <Stack width={"20%"}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
          <UsersDataGrid></UsersDataGrid>
        </Paper>
      </Stack>
      <Stack width={"20%"}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
          <UserHabitationsConfidentiality />
        </Paper>
      </Stack>
      <Stack width={"40%"}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
          <Stack spacing={1} direction={"row"} width={"100%"}>
            <UserRoles
              setSelectedRoleId={setSelectedRoleId}
              selectedRoleId={selectedRoleId}
            ></UserRoles>
            <SelectedRolePrivileges
              selectedRoleId={selectedRoleId}
            ></SelectedRolePrivileges>
          </Stack>
        </Paper>
      </Stack>
      <Stack width={"20%"}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
          <DirectUserPrivileges />
        </Paper>
      </Stack>
      <Stack width={"20%"}>
        <Paper sx={{ width: "100%", height: "100%", overflow: "auto" }}>
          <DirectUserRevokePrivilege />
        </Paper>
      </Stack>
    </Stack>
  );
};
