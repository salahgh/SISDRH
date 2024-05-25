import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { AddCircleOutline, DeleteForever } from "@mui/icons-material";
import { Dispatch, SetStateAction, useState } from "react";
import { red } from "@mui/material/colors";
import { ListItemProps } from "@mui/material/ListItem/ListItem";
import { useSelector } from "react-redux";
import { selectSelectedUser } from "../../../../redux/features/userAdministration/userAdministrationSlice";
import { useMutation } from "@apollo/client";
import {
  UserDeleteRoleDocument,
  UserDocument,
  UserQuery,
} from "../../../../_generated_gql_/graphql";
import useSnackBarNotifications from "../../notifications/useSnackBarNotifications";
import { highlightSearchTokenWithSpan } from "../../utilities/tools.ts";
import * as React from "react";

export interface RoleListItemProps {
  role: UserQuery["user"]["roles"][0];
  isSelected?: boolean;
  setSelectedRoleId?: Dispatch<SetStateAction<string | null>>;
  setTransferListOpen?: Dispatch<SetStateAction<boolean>>;
  displayId?: boolean;
  bgcolor?: string;
  listItemProps?: ListItemProps;
  hilight?: string;
}

export function RoleListItem({
  role,
  isSelected,
  setSelectedRoleId,
  setTransferListOpen,
  displayId,
  bgcolor,
  listItemProps,
  hilight,
}: RoleListItemProps) {
  const matricule = useSelector(selectSelectedUser);

  const [hovered, setHovered] = useState();

  const [deleteRoleMutation] = useMutation(UserDeleteRoleDocument, {
    refetchQueries: [
      {
        query: UserDocument,
        variables: {
          matricule: matricule,
        },
      },
    ],
  });

  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const handleDelete = (role) => {
    deleteRoleMutation({
      variables: {
        userName: matricule,
        roleName: role?.name,
      },
    })
      .then(() => handleShowInfoSnackBar("role " + role?.name + " deleted"))
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  };

  console.log(hilight);

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
      onClick={() => setSelectedRoleId && setSelectedRoleId(role?.id)}
      {...listItemProps}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor: red["300"],
            transform: "translate(5)",
          }}
        >
          R
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
      {setTransferListOpen && (
        <IconButton onClick={() => setTransferListOpen(true)}>
          <AddCircleOutline sx={{ fontSize: 35 }}></AddCircleOutline>
        </IconButton>
      )}
      {hovered && (
        <IconButton
          sx={{ width: 35, height: 35 }}
          onClick={() => handleDelete(role)}
        >
          <DeleteForever sx={{ color: "#d22f2f", width: 30, height: 30 }} />
        </IconButton>
      )}
    </ListItemButton>
  );
}
