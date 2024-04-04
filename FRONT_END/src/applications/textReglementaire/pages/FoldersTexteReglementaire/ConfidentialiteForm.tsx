import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Stack} from "@mui/material";
import {Shield} from "@mui/icons-material";
import {
    AllConfidentialitesDocument,
    AllOcrResultConfidentialteNotDefinedDocument, OcrResultPdfDocument
} from "../../../../_generated_gql_/graphql";
import {useQuery} from "@apollo/client";
import React, {useEffect, useState} from "react";
import ConfidentialiteChoice from "./ConfidentialiteChoice";
import {Pagination} from "@mui/lab";


const ConfidentialiteForm = ({open, setOpen}: { open: boolean, setOpen: any }) => {
    const hanldeOk = () => {
        setOpen(false)
    }
    const hanldeAnnuler = () => {
        setOpen(false)
    }

    const [selctedFileId, setSelctedFileId] = useState<string>()
    const [selectedFileIndex , setSelectedFileIndex] = useState<number>()

    const {
        data: confidentialites,
        error: confidentialiteError,
        loading: confidentialiteLoading
    } = useQuery(AllConfidentialitesDocument)

    const {
        data: ocrResults,
        error: ocrResultsError,
        loading: ocrResultsLoading,
        refetch
    } = useQuery(AllOcrResultConfidentialteNotDefinedDocument)


    const {
        data: pdfFile,
        error: pdfFileError,
        loading: pdfFileLoading
    } = useQuery(OcrResultPdfDocument, {
        variables: {
            id: selctedFileId
        }
    });

    useEffect(() => {
        setSelctedFileId(ocrResults?.allOcrResultConfidentialteNotDefined?.length > 0 ? ocrResults?.allOcrResultConfidentialteNotDefined?.at(0)?.id : '-1')
        setSelectedFileIndex(ocrResults?.allOcrResultConfidentialteNotDefined?.length > 0 ? 1 : null)
    } , [ocrResults])

    useEffect(() => {
        refetch()
    } , [])

    function handlePageIndexChange(e: React.ChangeEvent<unknown>, page: number) {
        setSelectedFileIndex(page)
        setSelctedFileId(ocrResults?.allOcrResultConfidentialteNotDefined?.at(page - 1)?.id)
    }

    const navigateNext = () => {
        // todo check for end of list
        // @ts-ignore
        handlePageIndexChange(null , selectedFileIndex + 1)
    }

    const ConfidentialiteForm_ = () => {
        return (
            <Stack direction={'column'} width={'100%'} height={'100%'} padding={1}>
                <Stack
                    direction={'row'}
                    height={'100%'}
                >
                    <Stack flex={1}>
                        {
                            pdfFile && <iframe src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf} width="100%"
                                               height="100%"></iframe>
                        }
                    </Stack>
                    <Stack padding={2} height={'100%'} justifyContent={'center'}>
                        <ConfidentialiteChoice navigateNext={() => navigateNext()} ocrResultId={selctedFileId}/>
                    </Stack>
                </Stack>
                <Stack>
                    <Pagination
                        size={'large'}
                        sx={{padding: 1}}
                        page={selectedFileIndex ? selectedFileIndex : 0}
                        count={ocrResults?.allOcrResultConfidentialteNotDefined?.length}
                        variant="outlined"
                        color="secondary"
                        onChange={(e, page) => handlePageIndexChange(e, page)}
                    />
                </Stack>

            </Stack>
        )
    }


    // todo build a generic dialog for all the applciation
    // that supports multiple variants

    // todo build a generic photo avatar with diffrent variants
    // to support multiple usecases

    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth={'xl'}
            sx={{
                '& .MuiPaper-root': {
                    height: 'calc(100vh)',
                },
            }}
        >
            <DialogTitle sx={{bgcolor: '#ff9c9c'}} id="alert-dialog-title">
                <Stack direction={'row'} alignItems={'center'}>
                    <Shield sx={{marginRight: 1, width: 35, height: 35, color: '#ff0000'}}/>
                    Confidentialite
                </Stack>
            </DialogTitle>
            <DialogContent>
                <ConfidentialiteForm_/>
            </DialogContent>
            <DialogActions>
                <Button onClick={hanldeAnnuler} variant={'outlined'}>ANNULER</Button>
                <Button onClick={hanldeOk} variant={'contained'}>OK</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfidentialiteForm;