import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FindElasticOcrResultsAllCriteriasApiArg,
  useFindElasticOcrResultsAllCriteriasMutation,
} from "../../../../../redux/mainApi";
import { RenderResults } from "./RenderResults";
import {
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
  setelasticSearchInput, setselectedFileId
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { useAppDispatch } from "../../../../../redux/hooks";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice";
import ElasticSearchForm from "../../../../common/components/forms/ElasticSearchForm.tsx";
import HOcrViewer from "../../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import {
  selectTextReglementaireSearchPanelOpen
} from "../../../../../redux/features/elasticSearch/textReglemetaireUISlice.ts";

const SearchUI = () => {


  const [hitsPage, setHitsPage] = useState<Pagination>({
    pageNumber: 0,
    pageSize: 20,
  });

  const [innerHitsPage, setInnerHitsPage] = useState<Pagination>({
    pageNumber: 0,
    pageSize: 20,
  });

  const searchInputs = useSelector(selectelasticSearchInput);
  const loggedInUser = useSelector(selectLoggedInUser);
  const searchPanelOpen = useSelector(selectTextReglementaireSearchPanelOpen)
  const selectedFileId = useSelector(selectselectedFileId);

  const dispatch = useAppDispatch();

  const [search, { isLoading, error, data }] =
    useFindElasticOcrResultsAllCriteriasMutation();

  useEffect(() => {
    if( data && ( !selectedFileId || !data?.searchHits?.some((item) => item?.id === selectedFileId))){
      dispatch(setselectedFileId(data?.searchHits?.at(0)?.id))
    }
  }, [data]);

  const { data: userConfidentialities } = useQuery(
    UserConfidentialitesDocument,
    {
      variables: { matricule: loggedInUser?.matricule },
    },
  );


  const handleSubmit = (values: FormikValues, helpers: FormikHelpers<never>) => {
    helpers.setSubmitting(true);
    dispatch(
      setelasticSearchInput({
        dateReferenceDebut: format(values.dateReferenceDebut, "yyyy-MM-dd"),
        dateReferenceFin: format(values.dateReferenceFin, "yyyy-MM-dd"),
        searchToken: values.searchToken,
        idsTypeTextReglementaire: values.idsTypeTextReglementaire,
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
  }, [searchInputs , hitsPage, innerHitsPage]);

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
      >
        <div>
          <RenderOuterHitsTable
            setHitsPage={setHitsPage}
            hitsPage={hitsPage}
            data={data}
            isFetching={isLoading}
            error={error}
          />
        </div>
        <div>
          {searchInputs.searchToken !== "" && (
            <RenderResults
              setInnerHitsPage={setInnerHitsPage}
              innerHitsPage={innerHitsPage}
              data={data}
              isFetching={isLoading}
            />
          )}
        </div>
        <Stack
          flex={1}
          justifyContent={"start"}
          alignItems={"center"}
        >
          <HOcrViewer></HOcrViewer>
        </Stack>
      </Stack>
    </div>
  );
};

export default SearchUI;
