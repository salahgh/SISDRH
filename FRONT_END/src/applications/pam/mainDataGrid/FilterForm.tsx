import {
  FindDistinctArmesDocument,
  FindDistinctCsnDocument,
  FindDistinctDiplomesCivilesDocument,
  FindDistinctDiplomesMilitairesDocument,
  FindDistinctGradeDocument,
  FindDistinctPostesDocument
} from "../../../_generated_gql_/graphql";
import { Field, Form, Formik, FormikHelpers } from "formik";
import {
  Autocomplete as MuiAutoComplete,
  Button,
  ButtonBase,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  TextField as MuiTextField,
  Typography
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { FilterAltOff, Refresh } from "@mui/icons-material";
import { useQuery } from "@apollo/client";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PostChip } from "../PostChip";
import { SudChipFilter } from "../SudChip";
import { Theme } from "@mui/material/styles";
import { AutoSubmitForm } from "../AutoSubmitForm";
import ExportToExcel from "./ExportToExcel";
import { useSelector } from "react-redux";
import {
  resetFilteringFields,
  selectFilteringFields,
  setFilteringFields
} from "../../../redux/features/pam/pamSlice";
import { useAppDispatch } from "../../../redux/hooks";
import ExportButton from "../photosExport/ExportButton";
import { FilteringFieldsInterface } from "./types";
import { PamChip } from "../PamChip";
import FormationMilitaireChip from "../FormationMilitaireChip";
import FormationCivileChip from "../FormationCivileChip";
import ExportToPdf from "./ExportToPdf";
import { MuiFormikTextField } from "../../common/components/formik/MuiFormikTextField.tsx";
import { FiltersOnOff } from "../../common/components/FiltersOnOff.tsx";
import GradeAvatar from "../../rh/GradeAvatar.tsx";
import { ArmeAvatar } from "../../rh/ArmeAvatar.tsx";

// todo implement a costum toggle button

export const FilterForm = ({
                             handleSubmit
                           }: {
  handleSubmit: (setSubmitting) => void;
}) => {
  const {
    data: gradeCount,
    loading: loadingCountGrad,
    error: gradeCountError
  } = useQuery(FindDistinctGradeDocument);

  const {
    data: armeCount,
    loading: loadingCountArme,
    error: armeCountError
  } = useQuery(FindDistinctArmesDocument);

  const {
    data: posteCount,
    loading: loadingPostes,
    error: postesError
  } = useQuery(FindDistinctPostesDocument);

  const {
    data: dipCivCount,
    loading: dipCivLoading,
    error: dipCivError
  } = useQuery(FindDistinctDiplomesCivilesDocument);

  const {
    data: dipMilCount,
    loading: dipMilLoading,
    error: dipMilError
  } = useQuery(FindDistinctDiplomesMilitairesDocument);

  const { data: csns } = useQuery(FindDistinctCsnDocument);

  const dispatch = useAppDispatch();

  const initialValues: FilteringFieldsInterface = useSelector(
    selectFilteringFields
  );

  const onSubmit = (
    values: FilteringFieldsInterface,
    formikHelpers: FormikHelpers<any>
  ) => {
    console.log("submitting ...");
    console.log(values);
    const { setSubmitting } = formikHelpers;
    setSubmitting(true);
    dispatch(
      setFilteringFields({
        ...values,
        diplomesCiviles: values.diplomesCiviles,
        diplomesMilitaires: values.diplomesMilitaires,
        idStructure: initialValues.idStructure
      })
    );
    handleSubmit(setSubmitting);
  };

  // @ts-ignore
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validateOnChange={true}
    >
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
          validateForm
        }) => {
        const handleValueChanged = (id, field) => {
          let oldValues = Array.from(values[field]);
          const index = values[field].indexOf(id);
          if (index === -1) {
            setFieldValue(field, [...oldValues, id], true);
          } else {
            oldValues.splice(index, 1);
            setFieldValue(field, oldValues, true);
          }
        };

        return (
          <Form>
            <AutoSubmitForm values={values} />
              <Stack
                direction={'row'}
                spacing={1}
                justifyContent={'center'}
                className={"drop-shadow-md overflow-auto"}
              >
                <div className={"flex flex-col p-1 space-y-1 items-center rounded-md bg-gray-200"}>
                  <Field
                    component={MuiFormikTextField}
                    name={"searchToken"}
                    label={"رقم التسجيل، الاسم أو اللقب"}
                    key={"matricule"}
                    id={"matricule"}
                    inputProps={{
                      key: "matricule",
                      id: "matricule",
                      style: {
                        textAlign: "right",
                        width: 220,
                        height: 10
                      }
                    }}
                  />

                  <Grid2
                    container={true}
                    direction={"row"}
                    spacing={0.5}
                    style={{}}
                  >
                    {dipMilCount?.findDistinctDiplomesMilitaires?.map(
                      (item) => {
                        return (
                          <Grid2>
                            <ButtonBase
                              onClick={() =>
                                handleValueChanged(
                                  item?.codeDipMil,
                                  "diplomesMilitaires"
                                )
                              }
                            >
                              <Stack
                                sx={{
                                  width: 35,
                                  height: 35,
                                  borderRadius: 1,
                                  bgcolor: (theme: Theme) =>
                                    values?.diplomesMilitaires.includes(
                                      item?.codeDipMil
                                    )
                                      ? theme.palette.action.selected
                                      : null
                                }}
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                <FormationMilitaireChip
                                  codeDiplomeMilitaire={item?.codeDipMil}
                                  height={40}
                                  width={40}
                                ></FormationMilitaireChip>
                              </Stack>
                            </ButtonBase>
                          </Grid2>
                        );
                      }
                    )}
                  </Grid2>
                  {dipCivCount && (
                    <MuiAutoComplete
                      name={"diplomesCiviles"}
                      multiple
                      fullWidth={true}
                      id="diplomesCiviles"
                      options={dipCivCount?.findDistinctDiplomesCiviles}
                      renderOption={(props, option) => {
                        return (
                          <ListItem {...props}>
                            <ListItemAvatar>
                              <FormationCivileChip
                                size={40}
                                codeDiplomeCivile={option?.codeDipCiv}
                              ></FormationCivileChip>
                            </ListItemAvatar>
                            <ListItemText
                              primary={option?.abrFr}
                            ></ListItemText>
                          </ListItem>
                        );
                      }}
                      freeSolo
                      onChange={(e, value) => {
                        console.log(value);
                        setFieldValue(
                          "diplomesCiviles",
                          value?.map((item) => item?.codeDipCiv)
                        );
                      }}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={option?.abrFr}
                            {...getTagProps({ index })}
                            icon={
                              <FormationCivileChip
                                size={22}
                                codeDiplomeCivile={option?.codeDipCiv}
                              ></FormationCivileChip>
                            }
                          />
                        ))
                      }
                      getOptionKey={(option) => option?.codeDipCiv}
                      getOptionLabel={(option) => option?.abrFr}
                      renderInput={(params) => (
                        <MuiTextField
                          fullWidth={true}
                          {...params}
                          sx={{ height : 30}}
                          label="diplomesCiviles"
                          placeholder="diplomesCiviles"
                        />
                      )}
                    />
                  )}
                </div>

                <div className={"flex flex-col p-1 space-y-1 items-center  rounded-md bg-gray-200"}>
                  <FiltersOnOff
                    selectedOptions={values?.grades}
                    availableOptions={gradeCount?.findDistinctGrade?.map(
                      (item) => item?.g
                    )}
                    onSelectAll={() =>
                      setFieldValue(
                        "grades",
                        gradeCount?.findDistinctGrade?.map((item) => item?.g),
                        true
                      )
                    }
                    onSelectNone={() => setFieldValue("grades", [], true)}
                  ></FiltersOnOff>
                  <Grid2
                    container={true}
                    sx={{
                      borderRadius: 2,
                      width : 250
                    }}
                    padding={0.5}
                    spacing={0.5}
                  >
                    {gradeCount?.findDistinctGrade?.map((item) => {
                      return (
                        <Grid2
                          sm={4}
                          xs={4}
                          md={4}
                          lg={4}
                          xl={4}
                          key={item?.g}
                        >
                          <ButtonBase
                            onClick={() =>
                              handleValueChanged(item?.g, "grades")
                            }
                          >
                            <Stack
                              sx={{
                                width: 70,
                                height: 35,
                                borderRadius: 1,
                                bgcolor: (theme: Theme) =>
                                  values?.grades.includes(item?.g)
                                    ? theme.palette.action.selected
                                    : null
                              }}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <GradeAvatar
                                gradeId={item?.g}
                                width={85}
                              ></GradeAvatar>
                            </Stack>
                          </ButtonBase>
                        </Grid2>
                      );
                    })}
                  </Grid2>
                </div>

                <div className={"flex flex-col p-1 space-y-1 items-center  rounded-md bg-gray-200"}>
                  <FiltersOnOff
                    selectedOptions={values?.postes}
                    availableOptions={posteCount?.findDistinctPostes?.map(
                      (item) => item?.poste
                    )}
                    onSelectAll={() =>
                      setFieldValue(
                        "postes",
                        posteCount?.findDistinctPostes?.map(
                          (item) => item?.poste
                        ),
                        true
                      )
                    }
                    onSelectNone={() => setFieldValue("postes", [], true)}
                  />
                  <Grid2
                    container={true}
                    sx={{ width: 200, borderRadius: 3 }}
                    padding={0.5}
                    spacing={0}
                  >
                    {posteCount?.findDistinctPostes?.map((item) => {
                      return (
                        <Grid2
                          sm={3}
                          xs={3}
                          md={3}
                          lg={3}
                          xl={3}
                          key={item?.poste}
                        >
                          <ButtonBase
                            onClick={() =>
                              handleValueChanged(item?.poste, "postes")
                            }
                          >
                            <Stack
                              sx={{
                                width: 60,
                                padding: 0.5,
                                borderRadius: 1,
                                bgcolor: (theme: Theme) =>
                                  values?.postes.includes(item?.poste)
                                    ? theme.palette.action.selected
                                    : null
                              }}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <PostChip poste={item?.poste} />
                            </Stack>
                          </ButtonBase>
                        </Grid2>
                      );
                    })}
                  </Grid2>
                </div>

                <div className={"flex flex-row-reverse p-1 space-y-1 items-center  rounded-md bg-gray-200 justify-center"}>
                  <FiltersOnOff
                    selectedOptions={values?.grades}
                    availableOptions={gradeCount?.findDistinctGrade?.map(
                      (item) => item?.g
                    )}
                    // onSelectAll={() => setFieldValue('grades', gradeCount?.findDistinctGrade?.map((item) => item?.g), true)}
                    onSelectNone={() => {
                      setFieldValue("suds", [], true);
                      setFieldValue("pam", [], true);
                      setFieldValue("pav", [], true);
                    }}
                    disabled={
                      values?.suds.length === 0 &&
                      values?.pam.length === 0 &&
                      values.pav.length === 0
                    }
                  />

                  <Grid2
                    container={true}
                    sx={{
                      width: 200,
                      borderRadius: 3
                    }}
                    padding={0}
                  >
                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(0, "suds")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.suds.includes(0)
                                ? theme.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <SudChipFilter sudValue={0}></SudChipFilter>
                        </Stack>
                      </ButtonBase>
                    </Grid2>

                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(1, "suds")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.suds.includes(1)
                                ? theme?.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <SudChipFilter sudValue={1}></SudChipFilter>
                        </Stack>
                      </ButtonBase>
                    </Grid2>

                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(1, "pam")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.pam.includes(1)
                                ? theme?.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <PamChip dureeN={-1}></PamChip>
                        </Stack>
                      </ButtonBase>
                    </Grid2>

                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(0, "pam")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.pam.includes(0)
                                ? theme?.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <PamChip dureeN={-2}></PamChip>
                        </Stack>
                      </ButtonBase>
                    </Grid2>

                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(0, "pav")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.pav.includes(0)
                                ? theme?.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Chip
                            color={"info"}
                            variant={"filled"}
                            label={"PAV OUI"}
                          />
                        </Stack>
                      </ButtonBase>
                    </Grid2>

                    <Grid2>
                      <ButtonBase
                        onClick={() => handleValueChanged(1, "pav")}
                      >
                        <Stack
                          sx={{
                            width: 100,
                            height: 45,
                            borderRadius: 1,
                            bgcolor: (theme) =>
                              values?.pav.includes(1)
                                ? theme?.palette.action.selected
                                : null
                          }}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Chip
                            sx={{ width: 350 }}
                            color={"info"}
                            variant={"filled"}
                            label={"PAV NON"}
                          />
                        </Stack>
                      </ButtonBase>
                    </Grid2>
                  </Grid2>
                </div>

                <div className={"flex flex-row-reverse p-1 space-y-1 items-center   rounded-md bg-gray-200"} style={{width : 260}}>
                  <FiltersOnOff
                    selectedOptions={values?.armes}
                    availableOptions={armeCount?.findDistinctArmes?.map(
                      (item) => item?.idArme
                    )}
                    onSelectNone={() => setFieldValue("armes", [], true)}
                    onSelectAll={() =>
                      setFieldValue(
                        "armes",
                        armeCount?.findDistinctArmes?.map(
                          (item) => item?.idArme
                        ),
                        true
                      )
                    }
                  ></FiltersOnOff>
                  <Grid2
                    container={true}
                    sx={{ borderRadius: 3 }}
                  >
                    {armeCount?.findDistinctArmes?.map((item) => {
                      return (
                        <Grid2 sm={3} lg={3} xl={3} md={3} key={item?.idArme}>
                          <ButtonBase
                            onClick={() =>
                              handleValueChanged(item?.idArme, "armes")
                            }
                          >
                            <Stack
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: 3,
                                bgcolor: (theme) =>
                                  values?.armes.includes(item?.idArme)
                                    ? theme.palette.action.selected
                                    : null
                              }}
                              justifyContent={"center"}
                              alignItems={"center"}
                            >
                              <ArmeAvatar
                                armeId={item?.idArme}
                                width={43}
                              ></ArmeAvatar>
                            </Stack>
                          </ButtonBase>
                        </Grid2>
                      );
                    })}
                  </Grid2>
                </div>

                <div className={"flex flex-col space-y-1 p-1 rounded-md bg-gray-200"} style={{width : 250}}>
                  <LoadingButton
                    fullWidth
                    size={"large"}
                    variant="contained"
                    onClick={submitForm}
                    // disabled={!(isValid && dirty)}
                    startIcon={<Refresh sx={{ width: 30, height: 30 }} />}
                    loading={isSubmitting}
                  >
                    <Typography fontWeight={"bold"}>filtrer</Typography>
                  </LoadingButton>
                  <Button
                    startIcon={<FilterAltOff sx={{ width: 30, height: 30 }} />}
                    onClick={() => {
                      handleReset();
                      dispatch(resetFilteringFields());
                      setTimeout(() => validateForm(), 50);
                    }}
                    variant={"outlined"}
                    color={"warning"}
                    size={"large"}
                  >
                    supprimer
                  </Button>
                  <Stack direction={"row"} spacing={1} padding={0}>
                    <ExportToExcel />
                    <ExportButton />
                    <ExportToPdf />
                  </Stack>
                </div>

              </Stack>

          </Form>
        );
      }}
    </Formik>
  );
};
