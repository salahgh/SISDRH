import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { FindAllRolesDocument } from "../../../../_generated_gql_/graphql";
import { TranserListDialog } from "../roles/TranserListDialog";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { ListOFRoles } from "../user/ListOFRoles.tsx";
import { RoleListItem } from "./RoleListItem.tsx";
import ListOFPrevileges from "../user/ListOFPrevileges.tsx";
import { FormDialogue } from "../../components/dialogs/FormDialogue.tsx";
import TransferList from "../TransferList.tsx";

const RolesAsociatedPriviligesList = () => {
  const [roleSearchName, setRoleSearchName] = useState<string>("");
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  const [createRoleOpen, setCreateRoleOpen] = useState<boolean>(false);
  const [TransferListOpen, setTransferListOpen] = useState<boolean>(false);

  const { data: allRoles, loading, error } = useQuery(FindAllRolesDocument);
  const [selectedRoleID, setSelectedRoleID] = useState();
  const [filteredRoles, setFilteredRoles] = useState([]);

  useEffect(() => {
    if (allRoles) {
      setFilteredRoles(
        allRoles?.findAllRoles?.filter((item) =>
          item?.name.includes(roleSearchName?.toUpperCase()),
        ),
      );
    }
  }, [allRoles, roleSearchName]);

  return (
    <Stack width={"100%"} direction={"row"}>
      <Button onClick={() => setTransferListOpen(true)}> add </Button>

      <FormDialogue
        open={TransferListOpen}
        title={"dsdfsdf"}
        content={
          <TransferList
            setTransferListOpen={setTransferListOpen}
            role={
              filteredRoles?.filter((role) => role.id === selectedRoleID)[0]
            }
          />
        }
      ></FormDialogue>

      <Stack>
        <Stack sx={{ width: 400 }} direction={"row"} spacing={1}>
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
        <Stack width={400}>
          <ListOFRoles
            roles={filteredRoles}
            selectedRoleId={selectedRoleID}
            setSelectedRoleId={setSelectedRoleID}
            hilight={roleSearchName}
          ></ListOFRoles>
        </Stack>
      </Stack>
      <Stack width={"33%"}>
        {selectedRoleID &&
          filteredRoles?.filter((role) => role.id === selectedRoleID)[0] && (
            <ListOFPrevileges
              handleDelete={() => null}
              privileges={
                filteredRoles?.filter((role) => role.id === selectedRoleID)[0]
                  ?.privileges
              }
            ></ListOFPrevileges>
          )}
      </Stack>
    </Stack>
  );
};

export default RolesAsociatedPriviligesList;
