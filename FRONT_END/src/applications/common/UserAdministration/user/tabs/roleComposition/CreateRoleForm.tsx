import { Field, Form, Formik } from "formik";
import { RoleDto } from "../../../../../../_generated_gql_/graphql.ts";
import { Button, Stack } from "@mui/material";
import { TextField } from "formik-mui";

export const CreateRoleForm = ({ onSubmit }) => {
  const initialValues: RoleDto = {
    description: "",
    name: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
      {({ values, setFieldValue, validateForm }) => {
        return (
          <Form>
            <Stack
              spacing={1}
              justifyContent={"center"}
              className={"drop-shadow-md overflow-auto"}
            >
              <Field
                component={TextField}
                name={"name"}
                label={"name"}
                key={"name"}
                id={"name"}
                inputProps={{
                  style: {
                    textAlign: "right",
                    width: 220,
                    height: 10,
                  },
                }}
              />
              <Field
                component={TextField}
                name={"description"}
                label={"description"}
                key={"description"}
                id={"description"}
                inputProps={{
                  style: {
                    textAlign: "right",
                    width: 220,
                    height: 10,
                  },
                }}
              />
              <Button variant={"contained"} type={"submit"}>
                حفظ
              </Button>
            </Stack>
          </Form>
        );
      }}
    </Formik>
  );
};

// todo implement a costum toggle button
