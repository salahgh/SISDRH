import AvatarPhoto from "../../../AvatarPhoto.tsx";
import { UserHabilitations } from "../../../habilitation/UserHabilitations.tsx";
import { Stack } from "@mui/material";
import { UserDocument } from "../../../../../../_generated_gql_/graphql.ts";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { selectSelectedUser } from "../../../../../../redux/features/userAdministration/userAdministrationSlice.ts";

export const UserHabitationsConfidentiality = () => {
  const matricule = useSelector(selectSelectedUser);

  const {
    data: user,
    // loading: userLoading,
    // error: userError,
    // refetch: refetchUser,
  } = useQuery(UserDocument, {
    variables: {
      matricule: matricule,
    },
  });

  return (
    <Stack alignItems={"center"} overflow={"auto"} sx={{ marginTop: 2 }}>
      <AvatarPhoto
        size={160}
        matricule={user?.user?.personnel?.matricule}
        imageSize={2500}
        avatarVariant={"rounded"}
        borderRadius={10}
      />
      <UserHabilitations
        username={user?.user?.personnel?.matricule}
      ></UserHabilitations>
    </Stack>
  );
};
