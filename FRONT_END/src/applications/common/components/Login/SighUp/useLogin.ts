import {FormikValues} from "formik";
import { useRegisterMutation } from "../../../../../redux/mainApi.ts";
function useRegister() {

   let i = 0

   const [
      register, // This is the mutation trigger
      {
         error,
      },
   ] = useRegisterMutation();

   const handleRegister = (values: FormikValues) => {
      return register({registerRequest: {matricule: values.matricule, password: values.password}})
   }

   return {
      handleRegister,
      error,
   }
}

export default useRegister;
