import { Field, Formik, FormikHelpers, FormikValues } from "formik";
import {
  Autocomplete as MuiAutoComplete,
  Button,
  Chip,
  darken,
  FormControlLabel,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Stack,
  TextField as MuiTextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  ArrowDownward,
  ArrowDropDown,
  Business,
  FilterAltOff,
  Save,
  SelectAll,
} from "@mui/icons-material";
import { TextField, Switch } from "formik-mui";
import {
  CourrierDtoInput,
  FindAllCourrierAutoriteByLibDocument,
  FindAllCourrierAutoriteByLibQuery,
} from "../../_generated_gql_/graphql.ts";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import * as React from "react";
import { highlightSearchTokenWithSpan } from "../common/utilities/tools.ts";
import { EditEntityDialog } from "../textReglementaire/pages/OcrJobMonitoring/EditEntityDialog.tsx";
import { GetUniteDialogue } from "./GetUniteDialogue.tsx";
import { Theme } from "@mui/material/styles";

const CreateCourrierForm = ({ setOpen }: { setOpen: any }) => {
  // const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
  //   useSnackBarNotifications();

  const [libUnite, setLibUnite] = useState<string>("");

  const { data: unites, loading } = useQuery(
    FindAllCourrierAutoriteByLibDocument,
    {
      variables: {
        lib: libUnite,
        pageable: {
          pageNumber: 0,
          pageSize: 20,
        },
      },
    },
  );

  const handleSubmit = async (
    values: FormikValues,
    helpers: FormikHelpers<any>,
  ) => {
    helpers.setSubmitting(true);

    alert(JSON.stringify(values));

    // createFolderMutation({
    //   variables: {
    //     folder: {
    //       name: values.name,
    //       color: values.color,
    //       description: values.description,
    //     },
    //     username: username ? username : "anonymous",
    //   },
    //   refetchQueries: [
    //     { query: GetOwnedFoldersDocument, variables: newVariables },
    //   ],
    // })
    //   .then((resulet: any) => {
    //     alert(JSON.stringify(resulet?.data));
    //     setOpen(false);
    //     handleShowInfoSnackBar("validé avec success");
    //     dispatch(setSelectedFolder({ id: resulet?.data?.createFolder?.id }));
    //   })
    //   .catch((error: any) => {
    //     handleShowGraphQlErrorSnackBar(JSON.stringify(error.graphQLErrors));
    //   });
    helpers.setSubmitting(false);
  };

  const initialValues: CourrierDtoInput = {
    answerRequired: "",
    courrierAutoriteId: "",
    dateReference: "",
    dateReferenceArrive: "",
    deadLine: "",
    destinataires: "",
    reference: "",
    referenceArrive: "",
    references: "",
    typeCourrier: "",
  };
  //
  // const validationSchema = yup.object().shape({
  //   color: yup.string(),
  //
  //   name: yup.string().required("le nom du dossier est obligatoire"),
  //
  //   description: yup.string(),
  // });

  const [getAutoriteOpen, setGetAutoriteOpen] = useState(false);

  function handleAutoriteClick() {
    setGetAutoriteOpen(true);
  }

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        isValid,
        dirty,
        isSubmitting,
        resetForm,
        setFieldValue,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={1}
              sx={{ marginTop: 6, marginBottom: 6, width: "100%" }}
              alignItems={"start"}
            >
              <EditEntityDialog
                open={getAutoriteOpen}
                setOpen={setGetAutoriteOpen}
                title={"edit"}
                content={<GetUniteDialogue></GetUniteDialogue>}
                fullWidth={true}
                maxWidth={"xl"}
              ></EditEntityDialog>
              <FormControlLabel
                dir={"ltr"}
                control={
                  <Field
                    label={"وجوب الرد"}
                    name={"answerRequired"}
                    // sx={{ marginBottom: 1, flex: 1 }}
                    component={Switch}
                    type="checkbox"
                  />
                }
                label={"وجوب الرد"}
              ></FormControlLabel>

              <MuiAutoComplete
                fullWidth={true}
                id="courrierAutoriteId"
                options={
                  unites?.findAllCourrierAutoriteByLib?.content
                    ? unites?.findAllCourrierAutoriteByLib?.content
                    : []
                }
                loading={loading}
                renderOption={(
                  props,
                  option: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0],
                ) => {
                  return (
                    <ListItem {...props}>
                      <ListItemText
                        sx={{ textAlign: "left" }}
                        primary={
                          <span
                            dangerouslySetInnerHTML={highlightSearchTokenWithSpan(
                              option?.rhRunite.libUniteeAr +
                                "/" +
                                option?.rhRunite?.regionMilitaire
                                  ?.libAbrRegionAr +
                                "---- " +
                                option?.rhRunite?.abreviationFr +
                                "  " +
                                option?.rhRunite?.regionMilitaire
                                  ?.libAbrRegionFr +
                                " " +
                                option?.id?.toString(),
                              libUnite,
                            )}
                          />
                        }
                      ></ListItemText>
                    </ListItem>
                  );
                }}
                freeSolo
                onInputChange={(e, v) => setLibUnite(v)}
                onChange={(e, value) => {
                  console.log(value);
                  // setFieldValue(
                  //   "courrierAutoriteId",
                  //   value?.map((item) => item?.id),
                  // ).then(() => null);
                }}
                getOptionKey={(
                  option: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0],
                ) => option?.id}
                getOptionLabel={(
                  option: FindAllCourrierAutoriteByLibQuery["findAllCourrierAutoriteByLib"]["content"][0],
                ) =>
                  option ? JSON.stringify(option?.rhRunite.libUniteeFr) : ""
                }
                renderInput={(params) => (
                  <MuiTextField
                    fullWidth={true}
                    {...params}
                    sx={{ height: 80 }}
                    label="الهيئة"
                  />
                )}
              />

              <Stack
                sx={{
                  border: "solid",
                  borderWidth: 1,
                  borderColor: "#b4b8b7",
                  height: 60,
                  borderRadius: 1,
                  padding: 1.5,
                  width: "100%",
                }}
                direction={"row"}
                alignItems={"center"}
              >
                <Typography onClick={handleAutoriteClick}>autorite</Typography>
                <ArrowDropDown></ArrowDropDown>
              </Stack>

              <Field
                label={"المرسل"}
                name={"courrierAutoriteId"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />

              <Field
                label={"المرجع"}
                name={"reference"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"تاريخ المرجع"}
                name={"dateReference"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"مرجع الورود"}
                name={"referenceArrive"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"تاريخ مرجع الورود"}
                name={"dateReferenceArrive"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"الرد قبل"}
                name={"deadLine"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"المرسل إليهم"}
                name={"destinataires"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"نوع البريد"}
                name={"typeCourrier"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <LoadingButton
                disabled={!(isValid && dirty)}
                loading={isSubmitting}
                variant="contained"
                type="submit"
                color="primary"
                loadingPosition="start"
                startIcon={<Save />}
                sx={{ flex: 1 }}
              >
                AJOUTER
              </LoadingButton>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<FilterAltOff />}
                sx={{ flex: 1 }}
              >
                SUPPRIMER
              </Button>
            </Stack>
          </form>
        );
      }}
    </Formik>
  );
};

export default CreateCourrierForm;
