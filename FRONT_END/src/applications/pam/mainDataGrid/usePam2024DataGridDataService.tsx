import {useQuery} from "@apollo/client";
import {FindPam2024Document} from "../../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selectFilteringFields} from "../../../redux/features/pam/pamSlice";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";

export const usePam2024DataGridDataService = (page) => {

    const filteringFields = useSelector(selectFilteringFields)
    const {handleShowRefreshNotification} = useSnackBarNotifications()

    const {data: pam2024, error, loading, refetch} = useQuery(FindPam2024Document,
        {
            variables: {
                pageable: page,
                filteringParams: filteringFields
            }
        }
    )

    const handleSubmit = (setSubmitting) => {
        refetch()
            .then((r) => {
                handleShowRefreshNotification()
                setSubmitting(false)
            }).catch((e) => setSubmitting(false))
    }

    return {
        pam2024 , error , loading , refetch , handleSubmit
    }
}
