import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikValues,
} from "formik";
import {
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ASSETS from "../../../../resources/ASSETS";
import { ErrorResponse } from "../../../../redux/mainApi";
import { useQuery } from "@apollo/client";
import {
  AllConfidentialitesDocument,
  AllTypeTexteReglementairesDocument,
} from "../../../../_generated_gql_/graphql";
import { TextField } from "formik-mui";
import { ConfidentialiteChip } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip";
import {
  OcrResultEntityJpaRequest,
} from "./uploadMainPage/UploadMainPage.tsx";
import { format, getYear } from "date-fns";
import * as yup from "yup";
import useSnackBarNotifications from "../../../common/notifications/useSnackBarNotifications.tsx";
import { DatePicker } from "formik-mui-x-date-pickers";
import { getOcrResultEntityJpaRequestFromFileName } from "./fileUploadInput/tools.ts";

export interface DiaglogError {
  errorResponse: ErrorResponse | undefined;
  status: string | undefined;
}

export default function EditFileNameForm({
  setFormikValues,
  ocrRequest,
  setOcrRequest,
  setValue,
  handleSave,
  formikRef,
}: {
  setFormikValues: any;
  ocrRequest: OcrResultEntityJpaRequest;
  setOcrRequest: React.Dispatch<SetStateAction<OcrResultEntityJpaRequest>>;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  handleSave: (ocrRequest: OcrResultEntityJpaRequest) => void;
  formikRef: any;
}) {
  const [diaglogError, setDiaglogError] = useState<DiaglogError>({
    errorResponse: undefined,
    status: undefined,
  });

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleShowErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  // todo skeleton loader for type of documents toggle button groups

  const {
    data: allTypeTexteReglementaires,
    loading: loadingAllTypeTextReglementaires,
  } = useQuery(AllTypeTexteReglementairesDocument);


  // todo skeleton loader for confidentialites toggle button groups

  const {
    data: allConfidentialites,
    loading,
  } = useQuery(AllConfidentialitesDocument);

  const handleSubmit = async (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>,
  ) => {
    const { setSubmitting } = formikHelpers;
    let value = "";
    value =
      value +
      values?.idTypeText +
      "_" +
      getYear(values?.dateReference) +
      "_" +
      values?.reference +
      "_" +
      format(values?.dateReference, "dd_MM_yyyy") +
      ".pdf";
    setFormikValues(values);
    setValue(value);
    const ocrRequest: OcrResultEntityJpaRequest =
      getOcrResultEntityJpaRequestFromFileName(
        value,
        allTypeTexteReglementaires?.allTypeTexteReglementaires,
      );
    setOcrRequest(ocrRequest);
    handleSave(ocrRequest);
    setSubmitting(false);
  };

  const initialValues = {
    reference: "",
    dateReference: "",
    idConfidentialite: " ",
    idTypeText: "",
  };
  const validationSchema = yup.object().shape({
    reference: yup.string().required("la reference est obligatoire"),

    dateReference: yup.string().required("date reference est obligaroire"),

    idConfidentialite: yup.string(),
    idTypeText: yup.string().required(),
  });

  // @ts-ignore
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
        <img src={ASSETS.PDF} style={{ width: 60, height: 60 }} />
      </Avatar>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        innerRef={formikRef}
      >
        {({
          submitForm,
          isSubmitting,
          isValid,
          handleReset,
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

                <ToggleButtonGroup
                  // fullWidth={true}
                  sx={{
                    width: "100%",
                  }}
                  id={"idTypeText"}
                  name={"idTypeText"}
                  value={values.idTypeText}
                  onChange={(event, newValue) => {
                    setFieldValue("idTypeText", newValue);
                  }}
                  exclusive={true}
                >
                  {allTypeTexteReglementaires?.allTypeTexteReglementaires.map(
                    (option) => (
                      <ToggleButton
                        value={option?.libTypeTexteFr}
                        aria-label={option?.libTypeTexteAr}
                        style={{ width: "100%" }}
                      >
                        <Typography
                          fontWeight={"bold"}
                          sx={{ width: "100%" }}
                          fontSize={20}
                        >
                          {option?.libTypeTexteAr}
                        </Typography>
                      </ToggleButton>
                    ),
                  )}
                </ToggleButtonGroup>

                <ToggleButtonGroup
                  fullWidth={true}
                  id={"idConfidentialite"}
                  name={"idConfidentialite"}
                  value={values.idConfidentialite}
                  onChange={(event, newValue) => {
                    setFieldValue("idConfidentialite", newValue);
                  }}
                  exclusive={true}
                >
                  {allConfidentialites?.allConfidentialites
                    ?.filter((item) => item?.id != 5)
                    ?.map((option) => (
                      <ToggleButton
                        value={option?.libConfidentialiteFr}
                        aria-label={option?.libConfidentialiteAr}
                        sx={{ width: "100%" }}
                      >
                        <ConfidentialiteChip confidentialite={option} />
                      </ToggleButton>
                    ))}
                </ToggleButtonGroup>
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
