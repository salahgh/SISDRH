import {Maybe} from "graphql/jsutils/Maybe";
import {Scalars} from "../../_generated_gql_/graphql";
import {Chip} from "@mui/material";

export const getColor = (poste: Maybe<Scalars["String"]> | undefined) => {
    let color: string;
    switch (poste) {
        case 'A' :
            return '#72aaad'
        case 'B' :
            return '#72aaad'
        case 'C' :
            return '#72aaad'
        case 'D' :
            return '#72aaad'
        case 'G4A' :
            return '#72aaad'
        case 'G4B' :
            return '#72aaad'
        case 'G4' :
            return '#72aaad'
        default :
            return '#72aaad'
    }
}

export function PostChip(props: { poste: Maybe<Scalars["String"]> | undefined }) {


    return (
        <Chip
            style={{borderRadius: 7}}
            label={props.poste}
            sx={{
                bgcolor: getColor(props.poste),
                '.MuiChip-label': {
                    fontWeight: 'bold',
                }
            }}
        >
        </Chip>
    )
}

