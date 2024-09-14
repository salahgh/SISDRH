import { Dialog, DialogContent } from "@mui/material";

import * as React from "react";
import { CandidatDetails } from "./CandidatDetails.tsx";

export function CandidatDetailsDialog(props: {
  setVisible: (value: ((prevState: boolean) => boolean) | boolean) => void;
  selectedCandidatId: unknown;
  visible: boolean;
}) {
  const { selectedCandidatId, visible, setVisible } = props;

  return (
    <Dialog
      open={visible}
      maxWidth={"lg"}
      fullWidth={true}
      onClose={(e, r) => setVisible(false)}
    >
      <DialogContent
        sx={{
          padding: 0,
          height: 900,
        }}
      >
        <CandidatDetails
          selectedCandidatId={selectedCandidatId}
        ></CandidatDetails>
      </DialogContent>
    </Dialog>
  );
}
