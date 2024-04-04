import {useQuery} from "@apollo/client";
import {PrivilegesEnum, UserAuthoritiesDocument} from "../../../../_generated_gql_/graphql";

export const useHasAuthoritie = (authoritie) => {

    const username =  JSON.parse(localStorage.getItem('user')).matricule
    const {data , loading} = useQuery(UserAuthoritiesDocument , {variables : {matricule : username}})
    return {
        hasAthoritie : data?.user?.authorities?.some((item) => item?.authority === authoritie) ,
        loading : loading
    }
}

export const useGetAuthories = () => {
    return {
        OcrResultPin: useHasAuthoritie(PrivilegesEnum.OcrResultPin),
        ApplicationTextRecrutement: useHasAuthoritie(PrivilegesEnum.ApplicationTextRecrutement),
        ApplicationTextReglementaire: useHasAuthoritie(PrivilegesEnum.ApplicationTextReglementaire),
        ElasticSearch: useHasAuthoritie(PrivilegesEnum.ElasticSearch),
        GestionCompte: useHasAuthoritie(PrivilegesEnum.GestionCompte),
        OcrMonitoring: useHasAuthoritie(PrivilegesEnum.OcrMonitoring),
        OcrResultDirectGrant: useHasAuthoritie(PrivilegesEnum.OcrResultDirectGrant),
        Print: useHasAuthoritie(PrivilegesEnum.Print),
        TextReglementairePref : useHasAuthoritie(PrivilegesEnum.TextReglementairePref),
        UpdateConfidentialite : useHasAuthoritie(PrivilegesEnum.UpdateConfidentialite),
        UpdateHabilitation  : useHasAuthoritie(PrivilegesEnum.UpdateHabilitation),
        Upload : useHasAuthoritie(PrivilegesEnum.Upload),
        PersonnelNotesSeeAll : useHasAuthoritie(PrivilegesEnum.PersonnelNotesSeeAll)
    }
}
