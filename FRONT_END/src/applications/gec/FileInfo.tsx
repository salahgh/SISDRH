import { FileUpload } from "./CreateCourrierDialogue.tsx";
import { Box, Typography } from "@mui/material";
import CreateCourrierForm from "./CreateCourrierForm.tsx";

export function FileInfo(props: { file: FileUpload }) {
  return (
    <Box>
      <Typography>{props.file?.originalFile.name}</Typography>
      <Typography>{props.file?.originalFile.size / 1000}</Typography>
      <Typography>{props.file?.originalFile.lastModified}</Typography>
      <Typography>{props.file?.originalFile.type}</Typography>
      <CreateCourrierForm setOpen={() => null}></CreateCourrierForm>
    </Box>
  );
}
