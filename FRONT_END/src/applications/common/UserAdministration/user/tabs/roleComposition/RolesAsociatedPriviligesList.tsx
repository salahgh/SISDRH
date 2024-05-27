import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateRoleDocument,
  DeletePrivilegeFromRoleDocument,
  DeleteRoleDocument,
  DPersonnel,
  FindAllRolesDocument,
  FindPersonnelsByRoleIdDocument,
  FindPrivilegesByRoleIdDocument,
  UserDeleteRoleDocument,
  UserDocument,
} from "../../../../../../_generated_gql_/graphql.ts";
import {
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Add, AddCircle, Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { ListOFRoles } from "../../ListOFRoles.tsx";
import ListOFPrivileges from "../../../privileges/ListOFPrevileges.tsx";
import { FormDialogue } from "../../../../components/dialogs/FormDialogue.tsx";
import { CreateRoleForm } from "./CreateRoleForm.tsx";
import { FormikHelpers, FormikValues } from "formik";
import useSnackBarNotifications from "../../../../notifications/useSnackBarNotifications.tsx";
import { AddPrivilegeToRoleForm } from "./AddPrivilegeToRoleForm.tsx";
import Grid2 from "@mui/material/Unstable_Grid2";
import { Personnel } from "./Personnel.tsx";

const RolesAsociatedPriviligesList = () => {
  const [roleSearchName, setRoleSearchName] = useState<string>("");
  const [createRoleOpen, setCreateRoleOpen] = useState<boolean>(false);
  const [addPrivilegeToRoleOpen, setAddPrivilegeToRoleOpen] = useState();

  const { data: allRoles, loading: loadingAllRoles } =
    useQuery(FindAllRolesDocument);

  const [selectedRoleID, setSelectedRoleID] = useState();
  const [filteredRoles, setFilteredRoles] = useState([]);

  const { data: privileges } = useQuery(FindPrivilegesByRoleIdDocument, {
    variables: {
      roleId: selectedRoleID,
    },
  });

  const { data: rolePersonnels } = useQuery(FindPersonnelsByRoleIdDocument, {
    variables: {
      roleId: selectedRoleID,
    },
  });

  const { handleShowInfoSnackBar, handleShowErrorSnackBar } =
    useSnackBarNotifications();

  const [createRole, { loading: creatingARole }] = useMutation(
    CreateRoleDocument,
    {
      refetchQueries: [{ query: FindAllRolesDocument }],
    },
  );

  const [deletePrivilege] = useMutation(DeletePrivilegeFromRoleDocument, {
    refetchQueries: [
      {
        query: FindPrivilegesByRoleIdDocument,
        variables: {
          roleId: selectedRoleID,
        },
      },
    ],
  });

  const [deleteRole] = useMutation(DeleteRoleDocument, {
    refetchQueries: [
      {
        query: FindAllRolesDocument,
        variables: {},
      },
    ],
  });

  const onSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>,
  ) => {
    const { setSubmitting } = formikHelpers;
    setSubmitting(true);
    createRole({
      variables: {
        role: {
          description: values.description,
          name: values.name,
          id: values.name,
        },
      },
    })
      .then(() => {
        handleShowInfoSnackBar("success");
        setCreateRoleOpen(false);
      })
      .catch((e) => handleShowErrorSnackBar(JSON.stringify(e)));
    setSubmitting(false);
  };

  useEffect(() => {
    if (allRoles) {
      setFilteredRoles(
        allRoles?.findAllRoles?.filter((item) =>
          item?.name.includes(roleSearchName?.toUpperCase()),
        ),
      );
    }
  }, [allRoles, roleSearchName]);

  function handleDeletePrivilege(privilegeName) {
    deletePrivilege({
      variables: {
        privilegeId: privilegeName,
        roleId: selectedRoleID,
      },
    }).catch((e) => handleShowErrorSnackBar(JSON.stringify(e)));
  }

  const handleDeleteRole = (roleId: string) => {
    deleteRole({
      variables: {
        roleId: roleId,
      },
    }).catch((e) => handleShowErrorSnackBar(JSON.stringify(e)));
  };

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      spacing={1}
      // className={"bg-blue-500"}
      height={"calc(100vh - 170px)"}
    >
      <FormDialogue
        open={addPrivilegeToRoleOpen}
        title={"إضافة إمتياز إلى الدور " + selectedRoleID}
        content={
          <AddPrivilegeToRoleForm
            roleId={selectedRoleID}
          ></AddPrivilegeToRoleForm>
        }
        setOpen={setAddPrivilegeToRoleOpen}
        mode={"create"}
      ></FormDialogue>

      <FormDialogue
        open={createRoleOpen}
        title={" إنشاء دور جديد"}
        mode={"create"}
        content={<CreateRoleForm onSubmit={onSubmit} />}
        setOpen={setCreateRoleOpen}
        padding={10}
      ></FormDialogue>

      <Stack
        width={"50%"}
        spacing={1}
        sx={{ overflow: "auto" }}
        // className={"bg-amber-200"}
      >
        <Stack direction={"row"} spacing={1}>
          <TextField
            size={"small"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ flex: 1 }}
            value={roleSearchName}
            onChange={(e) => setRoleSearchName(e.target.value)}
          ></TextField>
          <LoadingButton
            onClick={() => setCreateRoleOpen(true)}
            startIcon={<AddCircle></AddCircle>}
            variant={"contained"}
            loading={loadingAllRoles}
          >
            <Typography fontWeight={"bold"}> إنشاء دور جديد</Typography>
          </LoadingButton>
        </Stack>
        <Stack>
          <ListOFRoles
            roles={filteredRoles}
            selectedRoleId={selectedRoleID}
            setSelectedRoleId={setSelectedRoleID}
            hilight={roleSearchName}
            handleDelete={handleDeleteRole}
          ></ListOFRoles>
        </Stack>
      </Stack>
      <Stack width={"50%"}>
        <Grid2 spacing={1}>
          {rolePersonnels?.findPersonnelsByRoleId?.map((personnel, index) => {
            return (
              <Grid2 className={"bg-blue-500"}>
                <Personnel key={personnel?.matricule} personnel={personnel} />
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
      <Stack width={"50%"} sx={{ overflow: "auto" }} height={"50"}>
        <Button
          variant={"contained"}
          onClick={() => setAddPrivilegeToRoleOpen(true)}
          startIcon={<AddCircle></AddCircle>}
        >
          <Typography fontWeight={"bold"}>
            {"إضافة إمتياز إلى الدور " + selectedRoleID}
          </Typography>
        </Button>
        <ListOFPrivileges
          privileges={privileges?.findPrivilegesByRoleId}
          handleDelete={handleDeletePrivilege}
        ></ListOFPrivileges>
      </Stack>
    </Stack>
  );
};

export default RolesAsociatedPriviligesList;
