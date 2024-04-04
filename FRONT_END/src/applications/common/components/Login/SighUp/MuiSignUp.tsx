import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  Stack
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import maskedFormikMuiTextField from "../MaskedFormikMuiTextField";
import { PasswordWithToolTipInput } from "../PasswordWithToolTipInput";
import { useTheme } from "@mui/material/styles";
import { initialValues, validate } from "./SignUpLogic";
import { useNavigate } from "react-router-dom";
import useRegister from "./useLogin";
import { ErrorResponse } from "../../../../../redux/mainApi.ts";
import useSnackBarNotifications from "../../../notifications/useSnackBarNotifications.tsx";
import { getLink, routs } from "../../../../../routing/routs.tsx";
import { Copyright } from "../Copyright.tsx";


export interface DiaglogError {
  errorResponse: ErrorResponse | undefined,
  status: string | undefined
}

export default function MuiSignUp() {

  const { handleShowInfoSnackBar, handleShowErrorSnackBar } = useSnackBarNotifications();
  const theme = useTheme();
  const navigate = useNavigate();

  const {
    handleRegister
  } = useRegister();

  const handleSubmit = (values: FormikValues, formikHelpers: FormikHelpers<any>) => {
    const { setSubmitting } = formikHelpers;
    handleRegister(values).unwrap().then(
      (result) => {
        setSubmitting(false);
        handleShowInfoSnackBar("تم التسجيل بنجاح");
        navigate(getLink(routs.DemandeInscriptionSuccess), { state: { person: result } });
      }
    ).catch(
      (error) => {
        setSubmitting(false);
        handleShowErrorSnackBar({
          errorResponse: error.data, status: error.status.toString()
        }, { variant: "error" });
      });
  };


  return (

    <div className={"w-full h-full flex items-center justify-center"}>
      <div
        className={"bg-slate-100 max-w-lg flex flex-col h-5/6 items-center justify-center p-10 drop-shadow-2xl shadow-blue-200 rounded-2xl"}>
        <Avatar sx={{ width: 100, height: 100, m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon
            sx={{ width: 60, height: 60, color: "primary" }}
          />
        </Avatar>
        <Typography variant="h5" fontWeight={"bold"}>
          طلب التسجيل في التطبيقية
        </Typography>
        <div className={"py-2"}>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validate}
          >
            {
              (
                {
                  submitForm,
                  isSubmitting,
                  isValid,
                  errors,
                  dirty
                }
              ) => {
                return (
                  <Form>
                    <Stack
                      spacing={1}
                      width={350}
                    >
                      <Field
                        component={maskedFormikMuiTextField}
                        name={"matricule"}
                        mask="999999999999"
                        fullWidth
                        inputProps={{
                          style: {
                            textAlign: "center",
                            fontSize: 30,
                            height: 25,
                            fontWeight: "bold",
                            color: !errors.matricule ? theme.palette.success.main : theme.palette.warning.dark,
                            direction: "ltr"
                          }
                        }}
                      />
                      <Field
                        component={PasswordWithToolTipInput}
                        label="كلمة المرور"
                        name="password"
                        required
                        fullWidth
                        type={"password"}
                        inputProps={{
                          style: {
                            textAlign: "center",
                            fontSize: 30,
                            height: 25,
                            fontWeight: "bold"
                          }
                        }}
                      />
                      <LoadingButton
                        fullWidth
                        variant="contained"
                        onClick={submitForm}
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!(isValid && dirty)}
                        loading={isSubmitting}
                        size={"small"}
                      >
                        <Typography fontWeight={"bold"} variant={"h5"}>
                          تسجيل الطلب
                        </Typography>
                      </LoadingButton>

                      <Grid container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item>
                          {/*<Link href="#" variant="body2">*/}
                          {/*   هل نسيت كلمة المرور؟*/}
                          {/*</Link>*/}
                        </Grid>
                        <Grid item>
                          <Link href={getLink(routs.MuiSignIn)} variant="body2">
                            <Typography> .لديك حساب؟ قم بتسجيل الدخول </Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Form>
                );
              }
            }
          </Formik>
        </div>
        <Copyright sx={{ mt: 2, mb: 2 }} />
      </div>
    </div>
  );

}
