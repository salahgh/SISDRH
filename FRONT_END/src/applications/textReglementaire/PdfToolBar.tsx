import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import AddToFolderMenu from "./pages/FoldersTexteReglementaire/pdfFiles/AddToFolderMenu.tsx";
import { useSelector } from "react-redux";
import {
  selectselectedFileId,
  selectselectedPageIndex,
} from "../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { GetPdfFileQuery } from "../../_generated_gql_/graphql.ts";
import { FavoriteButton } from "./FavoriteButton.tsx";
import PdfViewerToggleButton from "./pages/PdfFile/PdfViewerToggleButton.tsx";
import ASSETS from "../../resources/ASSETS.ts";
import { useNavigate } from "react-router-dom";
import { getLink, routs } from "../../routing/routs.tsx";

export const PdfToolBar = ({
  ocrResultJpa,
  showGoToPdf,
}: {
  ocrResultJpa: GetPdfFileQuery | undefined;
  showGoToPdf?: boolean;
}) => {
  const selectedFileId = useSelector(selectselectedFileId);

  // const toggleFavorite = useToggleFavorite(selectedFileId, []);

  const pageIndex = useSelector(selectselectedPageIndex);

  const navigate = useNavigate();

  return (
    <Stack
      spacing={1}
      padding={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <PdfViewerToggleButton></PdfViewerToggleButton>
      <div>
        <AddToFolderMenu pdfId={selectedFileId} />
        <FavoriteButton pdfFileId={selectedFileId}></FavoriteButton>
        {showGoToPdf && (
          <IconButton
            size={"large"}
            onClick={() => navigate(getLink(routs.PdfFilePage))}
          >
            <Avatar sx={{}} variant={"square"} src={ASSETS.PDF}></Avatar>
          </IconButton>
        )}
      </div>

      {/*<IconButton*/}
      {/*  size={"large"}*/}
      {/*  onClick={() => alert("cette fonctionalite n est pas encore implmente")}*/}
      {/*>*/}
      {/*  <Download*/}
      {/*    sx={{*/}
      {/*      width: 40,*/}
      {/*      height: 40,*/}
      {/*      color: "#3270f8",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</IconButton>*/}

      {/*<IconButton*/}
      {/*  size={"large"}*/}
      {/*  onClick={() => alert("cette fonctionalite n est pas encore implmente")}*/}
      {/*>*/}
      {/*  <Print*/}
      {/*    sx={{*/}
      {/*      width: 40,*/}
      {/*      height: 40,*/}
      {/*      color: "#3270f8",*/}
      {/*    }}*/}
      {/*  />*/}
      {/*</IconButton>*/}

      {/*<Stack flex={1}></Stack>*/}

      {ocrResultJpa && pageIndex && (
        <Typography variant={"h4"}>
          {ocrResultJpa?.ocrResultByid?.typeTexteReglementaire?.libTypeTexteFr +
            "  " +
            ocrResultJpa?.ocrResultByid?.reference +
            " du " +
            ocrResultJpa?.ocrResultByid?.dateReference}
        </Typography>
      )}
    </Stack>
  );
};
