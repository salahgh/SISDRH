import {
  OcrResultImagePreparedDocument,
  OcrResultImagePreparedQuery,
} from "../../../../../_generated_gql_/graphql";
import { useQuery } from "@apollo/client";
import { Card, CardActionArea, CircularProgress, Stack } from "@mui/material";
import React from "react";
import {
  selectSelectedSinglePdfViewerPageIndex,
  setSelectedFileId,
  setSelectedSinglePdfViewerFileId,
  setSelectedSinglePdfViewerPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice";
import { getLink, routs } from "../../../../../routing/routs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function PagePreview(props: {
  fileId: string;
  pageIndex: number;
  width: string;
  shouldNavigate: boolean;
}) {
  const { fileId, pageIndex, width, shouldNavigate } = props;
  const selectedPageIndex = useSelector(selectSelectedSinglePdfViewerPageIndex);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: imageBase64,
    error: imageError,
    loading: imageLoading,
  }: { data: OcrResultImagePreparedQuery } = useQuery(
    OcrResultImagePreparedDocument,
    {
      variables: {
        id: fileId,
        pageIndex: pageIndex,
        size: 1000,
      },
    },
  );

  function handleShowPdf() {
    dispatch(setSelectedFileId(fileId));
    if (shouldNavigate) navigate(getLink(routs.PdfFilePage));
  }

  const aspectRation = 4 / 3;

  return (
    <>
      <Stack
        sx={{
          width: width,
          height: width * aspectRation,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageLoading && <CircularProgress />}
        {imageError && <div> error while loading the image </div>}
        {imageBase64 && !imageLoading && (
          <>
            <Card
              sx={{
                bgcolor:
                  selectedPageIndex - 1 === pageIndex ? "#707070" : "#ffffff",
              }}
            >
              <CardActionArea
                sx={{ padding: 0.3 }}
                onClick={() => handleShowPdf()}
              >
                <img
                  src={
                    "data:image/png;base64," +
                    imageBase64.ocrResultImagePrepared
                  }
                  alt="Element"
                  style={{
                    width: width,
                    height: width * aspectRation,
                    display: "block",
                  }}
                />
              </CardActionArea>
            </Card>
          </>
        )}
      </Stack>
    </>
  );
}
