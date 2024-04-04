import { Avatar, lighten, Skeleton, Stack } from "@mui/material";
import * as React from "react";
import { OverridableStringUnion } from "@mui/types";
import { AvatarPropsVariantOverrides } from "@mui/material/Avatar/Avatar";
import { useQuery } from "@apollo/client";
import { GetPhotoByMatriculeAndSizeDocument } from "../../../_generated_gql_/graphql";
import { buildPhotoSrc } from "../../../resources/ASSETS";
import { Error } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";

interface AvatarPhotoProps {
  matricule: string | null | undefined;
  imageSize?: 100 | 200 | 500 | 1000 | 2100 | 2200 | 2500;
  size?: number;
  borderRadius?: number;
  avatarVariant?: OverridableStringUnion<
    "circular" | "rounded" | "square",
    AvatarPropsVariantOverrides
  >;
}

const AvatarPhoto = React.forwardRef((props: AvatarPhotoProps, ref) => {
  const { avatarVariant, size, imageSize, matricule, borderRadius, ...other } =
    props;

  const springs = useSpring({
    from: { opacity: 0, transform: `translateY(${size * 0.3}px)` },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 150 },
  });

  // @ts-ignore
  const { data, error, loading } = useQuery(
    GetPhotoByMatriculeAndSizeDocument,
    {
      variables: {
        matricule: matricule,
        size: imageSize,
      },
    },
  );

  return (
    <>
      {loading && (
        <Skeleton
          variant={"rounded"}
          width={size}
          height={size}
          animation={"pulse"}
          sx={{ borderRadius: borderRadius }}
        />
      )}
      {error && (
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={size}
          height={size}
          borderRadius={avatarVariant === "rounded" ? borderRadius : null}
          border={"solid 2px"}
          borderColor={(theme) => theme?.palette.warning.dark}
          sx={{
            backgroundColor: (theme: Theme) =>
              lighten(theme.palette.warning.light, 0.5),
          }}
        >
          <Error
            sx={{ color: (theme: Theme) => theme.palette.warning.dark }}
          ></Error>
        </Stack>
      )}
      {data && !loading && (
        <animated.div style={springs}>
          <Avatar
            ref={ref}
            {...other}
            imgProps={{
              style: {
                objectFit: "contain",
                objectPosition: "top",
                padding: 0,
                backgroundColor: "#dcdcdc",
                borderWidth: 0,
              },
            }}
            src={buildPhotoSrc(
              data?.getThumbnailByMatriculeAndSize?.thumbData,
              data?.getThumbnailByMatriculeAndSize?.photo?.format,
            )}
            sx={{
              width: size,
              height: size,
              borderRadius: avatarVariant === "rounded" ? borderRadius : null,
              "& .MuiAvatar-rounded": {
                borderRadius: borderRadius,
              },
            }}
            variant={avatarVariant}
          ></Avatar>
        </animated.div>
      )}
    </>
  );
});

AvatarPhoto.defaultProps = {
  size: 150,
  borderRadius: 5,
  avatarVariant: "rounded",
  imageSize: 2200,
};

export default AvatarPhoto;
