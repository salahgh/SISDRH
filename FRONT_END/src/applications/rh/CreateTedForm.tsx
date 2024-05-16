import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import { Paper, Stack, ToggleButton, Tooltip, Typography } from "@mui/material";
import { RestartAltRounded, SaveRounded } from "@mui/icons-material";

import { TextField, ToggleButtonGroup } from "formik-mui";

import { LoadingButton } from "@mui/lab";
import {
  AllAremementTedDocument,
  AllCatGradesDocument,
  AllPostesDocument,
  AllQualificationsDocument,
  AllSpecialitesTedDocument,
  AllTedsPagedDocument,
  CreateTedDocument,
  TedArmesDocument,
  TedDtoInput,
} from "../../_generated_gql_/graphql.ts";
import { useMutation, useQuery } from "@apollo/client";
import useSnackBarNotifications from "../common/notifications/useSnackBarNotifications.tsx";

export const CreateTedForm = ({ page }) => {
  const initialValues: TedDtoInput = {
    id: null,
    idArme: null,
    idArmementTed: null,
    idCatGrade: null,
    idFonction: null,
    idHabilitation: null,
    idQualification: null,
    idSpecialiteTed: null,
    idTypeStructureSn: null,
    idPoste: null,
    nombre: 0,
    observation: "",
  };

  const { data: catGrades } = useQuery(AllCatGradesDocument);
  const { data: armementTed } = useQuery(AllAremementTedDocument);
  const { data: armes } = useQuery(TedArmesDocument);
  const { data: allSpecialite } = useQuery(AllSpecialitesTedDocument);
  const { data: allQualifictios } = useQuery(AllQualificationsDocument);
  const { data: allPostes } = useQuery(AllPostesDocument);
  const [create] = useMutation(CreateTedDocument, {
    refetchQueries: [
      {
        query: AllTedsPagedDocument,
        variables: {
          page: page,
        },
      },
    ],
  });

  const { handleShowInfoSnackBar, handleShowErrorSnackBar } =
    useSnackBarNotifications();

  const handleSubmit = async (
    values: FormikValues,
    helpers: FormikHelpers<any>,
  ) => {
    helpers.setSubmitting(true);
    create({
      variables: {
        tedDtoInput: values,
      },
    })
      .then(() => handleShowInfoSnackBar("success"))
      .catch((e) => JSON.stringify(e));
    helpers.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({
        submitForm,
        isSubmitting,
        isValid,
        errors,
        handleReset,
        dirty,
        setFieldValue,
        values,
      }) => {
        return (
          <Form>
            <Paper className={"shadow-lg drop-shadow-lg p-2 space-y-2"}>
              <Stack spacing={1}>
                <Field
                  component={TextField}
                  name={"nombre"}
                  label={"nombre"}
                  inputProps={{
                    style: {
                      fontSize: 30,
                      height: 22,
                      fontWeight: "bold",
                      width: 120,
                    },
                  }}
                />
                <Field
                  component={TextField}
                  label={"observation"}
                  name={"observation"}
                  inputProps={{
                    style: {
                      textAlign: "center",
                      fontSize: 30,
                      height: 22,
                      fontWeight: "bold",
                      flexGrow: 1,
                      flex: 1,
                      width: 300,
                    },
                  }}
                />
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idCatGrade"
                    type="checkbox"
                    exclusive={true}
                  >
                    {catGrades?.allCatGrades?.map((option) => (
                      <Tooltip title={option?.cat}>
                        <ToggleButton
                          key={option?.cat}
                          value={option?.catGrade}
                        >
                          <Typography>{option?.libCatAr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idArmementTed"
                    type="checkbox"
                    exclusive={true}
                  >
                    {armementTed?.allAremementTed?.map((option) => (
                      <Tooltip title={option?.libArmementAr}>
                        <ToggleButton key={option?.id} value={option?.id}>
                          <Typography>{option?.libArmementFr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idArme"
                    type="checkbox"
                    exclusive={true}
                  >
                    {armes?.tedArmes?.map((option) => (
                      <Tooltip title={option?.libArmeAr}>
                        <ToggleButton key={option?.id} value={option?.id}>
                          <Typography>{option?.libArmeFr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idArme"
                    type="checkbox"
                    exclusive={true}
                  >
                    {allSpecialite?.allSpecialitesTed?.map((option) => (
                      <Tooltip title={option?.libSpecialiteAr}>
                        <ToggleButton key={option?.id} value={option?.id}>
                          <Typography>{option?.libSpecialiteFr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idArme"
                    type="checkbox"
                    exclusive={true}
                  >
                    {allQualifictios?.allQualifications?.map((option) => (
                      <Tooltip title={option?.libQualificationAr}>
                        <ToggleButton key={option?.id} value={option?.id}>
                          <Typography>{option?.libQualificatinFr}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>
                <Stack direction={"row"} spacing={1} justifyContent={"center"}>
                  <Field
                    component={ToggleButtonGroup}
                    name="idPoste"
                    type="checkbox"
                    exclusive={true}
                  >
                    {allPostes?.allPostes?.map((option) => (
                      <Tooltip title={option?.idPoste}>
                        <ToggleButton
                          key={option?.idPoste}
                          value={option?.idPoste}
                        >
                          <Typography>{option?.idPoste}</Typography>
                        </ToggleButton>
                      </Tooltip>
                    ))}
                  </Field>
                </Stack>

                {open && (
                  <Stack
                    justifyContent={"center"}
                    spacing={1}
                    direction={"row"}
                  >
                    <LoadingButton
                      sx={{
                        height: 60,
                        width: 180,
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                      variant={"contained"}
                      startIcon={<SaveRounded sx={{ width: 40, height: 40 }} />}
                      // loading={isLoading}
                      type={"submit"}
                    ></LoadingButton>

                    <LoadingButton
                      sx={{
                        height: 60,
                        width: 180,
                        fontSize: 18,
                        fontWeight: "bold",
                      }}
                      variant={"outlined"}
                      startIcon={
                        <RestartAltRounded
                          sx={{ width: 40, height: 40, fontSize: "bold" }}
                        />
                      }
                      // loading={isLoading}
                      // type={"submit"}
                      onClick={handleReset}
                    ></LoadingButton>
                  </Stack>
                )}
              </Stack>
            </Paper>
          </Form>
        );
      }}
    </Formik>
  );
};
