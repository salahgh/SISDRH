import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  FindElasticOcrResultsAllCriteriasApiArg,
  useFindElasticOcrResultsAllCriteriasMutation,
} from "../../../../../redux/mainApi";
import { RenderResults } from "./RenderResults";
import {
  GetPdfFileDocument,
  Pagination,
  UserConfidentialitesDocument,
} from "../../../../../_generated_gql_/graphql";
import { useQuery } from "@apollo/client";
import { FormikHelpers, FormikValues } from "formik";
import { format } from "date-fns";
import RenderOuterHitsTable from "./RenderOuterHitsTable";
import {
  selectelasticSearchInput,
  selectselectedFileId,
  setelasticSearchInput,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { useAppDispatch } from "../../../../../redux/hooks";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice";
import ElasticSearchForm from "../../../../common/components/forms/ElasticSearchForm.tsx";
import HOcrViewer from "../../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import {
  selectTextReglementaireSearchPanelOpen
} from "../../../../../redux/features/elasticSearch/textReglemetaireUISlice.ts";

const SearchUI = () => {

  const selctedFileId = useSelector(selectselectedFileId);

  const [setPageIndex, setSetPageIndex] = useState(0);

  const [hitsPage, setHitsPage] = useState<Pagination>({
    pageNumber: 0,
    pageSize: 20,
  });

  const [innerHitsPage, setInnerHitsPage] = useState<Pagination>({
    pageNumber: 0,
    pageSize: 20,
  });

  const searchInputs = useSelector(selectelasticSearchInput);
  const dispatch = useAppDispatch();
  const searchPanelOpen = useSelector(selectTextReglementaireSearchPanelOpen)

  // const { data: ocrResultJpa, error: ocrResultJpaError } = useQuery(
  //   GetPdfFileDocument,
  //   {
  //     variables: {
  //       fileSignatue: selctedFileId ? selctedFileId : "-1",
  //     },
  //   },
  // );

  const loggedInUser = useSelector(selectLoggedInUser);
  const [search, { isLoading, error, data }] =
    useFindElasticOcrResultsAllCriteriasMutation();

  const { data: userConfidentialities } = useQuery(
    UserConfidentialitesDocument,
    {
      variables: { matricule: loggedInUser?.matricule },
    },
  );

  const handleSubmit = (values: FormikValues, helpers: FormikHelpers<any>) => {
    console.log('handle submit ...')
    console.log(values)
    helpers.setSubmitting(true);
    dispatch(
      setelasticSearchInput({
        dateReferenceDebut: format(values.dateReferenceDebut, "yyyy-MM-dd"),
        dateReferenceFin: format(values.dateReferenceFin, "yyyy-MM-dd"),
        searchToken: values.searchToken,
        idsTypeTextReglementaire: values.idsTypeTextReglementaire,
        // isConfidentialite: values?.isConfidentialite?.filter((item) => {
        //   if (
        //     userConfidentialities?.user?.habilitation?.confidentialites?.some(
        //       (conf) => conf?.libConfidentialiteFr == item,
        //     )
        //   ) {
        //     return true;
        //   } else return false;
        // }),
        isConfidentialite: values?.isConfidentialite?.filter((item) => {
          if (
            userConfidentialities?.user?.habilitation?.confidentialites?.some(
              (conf) => conf?.libConfidentialiteFr == item,
            )
          ) {
            return true;
          } else return false;
        }),
        reference: values.reference,
      }),
    );
    // getResults({
    //   dateReferenceDebut: format(values.dateReferenceDebut, "yyyy-MM-dd"),
    //   dateReferenceFin: format(values.dateReferenceFin, "yyyy-MM-dd"),
    //   searchToken: values.searchToken,
    //   idsTypeTextReglementaire: values.idsTypeTextReglementaire,
    //   isConfidentialite: values?.isConfidentialite?.filter((item) => {
    //     if (
    //       userConfidentialities?.user?.habilitation?.confidentialites?.some(
    //         (conf) => conf?.libConfidentialiteFr == item,
    //       )
    //     ) {
    //       return true;
    //     } else return false;
    //   }),
    //   reference: values.reference,
    // });
    helpers.setSubmitting(false);
  };
  // todo change color selection for toggle buttons
  const getResults = (values) => {
    const searchInput: FindElasticOcrResultsAllCriteriasApiArg = {
      elasticSearchInput: {
        dateReferenceDebut: values.dateReferenceDebut,
        dateReferenceFin: values.dateReferenceFin,
        reference: values.reference,
        searchToken: values.searchToken,
        idsTypeTextReglementaire: values.idsTypeTextReglementaire,
        isConfidentialite: values.isConfidentialite,
        page: hitsPage.pageNumber,
        size: hitsPage.pageSize ? hitsPage.pageSize : 10,
        innerPage: innerHitsPage.pageNumber,
        innerSize:
          innerHitsPage.pageSize === null ? 10 : innerHitsPage.pageSize,
      },
    };
    search(searchInput).then(() => {});
  };

  useEffect(() => {
    getResults(searchInputs);
  }, [searchInputs , hitsPage]);

  const height_ = searchPanelOpen ? 278 : 132

  return (
    <div>
      <div className={"p-2 flex flex-row justify-center"}>
        <ElasticSearchForm isLoading={isLoading} handleSubmit={handleSubmit} />
      </div>
      <Stack
        className={"bg-slate-200"}
        height={`calc(100vh - ${height_}px)`}
        direction={"row"}
        spacing={1}
        padding={1}
        width={"100%"}
      >
        <RenderOuterHitsTable
          setHitsPage={setHitsPage}
          hitsPage={hitsPage}
          data={data}
          isFetching={isLoading}
          error={error}
        />
        {searchInputs.searchToken !== "" && (
          <>
            <RenderResults
              setInnerHitsPage={setInnerHitsPage}
              innerHitsPage={innerHitsPage}
              setPageIndex={setPageIndex}
              data={data}
              isFetching={isLoading}
              error={error}
            />
          </>
        )}
        <Stack justifyContent={"start"} alignItems={"center"} flex={1}>
          <HOcrViewer></HOcrViewer>
        </Stack>
      </Stack>
    </div>
  );
};

export default SearchUI;
