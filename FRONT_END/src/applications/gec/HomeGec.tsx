import { Box, Button } from "@mui/material";
import { useState } from "react";
import { FormDialogue } from "../common/components/dialogs/FormDialogue.tsx";
import {
  CreateCourrierDialogue,
  FileUpload,
} from "./CreateCourrierDialogue.tsx";

export const HomeGec = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [files, setFiles] = useState<FileUpload[]>();
  return (
    <Box>
      <FormDialogue
        open={open}
        title={"add new message"}
        content={
          <CreateCourrierDialogue
            files={files}
            setFiles={setFiles}
          ></CreateCourrierDialogue>
        }
        fullWidth={true}
        mode={"create"}
        maxWidth={"xl"}
        setOpen={setOpen}
      ></FormDialogue>
      <Button onClick={() => setOpen(true)} variant={"contained"}>
        create a message
      </Button>
    </Box>
  );
};
