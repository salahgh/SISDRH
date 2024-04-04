import {PrivilegeListItem} from "../roles/PrivilegeListItem";
import {List} from "@mui/material";

function ListOFPrevileges({privileges , handleDelete}: {
    privileges?: Array<{
        __typename?: 'Privilege',
        id?: any | null,
        description?: string | null,
        name?: string | null
    } | null> | null,
    handleDelete ? : any
}) {

    console.log(privileges)

    return (
       <List>
            {
                privileges?.map((privilege) => <PrivilegeListItem handleDelete={handleDelete} privilege={privilege}/>)
            }
        </List>
    );
}

export default ListOFPrevileges
