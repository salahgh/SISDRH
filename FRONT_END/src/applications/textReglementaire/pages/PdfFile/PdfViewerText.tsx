import {
  FindByidApiArg,
  OcrResultEntityElastic2,
  useFindByidQuery,
} from "../../../../redux/mainApi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedFileId,
  selectselectedPageIndex,
  selectselectedSinglePdfViewerFileId,
  setSelectedPageIndex,
} from "../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { CircularProgress, Stack } from "@mui/material";
import { Pagination } from "@mui/lab";
import { ErrorOutline } from "@mui/icons-material";
import React from "react";
import { useQuery } from "@apollo/client";
import { FindOcrResultEntityESbyIdDocument } from "../../../../_generated_gql_/graphql.ts";

const PdfViewerText = () => {
  const selctedFileId: string = useSelector(
    selectselectedSinglePdfViewerFileId,
  );
  const selectedPageIndex: number = useSelector(selectselectedPageIndex);
  const dispatch = useDispatch();

  const {
    data: ocrResultEntityES,
    loading,
    error,
  } = useQuery(FindOcrResultEntityESbyIdDocument, {
    variables: { fildId: selctedFileId },
  });

  function handlePageIndexChange(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(setSelectedPageIndex(page));
  }

  const RenderPage = ({ page }) => {
    return (
      <div>
        {page.paragraphs?.map((p) => {
          return <RenderParagraph paragraph={p}></RenderParagraph>;
        })}
      </div>
    );
  };

  const RenderParagraph = ({ paragraph }) => {
    return (
      <div>
        {paragraph.lines.map((line) => {
          return <div>{line.text}</div>;
        })}
      </div>
    );
  };

  // todo zoomIn zoomOut functionality

  return (
    <Stack
      direction={"column"}
      height={"calc(100% - 100px)"}
      spacing={1}
      padding={1}
    >
      {/*<RenderPage page={data?.pages[selectedPageIndex]}/>*/}
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {ocrResultEntityES?.findOcrResultEntityESbyId?.numberOfPapers && (
          <Pagination
            size={"large"}
            sx={{ padding: 1 }}
            page={selectedPageIndex}
            count={
              ocrResultEntityES?.findOcrResultEntityESbyId?.numberOfPapers
                ? ocrResultEntityES?.findOcrResultEntityESbyId?.numberOfPapers
                : 1
            }
            variant="outlined"
            color="secondary"
            onChange={(e, page) => handlePageIndexChange(e, page)}
          />
        )}
        {loading && <CircularProgress />}
        {error && <ErrorOutline fontSize={"large"} />}
      </Stack>
    </Stack>
  );
};

export default PdfViewerText;
