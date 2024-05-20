import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import ASSETS from "../../../../resources/ASSETS.ts";
import { useState } from "react";
import { PdfFileDetails } from "./PdfFileDetails.tsx";
import { useQuery } from "@apollo/client";
import { GetPdfFileDocument } from "../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { TextReglementairesRelations } from "./relations/TextReglementairesRelations.tsx";
import { TextRelationsList } from "./relations/TextRelationsList.tsx";
import { TextReglementairesNotes } from "./TextReglementairesNotes.tsx";
import {
  DensityLarge,
  DensitySmall,
  EditRoad,
  Note,
} from "@mui/icons-material";

export const PdfFileLeftDrawer = () => {
  const [selectedId, setSelectedId] = useState(1);

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
    <Stack direction={"row"}>
      <Stack flex={1}>
        {selectedId === 1 && <PdfFileDetails></PdfFileDetails>}
        {selectedId === 2 && <TextRelationsList></TextRelationsList>}
        {selectedId === 3 && <TextReglementairesNotes />}
      </Stack>
      <Stack width={80}>
        <ToggleButtonGroup
          exclusive={true}
          orientation={"vertical"}
          onChange={(e, v) => {
            console.log(v);
            setSelectedId(v);
          }}
          value={selectedId}
        >
          <Tooltip title={"this is a tooltip"}>
            <ToggleButton
              key={1}
              value={1}
              aria-label={"option?.libConfidentialiteAr"}
            >
              <Stack spacing={1}>
                <DensitySmall sx={{ width: 40, height: 40 }}></DensitySmall>
                <Typography fontWeight={"bold"}>تفاصيل</Typography>
              </Stack>
            </ToggleButton>
          </Tooltip>
          <Tooltip title={"this is a tooltip"}>
            <ToggleButton
              key={1}
              value={2}
              aria-label={"option?.libConfidentialiteAr"}
            >
              <Stack spacing={1}>
                <EditRoad sx={{ width: 40, height: 40 }}></EditRoad>
                <Typography fontWeight={"bold"}>علاقة</Typography>
              </Stack>
            </ToggleButton>
          </Tooltip>
          <Tooltip title={"this is a tooltip"}>
            <ToggleButton
              key={1}
              value={3}
              aria-label={"option?.libConfidentialiteAr"}
            >
              <Stack spacing={1}>
                <Note
                  sx={{ width: 40, height: 40 }}
                  color={selectedId === 3 ? "warning" : "default"}
                ></Note>
                <Typography
                  color={selectedId === 3 && "#e96c02"}
                  fontWeight={"bold"}
                >
                  ملاحظات
                </Typography>
              </Stack>
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
