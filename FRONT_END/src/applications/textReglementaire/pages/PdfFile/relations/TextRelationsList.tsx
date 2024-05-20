import { FormDialogue } from "../../../../common/components/dialogs/FormDialogue.tsx";
import { useState } from "react";
import { GetTextDialogue } from "./GetTextDialogue.tsx";
import {
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOcrResultRelationDocument,
  DeleteOcrResultRelationDocument,
  OcrResultRelationByObjectIdDocument,
  OcrResultRelationBySubjectIdDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { setSelectedFileId } from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useDispatch } from "react-redux";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { getLink, routs } from "../../../../../routing/routs.tsx";
import Divider from "@mui/material/Divider";
import { Theme } from "@mui/material/styles";
import { AddCircle, AddOutlined, Delete } from "@mui/icons-material";

export const TextRelationsList = () => {
  const subjectId = useParams().fildId;
  const [open, setOpen] = useState(false);
  const title = "choose a file";
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedRelationType, setSelectedRelationType] = useState();
  const [selectedRelationItem, setSelectedRelationItem] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredIndex, setHoveredIndex] = useState();

  const { data: relations } = useQuery(OcrResultRelationBySubjectIdDocument, {
    variables: {
      subjectId: subjectId,
    },
  });

  const { data: objectRelations } = useQuery(
    OcrResultRelationByObjectIdDocument,
    {
      variables: {
        objectId: subjectId,
      },
    },
  );

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const [submit] = useMutation(CreateOcrResultRelationDocument, {
    refetchQueries: [
      {
        query: OcrResultRelationBySubjectIdDocument,
        variables: {
          subjectId: subjectId,
        },
      },
      {
        query: OcrResultRelationByObjectIdDocument,
        variables: {
          objectId: subjectId,
        },
      },
    ],
  });

  const [delete_] = useMutation(DeleteOcrResultRelationDocument, {
    refetchQueries: [
      {
        query: OcrResultRelationBySubjectIdDocument,
        variables: {
          subjectId: subjectId,
        },
      },
      {
        query: OcrResultRelationByObjectIdDocument,
        variables: {
          objectId: subjectId,
        },
      },
    ],
  });

  const handleOk = () => {
    submit({
      variables: {
        subjectId: subjectId,
        objectId: selectedFile,
        relationType: selectedRelationType,
      },
    })
      .then(() => {
        handleShowInfoSnackBar("success");
        setOpen(false);
      })
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  };

  console.log(getLink(routs.PdfFilePage));

  function handleDelete(
    id:
      | {
          __typename?: "OcrResultRelationKey";
          object?: string | null;
          relationType?: string | null;
          subject?: string | null;
        }
      | undefined,
  ) {
    delete_({
      variables: {
        id: {
          object: id?.object,
          relationType: id?.relationType,
          subject: id?.subject,
        },
      },
    })
      .then(() => handleShowInfoSnackBar("deleted"))
      .catch((e) => handleShowGraphQlErrorSnackBar(JSON.stringify(e)));
  }

  return (
    <div>
      <FormDialogue
        open={open}
        setOpen={setOpen}
        title={title}
        content={
          <GetTextDialogue
            setSelectedFile={setSelectedFile}
            setRelationTypeId={setSelectedRelationType}
            setOpen={setOpen}
            handleOk={handleOk}
            selectedRelationType={selectedRelationType}
          />
        }
        fullWidth={true}
        maxWidth={"xl"}
        padding={0}
      ></FormDialogue>
      <div className={"flex p-2 w-full justify-center"}>
        <Button
          variant={"contained"}
          startIcon={<AddCircle></AddCircle>}
          onClick={() => setOpen(true)}
        >
          <Typography fontWeight={"bold"} variant={"h5"}>
            إضافة علاقة بين نصين قانونيين
          </Typography>
        </Button>
      </div>
      <List>
        {relations?.ocrResultRelationBySubjectId?.map((relation, index) => (
          <ListItemButton
            onMouseEnter={() => setHoveredIndex(relation?.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setSelectedRelationItem(relation?.id)}
            onDoubleClick={() => {
              dispatch(setSelectedFileId(relation?.object?.id));
              navigate(`${getLink(routs.PdfFilePage)}/${relation?.object?.id}`);
            }}
            selected={relation?.id === selectedRelationItem}
            key={index}
          >
            <ListItemText>
              {relation?.relationType?.subjectLib +
                " " +
                relation?.object?.typeTexteReglementaire?.libTypeTexteAr +
                " رقم  " +
                relation?.object?.reference +
                " المؤرخ في " +
                relation?.object?.dateReference}
            </ListItemText>
            <Stack flex={1}></Stack>
            {hoveredIndex === relation?.id && (
              <IconButton
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: "#f8bcbc",
                }}
                onClick={() => handleDelete(relation?.id)}
              >
                <Delete sx={{ width: 28, height: 28 }} color={"error"}></Delete>
              </IconButton>
            )}
          </ListItemButton>
        ))}
      </List>
      {relations?.ocrResultRelationBySubjectId?.length !== 0 &&
        objectRelations?.ocrResultRelationByObjectId?.length !== 0 && (
          <Divider></Divider>
        )}
      {objectRelations?.ocrResultRelationByObjectId?.length !== 0 && (
        <List sx={{ backgroundColor: "#f4caca" }}>
          {objectRelations?.ocrResultRelationByObjectId?.map(
            (relation, index) => (
              <ListItemButton
                onMouseEnter={() => setHoveredIndex(relation?.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onDoubleClick={() => {
                  dispatch(setSelectedFileId(relation?.subject?.id));
                  navigate(
                    `${getLink(routs.PdfFilePage)}/${relation?.subject?.id}`,
                  );
                }}
                selected={relation?.id === selectedRelationItem}
                key={index}
              >
                <ListItemText>
                  {relation?.relationType?.objectLib +
                    " بـال" +
                    relation?.subject?.typeTexteReglementaire?.libTypeTexteAr +
                    " رقم  " +
                    relation?.subject?.reference +
                    " المؤرخ في " +
                    relation?.subject?.dateReference}
                </ListItemText>
                <Stack flex={1}></Stack>
              </ListItemButton>
            ),
          )}
        </List>
      )}
    </div>
  );
};
