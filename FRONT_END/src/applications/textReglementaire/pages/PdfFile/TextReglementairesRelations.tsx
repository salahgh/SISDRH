import { selectSelectedFileId } from "../../../../redux/features/elasticSearch/selectedResultLineSlice.ts";
import { useSelector } from "react-redux";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateOcrResultRelationDocument,
  OcrResultRelationBySubjectIdDocument,
} from "../../../../_generated_gql_/graphql.ts";

export const TextReglementairesRelations = () => {
  const selectedFileId = useSelector(selectSelectedFileId);
  const { data: relations } = useQuery(OcrResultRelationBySubjectIdDocument, {
    variables: {
      subjectId: selectedFileId,
    },
  });

  const [createRelation] = useMutation(CreateOcrResultRelationDocument, {
    refetchQueries: [
      {
        query: OcrResultRelationBySubjectIdDocument,
        variables: {
          subjectId: selectedFileId,
        },
      },
    ],
  });

  return <div>relations</div>;
};
