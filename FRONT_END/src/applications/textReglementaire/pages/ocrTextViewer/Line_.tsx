import { OcrResultElasticByIdQuery } from "../../../../_generated_gql_/graphql.ts";
import { scale_ } from "./constants.ts";

export const Line_ = ({
  line,
  index,
}: {
  line: OcrResultElasticByIdQuery["ocrResultElasticById"]["pages"][0]["paragraphs"][0]["lines"][0];
  index: number;
}) => {
  console.log(line?.bbox);

  return (
    <div
      className={"bg-green-400"}
      style={{
        position: "absolute",
        fontSize: line?.fsize / scale_,
        left: line?.bbox?.x1 / scale_ + "px",
        top: line?.bbox.y1 / scale_ + "px",
        width: (line?.bbox?.x2 - line?.bbox?.x1) / scale_,
        height: (line?.bbox?.y2 - line?.bbox?.y1) / scale_,
      }}
      key={index}
    >
      {line?.text}
    </div>
  );
};
