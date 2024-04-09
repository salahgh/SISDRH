import { Box, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FilesList from "../filesList/FilesList.tsx";
import FileUploadInput from "../fileUploadInput/FileUploadInput.tsx";
import { LoadingButton } from "@mui/lab";
import { Upload } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../../redux/features/auth/userSlice.ts";
import { useQuery } from "@apollo/client";
import {
  GetPdfFileDocument,
  OcrResultPdfDocument,
} from "../../../../../_generated_gql_/graphql.ts";
import { ConfidentialiteChip } from "../../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import { orange } from "@mui/material/colors";
import useSnackBarNotifications from "../../../../common/notifications/useSnackBarNotifications.tsx";
import { UPLOAD_STATUS } from "./constants.ts";
import { UplodComponentData } from "./types.ts";
import { PdfFileUploadResponse } from "../../../../../redux/mainApi.ts";
import { DiaglogError } from "../EditFileNameForm.tsx";
import { uploadFiles } from "./uploadFiles.ts";

// const scale = 2;


const UploadMainPage = () => {
  const [filesList, setFilesList] = useState<UplodComponentData[]>();
  const [globalUploadStatus, setGlobalUploadStatus] = useState<string>(
    UPLOAD_STATUS.NEW,
  );
  const [uploadProgress, setUploadProgress] = useState<number>(-1);
  const [uploadResponse, setUploadResponse] = useState<PdfFileUploadResponse>();
  const [selectedItemIndex, setSelectedItemIndex] = useState<{
    index: number;
    status: string;
  }>();
  const { handleShowErrorSnackBar } = useSnackBarNotifications();
  const { token } = useSelector(selectLoggedInUser);

  const hundleSelection = (index: number, status: string) => {
    setSelectedItemIndex({
      index: index,
      status: status,
    });
  };

  const { data: pdfFile, refetch } = useQuery(OcrResultPdfDocument, {
    variables: { id: uploadResponse?.[selectedItemIndex?.index]?.signature },
  });

  const { data: pdfOcrResult } = useQuery(GetPdfFileDocument, {
    variables: {
      fileSignatue: uploadResponse?.[selectedItemIndex?.index].signature,
    },
  });

  useEffect(() => {
    if (selectedItemIndex) {
      refetch({ id: uploadResponse?.[selectedItemIndex?.index]?.signature }).then(() => null);
    }
  }, [selectedItemIndex , refetch]);


  useEffect(() => {
    return () => {
      if (!selectedItemIndex) setSelectedItemIndex({ index: 0, status: "NEW" });
    };
  }, [filesList , setSelectedItemIndex]);



  const hundleUploadAll_ = () => {
    setGlobalUploadStatus(UPLOAD_STATUS.UPLOADING);
    uploadFiles(filesList,token , setUploadProgress)
      .then((response) => {
        setUploadResponse(response);
        setGlobalUploadStatus(UPLOAD_STATUS.DONE_UPLOADING);
      })
      .catch((error) => {
        const diaglogError: DiaglogError = {
          status: error.response.status,
          errorResponse: error.response.data,
        };
        handleShowErrorSnackBar(diaglogError);
        setGlobalUploadStatus(UPLOAD_STATUS.NEW);
      });
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        width: "calc(100% - 0px)",
        height: "calc(100vh - 64px)",
      }}
      spacing={1}
      padding={1}
    >
      <Stack
        spacing={1}
        direction={"column"}
        width={"30%"}
        height={"100%"}
        alignItems={"center"}
        style={{
          minWidth: "500",
        }}
      >
        <Paper sx={{ width: "100%", height: "100%" }}>
          <Stack spacing={1} padding={1} height={"100%"}>
            {
              <FileUploadInput
                setUploadResponse={setUploadResponse}
                setSelectedIndex={setSelectedItemIndex}
                variant={
                  filesList?.length === 0 || !filesList ? "big" : "small"
                }
                setFilesList={setFilesList}
                setGlobalUploadStatus={setGlobalUploadStatus}
              />
            }

            {filesList?.length > 0 ? (
              <>
                <LoadingButton
                  fullWidth={true}
                  size={"large"}
                  onClick={hundleUploadAll_}
                  variant={"contained"}
                  loadingPosition="start"
                  startIcon={<Upload />}
                  loading={globalUploadStatus === UPLOAD_STATUS.UPLOADING}
                  disabled={filesList?.some(
                    (item) => item.status === UPLOAD_STATUS.NEED_EDITING,
                  )}
                >
                  <Typography fontWeight={50} variant={"h5"}>
                    تحميل
                  </Typography>
                </LoadingButton>
                {globalUploadStatus === UPLOAD_STATUS.UPLOADING && (
                  <LinearProgress
                    variant={"determinate"}
                    sx={{ width: "100%" }}
                    value={uploadProgress}
                  ></LinearProgress>
                )}
                {globalUploadStatus === UPLOAD_STATUS.UPLOADING &&
                  uploadProgress === 1 && (
                    <LinearProgress
                      variant={"determinate"}
                      sx={{ width: "100%", bgcolor: orange["500"] }}
                      value={uploadProgress}
                    ></LinearProgress>
                  )}
                <Box
                  sx={{ width: "100%" }}
                  style={{
                    overflow: "auto",
                  }}
                >
                  <FilesList
                    uploadResponse={uploadResponse}
                    setFilesList={setFilesList}
                    filesList={filesList}
                    selectedItem={
                      selectedItemIndex ? selectedItemIndex?.index : 0
                    }
                    setSelectedItemIndex={setSelectedItemIndex}
                    hundleSelection={hundleSelection}
                    glocalUploadStatus={globalUploadStatus}
                  />
                </Box>
              </>
            ) : null}
          </Stack>
        </Paper>
      </Stack>
      {filesList?.filter((file, index) => index == selectedItemIndex?.index)[0]
        ?.uri && (
        <Stack flex={1} width={"50%"}>
          <iframe
            src={
              filesList.filter(
                (file, index) => index == selectedItemIndex?.index,
              )[0]?.uri
            }
            width="100%"
            height="100%"
          ></iframe>
        </Stack>
      )}
      {selectedItemIndex?.status === UPLOAD_STATUS.ALREADY_EXIST &&
        pdfFile?.ocrResultPdf && (
          <Stack flex={1} width={"50%"}>
            <iframe
              src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf}
              width="100%"
              height="100%"
            ></iframe>
            <div>
              <Typography>
                {" "}
                {pdfOcrResult?.ocrResultByid?.originalFileName}{" "}
              </Typography>
              <ConfidentialiteChip
                confidentialite={pdfOcrResult?.ocrResultByid?.confidentialite}
              />
              <Typography>
                {" "}
                {
                  pdfOcrResult?.ocrResultByid?.typeTexteReglementaire
                    ?.libTypeTexteFr
                }{" "}
              </Typography>
              {/*<Typography> {pdfOcrResult?.ocrResultByid?.} </Typography>*/}
            </div>
          </Stack>
        )}
    </Stack>
  );
};

export default UploadMainPage;
