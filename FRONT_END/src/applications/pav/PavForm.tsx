import {
  FormControlLabel,
  IconButton,
  ListItem,
  ListItemText,
  MenuItem,
  Stack,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import {
  AddPavDocument,
  FelicitationDtoInput,
  FindAllFelicitionsDocument,
  FindAllNoteDiplomeDocument,
  FindAllSanctionsDocument,
  FindCritereDePonderationDocument,
  NoteDiplome,
  Pav,
  PavDtoInput,
  SanctionDtoInput,
} from "../../_generated_gql_/graphql";
import { useMutation, useQuery } from "@apollo/client";
import {
  Field,
  Form,
  Formik,
  FormikHelpers,
  FormikProps,
} from "formik";
import { LoadingButton } from "@mui/lab";
import * as React from "react";
import Button from "@mui/material/Button";
import { AddCircle, Delete } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selecteSelectedPav } from "../../redux/features/pam/pamSlice";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "formik-mui";
import { useEffect, useRef, useState } from "react";
import useSnackBarNotifications from "../common/notifications/useSnackBarNotifications.tsx";

export const PavForm = () => {
  const pav: Pav = useSelector(selecteSelectedPav);

  const [chefState, setChefState] = useState(pav.chef ? pav.chef : false);

  const {
    data: felicitations,
    loading: felicitationsLoading,
    error: felicitationsError,
  } = useQuery(FindAllFelicitionsDocument, {
    variables: { pageable: { pageNumber: 0, pageSize: 100 } },
  });

  const {
    data: santions,
    error: sanctionsError,
    loading: sanctionLoading,
  } = useQuery(FindAllSanctionsDocument, {
    variables: { pageable: { pageNumber: 0, pageSize: 100 } },
  });

  const { data: notesDiplomes } = useQuery(FindAllNoteDiplomeDocument, {
    variables: {
      pageable: {
        pageNumber: 0,
        pageSize: 100,
      },
    },
  });

  const ref:
    | (React.Ref<FormikProps<PavDtoInput>> & React.MutableRefObject<null>)
    | (undefined & React.MutableRefObject<null>) = useRef(null);

  const { data: critereDePonderation, refetch } = useQuery(
    FindCritereDePonderationDocument,
    {
      variables: {
        chef: chefState,
        grade: pav.personnel?.grade?.grade,
        poste: pav.personnel?.pamOff2024?.poste,
      },
    },
  );

  useEffect(() => {
    refetch();
  }, [chefState]);

  const [addPav, { loading, error }] = useMutation(AddPavDocument);

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const onSubmit = (values: PavDtoInput, formikHelpers: FormikHelpers<any>) => {
    const { setSubmitting } = formikHelpers;
    setSubmitting(true);
    addPav({
      variables: {
        pav: {
          ...values,
          matricule: pav.personnel?.matricule,
          noteGlobale: calculerNoteGlobale(values),
        },
      },
    })
      .then((result) => {
        handleShowInfoSnackBar("succé");
        // setOpen(false)
        setSubmitting(false);
      })
      .catch((error) => {
        handleShowGraphQlErrorSnackBar(JSON.stringify(error));
        setSubmitting(false);
      });
    setSubmitting(false);
  };

  const getNoteFelecitation = (felicitations_) => {
    let tot = 0;
    felicitations_?.map((item) => {
      if (item?.idFelicitation == null) return;
      tot =
        tot +
        felicitations?.findAllFelicitions?.content?.filter(
          (element) => element.id === item.idFelicitation,
        )?.[0].note *
          item.nombre;
    });
    return tot;
  };

  const getNoteAvertissement = (avertissements_) => {
    let tot = 0;
    avertissements_?.map((item) => {
      if (item?.idSanction == null) return;
      tot =
        tot +
        santions?.findAllRSanctions?.content?.filter(
          (element) => element.id === item.idSanction,
        )?.[0].note *
          item.nombre;
    });
    return tot;
  };

  console.log(pav);

  const initiValues: PavDtoInput = {
    ancienneteDansLeGrade: pav.ancienneteDansLeGrade,
    anne: 2024,
    chef: pav.chef,
    dureeExcercice: pav.dureeExcercice,
    nombreDeProposition: pav.nombreDeProposition,
    noteArme: pav.noteArme,
    noteGlobale: pav.noteGlobale,
    noteRegionale: pav.noteRegionale,
    felicitationsPavs: pav.felicitations?.map((felicitation) => {
      const felic: FelicitationDtoInput = {
        idFelicitation: felicitation.id.felicitationsId,
        nombre: felicitation.nombre,
      };
      return felic;
    }),
    idNoteDiplome: pav.noteDiplome?.id,
    matricule: null,
    sanctionsPavs: pav.sanctions.map((sanc) => {
      const newSanc: SanctionDtoInput = {
        idSanction: sanc.id.sanctionsId,
        nombre: sanc.nombre,
      };
    }),
    idPonderation: pav.ponderation?.id,
    dureeExcerciceUnite: pav.dureeExcerciceUnite,
  };

  console.log("initial values");
  console.log(initiValues);

  useEffect(() => {
    refetch();
  }, [JSON.stringify(ref?.current?.values)]);

  const renderedNotesDiplomes =
    notesDiplomes?.findAllNoteDiplome?.content?.filter(
      (item) => item?.grade.grade === pav.personnel?.grade?.grade,
    );

  const calculerNoteGlobale = (values: PavDtoInput) => {
    return (
      parseInt(critereDePonderation?.findCritereDePonderation?.note) +
      parseInt((values.dureeExcercice / values.ancienneteDansLeGrade) * 150) +
      parseInt(
        ((values.noteRegionale * 2 + parseInt(values.noteArme)) / 3 / 820) *
          250,
      ) +
      getNoteFelecitation(values.felicitationsPavs) +
      getNoteAvertissement(values.sanctionsPavs) +
      calculerNoteNombreDeProposition(values.nombreDeProposition) +
      notesDiplomes?.findAllNoteDiplome?.content?.filter(
        (item) => item?.id === values.idNoteDiplome,
      )?.[0]?.note +
      calculerNoteDureeExcerciceUnite(
        values.dureeExcerciceUnite,
        values.ancienneteDansLeGrade,
      )
    );
  };

  const calculerNoteNombreDeProposition = (value) => {
    if (value == 1) return 7;
    if (value == 2) return 13;
    if (value >= 3) return 25;
    return 0;
  };

  const calculerNoteAncienneteDansLeService = () => {
    return ((2024 - pav.personnel?.matricule?.substring(0, 4)) / 32) * 15;
  };

  const calculerNoteDureeExcerciceUnite = (value, anciennteGrade) => {
    return (parseInt(value) / parseInt(anciennteGrade)) * 20;
  };

  return (
    <Stack
      width={900}
      padding={5}
      style={{
        backgroundColor: "#eaefee",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#121212",
        borderStyle: "solid",
      }}
    >
      <Formik initialValues={initiValues} onSubmit={onSubmit} innerRef={ref}>
        {({
          submitForm,
          isSubmitting,
          isValid,
          errors,
          handleReset,
          dirty,
          touched,
          values,
          setFieldValue,
        }) => {
          const handleChange = (
            event: React.ChangeEvent<HTMLInputElement>,
          ) => {};

          const handleSanctionSelection = (value: string, index: number) => {
            const elemnt: SanctionDtoInput = {
              idPav: null,
              idSanction: value,
              nombre: 0,
            };
            setFieldValue(
              "sanctionsPavs",
              values?.sanctionsPavs?.toSpliced(index, 1, elemnt),
            );
          };

          const handleFelicitationSelection = (
            value: string,
            index: number,
          ) => {
            const elemnt: FelicitationDtoInput = {
              idPav: null,
              idFelicitation: value,
              nombre: 0,
            };
            setFieldValue(
              "felicitationsPavs",
              values?.felicitationsPavs?.toSpliced(index, 1, elemnt),
            );
          };

          const handleDeleteSanction = (index: number) => {
            setFieldValue(
              "sanctionsPavs",
              values?.sanctionsPavs?.toSpliced(index, 1),
            );
          };

          const handleDeleteFelicitation = (index: number) => {
            setFieldValue(
              "felicitationsPavs",
              values?.felicitationsPavs?.toSpliced(index, 1),
            );
          };

          const handleNombreChange = (
            nombre: number,
            index: number,
            id: any,
            field: string,
          ) => {
            if (field === "felicitationsPavs") {
              const elemnt: FelicitationDtoInput = {
                idPav: null,
                idFelicitation: id,
                nombre: nombre,
              };
              setFieldValue(
                "felicitationsPavs",
                values?.felicitationsPavs?.toSpliced(index, 1, elemnt),
              );
              return;
            }

            const elemnt: SanctionDtoInput = {
              idPav: null,
              idSanction: id,
              nombre: nombre,
            };
            setFieldValue(
              "sanctionsPavs",
              values?.sanctionsPavs?.toSpliced(index, 1, elemnt),
            );
          };

          // @ts-ignore
          return (
            <Form>
              <Stack direction={"row"} padding={1} spacing={2}>
                <Stack
                  flex={1}
                  padding={1}
                  spacing={1}
                  width={500}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Stack direction={"row"} spacing={1} padding={1}>
                    <Stack width={250}>
                      <MuiTextField
                        fullWidth={true}
                        size={"medium"}
                        value={values.idPonderation}
                        onChange={(e) =>
                          setFieldValue("idPonderation", e.target.value)
                        }
                        select={true}
                      >
                        {
                          <MenuItem
                            value={
                              critereDePonderation?.findCritereDePonderation?.id
                            }
                          >
                            <ListItemText
                              primary={
                                <Typography>
                                  {critereDePonderation
                                    ?.findCritereDePonderation?.note +
                                    " " +
                                    critereDePonderation
                                      ?.findCritereDePonderation?.poste
                                      ?.idPoste +
                                    " " +
                                    critereDePonderation
                                      ?.findCritereDePonderation?.grade
                                      ?.libGradeAr}
                                </Typography>
                              }
                            ></ListItemText>
                          </MenuItem>
                        }
                      </MuiTextField>
                    </Stack>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={chefState}
                          onChange={(e) => {
                            setFieldValue("chef", !values.chef);
                            setChefState((old) => !old);
                            setFieldValue("idPonderation", "");
                          }}
                          size={"medium"}
                        />
                      }
                      label="CHEF"
                    />
                    <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography style={{ fontWeight: "bold" }}>
                        {values.idPonderation &&
                          critereDePonderation?.findCritereDePonderation?.note +
                            "/400"}
                      </Typography>
                    </Stack>
                    <Stack style={{ width: 20 }}></Stack>
                    <Stack direction={"row"} padding={1} spacing={1}>
                      <Field
                        component={TextField}
                        name={"dureeExcercice"}
                        label={"dureeExcercice"}
                        fullWidth
                        required
                        inputProps={{
                          style: {
                            textAlign: "right",
                          },
                        }}
                      />
                      <Field
                        component={TextField}
                        name={"ancienneteDansLeGrade"}
                        label={"ancienneteDansLeGrade"}
                        fullWidth
                        required
                        inputProps={{
                          style: {
                            textAlign: "right",
                          },
                        }}
                      />
                      <Stack justifyContent={"center"} alignItems={"center"}>
                        <Typography style={{ fontWeight: "bold" }}>
                          {(values.dureeExcercice /
                            values.ancienneteDansLeGrade) *
                            150 +
                            "/150"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack
                    direction={"row"}
                    spacing={1}
                    padding={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Field
                      component={TextField}
                      name={"noteRegionale"}
                      label={"noteRegionale"}
                      fullWidth
                      required
                      inputProps={{
                        style: {
                          textAlign: "right",
                        },
                      }}
                    />

                    <Field
                      component={TextField}
                      name={"noteArme"}
                      label={"noteArme"}
                      fullWidth
                      required
                      inputProps={{
                        style: {
                          textAlign: "right",
                        },
                      }}
                    />
                    <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography style={{ fontWeight: "bold" }}>
                        {/*{ ((values.noteRegionale * 2 + values.noteArme) /3)/820 * 150  + '/250'}*/}
                        {(
                          ((values.noteRegionale * 2 +
                            parseInt(values.noteArme)) /
                            3 /
                            820) *
                          250
                        ).toFixed(2) + "/250"}
                      </Typography>
                    </Stack>

                    <Stack direction={"row"} padding={1} spacing={1}>
                      <MuiTextField
                        style={{ width: 300 }}
                        value={values.idNoteDiplome}
                        onChange={(e) =>
                          setFieldValue("idNoteDiplome", e.target.value)
                        }
                        select={true}
                      >
                        {renderedNotesDiplomes?.map(
                          (item: NoteDiplome, index) => {
                            return (
                              <MenuItem value={item?.id}>
                                <ListItem>
                                  <ListItemText
                                    primary={
                                      <Typography>
                                        {item?.grade?.libGradeAr +
                                          " " +
                                          item?.lib +
                                          " " +
                                          item?.note}
                                      </Typography>
                                    }
                                  ></ListItemText>
                                </ListItem>
                              </MenuItem>
                            );
                          },
                        )}
                      </MuiTextField>
                      <Stack justifyContent={"center"} alignItems={"center"}>
                        <Typography style={{ fontWeight: "bold" }}>
                          {renderedNotesDiplomes?.filter(
                            (item) => item?.id === values.idNoteDiplome,
                          )?.[0]?.note + "/100"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  {values.felicitationsPavs.map((item, index) => {
                    const renderedOptions =
                      felicitations?.findAllFelicitions?.content;

                    return (
                      <Stack
                        direction={"row"}
                        spacing={1}
                        alignItems={"center"}
                        style={{ width: "100%", backgroundColor: "#5b8c58" }}
                      >
                        <MuiTextField
                          value={item?.idFelicitation}
                          onChange={(e) =>
                            handleFelicitationSelection(e.target.value, index)
                          }
                          style={{ flex: 3 }}
                          select={true}
                        >
                          {renderedOptions?.map((item) => {
                            return (
                              <MenuItem value={item?.id}>
                                <Typography>
                                  {item?.autorite + " " + item?.note}
                                </Typography>
                              </MenuItem>
                            );
                          })}
                        </MuiTextField>
                        <MuiTextField
                          value={item?.nombre}
                          label={"nombre"}
                          style={{ flex: 1 }}
                          onChange={(e) =>
                            handleNombreChange(
                              e.target.value,
                              index,
                              item?.idFelicitation,
                              "felicitationsPavs",
                            )
                          }
                        ></MuiTextField>
                        <IconButton
                          onClick={() => handleDeleteFelicitation(index)}
                        >
                          <Delete></Delete>
                        </IconButton>
                      </Stack>
                    );
                  })}
                  <Stack direction={"row"} padding={1} spacing={2}>
                    {values?.felicitationsPavs?.length < 3 && (
                      <Button
                        color={"success"}
                        onClick={() =>
                          setFieldValue("felicitationsPavs", [
                            ...values.felicitationsPavs,
                            {
                              idPav: null,
                              idSanction: null,
                              nombre: 1,
                            },
                          ])
                        }
                        startIcon={<AddCircle />}
                        variant={"contained"}
                      >
                        {" "}
                        ajouter une Felicitation{" "}
                      </Button>
                    )}
                    <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography style={{ fontWeight: "bold" }}>
                        {getNoteFelecitation(values.felicitationsPavs) + "/20"}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Stack
                      justifyContent={"center"}
                      direction={"row"}
                      padding={1}
                      spacing={2}
                    >
                      <Field
                        component={TextField}
                        name={"nombreDeProposition"}
                        label={"nombreDeProposition"}
                        fullWidth
                        required
                        inputProps={{
                          style: {
                            textAlign: "right",
                          },
                        }}
                      />

                      <Stack justifyContent={"center"} alignItems={"center"}>
                        <Typography style={{ fontWeight: "bold" }}>
                          {calculerNoteNombreDeProposition(
                            values.nombreDeProposition,
                          ) + "/20"}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      justifyContent={"center"}
                      direction={"row"}
                      padding={1}
                      spacing={2}
                    >
                      <Field
                        component={TextField}
                        name={"dureeExcerciceUnite"}
                        label={"duree exercice unité"}
                        fullWidth
                        required
                        inputProps={{
                          style: {
                            textAlign: "right",
                          },
                        }}
                      />

                      <Stack justifyContent={"center"} alignItems={"center"}>
                        <Typography style={{ fontWeight: "bold" }}>
                          {calculerNoteDureeExcerciceUnite(
                            values.dureeExcerciceUnite,
                            values.ancienneteDansLeGrade,
                          ) + "/20"}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>

                  {values.sanctionsPavs.map((item, index) => {
                    const renderedOptions =
                      santions?.findAllRSanctions?.content?.filter(
                        (item) =>
                          // !values?.sanctionsPavs?.some((obj) => obj?.idSanction === item?.id)
                          true,
                      );

                    return (
                      <Stack
                        direction={"row"}
                        spacing={1}
                        alignItems={"center"}
                        style={{ width: "100%", backgroundColor: "#ee6767" }}
                      >
                        {/*<MuiTextField select={true}*/}
                        {/*    value={selectedYear}*/}
                        {/*    onChange={(e) => setSelectedYear(e.target.value)}*/}
                        {/*>*/}
                        {/*    {*/}
                        {/*        recrutments?.allRecrutemntsV2BySimulation?.map((item) => {*/}
                        {/*            return (*/}
                        {/*                <MenuItem value={item?.anneDeRecrutemnt}>*/}
                        {/*                    {item?.anneDeRecrutemnt}*/}
                        {/*                </MenuItem>*/}
                        {/*            )*/}
                        {/*        })*/}
                        {/*    }*/}
                        {/*</MuiTextField>*/}

                        <MuiTextField
                          value={item?.idSanction}
                          onChange={(e) =>
                            handleSanctionSelection(e.target.value, index)
                          }
                          style={{ flex: 3 }}
                          select={true}
                        >
                          {renderedOptions?.map((item) => {
                            return (
                              <MenuItem value={item?.id}>
                                <Typography>
                                  {item?.lib + " " + item?.note}
                                </Typography>
                              </MenuItem>
                            );
                          })}
                        </MuiTextField>
                        <MuiTextField
                          value={item?.nombre}
                          label={"nombre"}
                          style={{ flex: 1 }}
                          onChange={(e) =>
                            handleNombreChange(
                              e.target.value,
                              index,
                              item?.idSanction,
                            )
                          }
                        ></MuiTextField>
                        <IconButton onClick={() => handleDeleteSanction(index)}>
                          <Delete></Delete>
                        </IconButton>
                      </Stack>
                    );
                  })}
                  <Stack spacing={1} direction={"row"}>
                    {values?.sanctionsPavs?.length < 4 && (
                      <Button
                        color={"error"}
                        onClick={() =>
                          setFieldValue("sanctionsPavs", [
                            ...values.sanctionsPavs,
                            {
                              idPav: null,
                              idSanction: null,
                              nombre: 1,
                            },
                          ])
                        }
                        startIcon={<AddCircle />}
                        variant={"contained"}
                      >
                        ajouter une sanction
                      </Button>
                    )}

                    <Stack justifyContent={"center"} alignItems={"center"}>
                      <Typography style={{ fontWeight: "bold" }}>
                        {getNoteAvertissement(values.sanctionsPavs) + "/20"}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Typography style={{ fontWeight: "bold" }}>
                    {"Anciennete dans le Service : " +
                      calculerNoteAncienneteDansLeService().toFixed(2) +
                      "/15"}
                  </Typography>

                  <Stack
                    style={{
                      height: 120,
                      borderRadius: 10,
                      borderStyle: "solid",
                      padding: 50,
                    }}
                    direction={"row"}
                    spacing={1}
                    justifyContent={"centert"}
                    alignItems={"center"}
                  >
                    <Typography fontWeight={"bold"} variant={"h3"}>
                      {calculerNoteGlobale(values)}
                    </Typography>
                    <Typography variant={"h4"}>: NOTE GLOBALE</Typography>
                  </Stack>

                  <LoadingButton
                    fullWidth
                    variant="contained"
                    onClick={submitForm}
                    sx={{ mt: 3, mb: 2 }}
                    // disabled={!(isValid && dirty)}
                  >
                    <Typography fontWeight={"bold"} variant={"h5"}>
                      SAUVEGARDER
                    </Typography>
                  </LoadingButton>
                </Stack>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Stack>
  );
};
