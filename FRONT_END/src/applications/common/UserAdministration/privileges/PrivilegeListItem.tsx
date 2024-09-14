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
import {
  DeleteForever,
  GavelOutlined,
  GroupAdd,
  TransferWithinAStation,
} from "@mui/icons-material";
import { Privilege } from "../../../../_generated_gql_/graphql.ts";

const getPrivilegeApplicationIcon = (applicationID: string) => {
  console.log(applicationID);
  switch (applicationID) {
    case "3":
      return (
        <GavelOutlined
          sx={{ color: "#ffffff", width: 17, height: 17 }}
        ></GavelOutlined>
      );
    case "1":
      return (
        <TransferWithinAStation
          sx={{ color: "#c23c3c", width: 20, height: 20 }}
        ></TransferWithinAStation>
      );
    case "4":
      return (
        <GroupAdd sx={{ color: "#3c57c2", width: 20, height: 20 }}></GroupAdd>
      );
  }
};

export function PrivilegeListItem({
  selectedPrivilegeId,
  privilege,
  handleDelete,
  handleSelectPrivilege,
  handleClick,
  disabled = false,
}: {
  selectedPrivilegeId?: string | null;
  privilege: Privilege;
  handleSelectPrivilege?: Dispatch<SetStateAction<string | null>>;
  handleDelete?: (privilegeName: string) => void;
  handleClick?: (privilegeName: string) => void;
  disabled?: boolean;
}) {
  // todo delete icon displayed only when hovered

  const [hovered, setHovered] = useState(false);

  console.log(privilege);

  return (
    <Tooltip
      placement={"right"}
      title={<Typography>{privilege?.description}</Typography>}
    >
      <ListItemButton
        disabled={disabled}
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
              getPrivilegeApplicationIcon(privilege?.application?.id)
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
