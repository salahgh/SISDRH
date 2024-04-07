import { useFormikContext } from "formik";

import { useEffect, useState } from "react";


export const AutoSubmit = () => {

  const { setSubmitting, submitForm, values } = useFormikContext();
  const [timoutId, setTimoutId] = useState<NodeJS.Timeout|null>();
  const toBeDebounced = () => {
    setSubmitting(true);
    submitForm().then(() => null);
  };

  useEffect(() => {

    clearTimeout(timoutId);
    setTimoutId(setTimeout(toBeDebounced, 500));
    return () => {

    };
  }, [JSON.stringify(values)]);

  return (
    <></>
  );

};
