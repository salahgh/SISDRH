import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import React, { useRef } from "react";
import { LinearProgress, Paper, Stack } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  selectelasticSearchInput,
  selectselectedFileId,
  selectselectedPageIndex,
  setselectedPageIndex
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import {
  GetFovoriteFolderDocument,
  GetPdfFileDocument,
  OcrResultPdfDocument
} from "../../../../../_generated_gql_/graphql.ts";
import useSnackBarNotifications from "../../../notifications/useSnackBarNotifications.tsx";
import { PdfToolBar } from "../../../../textReglementaire/PdfToolBar.tsx";
import Pagination from "@mui/material/Pagination";
import { NetWorkErrorComponent } from "../../errors/NetWorkErrorComponent.tsx";
import { selectselectedPdfViewer } from "../../../../../redux/features/folderAndFiles/foldersSlice.ts";
import PdfViewerToggleButton from "../../../../textReglementaire/pages/PdfFile/PdfViewerToggleButton.tsx";
import { PanAndZoomViewer } from "../../../../textReglementaire/pages/ocr/searchPage/PanAndZoomViewer.tsx";

const HOcrViewer = () => {
  const selctedFileId = useSelector(selectselectedFileId);
  const pageIndex = useSelector(selectselectedPageIndex);
  const dispatch = useDispatch();

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  function handlePageIndexChange(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(setselectedPageIndex(page));
  }

  const {
    data: ocrResultJpa,
    error: ocrResultJpaError,
    loading: ocrResultJpaLoading
  } = useQuery(GetPdfFileDocument, {
    variables: {
      fileSignatue: selctedFileId ? selctedFileId : "-1"
    }
  });

  const numberOfPapers = ocrResultJpa?.ocrResultByid?.numberOfPapers
    ? ocrResultJpa?.ocrResultByid?.numberOfPapers
    : 1;


  // todo implment the zoom to fit functionlity

  // useEffect(() => {
  //   refetchImage();
  //   zoomToImage();
  // }, [
  //   pageIndex,
  //   refetchImage,
  //   transformComponentRef,
  //   imageBase64,
  //   selectedLine,
  // ]);

  const {
    data: pdfFile,,
    loading: pdfFileLoading
  } = useQuery(OcrResultPdfDocument, {
    variables: {
      id: selctedFileId
    }
  });

  const selectedViewer = useSelector(selectselectedPdfViewer);
  const isOcrSearch = useSelector(selectelasticSearchInput).searchToken?.length > 0;

  return (
    <Stack
      height={"100%"}
      width={"100%"}
      spacing={1}
      style={{ background: "#e1e7ee" }}
    >
      <Paper>
        <PdfToolBar
          pdfToolBar={<PdfViewerToggleButton
            viewers={isOcrSearch ? ["IMAGE", "PDF"] : ["PDF"]}></PdfViewerToggleButton>}
          showGoToPdf={true} ocrResultJpa={ocrResultJpa}></PdfToolBar>
      </Paper>
      <LinearProgress sx={{ visibility: ocrResultJpaLoading ? "visible" : "hidden" }} />

      {selectedViewer === "PDF" && (
        <iframe
          src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf}
          width="100%"
          height="100%"
        >

        </iframe>
      )}
      {selectedViewer == "IMAGE" && <PanAndZoomViewer></PanAndZoomViewer>}
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {selectedViewer !== "PDF" && <Pagination
          sx={{ visibility: !ocrResultJpaLoading ? "visible" : "hidden", padding: 1 }}
          size={"large"}
          page={pageIndex}
          count={numberOfPapers ? numberOfPapers : 1}
          variant="outlined"
          color="secondary"
          onChange={(e, page) => handlePageIndexChange(e, page)}
        />}
        {ocrResultJpaError && <NetWorkErrorComponent />}
      </Stack>
    </Stack>
  );
};

export default HOcrViewer;
