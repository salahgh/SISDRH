import ASSETS from "../../../resources/ASSETS";
import { Stack } from "@mui/material";

export const CustomNoResultOverlay = ({ width = 180 }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <img src={ASSETS.empty} style={{ width: width }} alt={"no result"} />
    </Stack>
  );
};
