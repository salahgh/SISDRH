import { Field, Formik, FormikHelpers, FormikValues } from "formik";
import { Button, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FilterAltOff, Save } from "@mui/icons-material";
import {
  CreateFolderDocument,
  Folder,
  GetOwnedFoldersDocument,
  GetOwnedFoldersQueryVariables,
} from "../../../../../_generated_gql_/graphql";
import * as yup from "yup";
import { TextField } from "formik-mui";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { setSelectedFolder } from "../../../../../redux/features/folderAndFiles/foldersSlice.ts";

const CreateFolderForm = ({ setOpen }: { setOpen: any }) => {
  const dispatch = useDispatch();

  const [
    createFolderMutation,
    { data, loading: creatingFolder, error: errorCreatingFolder },
  ] = useMutation(CreateFolderDocument);
  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();
  const username = useSelector(selectLoggedInUser).matricule;

  const handleSubmit = async (
    values: FormikValues,
    helpers: FormikHelpers<any>,
  ) => {
    helpers.setSubmitting(true);

    const newVariables: GetOwnedFoldersQueryVariables = {
      username_: username,
    };
    createFolderMutation({
      variables: {
        folder: {
          name: values.name,
          color: values.color,
          description: values.description,
        },
        username: username ? username : "anonymous",
      },
      refetchQueries: [
        { query: GetOwnedFoldersDocument, variables: newVariables },
      ],
    })
      .then((resulet: any) => {
        alert(JSON.stringify(resulet?.data));
        setOpen(false);
        handleShowInfoSnackBar("validé avec success");
        dispatch(setSelectedFolder({ id: resulet?.data?.createFolder?.id }));
      })
      .catch((error: any) => {
        handleShowGraphQlErrorSnackBar(JSON.stringify(error.graphQLErrors));
      });
    helpers.setSubmitting(false);
  };

  const initialValues: Folder = {
    color: "",
    name: "new Folder",
    description: "",
  };

  const validationSchema = yup.object().shape({
    color: yup.string(),

    name: yup.string().required("le nom du dossier est obligatoire"),

    description: yup.string(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isValid, dirty, isSubmitting, resetForm }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Stack spacing={1} sx={{ marginTop: 6, marginBottom: 6 }}>
              <Field
                label={"nom du dossier"}
                name={"name"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"description"}
                name={"description"}
                sx={{ marginBottom: 1, flex: 1 }}
                component={TextField}
              />
              <Field
                label={"couleur"}
                name={"color"}
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

export default CreateFolderForm;
