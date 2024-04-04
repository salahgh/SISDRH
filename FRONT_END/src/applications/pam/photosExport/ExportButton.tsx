import { useState } from 'react';
import {Button, Stack} from "@mui/material";
import {ExportDialog} from "./ExportDialog";
import {Image} from "@mui/icons-material";

const ExportButton = () => {

   const [progress] = useState(0);

   const [exportDialogueOpen, setExportDialogueOpen] = useState(false);

   return (
      <Stack spacing={1}>
         <ExportDialog open={exportDialogueOpen} setOpen={setExportDialogueOpen}/>
         <Button variant={'outlined'}
             endIcon={<Image sx={{width: 30, height: 30}}/>}
             onClick={() => setExportDialogueOpen(true)}>

         </Button>
         {progress > 0 && <p>Download Progress: {progress}%</p>}
      </Stack>
   );
};

export default ExportButton;
