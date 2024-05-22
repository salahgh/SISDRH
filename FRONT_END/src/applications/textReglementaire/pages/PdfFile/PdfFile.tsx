import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import { Stack } from "@mui/material";
import { PdfFileLeftDrawer } from "./PdfFileLeftDrawer.tsx";

import { TextReglementairesNotes } from "./TextReglementairesNotes.tsx";

const PdfFile = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
      }}
      className={"overflow-clip"}
    >
      <Stack direction={"row"} height={"100%"}>
        <Stack flex={3}>
          <HOcrViewer showGoToPdf={false} showDeletePdfFile={true} />
        </Stack>
        <Stack flex={1}>
          <PdfFileLeftDrawer />
        </Stack>
      </Stack>
    </div>
  );
};

export default PdfFile;
