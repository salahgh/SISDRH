import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import { Paper, Stack } from "@mui/material";
import { RestartAltRounded, SaveRounded } from "@mui/icons-material";
import { TextField } from "formik-mui";
import { LoadingButton } from "@mui/lab";
import {
  CreateRhStructureInterneDocument,
  FindRhTedStructureInterneByIdDocument,
  RhTedStructureInterneInput,
} from "../../../_generated_gql_/graphql.ts";
import { useMutation } from "@apollo/client";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";

export const CreateStructrueInterneForm = ({ pere }) => {
  const initialValues: RhTedStructureInterneInput = {
    id: null,
    libStructureAr: null,
    libStructureFr: null,
  };

  const [create] = useMutation(CreateRhStructureInterneDocument, {
    refetchQueries: [
      {
        query: FindRhTedStructureInterneByIdDocument,
        variables: {
          id: "1",
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
        structureInterne: values,
      },
    })
      .then(() => handleShowInfoSnackBar("success"))
      .catch((e) => handleShowErrorSnackBar(JSON.stringify(e)));
    helpers.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ handleReset }) => {
        return (
          <Form>
            <Paper className={"shadow-lg drop-shadow-lg p-2 space-y-2"}>
              <Stack spacing={1}>
                <Field
                  component={TextField}
                  name={"id"}
                  label={"id"}
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
                  label={"libStructureAr"}
                  name={"libStructureAr"}
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
                <Field
                  component={TextField}
                  label={"libStructureFr"}
                  name={"libStructureFr"}
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
