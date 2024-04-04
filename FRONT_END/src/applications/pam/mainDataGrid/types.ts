import {Direction} from "../../../_generated_gql_/graphql";

export interface SortingFieldsInterface {
   id: string,
   lib: string,
   direction: Direction
}

export interface FilteringFieldsInterface {
   armes: BigInteger[]
   csn: string,
   searchToken: String,
   grades: BigInteger[],
   suds: number[],
   postes: String[],
   idStructure: String,
   pam: String[],
   pav: String[],
   formation: String ,
   diplomesCiviles : String[] ,
   diplomesMilitaires : String[]
}
