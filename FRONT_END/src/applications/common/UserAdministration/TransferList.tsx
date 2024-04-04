import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useState} from "react";
import {PrivilegeDto} from "../../../redux/mainApi";
import {IconButton, Stack, TextField, Typography} from "@mui/material";
import {FilterAltOff, Search} from "@mui/icons-material";
import {blue} from "@mui/material/colors";
import useSnackBarNotifications from "../notifications/useSnackBarNotifications";
import {useMutation, useQuery} from "@apollo/client";
import {
   AddPrivilegeToRoleDocument,
   AllPrivilegesDocument,
   DeletePrivilegeFromRoleDocument
} from "../../../_generated_gql_/graphql";

function not(a: PrivilegeDto[] | undefined, b: PrivilegeDto[] | undefined) {
   if (!a || !b) return []
   return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: PrivilegeDto[], b: PrivilegeDto[] | undefined) {
   if (!a || !b) return []
   return a.filter((value) => b.indexOf(value) !== -1);
}

// @ts-ignore
export default function TransferList({role , setTransferListOpen}) {

   const [checked, setChecked] = useState<PrivilegeDto[]>([]);
   const [searchPrivilegename, setSearchPrivilegename] = useState<string>('')

   const {data : priviliges , error , loading } = useQuery(AllPrivilegesDocument)
   const [addRole  , {data , error : addPrivilegeToRoleError , loading: addingPrivilgeToRole}]
       = useMutation(AddPrivilegeToRoleDocument)
   const [deleteRole , {error : deletePrivilgeFromRoleError , loading : deleteingPrivilgeFromRole}]
       = useMutation(DeletePrivilegeFromRoleDocument)

   const [left, setLeft] = useState<PrivilegeDto[] | undefined>(not(privileges?._embedded?.privilegeDtoList?.filter((privilege) => privilege?.name?.includes(searchPrivilegename)), role.privileges));
   const [right, setRight] = useState<PrivilegeDto[] | undefined>(role.privileges);

   const leftChecked = intersection(checked, left);
   const rightChecked = intersection(checked, right);

   const handleToggle = (value: PrivilegeDto) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
         newChecked.push(value);
      } else {
         newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
   };

   const handleAllRight = () => {
      if (!right || !left) return
      setRight(right?.concat(left));
      setLeft([]);
   };

   const handleCheckedRight = () => {
      if (!right || !left) return
      setRight(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setChecked(not(checked, leftChecked));
   };

   const handleCheckedLeft = () => {
      if (!right || !left) return
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      setChecked(not(checked, rightChecked));
   };

   const handleAllLeft = () => {
      if (!right || !left) return
      setLeft(left.concat(right));
      setRight([]);
   };

   const customList = (items: PrivilegeDto[], isLeft: boolean) => {

      const filteredLeft = isLeft ? items.filter((item) => item.name?.includes(searchPrivilegename)) : items
      return (
         <Paper sx={{width: 300, height: 550, overflow: 'auto'}}>
            <List dense component="div" role="list">
               {
                  isLeft && <Stack direction={'row'}>
                     <TextField
                        value={searchPrivilegename}
                        onChange={(e) => setSearchPrivilegename(e.target.value)}
                        InputProps={{
                           // startAdornment : <Search></Search> ,
                           endAdornment: <Search sx={{color: blue["500"], padding: 1, fontSize: 40}}/>
                        }}
                        size={'small'}
                     >
                     </TextField>
                     <IconButton onClick={() => setSearchPrivilegename('')}>
                        <FilterAltOff>

                        </FilterAltOff>
                     </IconButton>
                  </Stack>
               }
               {

                  filteredLeft.map((value: PrivilegeDto) => {
                     const labelId = `transfer-list-item-${value.id}-label`;
                     return (
                        <ListItem
                           key={value.id}
                           role="listitem"
                           button
                           onClick={handleToggle(value)}
                        >
                           <ListItemIcon>
                              <Checkbox
                                 checked={checked.indexOf(value) !== -1}
                                 tabIndex={-1}
                                 disableRipple
                                 inputProps={{
                                    'aria-labelledby': labelId,
                                 }}
                              />
                           </ListItemIcon>
                           <ListItemText
                              id={labelId}
                              primary={<Typography variant={'h6'}>  {value.name} </Typography>}
                           >
                           </ListItemText>
                        </ListItem>
                     );
                  })}
            </List>
         </Paper>
      )
   }

   const {handleShowErrorSnackBar,handleShowInfoSnackBar} = useSnackBarNotifications()

   return (
      <>
         <Stack
            spacing={2}
            direction={'row'}
            justifyContent="center"
            alignItems="center"
            sx={{width: 700}}
            padding={2}
         >
            {
               left && <Stack sx={{width: 300}}>{customList(left, true)}</Stack>
            }
            <Stack direction="column" alignItems="center">
               <Button
                  sx={{my: 0.5}}
                  variant="outlined"
                  size="small"
                  onClick={handleAllRight}
                  disabled={left?.length === 0}
                  aria-label="move all right"
               >
                  ≫
               </Button>
               <Button
                  sx={{my: 0.5}}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected right"
               >
                  &gt;
               </Button>
               <Button
                  sx={{my: 0.5}}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
               >
                  &lt;
               </Button>
               <Button
                  sx={{my: 0.5}}
                  variant="outlined"
                  size="small"
                  onClick={handleAllLeft}
                  disabled={right?.length === 0}
                  aria-label="move all left"
               >
                  ≪
               </Button>
            </Stack>
            {
               right && <Stack sx={{width: 300}}>{customList(right, false)}</Stack>
            }
         </Stack>
         {/*<LoadingButton loading={isUpdatingRole} onClick={() => handleSave()} variant={'contained'}>SAVE</LoadingButton>*/}
      </>
   );
}
