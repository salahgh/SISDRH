import { Avatar, CircularProgress, Stack } from "@mui/material";
import * as React from "react";
import { OverridableStringUnion } from "@mui/types";
import { AvatarPropsVariantOverrides } from "@mui/material/Avatar/Avatar";
import { useQuery } from "@apollo/client";
import { GetPhotoByMatriculeAndSizeDocument } from "../../../_generated_gql_/graphql";
import { buildPhotoSrc } from "../../../resources/ASSETS";
import { Error } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";

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
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      width={size}
      height={size}
      borderRadius={avatarVariant === "rounded" ? borderRadius : null}
    >
      {error && !loading && (
        <Error
          sx={{ color: (theme: Theme) => theme.palette.warning.dark }}
        ></Error>
      )}

      {loading && <CircularProgress></CircularProgress>}

      {data && !loading && !error && (
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
      )}
    </Stack>
  );
});

AvatarPhoto.defaultProps = {
  size: 150,
  borderRadius: 5,
  avatarVariant: "rounded",
  imageSize: 2200,
};

export default AvatarPhoto;
