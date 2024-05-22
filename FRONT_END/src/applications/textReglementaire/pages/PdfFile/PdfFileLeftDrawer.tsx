import {
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { PdfFileDetails } from "./PdfFileDetails.tsx";
import { useQuery } from "@apollo/client";
import {
  GetPdfFileDocument,
  PrivilegesEnum,
} from "../../../../_generated_gql_/graphql.ts";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { TextRelationsList } from "./relations/TextRelationsList.tsx";
import { TextReglementairesNotes } from "./TextReglementairesNotes.tsx";
import { ArrowRight, DensitySmall, EditRoad, Note } from "@mui/icons-material";
import { useHasAuthorities } from "../../../../security/useHasAuthoritie.ts";

export const PdfFileLeftDrawer = () => {
  const [selectedId, setSelectedId] = useState(1);

  const selectedFileId = useParams().fildId;
  const selectedFileId_ = useSelector(selectSelectedFileId);

  const s = selectedFileId ? selectedFileId : selectedFileId_;

  const TextReglementaireObservationsCrud = useHasAuthorities(
    PrivilegesEnum.TextReglementaireObservationsCrud,
  );
  const TextReglementaireRelationsCud = useHasAuthorities(
    PrivilegesEnum.TextReglementaireRelationsCud,
  );

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
      <Stack
        width={100}
        alignItems={""}
        sx={{
          bgcolor: "rgba(218,218,218,0.25)",
          height: "calc(100vh)",
          paddingRight: 0,
        }}
      >
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
              <ArrowRight
                visibility={selectedId === 1 ? "visilble" : "hidden"}
                fontSize={"large"}
              ></ArrowRight>
              <Stack spacing={1}>
                <DensitySmall sx={{ width: 40, height: 40 }}></DensitySmall>
                <Typography fontWeight={"bold"}>تفاصيل</Typography>
              </Stack>
            </ToggleButton>
          </Tooltip>
          {TextReglementaireRelationsCud && (
            <Tooltip title={"this is a tooltip"}>
              <ToggleButton
                key={1}
                value={2}
                aria-label={"option?.libConfidentialiteAr"}
              >
                <ArrowRight
                  visibility={selectedId === 2 ? "visilble" : "hidden"}
                  fontSize={"large"}
                ></ArrowRight>
                <Stack spacing={1}>
                  <EditRoad sx={{ width: 40, height: 40 }}></EditRoad>
                  <Typography fontWeight={"bold"}>علاقة</Typography>
                </Stack>
              </ToggleButton>
            </Tooltip>
          )}
          {TextReglementaireObservationsCrud && (
            <Tooltip title={"this is a tooltip"}>
              <ToggleButton
                key={1}
                value={3}
                aria-label={"option?.libConfidentialiteAr"}
              >
                <ArrowRight
                  visibility={selectedId === 3 ? "visilble" : "hidden"}
                  fontSize={"large"}
                ></ArrowRight>
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
          )}
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
