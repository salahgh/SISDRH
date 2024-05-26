import { PrivilegeDto } from "../../../../redux/mainApi.ts";
import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { green } from "@mui/material/colors";
import { DeleteForever } from "@mui/icons-material";

export function PrivilegeListItem({
  selectedPrivilege,
  privilege,
}: {
  selectedPrivilege?: PrivilegeDto | null;
  privilege: {
    __typename?: "Privilege";
    id?: any | null;
    description?: string | null;
    name?: string | null;
  } | null;
  handleSelectPrivilege?: Dispatch<SetStateAction<PrivilegeDto | null>>;
  tileVariant?: string;
  displayId?: boolean;
  handleDelete?: any;
}) {
  // todo delete icon displayed only when hovered

  const [hovered, setHovered] = useState(false);

  return (
    <ListItemButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      dir={"ltr"}
      sx={{ margin: 0.3, bgcolor: "#e8e8e8", borderRadius: 3 }}
      selected={selectedPrivilege == privilege}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: green["300"],
            width: 25,
            height: 25,
          }}
        >
          P
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{ overflow: "auto", textAlign: "right" }}
        primary={privilege.name}
      ></ListItemText>
      <IconButton
        sx={{ width: 25, height: 25 }}
        onClick={() => handleDelete(privilege)}
      >
        {hovered && (
          <DeleteForever sx={{ color: "#d22f2f", width: 23, height: 23 }} />
        )}
      </IconButton>
    </ListItemButton>
  );
}
