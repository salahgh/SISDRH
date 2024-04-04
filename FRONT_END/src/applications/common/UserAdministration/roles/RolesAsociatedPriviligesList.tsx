import {Box} from "@mui/material";

import {useState} from "react";
import {TranserListDialog} from "./TranserListDialog";
import {RolesList} from "./RolesList";
import DynamicForm from "../../../../openApi/DynamicForm";
import {CreateEntityDialog} from "./CreateEntityDialog";

import {useQuery} from "@apollo/client";
import {FindAllRolesDocument} from "../../../../_generated_gql_/graphql";

const RolesAsociatedPriviligesList = () => {

    const [roleSearchName, setRoleSearchName] = useState<string>('')
    const [selectedRoleId , setSelectedRoleId] = useState<string|null|undefined>(null)
    const {data: roles, error, loading} = useQuery(FindAllRolesDocument)
    const [createRoleOpen, setCreateRoleOpen] = useState<boolean>(false)
    const [TransferListOpen, setTransferListOpen] = useState<boolean>(false)

    return (
        <>
            <TranserListDialog
                open={TransferListOpen}
                roleId={selectedRoleId}
                onClick={() => setTransferListOpen(false)}
                transferListOpen={setTransferListOpen}
            />
            <CreateEntityDialog
                open={createRoleOpen}
                setOpen={setCreateRoleOpen}
                title={"creation d'un role"}
                content={
                    <DynamicForm method={"post"}
                                 endpointPath={"/roles"}
                                 setOpen={setCreateRoleOpen}
                                 requestBodyName={"roleDto"}
                                 exludedFields={{
                                     privileges: true
                                 }}
                    />
                }
            />
            <Box sx={{width: 400}}>
                {/*<RolesList*/}
                {/*   handleSelectRole={() => null}*/}
                {/*   selectedRoleId={selectedRoleId}*/}
                {/*   setSelectedRoleId={setSelectedRoleId}*/}
                {/*   setTransferlistOpen={setTransferListOpen}*/}
                {/*   roleSearchName={roleSearchName}*/}
                {/*   setRoleSearchName={setRoleSearchName}*/}
                {/*/>*/}
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
    )
}

export default RolesAsociatedPriviligesList