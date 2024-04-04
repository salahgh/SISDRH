import { useSelector } from "react-redux";
import { selectselectedPdfViewer } from "../../../../redux/features/folderAndFiles/foldersSlice";
import { useQuery } from "@apollo/client";
import {
  GetPdfFileDocument,
  OcrResultPdfDocument,
} from "../../../../_generated_gql_/graphql";
import { useEffect } from "react";
import { LinearProgress, Stack } from "@mui/material";
import PdfViewerText from "./PdfViewerText";
import { PdfToolBar } from "../../PdfToolBar.tsx";
import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import { selectselectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";

const PdfFile = () => {
  const selctedFileId = useSelector(selectselectedFileId);
  const selectedPdfViewer = useSelector(selectselectedPdfViewer);
  const { data, loading, error, refetch } = useQuery(GetPdfFileDocument, {
    variables: { fileSignatue: selctedFileId },
  });

  const {
    data: ocrResultJpa,
    error: ocrResultJpaError,
    loading: ocrResultJpaLoading,
  } = useQuery(GetPdfFileDocument, {
    variables: {
      fileSignatue: selctedFileId ? selctedFileId : "-1",
    },
  });

  const {
    data: pdfFile,
    error: pdfFileError,
    loading: pdfFileLoading,
  } = useQuery(OcrResultPdfDocument, {
    variables: {
      id: selctedFileId,
    },
  });

  useEffect(() => {
    refetch();
  }, [selctedFileId, refetch]);

  return (
    <div
      style={{
        // width: "calc(100vw - 100px)",
        height: "calc(100vh - 65px)",
      }}
      className={"p-1 overflow-clip bg-amber-600"}
    >
      <HOcrViewer />
    </div>
  );
};

export default PdfFile;
