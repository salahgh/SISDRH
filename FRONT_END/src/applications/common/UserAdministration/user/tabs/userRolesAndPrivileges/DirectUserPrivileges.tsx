import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import ASSETS from "../../../../../../resources/ASSETS.ts";
import ListOFPrevileges from "../../ListOFPrevileges.tsx";
import { useMutation, useQuery } from "@apollo/client";
import {
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

  const handleDeletePrivilege = (privilege) => {
    userDeletePrivilege({
      variables: {
        userName: matricule,
        privilegeName: privilege?.name,
      },
    })
      .then(() => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  function handleAddPrivilge(item) {
    userAddPrivilege({
      variables: { username: matricule, privilegeName: item },
    })
      .then((result) => {
        handleShowInfoSnackBar("privilege " + item + " added");
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  }

  return (
    <Stack sx={{ overflow: "auto" }}>
      <FormDialogue
        title={
          "إضافة أدوار للمستخدم" +
          user?.user?.personnel?.noma +
          " " +
          user?.user?.personnel?.pnoma
        }
        content={
          <List>
            {Object.values(PrivilegesEnum).map((item, index) => {
              return (
                <ListItemButton onClick={() => handleAddPrivilge(item)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        }
        open={addPrivilegeOpen}
        setOpen={setAddPrivilegeOpen}
      />
      <Button variant={"contained"} onClick={() => setAddPrivilegeOpen(true)}>
        ACCORDER UN PRIVILEGE
      </Button>
      {user?.user?.privileges?.length === 0 ? (
        <div>
          <img
            src={ASSETS.emptyInbox}
            alt={"empty"}
            style={{ width: "70px" }}
          />
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
