import {InputAdornment, List, Stack, TextField} from "@mui/material";
import {NetWorkErrorComponent} from "../../../../components/errors/NetWorkErrorComponent";
import EmptyListComponent from "../../../../components/EmptyListComponent";
import {Add, Search} from "@mui/icons-material";
import {LoadingButton} from "@mui/lab";
import {Dispatch, SetStateAction} from "react";
import {useQuery} from "@apollo/client";
import {FindAllRolesDocument} from "../../../../_generated_gql_/graphql";
import {RoleListItem_} from "./RoleListItem_";

export function RolesList(
   {
      handleOpenCreateRoleDialog,
      selectedRoleId ,
      setSelectedRoleId ,
      setTransferlistOpen ,
      roleSearchName ,
      setRoleSearchName
   }:
      {
         handleOpenCreateRoleDialog : Dispatch<SetStateAction<boolean>> ,
         selectedRoleId? : String | undefined | null ,
         setSelectedRoleId? : Dispatch<SetStateAction<String | null | undefined>> ,
          setTransferlistOpen? : Dispatch<SetStateAction<boolean>> ,
         roleSearchName? : string ,
         setRoleSearchName? : Dispatch<SetStateAction<string>>
      }
) {

   const {data : roles , error , loading } = useQuery(FindAllRolesDocument)

   return (
      <Stack direction={"column"} padding={1}>
         {
            error && <NetWorkErrorComponent/>
         }
         {
            roles?.findAllRoles?.length == 0 && <EmptyListComponent/>
         }
         {
            <Stack direction={"row"} spacing={1}>
               <TextField
                  size={"small"}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment position="start">
                           <Search/>
                        </InputAdornment>
                     )
                  }}
                  sx={{flex: 1}}
                  value={roleSearchName}
                  onChange={(e) => setRoleSearchName && setRoleSearchName(e.target.value)}
               >
               </TextField>
               <LoadingButton
                  onClick={() => handleOpenCreateRoleDialog(true)}
                  startIcon={<Add/>}
                  variant={"contained"}
                  loading={loading}
               >add</LoadingButton>
            </Stack>
         }
         <List>
            {
              roles?.findAllRoles?.map((role) => <RoleListItem_
                  role={role}
                  isSelected={role?.id === selectedRoleId}
                  handleSelectRole={setSelectedRoleId}
                  setTransferListOpen={setTransferlistOpen}
               />
               )
            }
         </List>
      </Stack>
   )
}