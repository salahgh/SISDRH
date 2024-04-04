import { useQuery } from "@apollo/client";
import {
  PrivilegesEnum,
  UserAuthoritiesDocument,
} from "../_generated_gql_/graphql.ts";

export const useHasAuthorities = (authorities: string) => {
  let username;
  const localStoredUser = localStorage.getItem("user");
  if (localStoredUser !== null) {
    username = JSON.parse(localStoredUser).matricule;
  }

  const { data, loading } = useQuery(UserAuthoritiesDocument, {
    variables: { matricule: username },
  });
  return {
    hasAthoritie: data?.user?.authorities?.some(
      (item) => item?.authority === authorities,
    ),
    loading: loading,
  };
};

export const useGetAuthories = () => {
  return {
    OcrResultPin: useHasAuthorities(PrivilegesEnum.OcrResultPin),
    // ApplicationTextRecrutement: useHasAuthoritie(PrivilegesEnum.ApplicationTextRecrutement),
    ApplicationTextReglementaire: useHasAuthorities(
      PrivilegesEnum.ApplicationTextReglementaire,
    ),
    ElasticSearch: useHasAuthorities(PrivilegesEnum.ElasticSearch),
    GestionCompte: useHasAuthorities(PrivilegesEnum.GestionCompte),
    OcrMonitoring: useHasAuthorities(PrivilegesEnum.OcrMonitoring),
    OcrResultDirectGrant: useHasAuthorities(
      PrivilegesEnum.OcrResultDirectGrant,
    ),
    Print: useHasAuthorities(PrivilegesEnum.Print),
    TextReglementairePref: useHasAuthorities(
      PrivilegesEnum.TextReglementairePref,
    ),
    UpdateConfidentialite: useHasAuthorities(
      PrivilegesEnum.UpdateConfidentialite,
    ),
    UpdateHabilitation: useHasAuthorities(PrivilegesEnum.UpdateHabilitation),
    Upload: useHasAuthorities(PrivilegesEnum.Upload),
    PersonnelNotesSeeAll: useHasAuthorities(
      PrivilegesEnum.PersonnelNotesSeeAll,
    ),
  };
};
