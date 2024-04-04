import {PrivilegeDto} from "../../../../redux/mainApi";
import {InputAdornment, List, Stack, TextField} from "@mui/material";
import {NetWorkErrorComponent} from "../../../../components/errors/NetWorkErrorComponent";
import EmptyListComponent from "../../../../components/EmptyListComponent";
import {Add, Search} from "@mui/icons-material";
import {Dispatch, SetStateAction, useState} from "react";
import DynamicForm from "../../../../openApi/DynamicForm";
import {CreateEntityDialog} from "./CreateEntityDialog";
import {LoadingButton} from "@mui/lab";
import {PrivilegeListItem} from "./PrivilegeListItem";
import {useQuery} from "@apollo/client";
import {AllPrivilegesDocument} from "../../../../_generated_gql_/graphql";

export function PriviligesListAll({selectedPrivilege, setSelectedPrivilege}:
                                      {
                                          selectedPrivilege: PrivilegeDto | null,
                                          setSelectedPrivilege: Dispatch<SetStateAction<PrivilegeDto | null>>
                                      }) {

    const [privilegeSearchName, setPrivilegeSearchName] = useState<string>('')

    // const {data: privileges, error, isError, isFetching} = useGetAllPrivilegesQuery(
    //    {
    //       pageable: {
    //          size: 1000,
    //          page: 0
    //       }, name: privilegeSearchName
    //    }
    // )

    const {data: allPriviliges, loading: loadingPrivileges, error}
        = useQuery(AllPrivilegesDocument)

    /* todo change the client side filtering to server side when the
     number of priviliges is important */

    const [open, setOpen] = useState(false)

    return (
        <Stack direction={'column'} padding={1}>
            {/*<CreateEntityDialog*/}
            {/*    open={open}*/}
            {/*    setOpen={setOpen}*/}
            {/*    title={"creation d'un privilege"}*/}
            {/*    content={<DynamicForm method={"post"}*/}
            {/*                          endpointPath={"/privileges"}*/}
            {/*                          setOpen={setOpen}*/}
            {/*                          postMutation={useCreatePrivilegeMutation}*/}
            {/*                          requestBodyName={'privilegeDto'}*/}
            {/*                          exludedFields={{}}*/}
            {/*    />*/}
            {/*    }*/}
            {/*/>*/}
            {
                error && <NetWorkErrorComponent/>
            }
            {
                allPriviliges?.allPrivileges?.length == 0 && <EmptyListComponent/>
            }
            {
                <Stack direction={'row'} spacing={1}>
                    <TextField
                        size={'small'}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            )
                        }}
                        sx={{flex: 1}}
                        value={privilegeSearchName}
                        onChange={(e) => setPrivilegeSearchName((old) => e.target.value)}
                    >
                    </TextField>
                    <LoadingButton
                        onClick={() => setOpen(true)}
                        startIcon={<Add/>}
                        variant={'contained'}
                        loading={loadingPrivileges}
                    >add</LoadingButton>
                </Stack>
            }
            <List>
                {
                    allPriviliges?.allPrivileges?.map((privilege) => (
                        <PrivilegeListItem
                            selectedPrivilege={selectedPrivilege}
                            privilege={privilege}
                            handleSelectPrivilege={setSelectedPrivilege}/>
                    ))
                }
            </List>
        </Stack>
    )
}