import { Field, Form, Formik } from "formik";
import { Stack, ToggleButton, Typography, Button } from "@mui/material";
import { TextField, ToggleButtonGroup } from "formik-mui";

import { useQuery } from "@apollo/client";
import {
  Deselect,
  Error,
  RestartAltRounded,
  SearchRounded,
} from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectelasticSearchInput } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { selectLoggedInUser } from "../../../../redux/features/auth/userSlice.ts";
import {
  AllConfidentialitesDocument,
  AllTypeTexteReglementairesDocument,
  UserConfidentialitesDocument,
} from "../../../../_generated_gql_/graphql.ts";
import { DatePicker } from "formik-mui-x-date-pickers";
import { ConfidentialiteChip } from "../../../textReglementaire/pages/FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import { arraysContainSameElements } from "../../utilities/utilities.ts";

// todo choose icons for type texte reglmentaire and for confidentialite

export default function ElasticSearchForm({ handleSubmit, isLoading }) {
  const values = useSelector(selectelasticSearchInput);
  const loggedInUser = useSelector(selectLoggedInUser);

  const [initialValues, setInitialValues] = useState({
    ...values,
    dateReferenceDebut: new Date(values.dateReferenceDebut),
    dateReferenceFin: new Date(values.dateReferenceFin),
  });

  const {
    data: allTypeTexteReglementaires,
    loading: loadingAllTypeTextReglementaires,
    error: errorAllTextReglementaires,
  } = useQuery(AllTypeTexteReglementairesDocument);

  const {
    data: allConfidentialites,
    loading,
    error,
  } = useQuery(AllConfidentialitesDocument);

  const { data: userConfidentialities } = useQuery(
    UserConfidentialitesDocument,
    {
      variables: { matricule: loggedInUser?.matricule },
    },
  );

  const [allConfidentialite, setAllConfidentialite] = useState<
    null | undefined
  >(null);
  const [allTypeTexte, setAllTypeTexte] = useState(null);

  useEffect(() => {
    if (allTypeTexteReglementaires && !allTypeTexte) {
      setAllTypeTexte(allTypeTexteReglementaires?.allTypeTexteReglementaires);
    }
  }, [allTypeTexteReglementaires]);

  useEffect(() => {
    if (allConfidentialites && userConfidentialities && !allConfidentialite) {
      setAllConfidentialite(
        allConfidentialites?.allConfidentialites?.filter((item) => {
          if (
            userConfidentialities?.user?.habilitation?.confidentialites?.some(
              (conf) =>
                conf?.libConfidentialiteFr == item?.libConfidentialiteFr,
            )
          ) {
            return true;
          } else return false;
        }),
      );
    }
  }, [allConfidentialites, userConfidentialities]);

  //todo try using one button for select all and select none

  // @ts-ignore
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({
        submitForm,
        isSubmitting,
        isValid,
        errors,
        handleReset,
        dirty,
        setFieldValue,
        values,
      }) => {
        // @ts-ignore
        return (
          <Form>
            <div className={"shadow-lg drop-shadow-lg p-2 space-y-2"}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={1}
                className={""}
              >
                <div className={""}>
                  <Field
                    component={TextField}
                    name={"reference"}
                    label={"المرجع"}
                    inputProps={{
                      style: {
                        // textAlign: "center",
                        fontSize: 30,
                        height: 22,
                        fontWeight: "bold",
                        width: 120,
                      },
                    }}
                  />
                </div>
                <div style={{ width: "155px" }}>
                  <Field
                    component={DatePicker}
                    name={"dateReferenceDebut"}
                    label={"Date reference inferieur"}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: 50,
                        height: 22,
                        fontWeight: "bold",
                        flex: 1,
                      },
                    }}
                  />
                </div>
                <div style={{ width: "155px" }}>
                  <Field
                    component={DatePicker}
                    name={"dateReferenceFin"}
                    label={"Date reference superieur"}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: 30,
                        height: 18,
                        fontWeight: "bold",
                        width: 160,
                      },
                    }}
                  />
                </div>

                <div className={""}>
                  <Field
                    component={TextField}
                    label={"Recherche OCR"}
                    name={"searchToken"}
                    inputProps={{
                      style: {
                        textAlign: "center",
                        fontSize: 30,
                        height: 22,
                        fontWeight: "bold",
                        flexGrow: 1,
                        flex: 1,
                        width: 300,
                      },
                    }}
                  />
                </div>
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <Button
                  variant={
                    arraysContainSameElements(values.isConfidentialite, [])
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => setFieldValue("isConfidentialite", [])}
                >
                  <Deselect sx={{ width: 30, height: 30 }} />
                </Button>

                {/*<Button*/}
                {/*    variant={arraysContainSameElements(values.isConfidentialite,*/}
                {/*        allConfidentialite?.map((item) => item?.libConfidentialiteFr)) ? 'contained' : 'outlined'}*/}
                {/*    onClick={() => setFieldValue('isConfidentialite',*/}
                {/*        allConfidentialite?.map((item) => item?.libConfidentialiteFr))}>*/}
                {/*    <SelectAll sx={{width: 30, height: 30}}/>*/}
                {/*</Button>*/}

                <Field
                  component={ToggleButtonGroup}
                  name="isConfidentialite"
                  type="checkbox"
                >
                  {allConfidentialite?.map((option) => (
                    <ToggleButton
                      value={option?.libConfidentialiteFr}
                      aria-label={option?.libConfidentialiteAr}
                      // style={{width: 120}}
                    >
                      {/*<Typography fontWeight={'bold'} fontSize={20}>*/}
                      {/*{option?.libConfidentialiteAr}*/}
                      <ConfidentialiteChip confidentialite={option} />
                      {/*</Typography>*/}
                    </ToggleButton>
                  ))}
                </Field>
                {
                  <Error
                    sx={{
                      visibility:
                        values.isConfidentialite.length === 0 ? "" : "hidden",
                    }}
                    color={"warning"}
                    fontSize={"large"}
                  />
                }

                <Button
                  variant={
                    arraysContainSameElements(
                      [...values.idsTypeTextReglementaire],
                      [],
                    )
                      ? "contained"
                      : "outlined"
                  }
                  onClick={() => setFieldValue("idsTypeTextReglementaire", [])}
                >
                  <Deselect sx={{ width: 30, height: 30 }} />
                </Button>

                {/*<Button*/}
                {/*    variant={arraysContainSameElements([...values.idsTypeTextReglementaire],*/}
                {/*        allTypeTexte?.map((item) => item?.libTypeTexteFr)) ? 'contained' : 'outlined'}*/}
                {/*    onClick={() => setFieldValue('idsTypeTextReglementaire', allTypeTexte?.map((item) => item?.libTypeTexteFr))}>*/}
                {/*    <SelectAll sx={{width: 30, height: 30}}/>*/}
                {/*</Button>*/}

                <Field
                  component={ToggleButtonGroup}
                  name="idsTypeTextReglementaire"
                  type="checkbox"
                >
                  {allTypeTexte?.map((option) => (
                    <ToggleButton
                      value={option?.libTypeTexteFr}
                      aria-label={option?.libTypeTexteAr}
                      style={{ width: "max-content" }}
                    >
                      <Typography
                        fontWeight={"bold"}
                        sx={{ width: "100%" }}
                        fontSize={20}
                      >
                        {option?.libTypeTexteAr}
                      </Typography>
                    </ToggleButton>
                  ))}
                </Field>
                {
                  <Error
                    sx={{
                      visibility:
                        values.idsTypeTextReglementaire.length === 0
                          ? ""
                          : "hidden",
                    }}
                    color={"warning"}
                    fontSize={"large"}
                  />
                }

                <LoadingButton
                  sx={{
                    height: 60,
                    width: 180,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                  variant={"outlined"}
                  startIcon={
                    <RestartAltRounded
                      sx={{ width: 40, height: 40, fontSize: "bold" }}
                    />
                  }
                  loading={isLoading}
                  type={"submit"}
                  onClick={handleReset}
                ></LoadingButton>

                <LoadingButton
                  disabled={
                    values.idsTypeTextReglementaire?.length === 0 ||
                    values.isConfidentialite.length === 0
                  }
                  sx={{
                    height: 60,
                    width: 180,
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                  variant={"contained"}
                  startIcon={<SearchRounded sx={{ width: 40, height: 40 }} />}
                  loading={isLoading}
                  type={"submit"}
                ></LoadingButton>
              </Stack>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
