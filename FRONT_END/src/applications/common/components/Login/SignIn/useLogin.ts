import { FormikValues } from "formik";
import * as Yup from "yup";
import { useAuthenticateMutation } from "../../../../../redux/mainApi.ts";
function useAuthenticate() {
  const [
    login, // This is the mutation trigger
    { error },
  ] = useAuthenticateMutation();

  const handleAuthenticate = async (values: FormikValues) => {
    return login({
      authenticationRequest: {
        matricule: values.matricule,
        password: values.password,
      },
    });
  };

  const isTokenExpired = (expirationTime: number) => {
    const currentTime = Date.now();
    return expirationTime < currentTime;
  };

  const schema = Yup.object().shape({
    matricule: Yup.string()
      // .matches(/^\d{4}.\d{3}.\d{5}$/, 'matricule doit contenir 12 chiffres')
      // .matches(/^(19[6-9]\d|20[0-4]\d).\d{3}.\d{5}$/, 'classe non valide')
      // .matches(/^\d{4}.(0[1-9]|[1-5]\d)\d.\d{5}$/, 'wilaya non valide')
      // .matches(/^\d{4}.\d{2}([0-5]).\d{5}$/, '7 eme chiffre non valide')
      //todo input mask is adding the points
      .required("Matricule is required"),
    // todo make the input mask shake when an invalid caracter is intered
    password: Yup.string().required("01;Password is required"),
  });
  const validate = (values : any) => {
    // todo add a generic solution ...
    try {
      schema.validateSync(values, { abortEarly: false });
    } catch (err) {
      // @ts-ignore
      return err.inner.reduce(
        // @ts-ignore
        (acc, curr) => {
          return {
            matricule:
              acc.matricule + (curr.path == "matricule" ? curr.message : ""),
            password:
              acc.password +
              (curr.path == "password" ? curr.message.split(";")[1] : ""),
            passwordErrorsAsArray: [
              ...acc.passwordErrorsAsArray,
              curr.path == "password" ? +curr.message.split(";")[0] : 0,
            ],
          };
        },
        {
          password: "",
          matricule: "",
          passwordErrorsAsArray: [],
        },
      );
    }
  };
  const initialValues = {
    matricule: "",
    password: "",
  };
  return {
    handleAuthenticate,
    error,
    schema,
    validate,
    initialValues,
    isTokenExpired,
  };
}

export default useAuthenticate;
