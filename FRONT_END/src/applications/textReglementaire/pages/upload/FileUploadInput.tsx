import { Avatar, Stack, Typography } from "@mui/material";
import { Upload } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";
import {
  OcrResultEntityJpaRequest,
  UPLOAD_STATUS,
  UplodComponentData,
} from "./UploadMainPage";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useQuery } from "@apollo/client";
import {
  AllTypeTexteReglementairesDocument,
  AllTypeTexteReglementairesQuery,
} from "../../../../_generated_gql_/graphql";

export function isValidYear(year: number): boolean {
  // Validate the year range (adjust as needed)
  return year >= 1950 && year <= new Date().getFullYear() + 1;
}

export function isValidMonth(month: number): boolean {
  // Validate the month range (0-11 for zero-based months)
  return month >= 0 && month <= 11;
}

export function isValidDay(year: number, month: number, day: number): boolean {
  // Validate the day range based on the specific year and month
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  return day >= 1 && day <= lastDayOfMonth;
}

export function getIdFromLib(
  string: string,
  allTypeTexteReglementaires: AllTypeTexteReglementairesQuery["allTypeTexteReglementaires"],
) {
  return allTypeTexteReglementaires?.filter(
    (item) => item?.libTypeTexteFr === string,
  )[0]?.id;
}

export function isValidFilenameF(fileName: string) {
  const regex =
    /^([a-zA-Z]+)_([1-9]\d{3}|20[0-2]\d)_(.+)_(0?[1-9]|[1-2]\d|3[0-1])_(0?[1-9]|1[0-2])_([1-9]\d{3}|20[0-2]\d)\.pdf$/;
  return regex.test(fileName);
}

export function getOcrResultEntityJpaRequestFromFileName(
  fileName: string,
  allTypeTexteReglementaires: AllTypeTexteReglementairesQuery["allTypeTexteReglementaires"],
): OcrResultEntityJpaRequest {
  let ocrResultEntityJpaRequest: OcrResultEntityJpaRequest;
  const isValidFilename = isValidFilenameF(fileName);
  let isValidDate = null;
  let parts = null;
  let year = null;
  let month = null;
  let day = null;
  let date = null;
  if (isValidFilename) {
    parts = fileName.split("_");
    year = Number(parts[5].split(".")[0]);
    month = Number(parts[4]) - 1;
    day = Number(parts[3]);
    isValidDate =
      isValidYear(year) && isValidMonth(month) && isValidDay(year, month, day);
    if (isValidDate) {
      date = new Date(year, month, day);
      const id_Text = getIdFromLib(parts[0], allTypeTexteReglementaires);
      if (id_Text) {
        ocrResultEntityJpaRequest = {
          dateReference: date,
          reference: parts[2],
          originalFileName: fileName,
          typeTexteReglementaire: {
            id: id_Text,
          },
          idConfidentialite: 5,
        };
      } else {
        ocrResultEntityJpaRequest = {
          dateReference: null,
          reference: null,
          typeTexteReglementaire: null,
          originalFileName: fileName,
          idConfidentialite: 5,
        };
      }
    } else {
      ocrResultEntityJpaRequest = {
        dateReference: null,
        reference: null,
        typeTexteReglementaire: null,
        originalFileName: fileName,
        idConfidentialite: 5,
      };
    }
  } else {
    ocrResultEntityJpaRequest = {
      dateReference: null,
      reference: null,
      typeTexteReglementaire: null,
      originalFileName: fileName,
      idConfidentialite: 5,
    };
  }
  return ocrResultEntityJpaRequest;
}

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
  setSelectedIndex: any;
  setUploadResponse: any;
}) {
  const { data, loading, error } = useQuery(AllTypeTexteReglementairesDocument);

  const isBig = variant === "big";

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFilesList([]);
    setSelectedIndex(null);
    setUploadResponse(null);
    const array = Array.from(e.target.files);
    setFilesList((old) => {
      return array.map((item, index) => {
        let uplodComponentData: UplodComponentData;
        uplodComponentData = {
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
        return uplodComponentData;
      });
    });
    setGlobalUploadStatus(UPLOAD_STATUS.NEW);
  };

  // @ts-ignore
  return (
    <>
      <label style={{ width: "100%" }}>
        <Stack
          onClick={() => null}
          sx={{
            bgcolor: blueGrey[100],
            width: "100%",
            borderWidth: 3,
            borderStyle: "dotted",
            borderRadius: 5,
            padding: 1,
          }}
          alignItems={"center"}
        >
          {isBig && (
            <Typography variant={"h5"} color={blueGrey[500]}>
              Parcourir les fichiers à telecharger
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
              fichiers pris en charge PDF ...
            </Typography>
          )}
        </Stack>
        <input
          type="file"
          hidden
          multiple={true}
          onChange={(event) => handleFileUpload(event)}
        />
      </label>
    </>
  );
}
