import { Box, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FilesList from "./FilesList";
import FileUploadInput from "./FileUploadInput";
import { LoadingButton } from "@mui/lab";
import { Upload } from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../../redux/features/auth/userSlice";
import { useQuery } from "@apollo/client";
import {
  GetPdfFileDocument,
  OcrResultPdfDocument,
} from "../../../../_generated_gql_/graphql";
import { ConfidentialiteChip } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip";
import { orange } from "@mui/material/colors";
import useSnackBarNotifications from "../../../common/notifications/useSnackBarNotifications.tsx";
import { baseUrl_ } from "../../../../redux/RtkQueryApis/constants.ts";

const scale = 2;
export const UPLOAD_STATUS = {
  UPLOADING: "UPLOADING",
  NEW: "NEW",
  DONE_UPLOADING: "DONE_UPLOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  ALREADY_EXIST: "ALREADY_EXIST",
  NEED_EDITING: "NEED_EDITING",
};

export interface UplodComponentData {
  binaryStr: any;
  uri: string;
  originalFile: File;
  status: string;
  ocrResultEntityJpaRequest: OcrResultEntityJpaRequest | null;
}

interface TypeTexteReglementaireDto {
  id: string;
}

export interface OcrResultEntityJpaRequest {
  dateReference: Date | null;
  reference: string | null;
  originalFileName: string | null;
  typeTexteReglementaire: TypeTexteReglementaireDto | null;
  idConfidentialite: number | null;
}

interface PdfFileUploadResponse {
  originalFilename: string;
  signature: string;
  status: string;
}

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
      refetch({ id: uploadResponse?.[selectedItemIndex?.index]?.signature });
    }
  }, [selectedItemIndex]);

  useEffect(() => {
    return () => {
      if (!selectedItemIndex) setSelectedItemIndex({ index: 0, status: "NEW" });
    };
  }, [filesList]);

  async function uploadFiles(filesList: UplodComponentData[] | undefined) {
    if (!filesList) return;
    const formData = new FormData();
    for (let i = 0; i < filesList.length; i++) {
      formData.append("file", filesList[i].originalFile);
      formData.append(
        "ocrResultEntityJpaRequestsJson",
        JSON.stringify(filesList[i].ocrResultEntityJpaRequest),
      );
    }
    const response: AxiosResponse<PdfFileUploadResponse> = await axios.post(
      baseUrl_ + "/ocr",
      // `http://${process.env['REACT_APP_BACKEND_HOST']}:8090/SI_RH_DSN/ocr`,
      formData,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
          Authorization: token ? `Bearer ${token}` : " ",
        },
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100,
          );
          setUploadProgress(percentage);
        },
      },
    );
    return response.data;
  }

  const hundleUploadAll_ = () => {
    setGlobalUploadStatus(UPLOAD_STATUS.UPLOADING);
    uploadFiles(filesList)
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
