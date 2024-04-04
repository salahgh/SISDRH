import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {CardActionArea, IconButton, ListItemText, Stack, Typography} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import * as React from "react";
import {useState} from "react";
import {
   DeleteFolderDocument,
   Folder,
   GetOwnedFoldersDocument,
   GetOwnedFoldersQueryVariables,
   Maybe
} from "../../../../../_generated_gql_/graphql";
import {useMutation} from "@apollo/client";
import {useDispatch, useSelector} from "react-redux";
import {selectLoggedInUser} from "../../../../../redux/features/auth/userSlice";
import {FolderMenu} from "./FolderMenu";
import {getFolderAvatar} from "./GetFolderAvatar";
import {selectSelectedFolder, setSelectedFolder} from "../../../../../redux/features/folderAndFiles/foldersSlice";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";

export const folderHeight = 70

export function FolderDtoCard(props: {
   item:  Maybe<Folder> ,
}) {

   const {item} = props
   const [hovered , setHovered] = useState<boolean>(false)
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const userName = useSelector(selectLoggedInUser).matricule
   const selectedFolder = useSelector(selectSelectedFolder)
   const {handleShowGraphQlErrorSnackBar , handleShowInfoSnackBar} = useSnackBarNotifications()
   const dispatch = useDispatch()

   const [deleteFolder, {data, loading: deletingFolder, error}] = useMutation(DeleteFolderDocument);

   const newVariables : GetOwnedFoldersQueryVariables = {username_ : userName}

   function handleDeleteFolder(item : Folder) {
      deleteFolder({
         variables : {
            folder_id : item.id ,
            user_name : userName
         },
         refetchQueries : [{query : GetOwnedFoldersDocument , variables : newVariables}]
      }).then((result) => {
         handleShowInfoSnackBar('deleted')
         setAnchorEl(null)
         if(selectedFolder?.id == item?.id) dispatch(setSelectedFolder(null))})
         .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)))
   }

      return <Card
         sx={{
            backgroundColor: item?.id == selectedFolder?.id ? '#f6ba9a' : '#e0e0e0',
            height: folderHeight,
         }}
         onMouseEnter={
            (event) => {
               setHovered(true)
            }
         }
         onMouseLeave={(e) => setHovered(false)}
      >
         <FolderMenu
            value={anchorEl}
            onClose={() => setAnchorEl(null)} item={item}
            onClick={() => handleDeleteFolder(item)}
         />
         {
            <CardActionArea onClick={() => {
               dispatch(setSelectedFolder(item))
            }}
            >
               <CardContent sx={{
                  width: '100%',
                  height: '100%',
                  padding: 0
               }}
               >
                  <Stack height={'100%'} width={'100%'} direction={'row'} alignItems={'center'}
                         alignContent={'center'} justifyContent={'center'}>
                     <Stack
                        alignItems={'center'}
                        justifyContent={'center'}
                        sx={{
                           width: folderHeight * 0.8,
                           height: folderHeight * 1,
                           padding: 0
                        }}
                     >
                        {
                           getFolderAvatar(item, item?.id == selectedFolder?.id)
                        }
                     </Stack>
                     <ListItemText
                        primary={<Typography fontWeight={'bold'} variant={'h6'}>{item?.name}</Typography>}
                        secondary={item?.description}
                     >
                     </ListItemText>
                     <Stack height={'100%'} direction={'column'} alignItems={'start'} justifyItems={'start'}>
                        {
                           <IconButton
                              onClick={(e) => {
                                 setAnchorEl(e.currentTarget)
                              }}
                              style={{visibility: hovered ? 'visible' : 'hidden'}}>
                              <MoreVert/>
                           </IconButton>
                        }
                     </Stack>
                  </Stack>
               </CardContent>
            </CardActionArea>
         }
      </Card>
}
