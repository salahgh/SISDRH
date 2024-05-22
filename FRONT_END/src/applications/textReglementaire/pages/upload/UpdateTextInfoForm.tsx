import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import {
  Typography,
  Stack,
  ToggleButton,
  Tooltip,
  ToggleButtonGroup,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ASSETS from "../../../../resources/ASSETS";
import { useMutation, useQuery } from "@apollo/client";
import {
  AllConfidentialitesDocument,
  AllTypeTexteReglementairesDocument,
  FindAllDomainesDocument,
  FindAllTextAutoritiesDocument,
  GetPdfFileDocument,
  OcrResultUpdateDtoInput,
  UpdateOcrResultEntitityJpaDocument,
} from "../../../../_generated_gql_/graphql";
import {
  TextField,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from "formik-mui";
import { ConfidentialiteChip } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip";
import { DatePicker } from "formik-mui-x-date-pickers";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { Dispatch, SetStateAction } from "react";

export default function UpdateTextInfoForm({
  initialValues,
  setOpen,
}: {
  initialValues: OcrResultUpdateDtoInput;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // todo skeleton loader for type of documents toggle button groups

  const { data: allTypeTexteReglementaires } = useQuery(
    AllTypeTexteReglementairesDocument,
  );

  // todo skeleton loader for confidentialites toggle button groups

  const { data: allConfidentialites } = useQuery(AllConfidentialitesDocument);
  const { data: allDomaines } = useQuery(FindAllDomainesDocument);
  const { data: allAutorites } = useQuery(FindAllTextAutoritiesDocument);

  const selectedFileId = useParams().fildId;
  const selectedFileId_ = useSelector(selectSelectedFileId);
  const s = selectedFileId ? selectedFileId : selectedFileId_;

  const [update] = useMutation(UpdateOcrResultEntitityJpaDocument, {
    refetchQueries: [
      {
        query: GetPdfFileDocument,
        variables: {
          fileSignatue: s ? s : "-1",
        },
      },
    ],
  });

  const handleSubmit = async (values: FormikValues, formikHelpers) => {
    const { setSubmitting } = formikHelpers;
    update({
      variables: {
        ocrResultUpdateDto: values,
      },
    })
      .then(() => setOpen(false))
      .catch((e) => alert(JSON.stringify(e)));
    setSubmitting(false);
  };

  return (
    <Stack
      direction={"column"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={0}
      spacing={3}
    >
      <Avatar sx={{ width: 100, height: 100, bgcolor: "secondary.main" }}>
        <img src={ASSETS.PDF} style={{ width: 60, height: 60 }} alt={"f"} />
      </Avatar>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          submitForm,
          isSubmitting,
          isValid,
          values,
          dirty,
          setFieldValue,
        }) => {
          return (
            <Form style={{ padding: 0, width: "100%" }}>
              <Stack alignItems={"center"} spacing={3}>
                <Stack direction={"row"} spacing={2}>
                  <Field
                    component={TextField}
                    label="reference "
                    name={"reference"}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        width: 150,
                      },
                    }}
                  />

                  <Field
                    component={DatePicker}
                    name={"dateReference"}
                    label={"Date reference"}
                    format="dd/MM/yyyy"
                    inputProps={{
                      style: {
                        textAlign: "center",
                        width: 200,
                      },
                    }}
                  />
                </Stack>

                <Field
                  component={MuiToggleButtonGroup}
                  name="idTypeTextReglementaire"
                  type="checkbox"
                  exclusive={true}
                >
                  {allTypeTexteReglementaires?.allTypeTexteReglementaires.map(
                    (option) => (
                      <Tooltip title={option?.libTypeTexteFr}>
                        <ToggleButton
                          key={option?.id}
                          value={option?.id}
                          aria-label={option?.libTypeTexteAr}
                        >
                          <Typography>{option?.libTypeTexteAr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ),
                  )}
                </Field>

                <Field
                  component={MuiToggleButtonGroup}
                  name="isConfidentialite"
                  type="checkbox"
                  exclusive={true}
                >
                  {allConfidentialites?.allConfidentialites
                    ?.filter((item) => true)
                    ?.map((option) => (
                      <ToggleButton
                        value={option?.id}
                        aria-label={option?.libConfidentialiteAr}
                        sx={{ width: "100%" }}
                      >
                        <ConfidentialiteChip confidentialite={option} />
                      </ToggleButton>
                    ))}
                </Field>

                <Field
                  component={MuiToggleButtonGroup}
                  name="idDomaine"
                  type="checkbox"
                  exclusive={true}
                >
                  {allDomaines?.findAllDomaines?.map((option) => (
                    <ToggleButton
                      value={option?.id}
                      aria-label={option?.libAr}
                      sx={{ width: "100%" }}
                    >
                      <Typography>{option?.libAr}</Typography>
                    </ToggleButton>
                  ))}
                </Field>

                <Field
                  component={MuiToggleButtonGroup}
                  name="idAutorite"
                  type="checkbox"
                  exclusive={true}
                >
                  {allAutorites?.findAllTextAutorities?.map((option) => (
                    <ToggleButton
                      value={option?.id}
                      aria-label={option?.rhRunite.abreviationFr}
                      sx={{ width: "100%" }}
                    >
                      <Typography>{option?.rhRunite.abreviationFr}</Typography>
                    </ToggleButton>
                  ))}
                </Field>

                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <LoadingButton
                    style={{
                      textAlign: "center",
                      width: 300,
                    }}
                    variant="contained"
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2 }}
                    disabled={!(isValid && dirty)}
                    loading={isSubmitting}
                    // startIcon={<Save/>}
                  >
                    <Typography fontWeight={"bold"} variant={"h5"}>
                      OK
                    </Typography>
                  </LoadingButton>
                </Stack>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
}
