import {useDispatch, useSelector} from "react-redux";
import {logout, selectExpirationTime} from "../../../redux/features/auth/userSlice";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    Stack,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {BorderLinearProgress} from "./BorderLinearProgress";
import {useNavigate} from "react-router-dom";
import {getLink, routs} from "../../../routing/routs";
import Lottie from "lottie-react";
import {ASSETS_LOTTIE} from "../../../resources/lotties/ASSETS_LOTTIE";
import useSnackBarNotifications from "../notifications/useSnackBarNotifications";
import {formatTime} from "../utilities/utilities";

let userInactivityIndicator = 0

export function handleUserInactivity() {
    userInactivityIndicator = userInactivityIndicator + 1;
    console.log(userInactivityIndicator)
}

export const SessionExpirationDisplay = () => {

    const [refresh, setRefresh] = useState(0);
    const [logOutDialogueOpen, setLogOutDialogueOpen] = useState(false);
    const expirationTime = useSelector(selectExpirationTime)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {handleShowSessionExpiredNotification} = useSnackBarNotifications()

    useEffect(() => {
        userInactivityIndicator = 0
        const intervalId = setInterval(() => {
            setRefresh((old) => old + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        };
    }, []);

    useEffect(() => {
        if (userInactivityIndicator > 0) {
            setLogOutDialogueOpen(true)
            setTick(refresh)
        }
    }, [userInactivityIndicator]);

    useEffect(() => {
        if (logOutDialogueOpen) {
            if (refresh - tick > 29) {
                handleQui()
            }
        }
    }, [refresh]);


    const [tick, setTick] = useState(0);

    const handleQui = () => {
        handleShowSessionExpiredNotification("session expired")
        dispatch(logout())
        navigate(getLink(routs.MuiSignIn))

    }

    const handleStay = () => {
        setLogOutDialogueOpen(false)
    }

    return (
        <Stack direction={'row'} spacing={1}>
            <Dialog open={logOutDialogueOpen}>
                <DialogContent>
                    <Stack
                        width={'100%'}
                        alignItems={'center'}
                        spacing={1}
                    >
                        {/*<AccessAlarmIcon*/}
                        {/*    sx={{width: 50, height: 50, color: (theme: Theme) => theme.palette.warning.main}}*/}
                        {/*/>*/}
                        {/*<img src={ASSETS.retard} style={{ width : 300 , objectFit : 'contain' , borderRadius : 150 , padding : '20px' }}/>*/}
                        <Lottie animationData={ASSETS_LOTTIE.session_expired}/>
                        <Typography style={{ width : '300px' }} fontWeight={'bold'}> expiratoin de la session </Typography>
                    </Stack>
                    <Typography
                        fontSize={30}
                        fontWeight={'bold'}
                        width={'100%'}
                        textAlign={'center'}> {30 - (refresh - tick) + " " + "s"}
                    </Typography>

                    <BorderLinearProgress value={(refresh - tick) / (30) * 100} variant={'determinate'}/>

                </DialogContent>
                <DialogActions>
                    <Stack direction={'row'} alignItems={'center'} width={'100%'} spacing={1} justifyContent={'center'}>
                        <Button variant={'contained'}
                                onClick={handleStay}
                        >stay</Button>
                        <Button onClick={handleQui} variant={'outlined'}> quit </Button>
                    </Stack>
                </DialogActions>
            </Dialog>
            <Typography>
                {
                    refresh
                }
            </Typography>

            <Typography>
                {
                    formatTime(Date.now())
                }
            </Typography>

            <Typography>
                {
                    formatTime(expirationTime ? expirationTime : Date.now())
                }
            </Typography>
        </Stack>

    )

}