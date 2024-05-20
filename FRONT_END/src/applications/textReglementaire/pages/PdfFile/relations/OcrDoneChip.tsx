import { Chip } from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

export const OcrDoneChip = ({ ocrDone, showDone = false }) => {
  const getVariant = () => {
    if (ocrDone === "n") {
      return "filled";
    } else {
      return "outlined";
    }
  };

  if (ocrDone === "o" && showDone === false) return null;

  return (
    <Chip
      label={"OCR"}
      variant={getVariant()}
      color={ocrDone === "n" ? "warning" : "success"}
      icon={
        ocrDone === "n" ? <ErrorOutline></ErrorOutline> : <CheckCircleOutline />
      }
    ></Chip>
  );
};
