import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";
import { Stack } from "@mui/material";
import { TextRelationsList } from "./relations/TextRelationsList.tsx";

const PdfFile = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
      }}
      className={"p-1 overflow-clip bg-amber-600"}
    >
      <Stack direction={"row"} height={"100%"}>
        <Stack flex={3}>
          <HOcrViewer showGoToPdf={false} showDeletePdfFile={true} />
        </Stack>
        <Stack flex={1}>
          <TextRelationsList></TextRelationsList>
        </Stack>
      </Stack>
    </div>
  );
};

export default PdfFile;
