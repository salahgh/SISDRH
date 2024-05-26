import { PrivilegeListItem } from "./PrivilegeListItem.tsx";
import { List } from "@mui/material";
import { Privilege } from "../../../../_generated_gql_/graphql.ts";

function ListOFPrevileges({
  privileges,
  handleDelete,
  handleClick,
}: {
  privileges?: Privilege[] | undefined;
  handleDelete?: (privilegeName: string) => void;
  handleClick?: (privilegeName: string) => void;
}) {
  return (
    <List dir={"ltr"} dense={true}>
      {privileges?.map((privilege) => (
        <PrivilegeListItem
          handleDelete={handleDelete}
          privilege={privilege}
          handleClick={handleClick}
        />
      ))}
    </List>
  );
}

export default ListOFPrevileges;
