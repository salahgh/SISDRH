import { FetchResult, useMutation } from "@apollo/client";
import {
  AddOcrResultToFolderDocument,
  AddOcrResultToFolderMutation,
  DeletePdfFileFromFolderDocument,
  GetPdfFileDocument,
} from "../../_generated_gql_/graphql.ts";

export function useToggleFavorite(
  selectedFileId: string,
  folders: any[],
  favoriteFolderId: string,
  handleDeleteFromFavorite?: () => void,
  handleAddToFavoriteSuccess?: (
    result: FetchResult<AddOcrResultToFolderMutation>,
  ) => void,
  handleError?: (error: any) => void,
) {
  const isFavorite: boolean =
    folders?.filter((item) => item?.description === "FAVORITE").length !== 0;

  const [addOcrResultsToFolder] = useMutation(AddOcrResultToFolderDocument, {
    refetchQueries: [
      {
        query: GetPdfFileDocument,
        variables: {
          fileSignatue: selectedFileId ? selectedFileId : "-1",
        },
      },
    ],
  });

  const [deletePdfFromFolder] = useMutation(DeletePdfFileFromFolderDocument, {
    refetchQueries: [
      {
        query: GetPdfFileDocument,
        variables: {
          fileSignatue: selectedFileId ? selectedFileId : "-1",
        },
      },
    ],
  });

  return () => {
    if (!isFavorite) {
      addOcrResultsToFolder({
        variables: {
          folderId: favoriteFolderId,
          ocrResultId: selectedFileId,
        },
      })
        .then((result) => {
          handleAddToFavoriteSuccess?.(result);
        })
        .catch((error) => handleError?.(error));
    } else {
      deletePdfFromFolder({
        variables: {
          folderId: favoriteFolderId,
          pdfId: selectedFileId,
        },
      })
        .then(() => {
          handleDeleteFromFavorite?.();
        })
        .catch((error) => handleError?.(error));
    }
  };
}
