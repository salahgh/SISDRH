import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useQuery } from "@apollo/client";
import { OcrResultElasticByIdDocument } from "../../../../_generated_gql_/graphql.ts";
import { File_ } from "./File_.tsx";

export const OcrTextViewer = () => {
  const selectedFileId = useSelector(selectSelectedFileId);

  const { data, loading, error } = useQuery(OcrResultElasticByIdDocument, {
    variables: {
      fileId: selectedFileId,
    },
  });

  return (
    <Stack flex={1} overflow={"auto"}>
      <File_ data={data}></File_>
    </Stack>
  );
};
