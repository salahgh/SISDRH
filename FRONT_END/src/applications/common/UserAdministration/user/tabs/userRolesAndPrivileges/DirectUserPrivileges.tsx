import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ASSETS from "../../../../../../resources/ASSETS.ts";
import ListOFPrevileges from "../../../privileges/ListOFPrevileges.tsx";
import { useMutation, useQuery } from "@apollo/client";
import {
  AllPrivilegesDocument,
  PrivilegesEnum,
  UserAddPrivilegeDocument,
  UserDeletePrivilegeDocument,
  UserDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { useState } from "react";
import useSnackBarNotifications from "../../../../notifications/useSnackBarNotifications.tsx";
import { FormDialogue } from "../../../../components/dialogs/FormDialogue.tsx";
import { selectSelectedUser } from "../../../../../../redux/features/userAdministration/userAdministrationSlice.ts";
import { CustomNoResultOverlay } from "../../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";

export const DirectUserPrivileges = () => {
  const matricule = useSelector(selectSelectedUser);

  const [addPrivilegeOpen, setAddPrivilegeOpen] = useState<boolean>(false);

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

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

  const [userDeletePrivilege] = useMutation(UserDeletePrivilegeDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
    ],
  });

  const [userAddPrivilege] = useMutation(UserAddPrivilegeDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
    ],
  });

  const handleDeletePrivilege = (privilegeName) => {
    userDeletePrivilege({
      variables: {
        userName: matricule,
        privilegeName: privilegeName,
      },
    })
      .then(() => null)
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  function handleAddPrivilege(privilegeName) {
    userAddPrivilege({
      variables: { username: matricule, privilegeName: privilegeName },
    })
      .then((r) => {
        handleShowInfoSnackBar("privilege " + privilegeName + " added");
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  }

  const { data: privilges, loading, error } = useQuery(AllPrivilegesDocument);

  return (
    <Stack sx={{ overflow: "auto" }}>
      <FormDialogue
        title={
          "إضافة إمتياز مباشر لل" +
          user?.user?.personnel?.grade?.libGradeAr +
          " " +
          user?.user?.personnel?.noma +
          " " +
          user?.user?.personnel?.pnoma
        }
        content={
          <ListOFPrevileges
            privileges={privilges?.allPrivileges}
            handleClick={handleAddPrivilege}
          ></ListOFPrevileges>
        }
        open={addPrivilegeOpen}
        setOpen={setAddPrivilegeOpen}
      />
      <Button variant={"contained"} onClick={() => setAddPrivilegeOpen(true)}>
        <Typography fontWeight={"bold"}> إضافة إمتياز مباشر</Typography>
      </Button>
      {user?.user?.privileges?.length === 0 ? (
        <div className={"flex flex-row center"}>
          <CustomNoResultOverlay width={90}></CustomNoResultOverlay>
        </div>
      ) : (
        <ListOFPrevileges
          handleDelete={handleDeletePrivilege}
          privileges={user?.user?.privileges}
        />
      )}
    </Stack>
  );
};
