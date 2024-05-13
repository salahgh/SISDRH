import { CreateEntityDialog } from "../../../../common/UserAdministration/roles/CreateEntityDialog.tsx";
import { useState } from "react";
import { GetTextDialogue } from "./GetTextDialogue.tsx";
import { Button, List, ListItemButton } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOcrResultRelationDocument,
  OcrResultRelationByObjectIdDocument,
  OcrResultRelationBySubjectIdDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { setSelectedFileId } from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useDispatch } from "react-redux";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { getLink, routs } from "../../../../../routing/routs.tsx";
import Divider from "@mui/material/Divider";

export const TextRelationsList = () => {
  const subjectId = useParams().fildId;
  const [open, setOpen] = useState(false);
  const title = "choose a file";
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedRelationType, setSelectedRelationType] = useState();
  const [selectedRelationItem, setSelectedRelationItem] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <div>
      <CreateEntityDialog
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
      ></CreateEntityDialog>
      <Button onClick={() => setOpen(true)}>ajouter une relation</Button>
      <List>
        {relations?.ocrResultRelationBySubjectId?.map((relation, index) => (
          <ListItemButton
            onClick={() => setSelectedRelationItem(relation?.id)}
            onDoubleClick={() => {
              dispatch(setSelectedFileId(relation?.object?.id));
              navigate(`${getLink(routs.PdfFilePage)}/${relation?.object?.id}`);
            }}
            selected={relation?.id === selectedRelationItem}
            key={index}
          >
            {relation?.relationType?.subjectLib +
              " " +
              relation?.object?.typeTexteReglementaire?.libTypeTexteAr +
              " رقم  " +
              relation?.object?.reference +
              " المؤرخ في " +
              relation?.object?.dateReference}
          </ListItemButton>
        ))}
      </List>
      <Divider></Divider>
      <List>
        {objectRelations?.ocrResultRelationByObjectId?.map(
          (relation, index) => (
            <ListItemButton
              selected={relation?.id === selectedRelationItem}
              key={index}
            >
              {relation?.relationType?.objectLib +
                " بـال" +
                relation?.subject?.typeTexteReglementaire?.libTypeTexteAr +
                " رقم  " +
                relation?.subject?.reference +
                " المؤرخ في " +
                relation?.subject?.dateReference}
            </ListItemButton>
          ),
        )}
      </List>
    </div>
  );
};
