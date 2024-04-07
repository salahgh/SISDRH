import {
  ErrorOutlined,
  Security,
  Shield,
  ShieldOutlined,
  VerifiedUser,
} from "@mui/icons-material";
import { Avatar, Chip } from "@mui/material";

export const ConfidentialiteChip = ({
  confidentialite,
}: {
  confidentialite?: {
    id?: string;
    libConfidentialiteAr?: string;
    libConfidentialiteFr?: string;
  };
}) => {
  if (!confidentialite) return null;
  if (confidentialite.libConfidentialiteAr === "تحفظ") return null;
  const libConfidentialiteAr = confidentialite.libConfidentialiteAr;
  let src = null;
  switch (libConfidentialiteAr) {
    case "مكتوم":
      src = (
        <ShieldOutlined
          sx={{
            width: 20,
            height: 20,
            color: "rgb(255,113,40)",
          }}
        />
      );
      break;
    case "سري":
      src = (
        <Shield
          sx={{
            width: 20,
            height: 20,
            color: "rgb(255,0,0)",
          }}
        />
      );
      break;
    case "سري جدا":
      src = (
        <Security
          sx={{
            width: 20,
            height: 20,
            color: "rgb(255,0,0)",
          }}
        />
      );
      break;
    case "تحفظ":
      src = null;
      break;
    case "لم تحدد بعد":
      src = (
        <ErrorOutlined
          sx={{
            width: 25,
            height: 25,
            color: "rgb(255,0,0)",
          }}
        />
      );
      break;
    case "عادي":
      src = (
        <VerifiedUser
          sx={{
            width: 25,
            height: 25,
            color: "rgb(46,161,0)",
          }}
        />
      );
      break;
    default:
      src = (
        <Security
          sx={{
            width: 20,
            height: 20,
            color: "rgb(136,0,0)",
          }}
        />
      );
  }

  return (
    <Chip
      sx={
        {
          // height : 40
        }
      }
      variant={
        libConfidentialiteAr === "سري" ||
        libConfidentialiteAr === "سري جدا" ||
        libConfidentialiteAr === "سري دفاع"
          ? "filled"
          : "outlined"
      }
      size={"medium"}
      color={
        libConfidentialiteAr === "سري" ||
        libConfidentialiteAr === "سري جدا" ||
        libConfidentialiteAr === "سري دفاع"
          ? "error"
          : "warning"
      }
      avatar={
        <Avatar
          sx={{
            bgcolor: "rgb(253,253,253)",
          }}
        >
          {src}
        </Avatar>
      }
      label={
        libConfidentialiteAr === "لم تحدد بعد"
          ? "غير متوفر"
          : libConfidentialiteAr
      }
    ></Chip>
  );
};
