import { CourrierUploadInput } from "./CourrierUploadInput.tsx";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import ASSETS from "../../resources/ASSETS.ts";
import { FileInfo } from "./FileInfo.tsx";
import * as React from "react";

export interface FileUpload {
  base64data: string | ArrayBuffer;
  localUri: string;
  originalFile: File;
  status: string;
}

export const CreateCourrierDialogue = ({
  files,
  setFiles,
}: {
  files: FileUpload[];
  setFiles: Dispatch<SetStateAction<FileUpload[]>>;
}) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  useEffect(() => {
    if (files) {
      setSelectedFile(files[0]?.originalFile?.name);
    }
  }, [files]);

  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  function handleChange(e, newValue: number) {
    setSelectedTab(newValue);
  }

  return (
    <Box height={"calc(100vh - 220px)"}>
      <Stack direction={"row"} spacing={1} height={"100%"}>
        <Stack width={350} height={"100%"}>
          <CourrierUploadInput
            files={files}
            setFiles={setFiles}
          ></CourrierUploadInput>
          <List>
            {files?.map((file) => {
              return (
                <ListItemButton
                  onClick={() => setSelectedFile(file.originalFile.name)}
                  selected={selectedFile === file?.originalFile.name}
                >
                  <ListItemAvatar>
                    <img
                      src={ASSETS.PDF}
                      style={{ width: 35, height: 35 }}
                      alt={"alt"}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={file?.originalFile.name}
                  ></ListItemText>
                </ListItemButton>
              );
            })}
          </List>
          <FileInfo file={files?.[0]}></FileInfo>
        </Stack>
        <Stack flex={1} height={"100%"}>
          <iframe
            width="100%"
            height="100%"
            src={
              files?.filter(
                (file) => file?.originalFile?.name === selectedFile,
              )[0]?.localUri
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
};
