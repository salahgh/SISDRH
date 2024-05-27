import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { red } from "@mui/material/colors";
import { UserQuery } from "../../../../_generated_gql_/graphql";
import { highlightSearchTokenWithSpan } from "../../utilities/tools.ts";
import * as React from "react";
import { Theme } from "@mui/material/styles";
import { DeleteForever } from "@mui/icons-material";

export interface RoleListItemProps {
  role: UserQuery["user"]["roles"][0];
  isSelected?: boolean;
  setSelectedRoleId?: Dispatch<SetStateAction<string | null>>;
  setTransferListOpen?: Dispatch<SetStateAction<boolean>>;
  displayId?: boolean;
  bgcolor?: string;
  hilight?: string;
  handleDelete?: (roleName: string) => void;
  handleClick?: (roleName: string) => void;
}

export function RoleListItem({
  role,
  isSelected,
  setSelectedRoleId,
  setTransferListOpen,
  displayId,
  bgcolor,
  hilight,
  handleDelete,
  handleClick,
}: RoleListItemProps) {
  const [hovered, setHovered] = useState<boolean>();

  return (
    <ListItemButton
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        margin: 0.3,
        bgcolor: bgcolor ? bgcolor : "#e8e8e8",
        borderRadius: 2,
      }}
      selected={isSelected}
      onClick={() => {
        setSelectedRoleId && setSelectedRoleId(role?.id);
        handleClick && handleClick(role?.name);
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: red["300"],
            transform: "translate(5)",
          }}
        >
          {hovered && handleDelete ? (
            <IconButton
              sx={{ bgcolor: (theme: Theme) => theme?.palette?.error?.dark }}
              onClick={() => handleDelete(role?.name)}
            >
              <DeleteForever sx={{ color: "white" }}></DeleteForever>
            </IconButton>
          ) : (
            "R"
          )}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography variant={"h6"}>
            <span
              dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
                role?.name,
                hilight?.toUpperCase(),
              )}
            />
          </Typography>
        }
        secondary={displayId && role?.id}
      ></ListItemText>
    </ListItemButton>
  );
}
