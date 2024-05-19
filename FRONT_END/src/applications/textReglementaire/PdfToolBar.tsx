import { Avatar, Chip, IconButton, Stack, Typography } from "@mui/material";
import AddToFolderMenu from "./pages/FoldersTexteReglementaire/pdfFiles/AddToFolderMenu.tsx";
import { useSelector } from "react-redux";
import { selectSelectedFileId } from "../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import {
  DeletePdfFileDocument,
  GetPdfFileQuery,
} from "../../_generated_gql_/graphql.ts";
import { FavoriteButton } from "./FavoriteButton.tsx";
import ASSETS from "../../resources/ASSETS.ts";
import { useNavigate } from "react-router-dom";
import { getLink, routs } from "../../routing/routs.tsx";
import { Delete } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import useSnackBarNotifications from "../common/notifications/useSnackBarNotifications.tsx";

export const PdfToolBar = ({
  ocrResultJpa,
  showGoToPdf,
  pdfToolBar,
  showDeletePdfFile,
}: {
  ocrResultJpa: GetPdfFileQuery | undefined;
  showGoToPdf?: boolean;
  pdfToolBar: any;
  showDeletePdfFile: boolean;
}) => {
  const selectedFileId = useSelector(selectSelectedFileId);
  const navigate = useNavigate();

  const { handleShowInfoSnackBar, handleShowGraphQlErrorSnackBar } =
    useSnackBarNotifications();

  const [deletePdfFile, { data, error, loading }] = useMutation(
    DeletePdfFileDocument,
    { variables: { id: selectedFileId } },
  );

  const handleDeletPdfFile = () => {
    deletePdfFile()
      .then(() => {
        handleShowInfoSnackBar("success");
        navigate(-1);
      })
      .catch((e) => {
        handleShowGraphQlErrorSnackBar(JSON.stringify(e));
      });
  };

  return (
    <Stack
      spacing={1}
      padding={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundColor:
          ocrResultJpa?.ocrResultByid?.objects?.length !== 0
            ? "#f6cbcb"
            : "#d3f6cb",
      }}
    >
      {pdfToolBar}
      <div>
        <AddToFolderMenu pdfId={selectedFileId} />
        <FavoriteButton pdfFileId={selectedFileId}></FavoriteButton>
        {showGoToPdf && (
          <IconButton
            size={"large"}
            onClick={() =>
              navigate(`${getLink(routs.PdfFilePage)}/${selectedFileId}`)
            }
          >
            <Avatar sx={{}} variant={"square"} src={ASSETS.PDF}></Avatar>
          </IconButton>
        )}
        {showDeletePdfFile && (
          <IconButton color={"error"} onClick={handleDeletPdfFile}>
            <Delete sx={{ width: 35, height: 35 }}></Delete>
          </IconButton>
        )}
      </div>

      {ocrResultJpa && (
        <Stack direction={"row-reverse"} spacing={1}>
          <Typography variant={"h5"}>
            {ocrResultJpa?.ocrResultByid?.typeTexteReglementaire
              ?.libTypeTexteFr +
              "  " +
              ocrResultJpa?.ocrResultByid?.reference +
              " du " +
              ocrResultJpa?.ocrResultByid?.dateReference}
          </Typography>
          {ocrResultJpa?.ocrResultByid?.objects?.length !== 0 && (
            <Chip
              variant={"outlined"}
              color={"error"}
              label={
                ocrResultJpa?.ocrResultByid?.objects?.at(0)?.relationType
                  .objectLib
              }
            ></Chip>
          )}
        </Stack>
      )}
    </Stack>
  );
};
