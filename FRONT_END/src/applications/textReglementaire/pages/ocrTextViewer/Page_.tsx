import { OcrResultElasticByIdQuery } from "../../../../_generated_gql_/graphql.ts";
import { Paragraphe_ } from "./Paragraphe_.tsx";
import { Stack } from "@mui/material";
import { scale_ } from "./constants.ts";

export const Page_ = ({
  page,
  index,
}: {
  page: OcrResultElasticByIdQuery["ocrResultElasticById"]["pages"][0];
  index: number;
}) => {
  return (
    <Stack key={index} spacing={2}>
      {page?.paragraphs?.map((paragraph, p_index) => {
        return (
          <div
            className={"bg-amber-400 py-2"}
            style={{
              left: page?.bbox?.x1 / scale_ + "px",
              top: page?.bbox.y1 / scale_ + "px",
              width: (page?.bbox?.x2 - page?.bbox?.x1) / scale_,
              height: (page?.bbox?.y2 - page?.bbox?.y1) / scale_,
            }}
          >
            <Paragraphe_ paragraph={paragraph} index={p_index}></Paragraphe_>
          </div>
        );
      })}
    </Stack>
  );
};
