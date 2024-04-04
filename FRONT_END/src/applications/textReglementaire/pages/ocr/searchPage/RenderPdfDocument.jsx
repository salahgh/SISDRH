import {Box, List, ListItemButton, ListItemText, Stack} from "@mui/material";
import {Pagination} from '@mui/lab'
import {
    selectSelectedInDocumentLineid,
    selectSelectedInDocumentPage,
    selectSelectedResultLine, setSelectedInDocumentLineid,
    setSelectedInDocumentPageIndex,
    setSelectedResultLine
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import {useDispatch, useSelector} from "react-redux";
import HOcrViewer from "../../../../../components/ocr/ocrViewer/HOcrViewer";
import {useConvertPDFBase64ToIMAGEQuery} from "../../../../../redux/RtkQueryApis/PDF/pdf";


const RenderPdfDocument = (props) => {

    const dispach = useDispatch()

    const {data} = props;
    const {selctedFileId, selectedPageIndex} = useSelector(selectSelectedResultLine);
    const selectedInDocumentPageIndex = useSelector(selectSelectedInDocumentPage)
    const selectedInDocumentLine = useSelector(selectSelectedInDocumentLineid)
    const document = data?.filter((doc) => doc._id === selctedFileId)[0];
    const linesResult = document?.inner_hits["pages.paragraphs.lines"].hits.hits.filter(
        (line) => line._source.id.split('_')[1] == selectedInDocumentPageIndex
    );
    const lineResult = linesResult?.filter((line) => line._source.id === selectedInDocumentLine)
    const RenderedPage = document?._source.pages[selectedInDocumentPageIndex - 1];
    function hundlePageIndexChage(e, page) {
        dispach(setSelectedInDocumentPageIndex(page))
    }

    return (
        <Stack direction={'column'}>
            <Stack direction={'row'}>
                <Pagination
                    page={selectedInDocumentPageIndex}
                    count={document?._source.pages.length}
                    variant="outlined"
                    color="secondary"
                    onChange={(e, page) => hundlePageIndexChage(e, page)}
                />
            </Stack>

            <Stack direction={'row'}>
                <Stack>
                    <List>
                        {linesResult?.length === 0 && <Box style={{width: 150}}/>}
                        {
                            linesResult?.map((line) => (
                                <ListItemButton>
                                    <ListItemButton
                                        selected={line._source.id === selectedInDocumentLine}
                                        onClick={
                                            () => dispach(setSelectedInDocumentLineid(line._source.id))
                                        }
                                    >
                                        <ListItemText
                                            primary={
                                                'page : ' + line._source.id.split('_')[1] + ' ligne ' + line._source.id.split('_')[2]}
                                        />
                                    </ListItemButton>
                                </ListItemButton>
                            ))
                        }
                    </List>
                </Stack>
                <Stack>
                    {
                        RenderedPage &&
                        <HOcrViewer
                            data={RenderedPage}
                            selectedLine={lineResult}
                            thisPageLines={linesResult}
                            image={"data:image/jpeg;base64," + RenderedPage?.pdfBase64}
                        />
                    }
                </Stack>
            </Stack>

        </Stack>
    );
}

export default RenderPdfDocument;