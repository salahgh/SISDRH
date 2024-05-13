import * as React from "react";
import { Chip, IconButton, Stack } from "@mui/material";
import BasicMenu from "./BasicMenu.tsx";
import { FavoriteButton } from "../../../FavoriteButton.tsx";
import ActionsMenu from "./ActionsMenu.tsx";
import ASSETS from "../../../../../resources/ASSETS.ts";
import { FindAllOcrResultEntityByFoldersContainingQuery } from "../../../../../_generated_gql_/graphql.ts";

export const PdfFileActions = ({
  selectedFileId,
  handleDeletePdfFromFolder,
  handleShowPdf,
  page,
  size,
  row,
}: {
  row: any;
  selectedFileId: string;
  handleDeletePdfFromFolder: any;
  handleShowPdf: any;
  page: number;
  size: number;
}) => {
  const row_: FindAllOcrResultEntityByFoldersContainingQuery["findAllOcrResultEntityByFoldersContaining"]["content"][0] =
    row?.row;

  return (
    <Stack direction={"row"} alignItems={"center"} spacing={1}>
      <BasicMenu row={row} />
      <FavoriteButton pdfFileId={selectedFileId}></FavoriteButton>
      <IconButton onClick={() => handleShowPdf(row)}>
        <img
          alt={"PDF"}
          src={ASSETS.PDF_64}
          style={{
            width: "40px",
          }}
        />
      </IconButton>
      <ActionsMenu
        handleDeletePdfFromFolder={handleDeletePdfFromFolder}
        page={page}
        size={size}
        row={row}
      />
      {row_?.objects?.length !== 0 && (
        <Chip
          variant={"outlined"}
          color={"error"}
          label={row_?.objects?.at(0)?.relationType?.objectLib}
        />
      )}
    </Stack>
  );
};
