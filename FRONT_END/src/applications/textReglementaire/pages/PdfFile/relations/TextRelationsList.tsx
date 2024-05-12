import { CreateEntityDialog } from "../../../../common/UserAdministration/roles/CreateEntityDialog.tsx";
import { useState } from "react";
import { GetTextDialogue } from "./GetTextDialogue.tsx";
import { Button, List, ListItemButton } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOcrResultRelationDocument,
  OcrResultRelationBySubjectIdDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { selectSelectedFileId } from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useSelector } from "react-redux";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";

export const TextRelationsList = () => {
  const subjectId = useSelector(selectSelectedFileId);
  const [open, setOpen] = useState(false);
  const title = "choose a file";
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedRelationType, setSelectedRelationType] = useState();

  const { data: relations } = useQuery(OcrResultRelationBySubjectIdDocument, {
    variables: {
      subjectId: subjectId,
    },
  });

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
          <ListItemButton key={index}>
            {relation?.relationType?.libTypeRelationAr +
              " " +
              relation?.object?.typeTexteReglementaire?.libTypeTexteAr +
              " رقم  " +
              relation?.object?.reference +
              " المؤرخ في " +
              relation?.object?.dateReference}
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};
