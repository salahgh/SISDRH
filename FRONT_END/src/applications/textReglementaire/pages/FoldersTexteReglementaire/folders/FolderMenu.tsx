import {Maybe, OcrResultEntityJpa, Scalars, User} from "../../../../../_generated_gql_/graphql";
import {ListItemIcon, ListItemText, Menu, MenuList} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {DeleteForever} from "@mui/icons-material";
import * as React from "react";

export function FolderMenu(props: { value: HTMLElement | null,
   onClose: () => void,
   item: { __typename?: "Folder" | undefined | undefined; color?: Maybe<Scalars["String"]> | undefined | undefined; createdDate?: Maybe<Scalars["LocalDateTime"]> | undefined | undefined; description?: Maybe<Scalars["String"]> | undefined | undefined; id?: Maybe<Scalars["Long"]> | undefined | undefined; name?: Maybe<Scalars["String"]> | undefined | undefined; owner?: Maybe<User> | undefined | undefined; pdfFiles?: Maybe<Array<Maybe<OcrResultEntityJpa>>> | undefined | undefined; usersGranted?: Maybe<Array<Maybe<User>>> | undefined | undefined }, onClick: () => void }) {
   return <Menu id={"basic-menu2"} open={Boolean(props.value)} anchorEl={props.value} onClose={props.onClose}>
      <MenuList>
         {
            props.item?.id != "-1" && <MenuItem
               sx={{bgcolor: "red"}}
               onClick={props.onClick}
            >
               <ListItemIcon>
                  <DeleteForever sx={{fontSize: 30}}/>
               </ListItemIcon>
               <ListItemText>Supprimer</ListItemText>
            </MenuItem>
         }
      </MenuList>
   </Menu>;
}