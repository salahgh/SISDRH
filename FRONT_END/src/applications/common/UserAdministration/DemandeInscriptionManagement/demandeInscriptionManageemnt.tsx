
import DemandeList from "./DemandeList";
import {Typography} from "@mui/material";

const DemandeInscriptionManageemnt = () => {

   return (
      <>
         <Typography
            sx={{
               paddingTop : 2
            }}
         variant={'h4'}
         fontWeight={'bolder'}
         > قائمة طلبات التسجيل في انتظار التأكيد</Typography>
         <DemandeList/>
      </>

   )

}

export default DemandeInscriptionManageemnt;
