import {useQuery} from "@apollo/client";
import {UserAuthoritiesDocument} from "../../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../redux/features/auth/userSlice";
import {List, ListItem, ListItemText} from "@mui/material";
import {selectSelectedFolder} from "../../../../redux/features/folderAndFiles/foldersSlice";
import {selectSelectedUser} from "../../../../redux/features/userAdministration/userAdministrationSlice";


const LoggedInUserGrantedAuthorities = () => {

    const matricule = useSelector(selectSelectedUser)
    const {data} = useQuery(UserAuthoritiesDocument, {variables: {matricule: matricule}})

    return (
        <List>
            {
                data?.user?.authorities?.map((item) => {
                    return (
                        <ListItem key={item?.authority}>
                            <ListItemText
                                primary={item?.authority}
                            >
                            </ListItemText>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default LoggedInUserGrantedAuthorities