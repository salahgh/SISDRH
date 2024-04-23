import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import { CircularProgress, LinearProgress } from "@mui/material";
import { useLazyQuery, useQuery } from "@apollo/client";
import { OcrResultImagePreparedDocument } from "../../../../../_generated_gql_/graphql.ts";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedFileId,
  selectselectedLine,
  selectselectedPageIndex,
  setSelectedPageIndex,
} from "../../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useEffect, useRef } from "react";

export const PanAndZoomViewer = () => {
  const selectedFileId = useSelector(selectSelectedFileId);
  const pageIndex = useSelector(selectselectedPageIndex) as unknown as number;
  const selectedLine = useSelector(selectselectedLine);
  const dispatch = useDispatch();

  const [
    fetchImage,
    { data: imageBase64, error: imageError, loading: imageLoading },
  ] = useLazyQuery(OcrResultImagePreparedDocument, {
    variables: {
      id: selectedFileId ? selectedFileId : "-1",
      pageIndex: pageIndex ? pageIndex - 1 : 0,
      size: -1,
    },
  });

  const transformComponentRef = useRef<ReactZoomPanPinchRef | null>(null);

  const zoomToImage = () => {
    if (transformComponentRef.current) {
      const { zoomToElement } = transformComponentRef.current;
      zoomToElement("imgExample");
    } else {
      console.log("imgExample");
    }
  };

  useEffect(() => {
    fetchImage().then(() => {
      setTimeout(() => zoomToImage(), 50);
    });
  }, [pageIndex, selectedFileId]);

  useEffect(() => {
    zoomToImage();
  }, [selectedLine]);

  useEffect(() => {
    dispatch(setSelectedPageIndex(1));
  }, [selectedFileId]);

  const scale_ = 2.35;

  return (
    <TransformWrapper ref={transformComponentRef}>
      {() => {
        return (
          <TransformComponent
            wrapperStyle={{
              width: "100%",
              height: "100%",
              padding: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {pageIndex != null && (
              <>
                {imageLoading && <LinearProgress></LinearProgress>}
                {imageError && <div> error while loaidng the image </div>}
                {imageBase64 && !imageLoading && (
                  <div className={"relative"}>
                    <img
                      src={
                        "data:image/png;base64," +
                        imageBase64.ocrResultImagePrepared
                      }
                      alt="Element"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        // margin: '0 auto',
                      }}
                    />
                    {imageBase64 && !imageLoading && selectedLine && (
                      <div
                        id="imgExample"
                        style={{
                          backgroundColor: "rgba(255,228,32,0.29)",
                          position: "absolute",
                          top: selectedLine.content.bbox.y1 / scale_, // Adjust the top position of the overlay
                          left: selectedLine.content.bbox.x1 / scale_, // Adjust the left position of the overlay
                          width:
                            (selectedLine.content.bbox.x2 -
                              selectedLine.content.bbox.x1) /
                            scale_,
                          height:
                            (selectedLine.content.bbox.y2 -
                              selectedLine.content.bbox.y1) /
                            scale_,
                          border: "1px solid yellow", // Yellow bounding box
                          pointerEvents: "none", // Disable interaction with the overlay
                        }}
                      ></div>
                    )}
                    <div
                      style={{ top: 1700, left: 0, width: 50, height: 50 }}
                      className={"bg-amber-400 absolute"}
                    ></div>
                  </div>
                )}
              </>
            )}
          </TransformComponent>
        );
      }}
    </TransformWrapper>
  );
};
