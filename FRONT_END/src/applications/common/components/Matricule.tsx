import {Stack, Typography} from "@mui/material";
import {CSSProperties, useState} from "react";
import useSnackBarNotifications from "../notifications/useSnackBarNotifications";
import {TOOLS} from "../../../redux/RtkQueryApis/constants";
import {highlightSearchTokenWithSpan} from "../utilities/tools";
import copy from 'copy-to-clipboard';

export const Matricule = ({
                              matricule,
                              highlight,
                              typographyStyle
                          }: {
    matricule: string | null | undefined,
    highlight?: string,
    typographyStyle?: CSSProperties
}) => {

    const {handleShowCopied} = useSnackBarNotifications()
    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            handleShowCopied(text)
        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };

    const handleCopyToClilpBoard = (p: string) => {
        copyToClipboard(p)
    }

    return (
        <Stack
            direction={'row'}
        >
            <Typography {...typographyStyle}
                onDoubleClick={() => handleCopyToClilpBoard(matricule)}
            >
                {
                    <span
                        dangerouslySetInnerHTML={highlightSearchTokenWithSpan(TOOLS.formatMatricule(matricule), highlight)}/>
                }
            </Typography>
        </Stack>
    )
}
