import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  selectselectedPdfViewer,
  setSelectedPdfViewer,
} from "../../../../redux/features/folderAndFiles/foldersSlice";
import { Description, PictureAsPdf, Wallpaper } from "@mui/icons-material";

export default function PdfViewerToggleButton() {
  const selectedPdfViewer = useSelector(selectselectedPdfViewer);
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
      <ToggleButton value="PDF" aria-label="left aligned">
        <PictureAsPdf
          color={selectedPdfViewer === "PDF" ? "warning" : "inherit"}
          sx={{ width: 40, height: 40 }}
        />
      </ToggleButton>

      <ToggleButton value="IMAGE" aria-label="centered">
        <Wallpaper
          color={selectedPdfViewer === "IMAGE" ? "primary" : "inherit"}
          sx={{ width: 40, height: 40 }}
        />
      </ToggleButton>

      <ToggleButton value="TEXT" aria-label="centered">
        <Description
          color={selectedPdfViewer === "TEXT" ? "success" : "inherit"}
          sx={{ width: 40, height: 40 }}
        />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
