import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedPdfViewer,
  setSelectedPdfViewer,
} from "../../../../redux/features/folderAndFiles/foldersSlice";
import { Description, PictureAsPdf, Wallpaper } from "@mui/icons-material";

export default function PdfViewerToggleButton({ viewers }) {
  const selectedPdfViewer = useSelector(selectSelectedPdfViewer);
  const dispatch = useDispatch();

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedPdfViewer: string | null,
  ) => {
    dispatch(setSelectedPdfViewer(newSelectedPdfViewer));
  };

  return (
    <ToggleButtonGroup
      value={selectedPdfViewer}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {viewers?.some((item) => item === "PDF") && (
        <ToggleButton value="PDF" aria-label="left aligned">
          <PictureAsPdf
            color={selectedPdfViewer === "PDF" ? "warning" : "inherit"}
            sx={{ width: 40, height: 40 }}
          />
        </ToggleButton>
      )}

      {viewers?.some((item) => item === "IMAGE") && (
        <ToggleButton value="IMAGE" aria-label="centered">
          <Wallpaper
            color={selectedPdfViewer === "IMAGE" ? "primary" : "inherit"}
            sx={{ width: 40, height: 40 }}
          />
        </ToggleButton>
      )}

      {viewers?.some((item) => item === "TEXT") && (
        <ToggleButton value="TEXT" aria-label="centered">
          <Description
            color={selectedPdfViewer === "TEXT" ? "success" : "inherit"}
            sx={{ width: 40, height: 40 }}
          />
        </ToggleButton>
      )}
    </ToggleButtonGroup>
  );
}
