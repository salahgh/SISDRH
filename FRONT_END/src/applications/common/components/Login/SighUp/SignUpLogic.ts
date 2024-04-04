import {FormikHelpers, FormikValues} from "formik";
import * as Yup from "yup";

export const onSubmit = (values: FormikValues, formikHelpers: FormikHelpers<any>) => {

   const {setSubmitting} = formikHelpers;
   setSubmitting(true)

}

export const schema = Yup.object().shape({
   matricule: Yup.string()
      // .matches(/^\d{4}.\d{3}.\d{5}$/, 'matricule doit contenir 12 chiffres')
      // .matches(/^(19[6-9]\d|20[0-4]\d).\d{3}.\d{5}$/, 'classe non valide')
      // .matches(/^\d{4}.(0[1-9]|[1-5]\d)\d.\d{5}$/, 'wilaya non valide')
      // .matches(/^\d{4}.\d{2}([0-5]).\d{5}$/, '7 eme chiffre non valide')
      //todo input mask is adding the points
      .required('Matricule is required'),
   // todo make the input mask shake when an invalid caracter is intered
   password: Yup.string()
      .required('01;Password is required')
      .matches(
         /^(?=.*[A-Z])/,
         '03;Password must contain at least one uppercase letter'
      )
      .matches(
         /^(?=.*\d)/,
         '04;Password must contain at least one number'
      )
      .matches(
         /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
         '05;Password must contain at least one special character'
      )
      .matches(
         /^.{8,}$/,
         '06;Password must be at least 8 characters long'
      )
});

export const validate = (values: any) => {
   // todo add a generic solution ...
   try {
      schema.validateSync(values, {abortEarly: false});
   } catch (err) {
      // @ts-ignore
      return err.inner.reduce((acc, curr) => {
         return {
            matricule: acc.matricule + (curr.path == 'matricule' ? curr.message : ''),
            password: acc.password + (curr.path == 'password' ? curr.message.split(";")[1] : ''),
            passwordErrorsAsArray: [...acc.passwordErrorsAsArray, curr.path == 'password' ? +curr.message.split(";")[0] : 0]
         };
      }, {
         password: '',
         matricule: '',
         passwordErrorsAsArray: []
      })
   }
}

export const initialValues = {
   matricule: '',
   password: ''
}


