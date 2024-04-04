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
import { useMutation, useQuery } from "@apollo/client";
import {
  AddOcrResultToFolderDocument,
  GetOwnedFoldersDocument,
} from "../../../../../_generated_gql_/graphql";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
export default function AddToFolderMenu({ pdfId }: { pdfId: string | null }) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>(
    undefined,
  );
  const open = Boolean(anchorEl);
  const userName = useSelector(selectLoggedInUser).matricule;
  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const { data: ownedFolders } = useQuery(GetOwnedFoldersDocument, {
    variables: {
      username_: userName ? userName : "",
    },
  });

  const data_ = ownedFolders?.ownedFolders?.filter(
    (item) => item?.id !== -1 && item?.description !== "FAVORITE",
  );

  const [addOcrResultsToFolder] = useMutation(AddOcrResultToFolderDocument);

  function handleAddPdfToFolder(id: number) {
    addOcrResultsToFolder({
      variables: {
        folderId: id,
        ocrResultId: pdfId,
      },
    })
      .then(() => {
        handleShowInfoSnackBar("ajouté avec succés");
        setAnchorEl(undefined);
      })
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  }

  // todo use folder colors

  return (
    <>
      <IconButton
        size={"large"}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <DriveFileMove
          sx={{
            width: 40,
            height: 40,
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
                    width: 40,
                    height: 40,
                    marginRight: 1,
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
