import {Dispatch, SetStateAction} from "react";
import {RoleListItem} from "../roles/RoleListItem";

export function ListOFRoles({roles, selectedRoleId, setSelectedRoleId}:
                                {
                                    roles?: Array<{
                                        __typename?: 'Role',
                                        id?: any | null,
                                        description?: string | null,
                                        name?: string | null,
                                        privileges?: Array<{
                                            __typename?: 'Privilege',
                                            name?: string | null,
                                            description?: string | null,
                                            id?: any | null
                                        } | null> | null
                                    } | null> | null,
                                    selectedRoleId?: string | null,
                                    setSelectedRoleId?: Dispatch<SetStateAction<string | null>>,
                                }) {
    return (
        <>
            {
                roles?.map((role) => <RoleListItem
                    isSelected={role?.id === selectedRoleId}
                    setSelectedRoleId={setSelectedRoleId}
                    displayId={false}
                    role={role}
                />)
            }
        </>
    );
}