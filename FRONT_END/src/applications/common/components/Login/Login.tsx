import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Field, Form, Formik, FormikHelpers, FormikValues} from "formik";
import {
   Box,
   Container,
   Grid,
   Link,
   Typography,
   Stack
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import Copyright from "./Copyright";
import maskedFormikMuiTextField from "./MaskedFormikMuiTextField";
import {PasswordWithToolTipInput} from "./PasswordWithToolTipInput";
import {useTheme} from "@mui/material/styles";
import {validate} from "./SighUp/SignUpLogic";

export default function Login() {

   const theme = useTheme();

   const initialValues = {
      matricule: '',
      password: ''
   }

   const onSubmit = (values: FormikValues, formikHelpers: FormikHelpers<any>) => {

      const {setSubmitting} = formikHelpers;
      setSubmitting(true)
      setTimeout(() => {
         setSubmitting(false);
         alert(JSON.stringify(values, null, 2));
      }, 1000);

   }

   // @ts-ignore
   return (
      <Container component="main" maxWidth="xs">
         <CssBaseline/>
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Avatar sx={{width: 100, height: 100, m: 1, bgcolor: 'secondary.main'}}>
               <LockOutlinedIcon
                  sx={{width: 60, height: 60, color: 'primary'}}
               />
            </Avatar>
            <Typography component="h1" variant="h3" fontWeight={'bold'}>
               تسجيل الدخول
            </Typography>
            <Box sx={{mt: 1, padding: 5}}>
               <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validate={validate}
               >
                  {
                     (
                        {
                           submitForm,
                           isSubmitting,
                           isValid,
                           errors,
                           handleReset,
                           dirty,
                        }
                     ) => {
                        // @ts-ignore
                        return (
                           <Form>
                              <Stack
                                 spacing={2}
                                 width={400}
                              >
                                 <Field
                                    component={maskedFormikMuiTextField}
                                    // label="رقم التسجيل"
                                    name={"matricule"}
                                    mask="9999.999.99999"
                                    fullWidth
                                    inputProps={{
                                       style: {
                                          textAlign: "center",
                                          fontSize: 45,
                                          height: 50,
                                          fontWeight: 'bold',
                                          color: !errors.matricule ? theme.palette.success.main : theme.palette.warning.dark,
                                       }
                                    }}
                                 />
                                 <Field
                                    component={PasswordWithToolTipInput}
                                    label="كلمة المرور"
                                    name="password"
                                    required
                                    fullWidth
                                    type={'password'}
                                    inputProps={{
                                       style: {
                                          textAlign: "center",
                                          fontSize: 30,
                                          height: 50,
                                          fontWeight: 'bold'
                                       }
                                    }}
                                 />
                                 <LoadingButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={submitForm}
                                    sx={{mt: 3, mb: 2}}
                                    disabled={!(isValid && dirty)}
                                 >

                                    <Typography fontWeight={'bold'} variant={'h5'}>
                                       تسجيل الدخول
                                    </Typography>

                                 </LoadingButton>


                                 <Grid container alignItems={'center'} justifyContent={'space-between'}>
                                    <Grid item>
                                       <Link href="#" variant="body2">
                                          هل نسيت كلمة المرور؟
                                       </Link>
                                    </Grid>
                                    <Grid item>
                                       <Link href="#" variant="body2">
                                          .ليس لديك حساب؟ قم بالتسجيل الآن
                                       </Link>
                                    </Grid>
                                 </Grid>
                              </Stack>
                           </Form>
                        )
                     }
                  }
               </Formik>
            </Box>
         </Box>
         <Copyright sx={{mt: 8, mb: 4}}/>
      </Container>
   )

}
