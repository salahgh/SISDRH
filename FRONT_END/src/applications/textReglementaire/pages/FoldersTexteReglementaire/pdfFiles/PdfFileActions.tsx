import * as React from "react";
import { OcrResultEntityJpa } from "../../../../../_generated_gql_/graphql.ts";
import { IconButton, Stack } from "@mui/material";
import BasicMenu from "./BasicMenu.tsx";
import { FavoriteButton } from "../../../FavoriteButton.tsx";
import { PictureAsPdfOutlined } from "@mui/icons-material";
import ActionsMenu from "./ActionsMenu.tsx";
import ASSETS from "../../../../../resources/ASSETS.ts";

export const PdfFileActions = ({
  selectedFileId,
  handleDeletePdfFromFolder,
  handleShowPdf,
  page,
  size,
  row,
}) => {
  console.log(selectedFileId);
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
      {/*<ActionsMenu*/}
      {/*  handleDeletePdfFromFolder={handleDeletePdfFromFolder}*/}
      {/*  page={page}*/}
      {/*  size={size}*/}
      {/*  row={row}*/}
      {/*/>*/}
    </Stack>
  );
};
