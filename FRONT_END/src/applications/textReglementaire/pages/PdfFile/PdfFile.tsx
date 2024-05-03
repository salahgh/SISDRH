import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddCircle,
  Delete,
  DeleteOutline,
  NoteRounded,
  SaveOutlined,
  Undo,
} from "@mui/icons-material";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateTextReglementaireNoteDocument,
  DeleteTexteReglementaireNoteDocument,
  NotesByTextIdAndOwnerIdDocument,
  UpdateTextNoteDocument,
} from "../../../../_generated_gql_/graphql.ts";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useSelector } from "react-redux";
import useSnackBarNotifications from "../../../common/notifications/useSnackBarNotifications.tsx";
import { selectLoggedInUser } from "../../../../redux/features/auth/userSlice.ts";
import { useState } from "react";

const PdfFile = () => {
  const selectedFileId = useSelector(selectSelectedFileId);
  const username = useSelector(selectLoggedInUser).matricule;
  const [editMode, setEditMode] = useState<number>(-1);
  const [value, setValue] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const { data: notes } = useQuery(NotesByTextIdAndOwnerIdDocument, {
    variables: {
      userName: username,
      ocrResultId: selectedFileId,
      pageable: {
        pageNumber: 0,
        pageSize: 50,
      },
    },
  });

  const [updateNote, { loading, error }] = useMutation(UpdateTextNoteDocument, {
    refetchQueries: [
      {
        query: NotesByTextIdAndOwnerIdDocument,
        variables: {
          userName: username,
          ocrResultId: selectedFileId,
          pageable: {
            pageNumber: 0,
            pageSize: 50,
          },
        },
      },
    ],
  });

  const [deleteNote] = useMutation(DeleteTexteReglementaireNoteDocument, {
    refetchQueries: [
      {
        query: NotesByTextIdAndOwnerIdDocument,
        variables: {
          userName: username,
          ocrResultId: selectedFileId,
          pageable: {
            pageNumber: 0,
            pageSize: 50,
          },
        },
      },
    ],
  });

  const [create] = useMutation(CreateTextReglementaireNoteDocument, {
    refetchQueries: [
      {
        query: NotesByTextIdAndOwnerIdDocument,
        variables: {
          userName: username,
          ocrResultId: selectedFileId,
          pageable: {
            pageNumber: 0,
            pageSize: 50,
          },
        },
      },
    ],
  });

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();
  const handleAddNote = () => {
    create({
      variables: {
        note: {
          textReglemetaireId: selectedFileId,
        },
      },
    })
      .then(() => {
        handleShowInfoSnackBar("created");
        setEditMode(0);
        setValue("");
      })
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleEditModeEnter(index: number) {
    setEditMode(index);
    setValue(notes?.notesByTextIdAndOwnerId?.content?.at(index)?.text);
  }

  function handleUpdateNote(index: number) {
    updateNote({
      variables: {
        noteId: notes?.notesByTextIdAndOwnerId?.content?.at(index)?.id,
        text: value,
      },
    })
      .then(() => handleShowInfoSnackBar("updated"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
    setEditMode(-1);
  }

  function handleDeleteNote(id: string | undefined) {
    deleteNote({
      variables: {
        id: id,
      },
    })
      .then(() => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
    setEditMode(-1);
  }

  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
      }}
      className={"p-1 overflow-clip bg-amber-600"}
    >
      <Stack direction={"row"} height={"100%"} spacing={1}>
        <Stack flex={2}>
          <HOcrViewer showGoToPdf={false} showDeletePdfFile={true} />
        </Stack>
        <Stack flex={1} className={"bg-amber-200"}>
          <Paper sx={{ height: "100%", p: 1 }}>
            <Typography
              variant={"h3"}
              sx={{
                padding: 1,
                width: "100%",
                textAlign: "center",
                color: "#eb6c02",
              }}
              fontWeight={"bold"}
            >
              الملاحظات
            </Typography>
            <Button
              variant={"contained"}
              sx={{ width: "100%" }}
              style={{ boxSizing: "border-box" }}
              startIcon={<AddCircle sx={{ width: 30, height: 30 }}></AddCircle>}
              onClick={handleAddNote}
            >
              <Typography variant={"h5"} fontWeight={"bold"} padding={1}>
                إضافة ملاحظة
              </Typography>
            </Button>
            <List>
              {notes?.notesByTextIdAndOwnerId?.content?.map((item, index) => {
                return (
                  <ListItemButton
                    onDoubleClick={() => handleEditModeEnter(index)}
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    <ListItemAvatar>
                      <NoteRounded
                        sx={{ height: 35, width: 35 }}
                        color={"warning"}
                      ></NoteRounded>
                    </ListItemAvatar>
                    {index === editMode ? (
                      <Stack
                        direction={"row"}
                        spacing={1}
                        alignItems={"center"}
                        width={"100%"}
                      >
                        <TextField
                          fullWidth={true}
                          value={value}
                          onChange={handleChange}
                        ></TextField>
                        <IconButton
                          sx={{ height: 50, width: 50 }}
                          onClick={() => handleUpdateNote(index)}
                          disabled={
                            notes?.notesByTextIdAndOwnerId?.content?.at(index)
                              ?.text === value
                          }
                        >
                          <SaveOutlined
                            sx={{ height: 35, width: 35 }}
                            color={
                              notes?.notesByTextIdAndOwnerId?.content?.at(index)
                                ?.text === value
                                ? "disabled"
                                : "primary"
                            }
                          ></SaveOutlined>
                        </IconButton>
                        <IconButton
                          onClick={() => setEditMode(-1)}
                          sx={{ height: 50, width: 50 }}
                        >
                          <Undo
                            sx={{ height: 35, width: 35 }}
                            color={"secondary"}
                          ></Undo>
                        </IconButton>
                      </Stack>
                    ) : (
                      <ListItemText>{item?.text}</ListItemText>
                    )}
                    {hoveredIndex === index || editMode === index ? (
                      <IconButton
                        onClick={() => handleDeleteNote(item?.id)}
                        sx={{ height: 35, width: 35 }}
                      >
                        <Delete
                          sx={{ height: 35, width: 35 }}
                          color={"error"}
                        ></Delete>
                      </IconButton>
                    ) : null}
                  </ListItemButton>
                );
              })}
            </List>
          </Paper>
        </Stack>
      </Stack>
    </div>
  );
};

export default PdfFile;
