import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useQuery } from "@apollo/client";
import { GetPdfFileDocument } from "../../../../_generated_gql_/graphql.ts";
import { Button, Stack, Typography } from "@mui/material";
import { OcrDoneChip } from "./relations/OcrDoneChip.tsx";
import {
  AutoStoriesOutlined,
  CheckCircleOutline,
  ModeEditRounded,
  PlayArrow,
  Upload,
} from "@mui/icons-material";
import { ConfidentialiteChip } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import * as React from "react";
import { format } from "date-fns";
import { useState } from "react";
import { FormDialogue } from "../../../common/components/dialogs/FormDialogue.tsx";

export const PdfFileDetails = () => {
  const selectedFileId = useParams().fildId;
  const selectedFileId_ = useSelector(selectSelectedFileId);
  const s = selectedFileId ? selectedFileId : selectedFileId_;

  const {
    data: ocrResultJpa,
    error: ocrResultJpaError,
    loading: ocrResultJpaLoading,
  } = useQuery(GetPdfFileDocument, {
    variables: {
      fileSignatue: s ? s : "-1",
    },
  });

  const [open, setOpen] = useState(false);

  function handlShowUpdateDetailsFormDialogue() {
    setOpen(true);
  }

  return (
    <Stack spacing={1} padding={1} alignItems={"start"}>
      <FormDialogue
        open={open}
        setOpen={setOpen}
        title={"تحيين معلومات النص القانوني"}
        content={<div>content</div>}
        fullWidth={false}
        maxWidth={"xl"}
        mode={"update"}
      ></FormDialogue>
      <Typography fontSize={25} fontWeight={"bold"}>
        {ocrResultJpa?.ocrResultByid?.typeTexteReglementaire?.libTypeTexteFr +
          " "}
        {ocrResultJpa?.ocrResultByid?.reference +
          " du " +
          ocrResultJpa?.ocrResultByid?.dateReference}{" "}
      </Typography>
      <Stack
        direction={"row"}
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          sx={{ padding: 1, width: 80 }}
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          className={"justify-center"}
        >
          <AutoStoriesOutlined />
          <Typography fontSize={23} fontWeight={"bold"}>
            {ocrResultJpa?.ocrResultByid?.numberOfPapers}
          </Typography>
        </Stack>
        <OcrDoneChip
          showDone={true}
          ocrDone={ocrResultJpa?.ocrResultByid?.ocrDone}
        ></OcrDoneChip>
      </Stack>

      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Upload color={"primary"}></Upload>
        <Typography>
          {ocrResultJpa?.ocrResultByid?.executedAt &&
            format(
              new Date(ocrResultJpa?.ocrResultByid?.executedAt),
              "yyyy-MM-dd HH:mm",
            )}
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <PlayArrow></PlayArrow>
        <Typography>
          {ocrResultJpa?.ocrResultByid?.terminatedAt &&
            format(
              new Date(ocrResultJpa?.ocrResultByid?.terminatedAt),
              "yyyy-MM-dd HH:mm",
            )}
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <CheckCircleOutline color={"success"}></CheckCircleOutline>
        <Typography>
          {ocrResultJpa?.ocrResultByid?.createdDate &&
            format(
              new Date(ocrResultJpa?.ocrResultByid?.createdDate),
              "yyyy-MM-dd HH:mm",
            )}
        </Typography>
      </Stack>

      <ConfidentialiteChip
        confidentialite={{
          libConfidentialiteAr:
            ocrResultJpa?.ocrResultByid?.confidentialite.libConfidentialiteAr,
        }}
      />
      <Button
        fullWidth={true}
        variant={"contained"}
        color={"warning"}
        startIcon={<ModeEditRounded></ModeEditRounded>}
        onClick={() => handlShowUpdateDetailsFormDialogue()}
      >
        <Typography fontWeight={"bold"}>تحيين</Typography>
      </Button>
    </Stack>
  );
};
