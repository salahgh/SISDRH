import {Folder, Maybe} from "../../../../../_generated_gql_/graphql";
import {
   ChromeReaderMode,
   ChromeReaderModeOutlined,
   FolderOpen,
   FolderShared,
   FolderSharedOutlined,
   FolderSpecial,
   FolderSpecialOutlined
} from "@mui/icons-material";
import FolderIcon from "@mui/icons-material/Folder";
import * as React from "react";
import {folderHeight} from "./FolderDtoCard";

export function getFolderAvatar(item: Maybe<Folder>, isSelected: boolean | undefined) {

   if (!isSelected) {
      switch (item?.description) {
         case 'FAVORITE' :
            return <FolderSpecial
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fc8f52'
               }}
            />
         case 'FORREAD' :
            return <ChromeReaderMode
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fc8f52'
               }}
            />
         case 'OWNED' :
            return <FolderShared
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fc8f52'
               }}/>
         default :
            return <FolderIcon
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fc8f52'
               }}
            />

      }
   } else {
      switch (item?.description) {

         case 'FAVORITE' :
            return <FolderSpecialOutlined
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fd5c00'
               }}
            />
         case 'FORREAD' :
            return <ChromeReaderModeOutlined
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fd5c00'
               }}
            />
         case 'OWNED' :
            return <FolderSharedOutlined
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fd5c00'
               }}
            />
         default :
            return <FolderOpen
               sx={{
                  width: folderHeight * 0.6,
                  height: folderHeight * 0.6,
                  color: '#fd5c00'
               }}
            />

      }
   }
}