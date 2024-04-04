import {Avatar} from "@mui/material";


// @ts-ignore
const HablitationAvatar = ({libHabilitationFr , size}) => {

    const getColor = (libHabilitationFr : string) => {
        switch (libHabilitationFr){
            case 'A' : return '#ff0000'
            case 'B' : return '#ff9e3e'
            case 'C' : return '#2ea100'
        }
    }


    return(
        <Avatar
        sx={{
            width : size ,
            height : size ,
            bgcolor : getColor(libHabilitationFr)
        }}
        >{libHabilitationFr}</Avatar>
    )
}

export default HablitationAvatar