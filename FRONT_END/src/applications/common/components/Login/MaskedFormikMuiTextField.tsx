import InputMask from "react-input-mask";
import { TextField } from "formik-mui";
import React from "react";

const MaskedFormikMuiTextField = React.forwardRef(
  function MaskedFormikMuiTextField(
    props: {
      field: any;
      form: any;
      meta: any;
      mask: any;
      sx: any;
      inputProps: any;
    },
    ref,
  ) {
    const { field, form, meta, mask, sx, inputProps, ...others } = props;

    return (
      <InputMask
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        mask={mask}
        {...field}
        {...others}
      >
        {() => {
          return (
            <TextField
              // @ts-ignore
              ref={ref}
              {...others}
              field={field}
              form={form}
              meta={meta}
              InputProps={{
                sx: sx,
                inputProps: inputProps,
              }}
            />
          );
        }}
      </InputMask>
    );
  },
);

export default MaskedFormikMuiTextField;
