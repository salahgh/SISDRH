import HOcrViewer from "../../../common/components/ocr/ocrSearchViewer/HOcrViewer.tsx";

const PdfFile = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 65px)",
      }}
      className={"p-1 overflow-clip bg-amber-600"}
    >
      <HOcrViewer showGoToPdf={false} />
    </div>
  );
};

export default PdfFile;
