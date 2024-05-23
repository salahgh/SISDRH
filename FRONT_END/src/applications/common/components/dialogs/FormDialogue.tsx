import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Add, Close, Edit } from "@mui/icons-material";
import { cloneElement, Dispatch, ReactElement, SetStateAction } from "react";
import { Theme } from "@mui/material/styles";

export function FormDialogue({
  open,
  setOpen,
  title,
  content,
  fullWidth,
  maxWidth,
  padding,
  mode = "create",
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: ReactElement;
  fullWidth: boolean;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  padding?: number;
  mode: "update" | "create";
}) {
  return (
    <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth}>
      <DialogTitle
        sx={{
          bgcolor: (theme: Theme) =>
            mode === "update"
              ? theme?.palette?.warning.light
              : theme?.palette?.primary.light,
          marginBottom: padding,
        }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar sx={{ bgcolor: "#fdfdfd" }}>
            {mode === "create" && <Add color={"primary"} />}
            {mode === "update" && <Edit color={"warning"}></Edit>}
          </Avatar>
          <Typography variant={"h5"} fontWeight={"bold"}>
            {title}
          </Typography>
          <Box flex={1} />
          <Avatar>
            <IconButton onClick={() => setOpen(false)} color={"error"}>
              <Close />
            </IconButton>
          </Avatar>
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{ width: "100%", padding: padding, height: "calc(100vh)" }}
      >
        {cloneElement(content, { setOpen })}
      </DialogContent>
    </Dialog>
  );
}
