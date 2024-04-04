import {useFormikContext} from "formik";
import _lodash from "lodash";
import {useCallback, useEffect} from "react";


export const AutoSubmitForm = () => {

   const {setSubmitting, submitForm, isSubmitting, values} = useFormikContext()

   // const debounced_ = useCallback(
   //    () => {
   //       _lodash.debounce(() => {
   //          console.log('debounce function executed (submit form)')
   //          setSubmitting(true)
   //          submitForm()
   //       }, 500)
   //    },
   //    [],
   // );

   const debounced_ = _lodash.debounce(() => {
      setSubmitting(true)
      submitForm()
   }, 0)


   useEffect(() => {
      debounced_()
      return () => {

      };
   }, [JSON.stringify(values)])

   return (
      <></>
   )

}