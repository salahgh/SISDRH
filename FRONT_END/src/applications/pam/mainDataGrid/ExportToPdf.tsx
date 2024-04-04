import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import { Close, Download } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { exportToPdfUrl } from "../../../redux/RtkQueryApis/constants";
import { useSelector } from "react-redux";
import { selectFilteringFields } from "../../../redux/features/pam/pamSlice";
import useSnackBarNotifications from "../../common/notifications/useSnackBarNotifications.tsx";
import { handle_ } from "../photosExport/service.ts";

const ExportToPdf = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [titre, setTitre] = useState("قائمة إسمية");

  const { handleShowInfoSnackBar } =
    useSnackBarNotifications();

  const filteringFields = useSelector(selectFilteringFields);
  const handleExportToExcel = async () => {
    try {
      const response = await axios.post(
        exportToPdfUrl,
        { ...filteringFields, title: titre },
        {
          responseType: "arraybuffer",
          onDownloadProgress: (progressEvent) => {
            // Calculate and update the download progress
            const percentage = Math.round(
              // @ts-ignore
              (progressEvent.loaded * 100) / progressEvent.total,
            );
            console.log(progressEvent);
          },
        },
      );
      setFormOpen(false);
      handle_(response.data, "listselectionnne.pdf", "application/pdf");
      handleShowInfoSnackBar("success");
    } catch (error) {
      console.error("Error exporting images:", error);
    }
  };

  return (
    <>
      <Stack>
        <Dialog open={formOpen} maxWidth={"lg"} fullWidth={true}>
          <DialogTitle>
            <IconButton onClick={() => setFormOpen(false)}>
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Stack
              padding={10}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
              borderRadius={20}
            >
              <TextField
                fullWidth={true}
                label={"عنوان الحالة العددية"}
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
              ></TextField>
            </Stack>
            {/*<StarLoading/>*/}
          </DialogContent>
          <DialogActions>
            <Button variant={"outlined"} color={"secondary"}>
              إلغاء
            </Button>
            <Button
              onClick={handleExportToExcel}
              variant={"contained"}
              color={"primary"}
            >
              متابعة
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          endIcon={
            <Download sx={{ width: 30, height: 30, color: "#de6554" }} />
          }
          variant={"contained"}
          onClick={() => setFormOpen(true)}
        >
        </Button>
      </Stack>
    </>
  );
};

export default ExportToPdf;
