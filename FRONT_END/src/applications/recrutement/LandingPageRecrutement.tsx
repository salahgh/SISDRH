import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  CandidatSearchDtoInput,
  PaginationInput,
  SearchCandidatDocument,
} from "../../_generated_gql_/graphql.ts";
import { Box, Container, Stack } from "@mui/material";
import { CandidatSearchForm } from "./CandidatSearchForm.tsx";
import { FormikHelpers, FormikValues } from "formik";
import { CandidatDataGrid } from "./CandidatDataGrid.tsx";

function LandingPageRecrutement(props) {
  const [candidatSearchDto, setCandidatSearchDto] =
    useState<CandidatSearchDtoInput>();

  const [pageable, setPageable] = useState<PaginationInput>({
    pageSize: 10,
    pageNumber: 0,
  });

  const candidatQuery = useQuery(SearchCandidatDocument, {
    variables: {
      candidatSearchDto: candidatSearchDto,
      pageable: pageable,
    },
  });

  const onSubmit = (
    values: FormikValues,
    formikHelpers: FormikHelpers<any>,
  ) => {
    setCandidatSearchDto((old) => ({ ...old, ...values }));
    console.log(candidatSearchDto);
    candidatQuery.refetch({
      candidatSearchDto: candidatSearchDto,
      pageable: pageable,
    });
    formikHelpers.setSubmitting(false);
  };

  return (
    <Stack sx={{ width: "100%" }} padding={1}>
      <CandidatSearchForm onSubmit={onSubmit}></CandidatSearchForm>
      <CandidatDataGrid
        candidatQuery={candidatQuery}
        pageable={pageable}
        setPageable={setPageable}
        candidatSearchDto={candidatSearchDto}
      ></CandidatDataGrid>
    </Stack>
  );
}

export default LandingPageRecrutement;
