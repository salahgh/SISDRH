import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { OwnedFoldersList } from "./OwnedFoldersList.tsx";
import { FilesDataGrid } from "./FilesDataGrid.tsx";
import { useQuery } from "@apollo/client";
import { AllOcrResultRelatioTypesDocument } from "../../../../../_generated_gql_/graphql.ts";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import * as React from "react";
import { RelationType } from "./RelationType.tsx";

export const GetTextDialogue = ({
  setSelectedFile,
  setRelationTypeId,
  setOpen,
  handleOk,
  selectedRelationType,
}) => {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const [step, setStep] = useState(1);

  const { data: relationTypes } = useQuery(AllOcrResultRelatioTypesDocument);

  function handleSuivant() {
    if (step === 1) setStep(2);
    if (step === 2) handleOk();
  }

  function handlePrecedent() {
    if (step === 2) setStep(1);
  }

  function handleAnnuler() {
    setOpen(false);
  }

  return (
    <div className={""}>
      <Stack direction={"row-reverse"} height={"calc(100vh - 200px)"}>
        {step === 1 && (
          <>
            <Stack flex={1} className={""}>
              <OwnedFoldersList
                selectedFolderId={selectedFolderId}
                setSelectedFolderId={setSelectedFolderId}
              ></OwnedFoldersList>
            </Stack>
            <Stack className={""} flex={2} overflow={"auto"}>
              <FilesDataGrid
                selectedFolderId={selectedFolderId}
                setSelectedFile={setSelectedFile}
              />
            </Stack>
          </>
        )}
        {step === 2 && (
          <Stack alignItems={"center"} justifyContent={"center"} width={"100%"}>
            <ToggleButtonGroup
              value={selectedRelationType}
              exclusive
              onChange={(e, v) => {
                console.log(v);
                setRelationTypeId(v);
              }}
              aria-label="text alignment"
            >
              {relationTypes?.allOcrResultRelatioTypes?.map((item, index) => {
                return (
                  <RelationType
                    libTypRelationFr={item?.libTypRelationFr}
                    id={item?.id}
                  ></RelationType>
                );
              })}
            </ToggleButtonGroup>
          </Stack>
        )}
      </Stack>
      <Stack spacing={1} padding={1} direction={"row-reverse"}>
        <Button variant={"contained"} onClick={handleSuivant}>
          {step === 1 && <Typography>Suivant</Typography>}
          {step === 2 && <Typography>Ok</Typography>}
        </Button>
        <Button
          disabled={step === 1}
          variant={"outlined"}
          onClick={handlePrecedent}
        >
          <Typography>Precedent</Typography>
        </Button>
        <Button variant={"outlined"} onClick={handleAnnuler}>
          ANNULER
        </Button>
      </Stack>
    </div>
  );
};
