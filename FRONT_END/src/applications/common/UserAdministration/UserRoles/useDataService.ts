import {useState} from "react";
import {useQuery} from "@apollo/client";
import {AllUsersPagedDocument, PaginationInput} from "../../../../_generated_gql_/graphql";


export const useDataService = () => {

    const [pageable, setPageable] = useState<PaginationInput>({
       pageNumber : 0 , pageSize : 100
    })

    const {
        data: users, loading, error, refetch
    } = useQuery(AllUsersPagedDocument, {
        variables: {
            pageable: pageable
        }
    })

    return({
        users , loading  , error  , refetch , pageable , setPageable
    })

}
