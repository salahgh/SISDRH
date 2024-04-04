function getHighlightColor(type) {
  switch (type) {
    case "p":
      return "rgba(242,255,0,0)";
    case "s":
      return "rgba(255,197,90,0.38)";
  }
}

const RenderResultLine = ({ line, scale, backgroundColor }) => {
  if (!line) return <></>;

  const selectedBBOX = line._source.bbox;
  const fontSize = line._source.fsize;
  const selectedText = line._source.text;

  return (
    <>
      <div
        style={{
          top: `${selectedBBOX.y1 / scale}px`,
          left: `${selectedBBOX.x1 / scale}px`,
          right: `${selectedBBOX.x2 / scale}px`,
          bottom: `${selectedBBOX.y2 / scale}px`,
          width: `${(selectedBBOX.x2 - selectedBBOX.x1) / scale}px`,
          height: `${(selectedBBOX.y2 - selectedBBOX.y1) / scale}px`,
          backgroundColor: backgroundColor,
          fontSize: fontSize ? `${fontSize / scale / 1.15}px` : 12,
          textAlighment: "justify",
          position: "absolute",
          margin: 0,
          padding: 0,
        }}
      >
        {/*{selectedText}*/}
      </div>
    </>
  );
};

const RenderResultOverlay = ({ scale, selectedLine, thisPageLines }) => {
  return (
    <>
      {thisPageLines.map((line) => (
        <RenderResultLine
          line={line}
          scale={scale}
          backgroundColor={getHighlightColor("s")}
        />
      ))}
      <RenderResultLine
        line={selectedLine[0]}
        scale={scale}
        backgroundColor={getHighlightColor("p")}
      />
    </>
  );
};

export default RenderResultOverlay;
