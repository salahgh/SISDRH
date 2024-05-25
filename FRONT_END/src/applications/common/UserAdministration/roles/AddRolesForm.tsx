import {
  FindAllRolesDocument,
  UserAddRoleDocument,
  UserDocument,
  UserQuery,
} from "../../../../_generated_gql_/graphql.ts";
import { useMutation, useQuery } from "@apollo/client";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications.tsx";
import { ListOFRoles } from "../user/ListOFRoles.tsx";
import { useState } from "react";
import { Stack } from "@mui/material";

export const AddRolesForm = ({
  matricule,
  roles,
}: {
  matricule: string;
  roles: UserQuery["user"]["roles"];
}) => {
  const { data: allRoles, loading, error } = useQuery(FindAllRolesDocument);

  const [selectedRoleId, setSelectedRoleId] = useState();

  const [addRoleMutation] = useMutation(UserAddRoleDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
    ],
  });

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  return (
    <Stack direction={"row"} spacing={1} padding={1}>
      <Stack width={"33%"}>
        <ListOFRoles
          roles={allRoles?.findAllRoles}
          selectedRoleId={selectedRoleId}
          setSelectedRoleId={setSelectedRoleId}
        ></ListOFRoles>
      </Stack>
      <Stack width={"33%"}>
        <div>lkdfj</div>
      </Stack>
    </Stack>
  );
};
