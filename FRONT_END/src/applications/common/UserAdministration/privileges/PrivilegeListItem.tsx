import {
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { green } from "@mui/material/colors";
import { DeleteForever } from "@mui/icons-material";
import { Privilege } from "../../../../_generated_gql_/graphql.ts";

export function PrivilegeListItem({
  selectedPrivilegeId,
  privilege,
  handleDelete,
  handleSelectPrivilege,
  handleClick,
}: {
  selectedPrivilegeId?: string | null;
  privilege: Privilege;
  handleSelectPrivilege?: Dispatch<SetStateAction<string | null>>;
  handleDelete?: (privilegeName: string) => void;
  handleClick?: (privilegeName: string) => void;
}) {
  // todo delete icon displayed only when hovered

  const [hovered, setHovered] = useState(false);

  return (
    <Tooltip
      placement={"right"}
      title={<Typography>{privilege?.description}</Typography>}
    >
      <ListItemButton
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        dir={"ltr"}
        sx={{ margin: 0.3, bgcolor: "#e8e8e8", borderRadius: 3 }}
        selected={selectedPrivilegeId == privilege?.id}
        onClick={() => {
          if (handleSelectPrivilege) {
            handleSelectPrivilege(privilege?.id);
          }
          if (handleClick) {
            handleClick(privilege?.name);
          }
        }}
      >
        <ListItemAvatar>
          <Avatar
            sx={{
              bgcolor: green["300"],
              width: 25,
              height: 25,
            }}
          >
            {hovered && handleDelete ? (
              <IconButton
                sx={{ bgcolor: "#fdcece", width: 25, height: 25 }}
                onClick={() => handleDelete(privilege?.name)}
              >
                <DeleteForever
                  sx={{ color: "#d22f2f", width: 23, height: 23 }}
                />
              </IconButton>
            ) : (
              "P"
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          sx={{ overflow: "auto", textAlign: "right" }}
          primary={privilege.name}
        ></ListItemText>
      </ListItemButton>
    </Tooltip>
  );
}
