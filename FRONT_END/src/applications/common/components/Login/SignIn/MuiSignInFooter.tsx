import { Grid, Link, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { getLink, routs } from "../../../../../routing/routs.tsx";

export const MuiSignInFooter = ({
  submitForm,
  isValid,
  dirty,
  isSubmitting,
} : {
  submitForm : any,
  isValid : any,
  dirty : any,
  isSubmitting : any,
}) => {
  return (
    <>
      <LoadingButton
        fullWidth
        variant="contained"
        onClick={submitForm}
        sx={{ mt: 3, mb: 2 }}
        disabled={!(isValid && dirty)}
        loading={isSubmitting}
        size={"small"}
      >
        <Typography fontWeight={"bold"} variant={"h6"}>
          تسجيل الدخول
        </Typography>
      </LoadingButton>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <Link href="/ForgottenPassword" variant="body2">
            <Typography> هل نسيت كلمة المرور؟ </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href={getLink(routs.MuiSingUp)} variant="body2">
            <Typography> .ليس لديك حساب؟ قم بالنسجيل الآن </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
