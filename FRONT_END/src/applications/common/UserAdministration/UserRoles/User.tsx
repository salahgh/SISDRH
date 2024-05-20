import { useLocation } from "react-router-dom";
import AvatarPhoto from "../AvatarPhoto";
import {
  Button,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { FormDialogue } from "../../components/dialogs/FormDialogue.tsx";
import { useEffect, useState } from "react";
import { GetStackEditable } from "../GetStackEditable";
import {
  PrivilegesEnum,
  RolesEnum,
  UserAddPrivilegeDocument,
  UserAddPrivilegeRestrictionDocument,
  UserAddRoleDocument,
  UserDeletePrivilegeDocument,
  UserDeletePrivilegeRestrictionDocument,
  UserDocument,
} from "../../../../_generated_gql_/graphql";
import { useMutation, useQuery } from "@apollo/client";
import { AddCircleOutline } from "@mui/icons-material";
import { ListOFRoles } from "../user/ListOFRoles";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications";
import { RoleListItem } from "../roles/RoleListItem";
import ListOFPrevileges from "../user/ListOFPrevileges";
import ASSETS from "../../../../resources/ASSETS";

const User = ({ matricule }: { matricule?: string | null }) => {
  const [addRolesOpen, setAddRolesOpen] = useState<boolean>(false);
  const [addPrivilegeOpen, setAddPrivilegeOpen] = useState<boolean>(false);
  const [addPrivilegeRestrictionOpen, setAddPrivilegeRestrictionOpen] =
    useState<boolean>(false);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const location = useLocation();

  const {
    data: user,
    loading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useQuery(UserDocument, {
    variables: {
      matricule: matricule,
    },
  });

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

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

  const handleDeletePrivilege = (privilege) => {
    userDeletePrivilege({
      variables: {
        userName: matricule,
        privilegeName: privilege?.name,
      },
    })
      .then((r) => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  const handleDeletePrivilegeRestriction = (privilege) => {
    userDeletePrivilegeRestriction({
      variables: {
        userName: matricule,
        privilegeName: privilege?.name,
      },
    })
      .then((r) => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

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

  useEffect(() => {
    refetchUser();
  }, [matricule]);

  return (
    <>
      <FormDialogue
        title={"ajouter des roles"}
        content={
          <List>
            {Object.values(RolesEnum).map((item, index) => {
              return (
                <ListItemButton
                  onClick={() => {
                    addRoleMutation({
                      variables: { userName: matricule, roleName: item },
                    })
                      .then((result) => {
                        handleShowInfoSnackBar("role " + item + " added");
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
        open={addRolesOpen}
        setOpen={setAddRolesOpen}
      />

      <FormDialogue
        title={"ajouter des roles"}
        content={
          <List>
            {Object.values(PrivilegesEnum).map((item, index) => {
              return (
                <ListItemButton
                  onClick={() => {
                    userAddPrivilege({
                      variables: { username: matricule, privilegeName: item },
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
        open={addPrivilegeOpen}
        setOpen={setAddPrivilegeOpen}
      />

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
      <Stack
        direction={"row"}
        sx={{ width: "100%" }}
        spacing={1}
        padding={1}
        height={"100%"}
      >
        <Stack sx={{ width: 210 }} alignItems={"center"}>
          <AvatarPhoto
            size={160}
            matricule={user?.user?.personnel?.matricule}
            imageSize={2500}
            avatarVariant={"rounded"}
            borderRadius={10}
          />
          <GetStackEditable
            username={user?.user?.personnel?.matricule}
          ></GetStackEditable>
        </Stack>
        <Stack sx={{ width: "25%" }} spacing={2}>
          <Button
            startIcon={<AddCircleOutline />}
            variant={"contained"}
            onClick={() => setAddRolesOpen(true)}
          >
            ajouter
          </Button>
          {user?.user?.roles?.length === 0 ? (
            <div>
              <img
                src={ASSETS.emptyInbox}
                alt={"empty"}
                style={{ width: "70px" }}
              />
            </div>
          ) : (
            <>
              <ListOFRoles
                setSelectedRoleId={setSelectedRoleId}
                selectedRoleId={selectedRoleId}
                roles={user?.user?.roles}
              />
            </>
          )}
        </Stack>
        <Stack sx={{ width: "25%" }}>
          {user?.user?.privileges?.length === 0 ? (
            <div>
              <img
                src={ASSETS.emptyInbox}
                alt={"empty"}
                style={{ width: "70px" }}
              />
            </div>
          ) : (
            <>
              {selectedRoleId && (
                <div>
                  <RoleListItem
                    role={
                      user?.user?.roles?.filter(
                        (role) => role?.id === selectedRoleId,
                      )[0]
                    }
                    displayId={true}
                  />
                  <ListOFPrevileges
                    privileges={
                      user?.user?.roles?.filter(
                        (role) => role?.id === selectedRoleId,
                      )[0]?.privileges
                    }
                  />
                </div>
              )}
            </>
          )}
        </Stack>
        <Stack sx={{ width: "25%" }}>
          <Button
            variant={"contained"}
            onClick={() => setAddPrivilegeOpen(true)}
          >
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

        <Stack sx={{ width: "25%" }}>
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
      </Stack>
    </>
  );
};

export default User;
