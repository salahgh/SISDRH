import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FindAllRolesDocument } from "../../../../_generated_gql_/graphql";
import { TranserListDialog } from "../roles/TranserListDialog";
import { Box, InputAdornment, Stack, TextField } from "@mui/material";
import { RolesList } from "./RolesList";
import { Add, Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

const RolesAsociatedPriviligesList = () => {
  const [roleSearchName, setRoleSearchName] = useState<string>("");
  const [selectedRoleId, setSelectedRoleId] = useState<
    string | null | undefined
  >(null);
  const { data: allRoles, error, loading } = useQuery(FindAllRolesDocument);
  const [createRoleOpen, setCreateRoleOpen] = useState<boolean>(false);
  const [TransferListOpen, setTransferListOpen] = useState<boolean>(false);

  return (
    <>
      <TranserListDialog
        open={TransferListOpen}
        roleId={selectedRoleId}
        onClick={() => setTransferListOpen(false)}
        transferListOpen={setTransferListOpen}
      />
      {/*<FormDialogue*/}
      {/*    open={createRoleOpen}*/}
      {/*    setOpen={setCreateRoleOpen}*/}
      {/*    title={"creation d'un role"}*/}
      {/*    content={*/}
      {/*        <DynamicForm method={"post"}*/}
      {/*                     endpointPath={"/roles"}*/}
      {/*                     setOpen={setCreateRoleOpen}*/}
      {/*                     requestBodyName={"roleDto"}*/}
      {/*                     exludedFields={{*/}
      {/*                         privileges: true*/}
      {/*                     }}*/}
      {/*        />*/}
      {/*    }*/}
      {/*/>*/}
      <Box sx={{ width: 400 }}>
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
            startIcon={<Add />}
            variant={"contained"}
            loading={loading}
          >
            add
          </LoadingButton>
        </Stack>
        <RolesList
          handleSelectRole={(roleId: string | null) =>
            setSelectedRoleId(roleId)
          }
          selectedRoleId={selectedRoleId}
          setTransferlistOpen={setTransferListOpen}
        />
      </Box>
      {/*<Box sx={{width: 400}}>*/}
      {/*    {*/}
      {/*        selectedRole && roles?.filter((role) => role.id === selectedRole.id)[0]*/}
      {/*        && <RoleListItem setTransferListOpen={setTransferListOpen} role={selectedRole}/>*/}
      {/*    }*/}
      {/*    {*/}
      {/*        selectedRole*/}
      {/*        && roles?.filter((role) => role.id === selectedRole.id)[0]?.privileges?.length === 0*/}
      {/*        && <div>ce role ne contient pas de privileges</div>*/}
      {/*    }*/}
      {/*    {*/}
      {/*        selectedRole && roles?.filter((role) => role.id === selectedRole.id)[0]?.privileges?.map(*/}
      {/*            (privilege) => (*/}
      {/*                <PrivilegeListItem tileVariant={'h6'} privilege={privilege}/>*/}
      {/*            )*/}
      {/*        )*/}
      {/*    }*/}
      {/*</Box>*/}
    </>
  );
};

export default RolesAsociatedPriviligesList;
