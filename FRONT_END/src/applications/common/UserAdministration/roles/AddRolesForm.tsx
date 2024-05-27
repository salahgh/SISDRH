import {
  FindAllRolesByUserDocument,
  FindAllRolesDocument,
  UserAddRoleDocument,
  UserDeleteRoleDocument,
  UserDocument,
  UserQuery,
} from "../../../../_generated_gql_/graphql.ts";
import { useMutation, useQuery } from "@apollo/client";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications.tsx";
import { ListOFRoles } from "../user/ListOFRoles.tsx";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Matricule } from "../../components/Matricule.tsx";

export const AddRolesForm = ({
  matricule,
}: {
  matricule: string;
  roles: UserQuery["user"]["roles"];
}) => {
  const { data: allRoles } = useQuery(FindAllRolesDocument);
  const [selectedRoleId, setSelectedRoleId] = useState();

  const { data: userRoles } = useQuery(FindAllRolesByUserDocument, {
    variables: {
      userName: matricule,
    },
  });

  const [addRoleMutation] = useMutation(UserAddRoleDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
      {
        query: FindAllRolesByUserDocument,
        variables: {
          userName: matricule,
        },
      },
    ],
  });

  const [deleteRole] = useMutation(UserDeleteRoleDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
      {
        query: FindAllRolesByUserDocument,
        variables: {
          userName: matricule,
        },
      },
    ],
  });

  const { handleShowGraphQlErrorSnackBar } = useSnackBarNotifications();

  const handleClick = (roleName: string) => {
    addRoleMutation({
      variables: {
        roleName: roleName,
        userName: matricule,
      },
    }).catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  const handleDelete = (roleName: string) => {
    deleteRole({
      variables: {
        roleName: roleName,
        userName: matricule,
      },
    }).catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  const [filteredRoles, setFilteredRoles] = useState([]);

  useEffect(() => {
    if (allRoles && userRoles) {
      setFilteredRoles(
        allRoles?.findAllRoles?.filter(
          (item) =>
            userRoles?.findAllRolesByUser?.findIndex(
              (i) => i?.id === item?.id,
            ) === -1,
        ),
      );
    }
  }, [allRoles, userRoles]);

  return (
    <Stack direction={"row"} spacing={1} padding={1}>
      <Stack width={"33%"}>
        <ListOFRoles
          roles={filteredRoles}
          selectedRoleId={selectedRoleId}
          setSelectedRoleId={setSelectedRoleId}
          handleClick={handleClick}
        ></ListOFRoles>
      </Stack>
      <Stack width={"33%"}>
        <Matricule matricule={matricule}></Matricule>
      </Stack>
      <Stack width={"33%"}>
        <ListOFRoles
          handleDelete={handleDelete}
          roles={userRoles?.findAllRolesByUser}
        ></ListOFRoles>
      </Stack>
    </Stack>
  );
};
