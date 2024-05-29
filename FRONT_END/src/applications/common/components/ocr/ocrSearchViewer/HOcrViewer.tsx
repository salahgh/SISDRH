import React from "react";
import { LinearProgress, Paper, Stack } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  selectElasticSearchInput,
  selectSelectedFileId,
  selectSelectedPageIndex,
  setSelectedPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import {
  GetPdfFileDocument,
  OcrResultPdfDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { PdfToolBar } from "../../../../textReglementaire/PdfToolBar.tsx";
import Pagination from "@mui/material/Pagination";
import { NetWorkErrorComponent } from "../../errors/NetWorkErrorComponent.tsx";
import { selectSelectedPdfViewer } from "../../../../../redux/features/folderAndFiles/foldersSlice.ts";
import PdfViewerToggleButton from "../../../../textReglementaire/pages/PdfFile/PdfViewerToggleButton.tsx";
import { PanAndZoomViewer } from "../../../../textReglementaire/pages/ocr/searchPage/PanAndZoomViewer.tsx";
import { useParams } from "react-router-dom";
import { OcrTextViewer } from "../../../../textReglementaire/pages/ocrTextViewer/OcrTextViewer.tsx";

const HOcrViewer = ({ showGoToPdf, showDeletePdfFile }) => {
  const selectedFileId = useParams().fildId;
  const selectedFileId_ = useSelector(selectSelectedFileId);
  const pageIndex = useSelector(selectSelectedPageIndex);
  const dispatch = useDispatch();

  function handlePageIndexChange(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(setSelectedPageIndex(page));
  }

  const s = selectedFileId ? selectedFileId : selectedFileId_;

  const {
    data: ocrResultJpa,
    error: ocrResultJpaError,
    loading: ocrResultJpaLoading,
  } = useQuery(GetPdfFileDocument, {
    variables: {
      fileSignatue: s ? s : "-1",
    },
  });

  const numberOfPapers = ocrResultJpa?.ocrResultByid?.numberOfPapers
    ? ocrResultJpa?.ocrResultByid?.numberOfPapers
    : 1;

  // todo implment the zoom to fit functionlity

  const { data: pdfFile, loading: pdfFileLoading } = useQuery(
    OcrResultPdfDocument,
    {
      variables: {
        id: s,
      },
    },
  );

  const selectedViewer = useSelector(selectSelectedPdfViewer);
  const isOcrSearch =
    useSelector(selectElasticSearchInput).searchToken?.length > 0;

  return (
    <Stack
      height={"100%"}
      width={"100%"}
      spacing={1}
      style={{ background: "#e1e7ee" }}
    >
      <Paper>
        <PdfToolBar
          pdfToolBar={
            <PdfViewerToggleButton
              viewers={isOcrSearch ? ["IMAGE", "PDF", "TEXT"] : ["PDF", "TEXT"]}
            ></PdfViewerToggleButton>
          }
          showGoToPdf={showGoToPdf}
          showDeletePdfFile={showDeletePdfFile}
          ocrResultJpa={ocrResultJpa}
        ></PdfToolBar>
      </Paper>

      {selectedViewer === "PDF" && !pdfFileLoading && (
        <iframe
          src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf}
          width="100%"
          height="100%"
        ></iframe>
      )}
      {selectedViewer === "PDF" && pdfFileLoading && <LinearProgress />}
      {selectedViewer == "IMAGE" && <PanAndZoomViewer></PanAndZoomViewer>}
      {selectedViewer == "TEXT" && <OcrTextViewer></OcrTextViewer>}
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {selectedViewer !== "PDF" && (
          <Pagination
            sx={{
              visibility: !ocrResultJpaLoading ? "visible" : "hidden",
              padding: 1,
            }}
            size={"large"}
            page={pageIndex as unknown as number}
            count={numberOfPapers ? numberOfPapers : 1}
            variant="outlined"
            color="secondary"
            onChange={(e, page) => handlePageIndexChange(e, page)}
          />
        )}
        {ocrResultJpaError && <NetWorkErrorComponent />}
      </Stack>
    </Stack>
  );
};

export default HOcrViewer;
