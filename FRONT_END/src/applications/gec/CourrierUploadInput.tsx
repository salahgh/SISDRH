import { Avatar, ButtonBase, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Upload } from "@mui/icons-material";
import { Dispatch, SetStateAction, useRef } from "react";
import { FileUpload } from "./CreateCourrierDialogue.tsx";

export const CourrierUploadInput = ({
  isBig = false,
  files,
  setFiles,
}: {
  idBig?: boolean;
  files: FileUpload[];
  setFiles: Dispatch<SetStateAction<FileUpload[]>>;
}) => {
  function handleFileRead(result: string | ArrayBuffer, file: File) {
    setFiles((old) => {
      return old?.map((item) => {
        if (item.originalFile.name === file.name) {
          return { ...item, base64data: result };
        } else return item;
      });
    });
  }

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event?.target?.files;

    setFiles(
      Array.from(files).map((item) => {
        const tmp: FileUpload = {
          originalFile: item,
          base64data: null,
          localUri: URL.createObjectURL(item),
          status: null,
        };
        return tmp;
      }),
    );

    // for (const file of files) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     handleFileRead(reader.result, file);
    //   };
    //   reader.readAsDataURL(file);
    // }
  }

  const inputRef = useRef(null);

  return (
    <>
      <label style={{ width: "100%" }}>
        <ButtonBase
          onClick={() => inputRef.current.click()}
          sx={{
            bgcolor: blueGrey[100],
            width: "100%",
            borderWidth: 3,
            borderStyle: "dotted",
            borderRadius: 5,
            padding: 1,
          }}
        >
          <Stack alignItems={"center"}>
            {isBig && (
              <Typography variant={"h5"} color={blueGrey[500]}>
                أنقر لاختيار الملفات التي تريد رفعها إلى قاعدة المعطيات
              </Typography>
            )}
            <Avatar sx={{ width: isBig ? 150 : 60, height: isBig ? 150 : 60 }}>
              <Upload
                sx={{
                  width: isBig ? 90 : 50,
                  height: isBig ? 90 : 50,
                  color: blueGrey[500],
                }}
              />
            </Avatar>
            {isBig && (
              <Typography variant={"h6"} color={blueGrey[500]}>
                الصيغ المدعومة (PDF)
              </Typography>
            )}
          </Stack>
        </ButtonBase>
        <input
          ref={inputRef}
          type="file"
          hidden
          multiple={false}
          onChange={(event) => handleFileUpload(event)}
        />
      </label>
    </>
  );
};
