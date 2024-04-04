import {Dialog, DialogContent, DialogTitle, IconButton, Stack} from "@mui/material";
import {Close} from "@mui/icons-material";
import {PavForm} from "./PavForm";
import {PersonelCard} from "../pam/PersonelCard";
import {Pav} from "../../_generated_gql_/graphql";
import {useSelector} from "react-redux";
import {selecteSelectedPav} from "../../redux/features/pam/pamSlice";

export const PavDialogueForm = ({open,setOpen}) => {

    const pav : Pav = useSelector(selecteSelectedPav);

    return(
        <Dialog open={open} maxWidth={'xl'} fullWidth={true}>
            <DialogTitle>
                <IconButton onClick={() => setOpen(false)}>
                    <Close/>
                </IconButton>
            </DialogTitle>
            <DialogContent
                // sx={{bgcolor: '#5fa2d3'}}
            >
                <Stack
                    padding={0}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                    height={'100%'}
                    borderRadius={20}
                    direction={'row'}
                    // sx={{backgroundColor: 'rgba(218,92,92,0.45)'}}
                >
                    <PavForm/>
                    <PersonelCard pamOff24Id={pav?.personnel?.matricule} refetch={() => null}/>
                </Stack>
                {/*<StarLoading/>*/}
            </DialogContent>
        </Dialog>
    )
}
