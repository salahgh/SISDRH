import { Button, Stack, Typography } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { CustomNoResultOverlay } from "../../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { ListOFRoles } from "../../ListOFRoles.tsx";
import { AddRolesForm } from "../../../roles/AddRolesForm.tsx";
import { FormDialogue } from "../../../../components/dialogs/FormDialogue.tsx";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  FindAllRolesByUserDocument,
  UserDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectSelectedUser } from "../../../../../../redux/features/userAdministration/userAdministrationSlice.ts";

export const UserRoles = ({ setSelectedRoleId, selectedRoleId }) => {
  const matricule = useSelector(selectSelectedUser);
  const [addRolesOpen, setAddRolesOpen] = useState<boolean>(false);

  const {
    data: user,
    // loading: userLoading,
    // error: userError,
    // refetch: refetchUser,
  } = useQuery(UserDocument, {
    variables: {
      matricule: matricule,
    },
  });

  const { data: userRoles } = useQuery(FindAllRolesByUserDocument, {
    variables: {
      userName: matricule,
    },
  });

  return (
    <Stack spacing={1} flex={1}>
      <FormDialogue
        title={
          "إضافة أدوار لل" +
          user?.user?.personnel?.grade?.libGradeAr +
          " " +
          user?.user?.personnel?.noma +
          " " +
          user?.user?.personnel?.pnoma
        }
        content={
          <AddRolesForm
            roles={userRoles?.findAllRolesByUser}
            matricule={matricule}
          ></AddRolesForm>
        }
        open={addRolesOpen}
        setOpen={setAddRolesOpen}
        mode={"update"}
        maxWidth={"xl"}
        fullWidth={true}
      />
      <Button
        startIcon={<AddCircleOutline />}
        variant={"contained"}
        onClick={() => setAddRolesOpen(true)}
      >
        <Typography fontWeight={"bold"}> إضفة دور</Typography>
      </Button>
      {userRoles?.findAllRolesByUser?.length === 0 ? (
        <div
          style={{ width: "100%" }}
          className={"flex flex-row justify-center"}
        >
          <CustomNoResultOverlay width={90}></CustomNoResultOverlay>
        </div>
      ) : (
        <ListOFRoles
          setSelectedRoleId={setSelectedRoleId}
          selectedRoleId={selectedRoleId}
          roles={userRoles?.findAllRolesByUser}
        />
      )}
    </Stack>
  );
};
