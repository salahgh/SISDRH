import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuList,
} from "@mui/material";
import { DriveFileMove, Folder as FolderIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  AddOcrResultToFolderDocument,
  GetOwnedFoldersDocument,
} from "../../../../../_generated_gql_/graphql";
import { selectSelectedFolder } from "../../../../../redux/features/folderAndFiles/foldersSlice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { useEffect } from "react";

export default function BasicMenu({ row }: { row?: never }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const userName: string = useSelector(selectLoggedInUser).matricule;
  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();
  const selectedFolder = useSelector(selectSelectedFolder);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [getOwnedFolders, { data: ownedFolders }] = useLazyQuery(
    GetOwnedFoldersDocument,
    {
      variables: {
        username_: userName,
      },
    },
  );

  const data_ = ownedFolders?.ownedFolders?.filter(
    (item) =>
      item?.id !== "-1" &&
      item?.id !== "-2" &&
      item?.id !== selectedFolder?.id &&
      item?.description !== "FAVORITE",
  );

  const [addOcrResultsToFolder] = useMutation(AddOcrResultToFolderDocument);

  function handleAddPdfToFolder(id: number) {
    addOcrResultsToFolder({
      variables: {
        folderId: id,
        ocrResultId: row?.id,
      },
    })
      .then(() => {
        handleShowInfoSnackBar("ajouté avec succés");
        setAnchorEl(null);
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  }

  useEffect(() => {
    if (open) getOwnedFolders().then(() => null);
  }, [open]);

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DriveFileMove
          sx={{
            width: 30,
            height: 30,
            color: "#fc8f52",
          }}
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuList>
          {data_?.map((item) => (
            <MenuItem
              key={JSON.stringify(item)}
              onClick={() => {
                {
                  handleAddPdfToFolder(item?.id);
                }
              }}
            >
              <ListItemIcon>
                <FolderIcon
                  sx={{
                    width: 30,
                    height: 30,
                    color: "#fc8f52",
                  }}
                  fontSize="small"
                />
              </ListItemIcon>
              <ListItemText>{item?.name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
