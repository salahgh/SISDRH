import * as React from "react";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  Alert,
  IconButton,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Delete, Edit, PictureAsPdfOutlined } from "@mui/icons-material";
import { blueGrey, green, red } from "@mui/material/colors";
import { UPLOAD_STATUS, UplodComponentData } from "./UploadMainPage";
import { Dispatch, SetStateAction, useState } from "react";
import { EditEntityDialog } from "../OcrJobMonitoring/EditEntityDialog";
import { EditFileName } from "./EditFileName";
import { getAvatarBgColor, getBgColor, getStatusIcon } from "./tools";

export default function FilesList({
  uploadResponse,
  filesList,
  selectedItem,
  hundleSelection,
  setFilesList,
  glocalUploadStatus,
  setSelectedItemIndex,
}: {
  uploadResponse: any;
  filesList: UplodComponentData[] | undefined;
  selectedItem: number;
  hundleSelection: any;
  setFilesList: Dispatch<SetStateAction<UplodComponentData[] | undefined>>;
  glocalUploadStatus: string;
  setSelectedItemIndex: Dispatch<
    SetStateAction<{
      index: number;
      status: string;
    }>
  >;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [openAll, setOpenAll] = useState<boolean>(false);
  const [indexToBeEdited, setIndexToBeEdited] = useState<number>(-1);

  function hundleDelete(indexToBeDeleted: number) {
    if (filesList?.length === indexToBeDeleted + 1) {
      setSelectedItemIndex({ index: 0, status: "NEW" });
    }
    setFilesList((old) => {
      if (!old) return undefined;
      const updatedState = [...old];
      updatedState.splice(indexToBeDeleted, 1);
      return updatedState;
    });
  }

  // todo handle already exist pdf file and redirect to the file details
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  // todo ajouter la possibilite de naviguer vers le dossier des telechargement
  // todo ajouter la possibilite de naviguer vers le fichier pdf selectionner

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(-1);
  };

  function handleEditClicked(item: UplodComponentData, index: number) {
    setIndexToBeEdited(index);
    setOpen(true);
  }

  return (
    <>
      {filesList?.some(
        (item) => item.status === UPLOAD_STATUS.NEED_EDITING,
      ) && (
        <Alert variant={"outlined"} severity="error">
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyItems={"flex-end"}
            flex={1}
            flexGrow={1}
            spacing={10}
          >
            <Typography fontSize={16} fontWeight={"lighter"}>
              les fichiers que vous voulez charger continnent des erreurs!
              veuillez les corriger avant de pouvoir les charger
            </Typography>
            {/*<IconButton onClick={() => setOpenAll(true)} sx={{width: 50, height: 50}}>*/}
            {/*    <Avatar sx={{width: 50, height: 50, bgcolor: '#fdfdfd'}}>*/}
            {/*        <Edit sx={{color: red["900"], height: 40, width: 40}}/>*/}
            {/*    </Avatar*/}
            {/*    >*/}
            {/*</IconButton>*/}
          </Stack>
        </Alert>
      )}

      <EditEntityDialog
        open={open}
        setOpen={setOpen}
        title={"edit"}
        fullWidth={true}
        maxWidth={"xl"}
        content={
          <EditFileName
            indexToBeEdited={indexToBeEdited}
            filesList={filesList}
            setOpen={setOpen}
            setOpenAll={setOpenAll}
            open={open}
            setFilesList={setFilesList}
          />
        }
      />

      <List
        dense={true}
        sx={{ width: "100%", padding: 0, margin: 0, paddingTop: 1 }}
      >
        {filesList?.map((item, index) => {
          return (
            <ListItemButton
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() =>
                hundleSelection(index, uploadResponse?.[index].status)
              }
              key={index}
              selected={index === selectedItem}
              sx={{
                width: "100%",
                backgroundColor: getBgColor(
                  glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                    ? uploadResponse[index].status
                    : glocalUploadStatus === UPLOAD_STATUS.NEW
                      ? item.status
                      : undefined,
                  false,
                  false,
                ),
                "&:hover": {
                  backgroundColor: getBgColor(
                    glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                      ? uploadResponse[index].status
                      : glocalUploadStatus === UPLOAD_STATUS.NEW
                        ? item.status
                        : undefined,
                    true,
                    false,
                  ),
                },
                "&.Mui-selected": {
                  backgroundColor: getBgColor(
                    glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                      ? uploadResponse[index].status
                      : glocalUploadStatus === UPLOAD_STATUS.NEW
                        ? item.status
                        : undefined,
                    false,
                    true,
                  ),
                },
                "&:hover.Mui-selected": {
                  backgroundColor: getBgColor(
                    glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                      ? uploadResponse[index].status
                      : glocalUploadStatus === UPLOAD_STATUS.NEW
                        ? item.status
                        : undefined,
                    true,
                    true,
                  ),
                },
              }}
            >
              {glocalUploadStatus === UPLOAD_STATUS.NEW &&
                hoveredIndex === index && (
                  <ListItemAvatar sx={{ width: 60, height: 40 }}>
                    <Avatar
                      sx={{
                        bgcolor: "#fdfdfd",
                      }}
                      variant={"rounded"}
                    >
                      <IconButton
                        onClick={() => handleEditClicked(item, index)}
                      >
                        <Edit
                          sx={{ color: red["900"], width: 35, height: 35 }}
                        />
                      </IconButton>
                    </Avatar>
                  </ListItemAvatar>
                )}
              {((glocalUploadStatus === UPLOAD_STATUS.NEW &&
                hoveredIndex !== index) ||
                glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING) && (
                <ListItemAvatar sx={{ width: 60, height: 40 }}>
                  <Avatar
                    sx={{
                      bgcolor: getAvatarBgColor(
                        glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                          ? uploadResponse[index].status
                          : glocalUploadStatus,
                      ),
                      color: blueGrey[500],
                    }}
                    variant={"rounded"}
                  >
                    <PictureAsPdfOutlined
                      sx={{ color: "#ffffff", width: 35, height: 35 }}
                    />
                  </Avatar>
                </ListItemAvatar>
              )}
              <ListItemText
                primary={
                  <Typography fontWeight={"bold"} variant={"h6"}>
                    {item.ocrResultEntityJpaRequest?.originalFileName}
                  </Typography>
                }
                secondary={item.originalFile.size / 1000 + " KO"}
              />
              {hoveredIndex === index &&
                glocalUploadStatus !== UPLOAD_STATUS.DONE_UPLOADING && (
                  <>
                    <IconButton
                      onClick={() => hundleDelete(index)}
                      sx={{
                        bgcolor: red["200"],
                        color: red["900"],
                        "&:hover": {
                          bgcolor: red["300"],
                        },
                      }}
                      size={"large"}
                    >
                      <Delete fontSize={"large"} />
                    </IconButton>
                  </>
                )}
              {((glocalUploadStatus === UPLOAD_STATUS.NEW &&
                hoveredIndex !== index) ||
                glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING) && (
                <IconButton
                  sx={{
                    bgcolor: getAvatarBgColor(
                      glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                        ? uploadResponse[index].status
                        : glocalUploadStatus,
                    ),
                    color: green["900"],
                  }}
                  size={"large"}
                >
                  {getStatusIcon(
                    glocalUploadStatus === UPLOAD_STATUS.DONE_UPLOADING
                      ? uploadResponse[index].status
                      : glocalUploadStatus === UPLOAD_STATUS.NEW
                        ? item.status
                        : undefined,
                  )}
                </IconButton>
              )}
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
}
