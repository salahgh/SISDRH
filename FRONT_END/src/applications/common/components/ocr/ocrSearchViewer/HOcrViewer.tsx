import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import React, { useRef } from "react";
import { LinearProgress, Paper, Stack } from "@mui/material";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  selectselectedFileId,
  selectselectedLine,
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
import { PanAndZoomViewer } from "../../../../textReglementaire/pages/ocr/searchPage/PanAndZoomViewer.tsx";

const HOcrViewer = () => {
  const selctedFileId = useSelector(selectselectedFileId);
  const pageIndex = useSelector(selectselectedPageIndex);
  const dispatch = useDispatch();

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);
  const scale_ = 1;

  function handlePageIndexChange(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(setselectedPageIndex(page));
  }

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    }
  };

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
  const { data: fovoriteFolder } = useQuery(GetFovoriteFolderDocument);
  const { handleShowGraphQlErrorSnackBar, handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const isFavorite: boolean =
    ocrResultJpa?.ocrResultByid?.folders?.filter(
      (item) => item?.description === "FAVORITE"
    ).length !== 0;
  //
  // const isSelectedLineInTheSelectedPage =
  //   pageIndex == selectedLine?.content.id_line.split("_")[1];

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
    data: pdfFile,
    error: pdfFileError,
    loading: pdfFileLoading
  } = useQuery(OcrResultPdfDocument, {
    variables: {
      id: selctedFileId
    }
  });

  const selectedViewer = useSelector(selectselectedPdfViewer);

  return (
    <Stack
      height={"100%"}
      width={"100%"}
      spacing={1}
      style={{ background: "#d8dcdb" }}
    >
      <Paper>
        <PdfToolBar showGoToPdf={true} ocrResultJpa={ocrResultJpa}></PdfToolBar>
      </Paper>
      <LinearProgress sx={{ visibility: ocrResultJpaLoading ? "visible" : "hidden" }} />

      {selectedViewer === "PDF" && (
        <iframe
          src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf}
          width="100%"
          height="100%"
        ></iframe>
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
