import { Field, Form, Formik } from "formik";
import {
  Stack,
  ToggleButton,
  Typography,
  Button,
  Paper,
  Tooltip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  TextField as MuiTextField,
  Autocomplete as MuiAutoComplete,
} from "@mui/material";
import { TextField, ToggleButtonGroup } from "formik-mui";

import { useQuery } from "@apollo/client";
import {
  Business,
  Deselect,
  ExpandLess,
  ExpandMore,
  RestartAltRounded,
  SearchRounded,
  SelectAll,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectElasticSearchInput,
  setElasticSearchInput,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import {
  ConfidentialiteCountDocument,
  FindAllDomainesDocument,
  FindAllTextAutoritiesDocument,
  FindAllTextAutoritiesQuery,
  TypeTextReglementaireCountDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { DatePicker } from "formik-mui-x-date-pickers";
import { ConfidentialiteChip } from "../../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import { arraysContainSameElements } from "../../../../common/utilities/utilities.ts";
import { AutoSubmit } from "../../../../common/components/formik/AutoSubmit.tsx";
import { useAppDispatch } from "../../../../../redux/hooks.ts";
import {
  closeSearchPanel,
  openSearchPanel,
  selectTextReglementaireSearchPanelOpen,
} from "../../../../../redux/features/elasticSearch/textReglemetaireUISlice.ts";
import { LoadingButton } from "@mui/lab";
import { LoadingConfidentialiteButtons } from "./LoadingConfidentialiteButtons.tsx";
import { setSelectedPdfViewer } from "../../../../../redux/features/folderAndFiles/foldersSlice.ts";

// todo choose icons for type texte reglmentaire and for confidentialite

export default function ElasticSearchForm({ handleSubmit, isLoading }) {
  const elasticSearchInput = useSelector(selectElasticSearchInput);
  const [initialValues, setInitialValues] = useState(elasticSearchInput);

  const {
    data: allTypeTexteReglementaires,
    loading: loadingAllTypeTextReglementaires,
  } = useQuery(TypeTextReglementaireCountDocument);

  const { data: allConfidentialites, loading: loadingConfidentialites } =
    useQuery(ConfidentialiteCountDocument);

  const { data: autorites } = useQuery(FindAllTextAutoritiesDocument);
  const { data: domaines } = useQuery(FindAllDomainesDocument);

  useEffect(() => {
    console.log(
      "initial use effect for all confidentialites and alltypetextereglementaires",
    );
    if (allConfidentialites && allTypeTexteReglementaires) {
      console.log(allConfidentialites, allTypeTexteReglementaires);
      dispatch(
        setElasticSearchInput({
          ...elasticSearchInput,
          idsTypeTextReglementaire:
            allTypeTexteReglementaires.typeTextReglementaireCount.map(
              (item) => item?.libTypeTexteFr,
            ),
          isConfidentialite: allConfidentialites.confidentialiteCount.map(
            (item) => item?.libConfidentialiteFr,
          ),
        }),
      );
      setInitialValues({
        ...elasticSearchInput,
        idsTypeTextReglementaire:
          allTypeTexteReglementaires.typeTextReglementaireCount.map(
            (item) => item?.id,
          ),
        isConfidentialite: allConfidentialites.confidentialiteCount.map(
          (item) => item?.id,
        ),
      });
    }
  }, [allConfidentialites, allTypeTexteReglementaires]);

  const open = useSelector(selectTextReglementaireSearchPanelOpen);
  const dispatch = useAppDispatch();

  //todo try using one button for select all and select none
  const searchToken = useSelector(selectElasticSearchInput).searchToken;
  useEffect(() => {
    if (searchToken?.length === 0) {
      dispatch(setSelectedPdfViewer("PDF"));
    } else {
      dispatch(setSelectedPdfViewer("IMAGE"));
    }
  }, [searchToken]);

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
        return (
          <Form>
            <Paper className={"shadow-lg drop-shadow-lg p-2 space-y-2"}>
              <Stack direction={"row"} spacing={1}>
                <Stack>
                  <Button
                    onClick={() =>
                      dispatch(open ? closeSearchPanel() : openSearchPanel())
                    }
                  >
                    {open ? (
                      <ExpandLess></ExpandLess>
                    ) : (
                      <Stack direction={"row"} spacing={2}>
                        <ExpandMore></ExpandMore>
                        <Typography>بحث</Typography>
                        <SearchRounded></SearchRounded>
                      </Stack>
                    )}
                  </Button>
                </Stack>

                <Stack display={open ? "block" : "none"} spacing={1}>
                  <AutoSubmit></AutoSubmit>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={1}
                    className={""}
                  >
                    <div className={""} dir={"ltr"}>
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
                        format="dd/MM/yyyy"
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
                        format="dd/MM/yyyy"
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
                  <Stack
                    direction={"row"}
                    spacing={1}
                    justifyContent={"center"}
                  >
                    <Button
                      disabled={arraysContainSameElements(
                        values.isConfidentialite,
                        [],
                      )}
                      onClick={() => setFieldValue("isConfidentialite", [])}
                    >
                      <Deselect sx={{ width: 30, height: 30 }} />
                    </Button>

                    <Field
                      component={ToggleButtonGroup}
                      name="isConfidentialite"
                      type="checkbox"
                    >
                      {allConfidentialites?.confidentialiteCount?.map(
                        (option) => (
                          <Tooltip
                            title={
                              option?.libConfidentialiteFr +
                              " au nombre de " +
                              option?.count_
                            }
                          >
                            <ToggleButton
                              key={option?.id}
                              value={option?.libConfidentialiteFr}
                              aria-label={option?.libConfidentialiteAr}
                            >
                              <ConfidentialiteChip confidentialite={option} />
                            </ToggleButton>
                          </Tooltip>
                        ),
                      )}
                      {loadingConfidentialites && (
                        <LoadingConfidentialiteButtons size={4} />
                      )}
                    </Field>
                  </Stack>

                  <Stack
                    direction={"row"}
                    spacing={1}
                    justifyContent={"center"}
                  >
                    <Button
                      disabled={arraysContainSameElements(
                        [...values.idsTypeTextReglementaire],
                        [],
                      )}
                      onClick={() =>
                        setFieldValue("idsTypeTextReglementaire", [])
                      }
                    >
                      <Deselect sx={{ width: 30, height: 30 }} />
                    </Button>

                    <Field
                      component={ToggleButtonGroup}
                      name="idsTypeTextReglementaire"
                      type="checkbox"
                    >
                      {allTypeTexteReglementaires?.typeTextReglementaireCount?.map(
                        (option) => (
                          <Tooltip
                            title={
                              option?.libTypeTexteFr +
                              " au nombre de " +
                              option?.count_
                            }
                          >
                            <ToggleButton
                              key={option.id}
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
                          </Tooltip>
                        ),
                      )}
                      {loadingAllTypeTextReglementaires && (
                        <LoadingConfidentialiteButtons width={60} size={6} />
                      )}
                    </Field>
                  </Stack>
                </Stack>

                {open && (
                  <>
                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      spacing={1}
                    >
                      <Field
                        component={ToggleButtonGroup}
                        name="domaines"
                        type="checkbox"
                        exlusive={true}
                      >
                        {domaines?.findAllDomaines?.map((option) => (
                          <Tooltip title={option?.libFr}>
                            <ToggleButton
                              key={option?.id}
                              value={option?.id}
                              aria-label={option?.libAr}
                            >
                              <Typography>{option?.libAr}</Typography>
                            </ToggleButton>
                          </Tooltip>
                        ))}
                        {/*{loadingConfidentialites && (*/}
                        {/*  <LoadingConfidentialiteButtons size={4} />*/}
                        {/*)}*/}
                      </Field>
                      {autorites && (
                        <MuiAutoComplete
                          name={"autorites"}
                          multiple
                          fullWidth={true}
                          id="autorites"
                          options={[
                            {
                              id: "-1",
                              rhRunite: {
                                abreviationAr: "الكل",
                                abreviationFr: "الكل",
                                libUniteeAr: "الكل",
                              },
                            },
                            ...autorites?.findAllTextAutorities,
                          ]}
                          renderOption={(
                            props,
                            option: FindAllTextAutoritiesQuery["findAllTextAutorities"][0],
                          ) => {
                            return (
                              <Tooltip
                                placement={"right"}
                                title={option?.rhRunite?.libUniteeAr}
                              >
                                <ListItem dir={"ltr"} {...props}>
                                  <ListItemAvatar>
                                    {option?.id === "-1" ? (
                                      <SelectAll></SelectAll>
                                    ) : (
                                      <Business></Business>
                                    )}
                                  </ListItemAvatar>
                                  <ListItemText
                                    sx={{ textAlign: "center" }}
                                    primary={option?.rhRunite.abreviationFr}
                                  ></ListItemText>
                                </ListItem>
                              </Tooltip>
                            );
                          }}
                          freeSolo
                          onChange={(e, value) => {
                            console.log(value);
                            setFieldValue(
                              "autorites",
                              value?.map((item) => item?.id),
                            ).then(() => null);
                          }}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <Chip
                                variant="outlined"
                                label={option?.rhRunite?.abreviationFr}
                                {...getTagProps({ index })}
                                icon={
                                  option?.id === "-1" ? (
                                    <SelectAll></SelectAll>
                                  ) : (
                                    <Business></Business>
                                  )
                                }
                              />
                            ))
                          }
                          getOptionKey={(
                            option: FindAllTextAutoritiesQuery["findAllTextAutorities"][0],
                          ) => option?.id}
                          getOptionLabel={(
                            option: FindAllTextAutoritiesQuery["findAllTextAutorities"][0],
                          ) => option?.rhRunite?.abreviationFr}
                          renderInput={(params) => (
                            <MuiTextField
                              fullWidth={true}
                              {...params}
                              sx={{ height: 30 }}
                              label="الهيئة"
                            />
                          )}
                        />
                      )}
                    </Stack>
                    <Stack justifyContent={"center"} spacing={1}>
                      <LoadingButton
                        sx={{
                          height: 60,
                          width: 180,
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                        variant={"contained"}
                        startIcon={
                          <SearchRounded sx={{ width: 40, height: 40 }} />
                        }
                        loading={isLoading}
                        type={"submit"}
                      ></LoadingButton>

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
                        // type={"submit"}
                        onClick={handleReset}
                      ></LoadingButton>
                    </Stack>
                  </>
                )}
              </Stack>
            </Paper>
          </Form>
        );
      }}
    </Formik>
  );
}
