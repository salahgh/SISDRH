import {
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Folder } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import { GetOwnedFoldersDocument } from "../../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice.ts";
import { useEffect } from "react";

export const OwnedFoldersList = ({ selectedFolderId, setSelectedFolderId }) => {
  const userName = useSelector(selectLoggedInUser).matricule;

  const { data: folders } = useQuery(GetOwnedFoldersDocument, {
    variables: {
      username_: userName,
    },
  });

  useEffect(() => {
    if (
      folders &&
      selectedFolderId === null &&
      folders?.ownedFolders.length > 0
    ) {
      setSelectedFolderId(folders?.ownedFolders?.at(0).id);
    }
  }, [folders]);

  return (
    <List>
      {folders?.ownedFolders?.map((folder, index) => {
        return (
          <ListItemButton
            onClick={() => setSelectedFolderId(folder?.id)}
            selected={folder?.id === selectedFolderId}
          >
            <ListItemAvatar>
              <Folder></Folder>
            </ListItemAvatar>
            <ListItemText>{folder?.name}</ListItemText>
          </ListItemButton>
        );
      })}
    </List>
  );
};
