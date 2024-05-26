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
  UserAddPrivilegeRestrictionDocument,
  UserDeletePrivilegeRestrictionDocument,
  UserDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../../../redux/features/auth/userSlice.ts";
import { FormDialogue } from "../../../../components/dialogs/FormDialogue.tsx";
import useSnackBarNotifications from "../../../../notifications/useSnackBarNotifications.tsx";
import { useState } from "react";

export const DirectUserRevokePrivilege = () => {
  const matricule = useSelector(selectLoggedInUser).matricule;

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const [addPrivilegeRestrictionOpen, setAddPrivilegeRestrictionOpen] =
    useState<boolean>(false);

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

  const [userAddPrivilegeRestriction] = useMutation(
    UserAddPrivilegeRestrictionDocument,
    {
      refetchQueries: [
        {
          query: UserDocument,
          variables: {
            matricule: matricule,
          },
        },
      ],
    },
  );

  const [userDeletePrivilegeRestriction] = useMutation(
    UserDeletePrivilegeRestrictionDocument,
    {
      refetchQueries: [
        {
          query: UserDocument,
          variables: {
            matricule: matricule,
          },
        },
      ],
    },
  );

  const handleDeletePrivilegeRestriction = (privilege) => {
    userDeletePrivilegeRestriction({
      variables: {
        userName: matricule,
        privilegeName: privilege?.name,
      },
    })
      .then(() => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  return (
    <Stack>
      <FormDialogue
        title={"ajouter des roles"}
        content={
          <List>
            {Object.values(PrivilegesEnum).map((item, index) => {
              return (
                <ListItemButton
                  onClick={() => {
                    userAddPrivilegeRestriction({
                      variables: { userName: matricule, privilegeName: item },
                    })
                      .then((result) => {
                        handleShowInfoSnackBar("privilege " + item + " added");
                      })
                      .catch((error) =>
                        handleShowGraphQlErrorSnackBar(JSON.stringify(error)),
                      );
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              );
            })}
          </List>
        }
        open={addPrivilegeRestrictionOpen}
        setOpen={setAddPrivilegeRestrictionOpen}
      />
      <Button
        variant={"contained"}
        onClick={() => setAddPrivilegeRestrictionOpen(true)}
      >
        REVOQUER UN PRIVILEGE
      </Button>
      {user?.user?.privileges_restriction?.length === 0 ? (
        <div>
          <img
            src={ASSETS.emptyInbox}
            alt={"empty"}
            style={{ width: "70px" }}
          />
        </div>
      ) : (
        <ListOFPrevileges
          handleDelete={handleDeletePrivilegeRestriction}
          privileges={user?.user?.privileges_restriction}
        />
      )}
    </Stack>
  );
};
