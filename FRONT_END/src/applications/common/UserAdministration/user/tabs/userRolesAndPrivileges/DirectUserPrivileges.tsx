import { Button, Stack, Typography } from "@mui/material";
import ListOFPrivileges from "../../../privileges/ListOFPrevileges.tsx";
import { useMutation, useQuery } from "@apollo/client";
import {
  AllPrivilegesDocument,
  FindPrivilegesByUserNameDocument,
  UserAddPrivilegeDocument,
  UserDeletePrivilegeDocument,
  UserDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import useSnackBarNotifications from "../../../../notifications/useSnackBarNotifications.tsx";
import { FormDialogue } from "../../../../components/dialogs/FormDialogue.tsx";
import { selectSelectedUser } from "../../../../../../redux/features/userAdministration/userAdministrationSlice.ts";
import { CustomNoResultOverlay } from "../../../../../pam/mainDataGrid/CustomNoResultOverlay.tsx";
import { useEffect, useState } from "react";

export const DirectUserPrivileges = () => {
  const matricule = useSelector(selectSelectedUser);
  const [addPrivilegeOpen, setAddPrivilegeOpen] = useState<boolean>(false);

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const { data: userPrivileges, loading: loadingUserPrivileges } = useQuery(
    FindPrivilegesByUserNameDocument,
    {
      variables: {
        userName: matricule,
      },
    },
  );

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

  const [userDeletePrivilege, { loading: deletingPrivilege }] = useMutation(
    UserDeletePrivilegeDocument,
    {
      refetchQueries: [
        {
          query: UserDocument,
          variables: {
            matricule: matricule,
          },
        },
        {
          query: FindPrivilegesByUserNameDocument,
          variables: {
            userName: matricule,
          },
        },
      ],
    },
  );

  const [userAddPrivilege, { loading: addingPrivilege }] = useMutation(
    UserAddPrivilegeDocument,
    {
      refetchQueries: [
        {
          query: UserDocument,
          variables: {
            matricule: matricule,
          },
        },
        {
          query: FindPrivilegesByUserNameDocument,
          variables: {
            userName: matricule,
          },
        },
      ],
    },
  );

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
      .then(() => {
        handleShowInfoSnackBar("privilege " + privilegeName + " added");
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  }

  const { data: allPrivileges } = useQuery(AllPrivilegesDocument);
  const [filteredPrivileges, setFilteredPrivileges] = useState([]);

  useEffect(() => {
    console.log("effect ...");
    if (allPrivileges && userPrivileges) {
      setFilteredPrivileges(
        allPrivileges?.allPrivileges?.filter(
          (item) =>
            userPrivileges?.findPrivilegesByUserName?.findIndex(
              (i) => i?.id === item?.id,
            ) === -1,
        ),
      );
    }
  }, [allPrivileges, userPrivileges, loadingUserPrivileges]);

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
          <ListOFPrivileges
            privileges={filteredPrivileges}
            handleClick={handleAddPrivilege}
            disabled={
              addingPrivilege || deletingPrivilege || loadingUserPrivileges
            }
          ></ListOFPrivileges>
        }
        open={addPrivilegeOpen}
        setOpen={setAddPrivilegeOpen}
      />
      <Button variant={"contained"} onClick={() => setAddPrivilegeOpen(true)}>
        <Typography fontWeight={"bold"}> إضافة إمتياز مباشر</Typography>
      </Button>
      {userPrivileges?.findPrivilegesByUserName?.length === 0 ? (
        <div className={"flex flex-row center"}>
          <CustomNoResultOverlay width={90}></CustomNoResultOverlay>
        </div>
      ) : (
        <ListOFPrivileges
          handleDelete={handleDeletePrivilege}
          privileges={userPrivileges?.findPrivilegesByUserName}
          disabled={
            addingPrivilege || deletingPrivilege || loadingUserPrivileges
          }
        />
      )}
    </Stack>
  );
};
