import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { ASSETS_LOTTIE } from "../../../../../resources/lotties/ASSETS_LOTTIE.ts";

export const MuiSignInHeader = () => {
  return (
    <Stack spacing={0.5}>
      <Lottie style={{ height: "150px" }} animationData={ASSETS_LOTTIE.login}>
        {" "}
      </Lottie>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        sx={{ width: "100%", textAlign: "center" }}
      >
        تسجيل الدخول
      </Typography>
    </Stack>
  );
};
