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
