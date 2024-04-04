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
import { Add, Close } from "@mui/icons-material";
import { cloneElement, Dispatch, ReactElement, SetStateAction } from "react";

export function CreateEntityDialog({
  open,
  setOpen,
  title,
  content,
  fullWidth,
  maxWidth,
  padding,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<any>>;
  title: string;
  content: ReactElement;

  fullWidth: boolean;
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl";
  padding?: number;
}) {
  return (
    <Dialog open={open} fullWidth={fullWidth} maxWidth={maxWidth}>
      <DialogTitle sx={{ bgcolor: "#ea8d8d", marginBottom: padding }}>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Avatar sx={{ bgcolor: "#fdfdfd" }}>
            <Add color={"success"} />
          </Avatar>
          <Typography variant={"h5"}>{title}</Typography>
          <Box flex={1} />
          <IconButton onClick={() => setOpen(false)} color={"error"}>
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ width: "100%", padding: 10 }}>
        {cloneElement(content, { setOpen })}
      </DialogContent>
    </Dialog>
  );
}
