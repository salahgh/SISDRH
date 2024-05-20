import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useQuery } from "@apollo/client";
import { GetPdfFileDocument } from "../../../../_generated_gql_/graphql.ts";
import { Stack, Typography } from "@mui/material";
import { OcrDoneChip } from "./relations/OcrDoneChip.tsx";
import {
  Add,
  AddCircle,
  AutoStoriesOutlined,
  CheckCircleOutline,
  PlayArrow,
  StartOutlined,
  Terminal,
  Upload,
  UploadFile,
} from "@mui/icons-material";
import { ConfidentialiteChip } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteChip.tsx";
import * as React from "react";
import { parseAndFormatDate } from "../../../common/utilities/utilities.ts";
import { format } from "date-fns";

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

  return (
    <Stack spacing={1} padding={1} alignItems={"start"}>
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
    </Stack>
  );
};
