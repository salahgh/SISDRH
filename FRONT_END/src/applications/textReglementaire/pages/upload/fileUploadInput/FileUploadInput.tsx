import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";
import { useQuery } from "@apollo/client";
import { AllTypeTexteReglementairesDocument } from "../../../../../_generated_gql_/graphql.ts";
import { UPLOAD_STATUS } from "../uploadMainPage/constants.ts";
import { UplodComponentData } from "../uploadMainPage/types.ts";
import { getOcrResultEntityJpaRequestFromFileName } from "./tools.ts";
import { PdfFileUploadResponse } from "../../../../../redux/mainApi.ts";

export default function FileUploadInput({
  setFilesList,
  setGlobalUploadStatus,
  variant,
  setSelectedIndex,
  setUploadResponse,
}: {
  setFilesList: Dispatch<SetStateAction<UplodComponentData[] | undefined>>;
  setGlobalUploadStatus: Dispatch<SetStateAction<string>>;
  variant: "big" | "small";
  setSelectedIndex: Dispatch<SetStateAction<{ index: number; status: string }>>;
  setUploadResponse: Dispatch<SetStateAction<PdfFileUploadResponse>>;
}) {
  const { data } = useQuery(AllTypeTexteReglementairesDocument);
  const isBig = variant === "big";

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFilesList([]);
    setSelectedIndex(null);
    setUploadResponse(null);
    const array = Array.from(e.target.files);
    setFilesList(() => {
      return array.map((item) => {
        const uploadComponentData: UplodComponentData = {
          originalFile: item,
          uri: URL.createObjectURL(item),
          status:
            getOcrResultEntityJpaRequestFromFileName(
              item.name,
              data?.allTypeTexteReglementaires,
            ).reference === null
              ? UPLOAD_STATUS.NEED_EDITING
              : UPLOAD_STATUS.NEW,
          ocrResultEntityJpaRequest: getOcrResultEntityJpaRequestFromFileName(
            item.name,
            data?.allTypeTexteReglementaires,
          ),
          binaryStr: null,
        };
        return uploadComponentData;
      });
    });
    setGlobalUploadStatus(UPLOAD_STATUS.NEW);
  };

  const inputRef = useRef(null);

  return (
    <>
      <label style={{ width: "100%" }}>
        <ButtonBase
          onClick={() => inputRef.current.click()}
          sx={{
            bgcolor: blueGrey[100],
            width: "100%",
            borderWidth: 3,
            borderStyle: "dotted",
            borderRadius: 5,
            padding: 1,
          }}
        >
          <Stack alignItems={"center"}>
            {isBig && (
              <Typography variant={"h5"} color={blueGrey[500]}>
                أنقر لاختيار الملفات التي تريد رفعها إلى قاعدة المعطيات
              </Typography>
            )}
            <Avatar sx={{ width: isBig ? 150 : 60, height: isBig ? 150 : 60 }}>
              <Upload
                sx={{
                  width: isBig ? 90 : 50,
                  height: isBig ? 90 : 50,
                  color: blueGrey[500],
                }}
              />
            </Avatar>
            {isBig && (
              <Typography variant={"h6"} color={blueGrey[500]}>
                الصيغ المدعومة (PDF)
              </Typography>
            )}
          </Stack>
        </ButtonBase>
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={true}
          onChange={(event) => handleFileUpload(event)}
        />
      </label>
    </>
  );
}
