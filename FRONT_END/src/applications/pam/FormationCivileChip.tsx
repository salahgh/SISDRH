import ASSETS from "../../resources/ASSETS";
import {Stack} from "@mui/material";
import {School} from "@mui/icons-material";

const FormationCivileChip = ({codeDiplomeCivile, size}) => {

    let image;

    switch (codeDiplomeCivile) {
        case '0014' :
            image = ASSETS.liscince;
            break
        case '0021' :
            image = ASSETS.master;
            break;
        default :
            image = null
    }

    return (
        <Stack direction={'row'} justifyContent={'center'}>
            {
                image && <img src={image} style={{width: size, height: size, objectFit: "contain"}}/>
            }
            {
                !image && <School style={{color : '#171717' , fontSize : size}} ></School>
            }
        </Stack>
    )
}

export default FormationCivileChip;
