import { Dispatch, SetStateAction } from "react";
import { RoleListItem } from "../roles/RoleListItem";
import { UserQuery } from "../../../../_generated_gql_/graphql.ts";
import { CircularProgress, List } from "@mui/material";

export function ListOFRoles({
  roles,
  selectedRoleId,
  setSelectedRoleId,
  hilight = "",
}: {
  roles?: UserQuery["user"]["roles"];
  selectedRoleId?: string | null;
  setSelectedRoleId?: Dispatch<SetStateAction<string | null>>;
  hilight?: string;
}) {
  return (
    <List dense={true}>
      {roles?.map((role) => (
        <RoleListItem
          isSelected={role?.id === selectedRoleId}
          setSelectedRoleId={setSelectedRoleId}
          displayId={false}
          role={role}
          hilight={hilight}
        />
      ))}
      {!roles && <CircularProgress></CircularProgress>}
    </List>
  );
}
