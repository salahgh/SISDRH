import { SetStateAction, useRef, useState } from "react";
import {
  OcrResultEntityJpaRequest,
  UPLOAD_STATUS,
  UplodComponentData,
} from "./UploadMainPage";
import * as React from "react";
import { getOcrResultEntityJpaRequestFromFileName } from "./FileUploadInput";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useQuery } from "@apollo/client";
import { AllTypeTexteReglementairesDocument } from "../../../../_generated_gql_/graphql";
import EditFileNameForm from "./EditFileNameForm";
import { FormikProps, FormikValues } from "formik";

export const EditFileName = (props: {
  indexToBeEdited: number;
  filesList: UplodComponentData[] | undefined;
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  setOpenAll: React.Dispatch<SetStateAction<boolean>>;
  setFilesList: React.Dispatch<
    SetStateAction<UplodComponentData[] | undefined>
  >;
}) => {
  const {
    filesList,
    indexToBeEdited,
    open,
    setOpen,
    setOpenAll,
    setFilesList,
  } = props;
  const [value, setValue] = useState<string | undefined>(
    filesList?.[indexToBeEdited].originalFile.name,
  );
  const [ocrRequest, setOcrRequest] = useState<OcrResultEntityJpaRequest>({
    reference: null,
    typeTexteReglementaire: null,
    dateReference: null,
    originalFileName: null,
    idConfidentialite: null,
  });

  const formikRef = useRef<FormikProps<FormikValues>>();

  const { data, loading, error } = useQuery(AllTypeTexteReglementairesDocument);

  function handleChange(
    e?: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    setValue(e?.target.value);
    const ocrRequest_: OcrResultEntityJpaRequest =
      getOcrResultEntityJpaRequestFromFileName(
        e?.target.value ? e?.target.value : "",
        data?.allTypeTexteReglementaires,
      );
    if (ocrRequest_) {
      setOcrRequest(ocrRequest_);
      formikRef?.current?.setFieldValue("reference", ocrRequest_?.reference);
      formikRef?.current?.setFieldValue(
        "dateReference",
        ocrRequest_?.dateReference,
      );
      formikRef?.current?.setFieldValue(
        "idTypeText",
        data?.allTypeTexteReglementaires?.filter(
          (item) => item?.id == ocrRequest_?.typeTexteReglementaire?.id,
        )[0]?.libTypeTexteFr,
      );
    }
  }

  const pdfFileUri = filesList?.filter(
    (file, index) => index == indexToBeEdited,
  )[0]?.uri;

  function handleSave(ocrRequest: OcrResultEntityJpaRequest) {
    setFilesList((old) => {
      return old?.map((item, index) => {
        if (index !== indexToBeEdited) return item;
        else {
          let uplodComponentData: UplodComponentData;
          uplodComponentData = {
            ...item,
            ocrResultEntityJpaRequest: ocrRequest,
            status: UPLOAD_STATUS.NEW,
          };
          return uplodComponentData;
        }
      });
    });
    setOpen(false);
    setOpenAll(false);
  }

  //todo ajouter le formulaire de modification

  return (
    <Stack direction={"row"} spacing={2} padding={1}>
      <Stack padding={0} spacing={1} alignItems={"center"} width={1500}>
        <TextField
          helperText={
            ocrRequest?.reference === null
              ? "nom du fichier non valide !"
              : null
          }
          error={ocrRequest?.reference === null}
          value={value}
          onChange={(e) => handleChange(e)}
          sx={{ width: "100%" }}
        />
        {ocrRequest?.reference !== null && (
          <>
            <Stack direction={"row"}>
              <Typography> reference : </Typography>
              <Typography> {ocrRequest?.reference} </Typography>
            </Stack>
            <Stack direction={"row"}>
              <Typography> date reference : </Typography>
              {
                <Typography>
                  {" "}
                  {ocrRequest?.dateReference &&
                    format(ocrRequest?.dateReference, "EEEE d MMMM yyyy", {
                      locale: fr,
                    })}{" "}
                </Typography>
              }
            </Stack>
            <Stack direction={"row"}>
              <Typography> type du rexte : </Typography>
              <Typography>
                {" "}
                {
                  data?.allTypeTexteReglementaires?.filter(
                    (item) => item.id == ocrRequest?.typeTexteReglementaire?.id,
                  )[0].libTypeTexteFr
                }{" "}
              </Typography>
            </Stack>
          </>
        )}
        <EditFileNameForm
          formikRef={formikRef}
          handleSave={handleSave}
          setValue={setValue}
          ocrRequest={ocrRequest}
          setOcrRequest={setOcrRequest}
          setFormikValues={() => null}
        />
      </Stack>
      {pdfFileUri && (
        <iframe src={pdfFileUri} width="100%" height="770"></iframe>
      )}
    </Stack>
  );
};
