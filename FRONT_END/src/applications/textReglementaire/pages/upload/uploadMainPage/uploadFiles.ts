import { UplodComponentData } from "./types.ts";
import axios, { AxiosResponse } from "axios";
import { PdfFileUploadResponse } from "../../../../../redux/mainApi.ts";
import { baseUrl_ } from "../../../../../redux/RtkQueryApis/constants.ts";
import { Dispatch, SetStateAction } from "react";

export async function uploadFiles(filesList: UplodComponentData[] | undefined , token : string , setUploadProgress : Dispatch<SetStateAction<number>>) {
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

