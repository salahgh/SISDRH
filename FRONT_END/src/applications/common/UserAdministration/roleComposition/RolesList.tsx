import {List, Stack} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import {useQuery} from "@apollo/client";
import {FindAllRolesDocument} from "../../../../_generated_gql_/graphql";
import {RoleListItem} from "./RoleListItem";

export function RolesList(
   {
      selectedRoleId ,
      setSelectedRoleId ,
      setTransferlistOpen
   }:
      {
         selectedRoleId? : String | undefined | null ,
         setSelectedRoleId? : Dispatch<SetStateAction<String | null | undefined>> ,
          setTransferlistOpen? : Dispatch<SetStateAction<boolean>> ,
      }
) {

   const {data : allRoles , error , loading } = useQuery(FindAllRolesDocument)

   return (
      <Stack direction={"column"} padding={1}>
         {/*{*/}
         {/*   error && <NetWorkErrorComponent/>*/}
         {/*}*/}
         {/*{*/}
         {/*    allRoles?.findAllRoles?.length == 0 && <EmptyListComponent/>*/}
         {/*}*/}
         <List>
            {
                allRoles?.findAllRoles?.map((role) => <RoleListItem
                  role={role}
                  isSelected={role?.id == selectedRoleId}
                  setSelectedRoleId={setSelectedRoleId}
                  setTransferListOpen={setTransferlistOpen}
                  // displayId={true}
               />
               )
            }
         </List>
      </Stack>
   )
}