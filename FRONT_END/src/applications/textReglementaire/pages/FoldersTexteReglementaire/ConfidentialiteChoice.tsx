import {useMutation, useQuery} from "@apollo/client";
import {AllConfidentialitesDocument, UpdateConfidentialiteDocument} from "../../../../_generated_gql_/graphql";
import {
    ToggleButton,
    ToggleButtonGroup,

} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {ConfidentialiteChip} from "./pdfFiles/ConfidentialiteChip";
import useSnackBarNotifications from "../../../common/notifications/useSnackBarNotifications.tsx";


// @ts-ignore
const ConfidentialiteChoice = ({navigateNext , ocrResultId}) => {

    const {
        data: confidentialites,
        error: confidentialiteError,
        loading: confidentialiteLoading
    } = useQuery(AllConfidentialitesDocument)

    const [ updateConfidentialite , { data , loading , error } ] = useMutation(UpdateConfidentialiteDocument)

    const [ selectedConfidentialite, setSelectedConfidentialite ] = useState(null)

    const {handleShowErrorSnackBar , handleShowInfoSnackBar ,handleShowGraphQlErrorSnackBar} = useSnackBarNotifications()

    function handleSexChange(event: React.MouseEvent<HTMLElement>, value: any) {
        setSelectedConfidentialite(value) ;
        updateConfidentialite({
            variables : {
                confidentialiteId : value ,
                ocrResultId : ocrResultId
            }
        }).then((result) => {
            handleShowInfoSnackBar("updated")
            navigateNext()
        }).catch((error) => {
            handleShowGraphQlErrorSnackBar(JSON.stringify(error))
        })
    }


    return (
        <ToggleButtonGroup sx={{ height : 80 }} value={selectedConfidentialite} onChange={handleSexChange} exclusive={true}>
            {
                confidentialites?.allConfidentialites?.filter((item) => item?.id !== '5').map((item) => {
                    return(
                        <ToggleButton value={item?.id} aria-label="left aligned">
                            <ConfidentialiteChip confidentialite={item}/>
                        </ToggleButton>
                    )
                })
            }
        </ToggleButtonGroup>
    )
}

export default ConfidentialiteChoice
