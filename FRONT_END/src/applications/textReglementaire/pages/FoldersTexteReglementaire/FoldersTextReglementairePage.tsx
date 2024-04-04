import {Stack} from "@mui/material";
import {UserFolders} from "./folders/UserFolders";
import {RenderPageOcrResultTable} from "./pdfFiles/RenderPageOcrResultTable";
import {useSelector} from "react-redux";
import {selectSelectedFolder} from "../../../../redux/features/folderAndFiles/foldersSlice";


export const FoldersTextReglementairePage = () => {

   const selectedFolder = useSelector(selectSelectedFolder)

   return (
      <Stack height={'calc(100vh - 65px)'}>
         <UserFolders />
         {
            selectedFolder &&  <RenderPageOcrResultTable/>
         }
      </Stack>
   )
}

export default FoldersTextReglementairePage
