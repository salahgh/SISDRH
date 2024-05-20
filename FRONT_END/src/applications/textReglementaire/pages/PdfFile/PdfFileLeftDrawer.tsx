import { Stack, ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";
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
              <img
                src={ASSETS.PDF}
                alt={"relations"}
                style={{ paddingTop: 20, paddingBottom: 20 }}
              />
            </ToggleButton>
          </Tooltip>
          <Tooltip title={"this is a tooltip"}>
            <ToggleButton
              key={1}
              value={2}
              aria-label={"option?.libConfidentialiteAr"}
            >
              <img
                src={ASSETS.PDF}
                alt={"relations"}
                style={{ paddingTop: 20, paddingBottom: 20 }}
              />
            </ToggleButton>
          </Tooltip>
          <Tooltip title={"this is a tooltip"}>
            <ToggleButton
              key={1}
              value={3}
              aria-label={"option?.libConfidentialiteAr"}
            >
              <img
                src={ASSETS.PDF}
                alt={"relations"}
                style={{ paddingTop: 20, paddingBottom: 20 }}
              />
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
