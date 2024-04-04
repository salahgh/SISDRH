import OcrJobResults from "./OcrJobResults.tsx";
import OcrJobControll from "./OcrJobControll.tsx";
import { Box, Stack } from "@mui/material";

const OcrJobMain = () => {
  return (
    <Box>
      <Stack direction={"row"} spacing={2} padding={1}>
        <Stack flex={1}>
          <OcrJobControll />
          <OcrJobResults />
        </Stack>
      </Stack>
    </Box>
  );
};

export default OcrJobMain;
