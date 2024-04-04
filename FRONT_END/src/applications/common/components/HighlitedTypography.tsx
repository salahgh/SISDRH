import {Typography} from "@mui/material";
import {CSSProperties} from "react";
import {highlightSearchTokenWithSpan} from "../utilities/tools";


export const HighlitedTypography = ({style , text , highlight} : {style? : CSSProperties , text : string , highlight : string}) => {

    return(
        <Typography style={style}>
            {
                <span
                    dangerouslySetInnerHTML={highlightSearchTokenWithSpan(text,highlight)}/>
            }
        </Typography>
    )
}
