import { Dispatch, SetStateAction } from "react";
import { RoleListItem } from "../roles/RoleListItem";
import { UserQuery } from "../../../../_generated_gql_/graphql.ts";
import { CircularProgress, List } from "@mui/material";

export function ListOFRoles({
  roles,
  selectedRoleId,
  setSelectedRoleId,
  hilight = "",
  handleDelete,
  handleClick,
}: {
  roles?: UserQuery["user"]["roles"];
  selectedRoleId?: string | null;
  setSelectedRoleId?: Dispatch<SetStateAction<string | null>>;
  hilight?: string;
  handleDelete?: (roleName: string) => void;
  handleClick?: (roleName: string) => void;
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
          handleDelete={handleDelete}
          handleClick={handleClick}
        />
      ))}
      {!roles && <CircularProgress></CircularProgress>}
    </List>
  );
}
