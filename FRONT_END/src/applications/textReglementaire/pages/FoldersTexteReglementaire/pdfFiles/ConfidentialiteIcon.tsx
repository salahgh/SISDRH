import {Security, Shield, ShieldOutlined} from "@mui/icons-material";

export const ConfidentialiteIcon = ({libConfidentialiteAr}: { libConfidentialiteAr: string | null | undefined }) => {

    let src = null
    switch (libConfidentialiteAr) {
        case ('مكتوم') : src = <ShieldOutlined
        sx={{
            width : 50 , height : 50 , color : 'rgb(255,113,40)'
        }}
        /> ; break
        case ('سري') : src = <Shield
            sx={{
                width : 45 , height : 45 , color : 'rgb(255,0,0)'
            }}
        /> ; break
        case ('سري جدا') : src = <Security
            sx={{
                width : 45 , height : 45 , color : 'rgb(255,0,0)'
            }}
        />  ; break
        default : src = <Security
            sx={{
                width : 60 , height : 60 , color : 'rgb(255,255,255)' , bgcolor : 'rgb(255,0,0)' ,
                padding : 1 , borderColor : 'rgb(7,0,0)' , borderWidth : 1 , border : 'solid'

            }}
        /> ;
    }
    return src
}