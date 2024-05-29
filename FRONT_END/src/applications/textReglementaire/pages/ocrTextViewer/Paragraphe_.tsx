import { OcrResultElasticByIdQuery } from "../../../../_generated_gql_/graphql.ts";
import { Line_ } from "./Line_.tsx";
import { scale_ } from "./constants.ts";

export const Paragraphe_ = ({
  paragraph,
  index,
}: {
  paragraph: OcrResultElasticByIdQuery["ocrResultElasticById"]["pages"][0]["paragraphs"][0];
  index: number;
}) => {
  return (
    <div
      key={index}
      className={"bg-blue-500 p-3"}
      style={{
        position: "relative",
        left: paragraph?.bbox?.x1 / scale_ + "px",
        top: paragraph?.bbox.y1 / scale_ + "px",
        width: (paragraph?.bbox?.x2 - paragraph?.bbox?.x1) / scale_,
        height: (paragraph?.bbox?.y2 - paragraph?.bbox?.y1) / scale_,
      }}
    >
      {paragraph?.lines?.map((line, line_index) => {
        return <Line_ line={line} index={line_index}></Line_>;
      })}
    </div>
  );
};
