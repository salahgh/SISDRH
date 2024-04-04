import {Stack} from "@mui/material";
import AvatarPhoto from "./AvatarPhoto";
import {useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../redux/features/auth/userSlice";
import {useQuery} from "@apollo/client";
import {GetLoggedInUserDocument} from "../../../_generated_gql_/graphql";
import {useEffect} from "react";
import {GetStack} from "./GetStack";

const UserCard = () => {

    const user = useSelector(selectLoggedInUser)

    const {
        data,
        loading,
        error,
        refetch
    } = useQuery(GetLoggedInUserDocument, {
        variables: {
            userName: user.matricule
        }
    })

    useEffect(
        () => {
            refetch().then(() => null);
        } , []
    )

    const personnel = data?.user?.personnel;

    return (
        <Stack
            sx={{
                width: 400,
                height: 650
            }}
            justifyItems={'center'}
            alignItems={'center'}
            spacing={2}
        >
            <AvatarPhoto
                avatarVariant={'rounded'}
                matricule={user.matricule}
                imageSize={2500}
                size={300}
            />
            <GetStack username={user?.matricule} ></GetStack>
        </Stack>
    )
}

export default UserCard;