import {Grid, IconButton, Stack, Typography} from "@mui/material";
import {ConfidentialiteIcon} from "../../textReglementaire/pages/FoldersTexteReglementaire/pdfFiles/ConfidentialiteIcon";
import {ConfidentialiteText} from "../../textReglementaire/pages/FoldersTexteReglementaire/pdfFiles/ConfidentialiteText";
import {useQuery} from "@apollo/client";
import {GetHablitationsDocument, GetLoggedInUserDocument} from "../../../_generated_gql_/graphql";
import {useEffect, useState} from "react";
import * as React from "react";
import HablitationChoiceDialog from "./HablitationChoiceDialog";
import {ConfidentialiteChip} from "../../textReglementaire/pages/FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip";

export function GetStackEditable({username}: { username?: string | null }) {

    const {
        data,
        loading,
        error,
        refetch
    } = useQuery(GetLoggedInUserDocument, {
        variables: {
            userName: username
        }
    })

    // useEffect(
    //     () => {
    //         refetch().then(() => null);
    //     } , []
    // )

    const [menuOpened, setMenuOpened] = useState<boolean>(false)

    const {
        data: habilitations,
        loading: habilitationsLoading,
        error: habilitationError,
        refetch: HabilitationsRefetch
    } = useQuery(GetHablitationsDocument)

    const personnel = data?.user?.personnel

    return <Stack
        spacing={1}
        padding={1}
        justifyItems={'center'}
        alignItems={'center'}
    >
        <HablitationChoiceDialog
            open={menuOpened}
            setOpen={setMenuOpened}
            userName={personnel?.matricule}
        ></HablitationChoiceDialog>

        <Typography variant={'h6'} fontWeight={'bold'}>
            {
                personnel?.matricule
            }
        </Typography>
        <Typography variant={'h6'} fontWeight={'bold'}>
            {
               personnel?.noma + ' ' + personnel?.pnoma
            }
        </Typography>
        <IconButton onClick={() => setMenuOpened(true)} sx={{width: 100, height: 100}}>
            <Typography variant={'h1'} fontWeight={'bold'}>
                {
                    data?.user?.habilitation?.libHabilitationFr
                }
            </Typography>
        </IconButton>

        <Stack
              alignItems={'center'}
              spacing={1}
              padding={1}
        >
            {
                data?.user?.habilitation?.confidentialites?.map(
                    (item, index) => {
                        return (
                                    <ConfidentialiteChip
                                        confidentialite={item}
                                    />
                        )
                    }
                )
            }
        </Stack>
    </Stack>;
}