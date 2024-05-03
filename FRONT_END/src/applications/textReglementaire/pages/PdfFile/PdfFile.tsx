import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import { Stack } from "@mui/material";

import { TextReglementairesNotes } from "./TextReglementairesNotes.tsx";

const PdfFile = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
      }}
      className={"p-1 overflow-clip bg-amber-600"}
    >
      <Stack direction={"row"} height={"100%"} spacing={1}>
        <Stack flex={2}>
          <HOcrViewer showGoToPdf={false} showDeletePdfFile={true} />
        </Stack>
        <Stack flex={1} className={"bg-amber-200"}>
          <TextReglementairesNotes />
        </Stack>
      </Stack>
    </div>
  );
};

export default PdfFile;
