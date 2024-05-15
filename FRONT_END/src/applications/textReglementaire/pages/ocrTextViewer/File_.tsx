import { OcrResultElasticByIdQuery } from "../../../../_generated_gql_/graphql.ts";
import { Page_ } from "./Page_.tsx";
import { Stack } from "@mui/material";

export const File_ = ({ data }: { data: OcrResultElasticByIdQuery }) => {
  return (
    <Stack spacing={2} className={"bg-white"}>
      {data?.ocrResultElasticById?.pages?.map((page, index) => {
        return <Page_ page={page} key={index} index={index}></Page_>;
      })}
    </Stack>
  );
};
