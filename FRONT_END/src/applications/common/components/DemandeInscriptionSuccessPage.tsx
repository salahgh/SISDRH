import { useLocation, useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DPersonnelDto } from "../../../redux/mainApi.ts";
import { getLink, routs } from "../../../routing/routs.tsx";

const DemandeInscriptionSuccessPage = ({
  person,
}: {
  person?: DPersonnelDto | undefined;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        padding={2}
      >
        <Typography variant={"h3"} sx={{ color: theme.palette.success.main }}>
          تم تسجيل طلبكم بنجاح
        </Typography>
        {/*<PersonDetails handleSelection={() => null} person={location.state.person}/>*/}
        <Stack direction={"row"} spacing={2} padding={2}>
          <Button
            onClick={() => navigate(getLink(routs.MuiSignIn))}
            size={"large"}
            variant={"contained"}
          >
            {" "}
            الذهاب إلى صفحة تسجيل الدخول{" "}
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default DemandeInscriptionSuccessPage;
