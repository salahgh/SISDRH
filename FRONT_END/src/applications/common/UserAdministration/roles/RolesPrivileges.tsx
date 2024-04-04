import RolesAsociatedPriviligesList from "./RolesAsociatedPriviligesList";
import { Stack} from "@mui/material";
import {useState} from "react";
import {PrivilegeDto, RoleDto} from "../../../../redux/mainApi";
import {PriviligesListAll} from "./PriviligesListAll";

const RolesPrivileges = () => {

   const [selectedRole, setselectedRole] = useState<RoleDto|null>(null)
   const [selectedPrivilege, setSelectedPrivilege] = useState<PrivilegeDto|null>(null);

   return (
      <Stack direction={'row'} spacing={1}>
            <RolesAsociatedPriviligesList selectedRole={selectedRole} setselectedRole={setselectedRole} />
            <PriviligesListAll selectedPrivilege={selectedPrivilege} setSelectedPrivilege={setSelectedPrivilege} />
      </Stack>

   )
}

export default RolesPrivileges