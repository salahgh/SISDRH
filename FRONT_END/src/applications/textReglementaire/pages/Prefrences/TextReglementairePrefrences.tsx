import { useMutation, useQuery } from "@apollo/client";
import {
  FindAllPinnedFilesDocument,
  OcrResultPdfDocument,
  PrivilegesEnum,
  UnpinOcrResultDocument,
} from "../../../../_generated_gql_/graphql";
import { useEffect, useState } from "react";
import {
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ASSETS from "../../../../resources/ASSETS";
import { ConfidentialiteIcon } from "../FoldersTexteReglementaire/pdfFiles/ConfidentialiteIcon";
import { Delete } from "@mui/icons-material";
import useSnackBarNotifications from "../../../allAps/notifications/useSnackBarNotifications";
import { red } from "@mui/material/colors";
import { useHasAuthoritie } from "../../../allAps/UserAdministration/user/useHasAuthoritie";

const TextReglementairePrefrences = () => {
  const {
    handleShowErrorSnackBar,
    handleShowGraphQlErrorSnackBar,
    handleShowInfoSnackBar,
  } = useSnackBarNotifications();
  const [selectedPdfFile, setSelectedPdfFile] = useState("-1");

  const { data, error, loading, refetch } = useQuery(
    FindAllPinnedFilesDocument,
  );

  const {
    data: pdfFile,
    error: pdfFileError,
    loading: pdfFileLoading,
  } = useQuery(OcrResultPdfDocument, {
    variables: {
      id: selectedPdfFile,
    },
  });

  const [unpinFile, { loading: unpinninOcrResult }] = useMutation(
    UnpinOcrResultDocument,
  );

  // useEffect(() => {
  //     refetch()
  //     if (selectedPdfFile === '-1') {
  //         setSelectedPdfFile(data?.findPinnedOcrResults?.at(0)?.ocrResult?.id);
  //     }
  // })

  const handleDelete = (item: any) => {
    unpinFile({ variables: { id: item?.ocrResult?.id } })
      .then((result) => handleShowInfoSnackBar("dellted"))
      .catch((error) => handleShowGraphQlErrorSnackBar(JSON.stringify(error)));
  };

  const hasPinAuthoritie = useHasAuthoritie(PrivilegesEnum.OcrResultPin);

  if (!hasPinAuthoritie) return <div></div>;

  return (
    <Stack
      direction={"column"}
      width={"100%"}
      height={"calc(100% - 0px)"}
      padding={1}
      spacing={1}
    >
      <Typography
        sx={{
          paddingTop: 2,
          width: "100%",
          alignContent: "center",
        }}
        variant={"h4"}
        fontWeight={"bold"}
      >
        page d'accuil principale
      </Typography>
      <Stack direction={"row"} flex={1} height={"100%"}>
        <Stack direction={"column"} flex={1}>
          <List>
            {data?.findPinnedOcrResults?.map((item, index) => {
              return (
                <ListItemButton
                  onClick={() => setSelectedPdfFile(item?.ocrResult?.id)}
                  selected={selectedPdfFile === item?.ocrResult?.id}
                >
                  <ListItemIcon>
                    <img
                      style={{
                        width: "45px",
                        height: "auto",
                      }}
                      src={ASSETS.PDF_64}
                      alt={"no"}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={item?.ocrResult?.originalFileName}
                  ></ListItemText>
                  <ListItemIcon>
                    <ConfidentialiteIcon
                      libConfidentialiteAr={
                        item?.ocrResult?.confidentialite?.libConfidentialiteAr
                      }
                    />
                  </ListItemIcon>
                  <IconButton onClick={() => handleDelete(item)}>
                    <Delete
                      sx={{
                        width: 35,
                        height: 35,
                        color: red["800"],
                      }}
                    ></Delete>
                  </IconButton>
                </ListItemButton>
              );
            })}
          </List>
        </Stack>
        <Stack direction={"column"} flex={2}>
          {pdfFileLoading && (
            <LinearProgress
              sx={{
                width: "100%",
              }}
            ></LinearProgress>
          )}
          {pdfFile && (
            <iframe
              src={"data:application/pdf;base64," + pdfFile?.ocrResultPdf}
              width="100%"
              height="100%"
            ></iframe>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
export default TextReglementairePrefrences;
