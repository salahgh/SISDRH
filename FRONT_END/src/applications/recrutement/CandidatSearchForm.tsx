import * as React from "react";
import { Field, Form, Formik } from "formik";
import {
  Container,
  Typography,
  Stack,
  ToggleButton,
  Avatar,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import {
  TextField,
  ToggleButtonGroup as MuiToggleButtonGroup,
} from "formik-mui";
import ASSETS from "../../resources/ASSETS.ts";
import { AutoSubmit } from "../common/components/formik/AutoSubmit.tsx";

export function CandidatSearchForm({ onSubmit }) {
  const initialValues = {
    token: null,
    telephone: null,
    email: null,
    idSex: null,
  };

  return (
    <Container component="main" maxWidth="lg">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        // validate={validate}
      >
        {({
          submitForm,
          isSubmitting,
          isValid,
          errors,
          handleReset,
          dirty,
        }) => {
          return (
            <Form>
              <Stack spacing={1} direction={"row"} flex={1} padding={1}>
                <AutoSubmit></AutoSubmit>
                <Field
                  component={TextField}
                  label="..."
                  name={"token"}
                  fullWidth
                />
                <Field
                  component={TextField}
                  label="telephone"
                  name={"telephone"}
                  fullWidth
                />
                <Field
                  component={TextField}
                  label="telephone"
                  name={"telephone"}
                  fullWidth
                />
                <Field
                  component={MuiToggleButtonGroup}
                  name="idSex"
                  type="checkbox"
                  exclusive={true}
                >
                  {["M", "F"].map((option) => (
                    <ToggleButton
                      key={option}
                      value={option}
                      aria-label={option}
                    >
                      <Avatar
                        src={
                          option === "M"
                            ? ASSETS.AVATAR_MALE
                            : ASSETS.AVATAR_FEMALE
                        }
                      ></Avatar>
                    </ToggleButton>
                  ))}
                </Field>
                <LoadingButton
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={submitForm}
                  sx={{ mt: 3, mb: 2 }}
                  // disabled={!(isValid && dirty)}
                >
                  <Typography fontWeight={"bold"} variant={"h5"}>
                    بحث{" "}
                  </Typography>
                </LoadingButton>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
}
