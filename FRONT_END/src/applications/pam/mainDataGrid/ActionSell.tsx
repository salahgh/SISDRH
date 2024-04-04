import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Button, Stack} from "@mui/material";
import {ArrowOutwardTwoTone, Camera, Note} from "@mui/icons-material";
import {setSelectedPersonnel} from "../../../redux/features/pam/pamSlice";
import {getLink, routs} from "../../../routing/routs";
import * as React from "react";



export const ActionsCell = ({row , setSelectedPersonel , setPersonelCardOpen , setNoteDialogueOpen}) => {

    const [hovered, setHovered] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Stack
            direction={'row'}
            spacing={1}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            width={'100%'}
            height={'100%'}
            alignItems={'center'}
        >

                    <Button
                        variant={'contained'}
                        size={'small'}
                        onClick={() => {
                            setSelectedPersonel(row)
                            setPersonelCardOpen(true)
                        }}
                        startIcon={<ArrowOutwardTwoTone/>}>
                        تفاصيل
                    </Button>
                    <Button
                        variant={'outlined'}
                        color={'warning'}
                        size={'small'}
                        onClick={() => {
                            setSelectedPersonel(row)
                            setNoteDialogueOpen(true)
                        }}
                        startIcon={<Note color={'warning'}/>}>
                        notes
                    </Button>
                    {/*<Button*/}
                    {/*    variant={'outlined'}*/}
                    {/*    color={'info'}*/}
                    {/*    size={'small'}*/}
                    {/*    onClick={() => {*/}
                    {/*        dispatch(setSelectedPersonnel(row))*/}
                    {/*        navigate(getLink(routs.PhotoEditing))*/}
                    {/*    }}*/}
                    {/*    startIcon={<Camera color={'info'}/>}>*/}
                    {/*    edit*/}
                    {/*</Button>*/}


        </Stack>
    )
}
