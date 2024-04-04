import {School} from "@mui/icons-material";


export const FormationChip = ({visible}) => {

   return(
      <School style={{ visibility : visible ? 'visible' : 'hidden' }} width={50} height={50} color={'primary'}></School>
   )

}