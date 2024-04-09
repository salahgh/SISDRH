import { AllTypeTexteReglementairesQuery } from "../../../../../_generated_gql_/graphql.ts";
import { OcrResultEntityJpaRequest } from "../uploadMainPage/types.ts";

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
  allTypeTexteReglementaires: AllTypeTexteReglementairesQuery["allTypeTexteReglementaires"]
) {
  return allTypeTexteReglementaires?.filter(
    (item) => item?.libTypeTexteFr === string
  )[0]?.id;
}

export function isValidFilenameF(fileName: string) {
  const regex =
    /^([a-zA-Z]+)_([1-9]\d{3}|20[0-2]\d)_(.+)_(0?[1-9]|[1-2]\d|3[0-1])_(0?[1-9]|1[0-2])_([1-9]\d{3}|20[0-2]\d)\.pdf$/;
  return regex.test(fileName);
}

export function getOcrResultEntityJpaRequestFromFileName(
  fileName: string,
  allTypeTexteReglementaires: AllTypeTexteReglementairesQuery["allTypeTexteReglementaires"]
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
            id: id_Text
          },
          idConfidentialite: 5
        };
      } else {
        ocrResultEntityJpaRequest = {
          dateReference: null,
          reference: null,
          typeTexteReglementaire: null,
          originalFileName: fileName,
          idConfidentialite: 5
        };
      }
    } else {
      ocrResultEntityJpaRequest = {
        dateReference: null,
        reference: null,
        typeTexteReglementaire: null,
        originalFileName: fileName,
        idConfidentialite: 5
      };
    }
  } else {
    ocrResultEntityJpaRequest = {
      dateReference: null,
      reference: null,
      typeTexteReglementaire: null,
      originalFileName: fileName,
      idConfidentialite: 5
    };
  }
  return ocrResultEntityJpaRequest;
}
