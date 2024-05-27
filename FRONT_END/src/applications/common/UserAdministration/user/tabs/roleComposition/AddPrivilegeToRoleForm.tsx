import { useMutation, useQuery } from "@apollo/client";
import {
  AddPrivilegeToRoleDocument,
  AllPrivilegesDocument,
  DeletePrivilegeFromRoleDocument,
  FindPrivilegesByRoleIdDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { Stack } from "@mui/material";
import ListOFPrevileges from "../../../privileges/ListOFPrevileges.tsx";
import useSnackBarNotifications from "../../../../notifications/useSnackBarNotifications.tsx";
import { useEffect, useState } from "react";

export const AddPrivilegeToRoleForm = ({ roleId }) => {
  const { handleShowInfoSnackBar, handleShowErrorSnackBar } =
    useSnackBarNotifications();

  const { data: privileges, loading: loadingRolePrivileges } = useQuery(
    FindPrivilegesByRoleIdDocument,
    {
      variables: {
        roleId: roleId,
      },
    },
  );

  const { data: allPrivileges } = useQuery(AllPrivilegesDocument);

  const [filteredPrivileges, setFilteredPrivileges] = useState([]);

  useEffect(() => {
    console.log("effect ...");
    if (allPrivileges && privileges) {
      setFilteredPrivileges(
        allPrivileges?.allPrivileges?.filter(
          (item) =>
            privileges?.findPrivilegesByRoleId?.findIndex(
              (i) => i?.id === item?.id,
            ) === -1,
        ),
      );
    }
  }, [allPrivileges, privileges, loadingRolePrivileges]);

  const [addPrivilegeToRole, { loading: addingPrivilegeToRole }] = useMutation(
    AddPrivilegeToRoleDocument,
    {
      refetchQueries: [
        {
          query: FindPrivilegesByRoleIdDocument,
          variables: {
            roleId: roleId,
          },
        },
      ],
    },
  );

  const handleClick = (privilegeName) => {
    addPrivilegeToRole({
      variables: {
        privilegeId: privilegeName,
        roleId: roleId,
      },
    })
      .then(() => handleShowInfoSnackBar("success"))
      .catch((e) => handleShowErrorSnackBar(JSON.stringify(e)));
  };

  return (
    <Stack>
      <ListOFPrevileges
        privileges={filteredPrivileges}
        handleClick={handleClick}
        disabled={addingPrivilegeToRole}
      ></ListOFPrevileges>
    </Stack>
  );
};
