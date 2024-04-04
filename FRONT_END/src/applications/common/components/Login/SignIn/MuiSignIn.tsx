import { Field, Form, Formik } from "formik";
import { Stack } from "@mui/material";
import maskedFormikMuiTextField from "../MaskedFormikMuiTextField";
import { useTheme } from "@mui/material/styles";
import { TextField } from "formik-mui";
import { useSubmit } from "./useSubmit";
import { MuiSignInHeader } from "./MuiSignInHeader";
import { MuiSignInFooter } from "./MuiSignInFooter";
import useLogin from "./useLogin.ts";
import { Copyright } from "../Copyright.tsx";
export default function MuiSignIn() {
  const theme = useTheme();
  const { handleSubmit } = useSubmit();
  const { initialValues, schema } = useLogin();

  return (
    <div className={'w-full h-full flex items-center justify-center'}>
      <div className={"h-5/6 bg-gray-50 max-w-lg flex flex-col items-center justify-center p-10 shadow-2xl rounded-2xl"}>
        <div>
          <MuiSignInHeader />
          <div className={"py-2"}>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              {({ submitForm, isSubmitting, isValid, errors, dirty }) => {
                return (
                  <Form>
                    <Stack spacing={1} width={350}>
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
                            color: !errors.matricule
                              ? theme.palette.success.main
                              : theme.palette.warning.dark,
                            direction: "ltr",
                          },
                        }}
                      />
                      <Field
                        component={TextField}
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
                            fontWeight: "bold",
                          },
                        }}
                      />
                     <div className={'py-1'}>
                       <MuiSignInFooter
                         isSubmitting={isSubmitting}
                         dirty={dirty}
                         isValid={isValid}
                         submitForm={submitForm}
                       />
                     </div>
                    </Stack>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
       <div className={'pt-8'}>
         <Copyright></Copyright>
       </div>
      </div>
    </div>
  )
}
