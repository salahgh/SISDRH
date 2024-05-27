import { Stack } from "@mui/material";
import AvatarPhoto from "./AvatarPhoto";
// import { GetStack } from "./GetStack";

const UserCard = ({ personnel, size = 300 }) => {
  return (
    <Stack
      sx={{
        width: 400,
        height: 650,
      }}
      justifyItems={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <AvatarPhoto
        avatarVariant={"rounded"}
        matricule={personnel.matricule}
        imageSize={2500}
        size={size}
      />
      {/*<GetStack username={personnel?.matricule}></GetStack>*/}
    </Stack>
  );
};

export default UserCard;
