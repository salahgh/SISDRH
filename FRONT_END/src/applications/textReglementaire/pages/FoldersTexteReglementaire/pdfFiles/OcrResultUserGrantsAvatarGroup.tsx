import { AvatarGroup } from "@mui/lab";
import { ButtonBase } from "@mui/material";
import AvatarPhoto from "../../../../common/UserAdministration/AvatarPhoto.tsx";

const OcrResultUserGrantsAvatarGroup = ({
  userIds,
  onClick,
  borderColor,
  max,
  size = 45,
  borderWidth,
}: {
  userIds: string[];
  onClick?: () => void;
  borderColor?: string;
  max?: number;
  size?: number;
  borderWidth?: number;
}) => {
  return (
    <ButtonBase onClick={onClick}>
      <AvatarGroup
        max={max ? max : 3}
        spacing={15}
        sx={{
          "& .MuiAvatar-root": {
            borderColor: borderColor ? borderColor : "#121212",
            borderWidth: borderWidth ? borderWidth : 1,
          },
        }}
      >
        {userIds?.map((userId) => {
          return (
            <AvatarPhoto
              size={size}
              avatarVariant={"circular"}
              matricule={userId}
              key={userId}
              imageSize={2200}
              borderRadius={5}
            ></AvatarPhoto>
          );
        })}
      </AvatarGroup>
    </ButtonBase>
  );
};

export default OcrResultUserGrantsAvatarGroup;
