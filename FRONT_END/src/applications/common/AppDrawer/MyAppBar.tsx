import { Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import { drawerWidth, AppBar } from "./StyledDrawerComponents";
import { useTheme } from "@mui/material/styles";
import { logout } from "../../../redux/features/auth/userSlice";
import { BugReport, LogoutOutlined, Settings } from "@mui/icons-material";
import { getLink, routs } from "../../../routing/routs.tsx";
import { useNavigate } from "react-router-dom";
import { PrivilegesEnum } from "../../../_generated_gql_/graphql";
import { useAppDispatch } from "../../../redux/hooks.ts";
import { useHasAuthorities } from "../../../security/useHasAuthoritie.ts";

export function MyAppBar(props: { open: boolean; onClick: () => void }) {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" open={props.open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.onClick}
          edge="start"
          sx={{
            marginRight: 1,
            ...(props.open && { marginLeft: drawerWidth }),
            ...(props.open && { display: "none" }),
            transition: theme.transitions.create(["display"], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          fontWeight={"bold"}
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          النظام المعلوماتي للمديرية الفرعية للموارد البشرية مديرية الخدمة
          الوطنية وزارة الدفاع الوطني{" "}
        </Typography>

        <Box sx={{ flexGrow: 1 }} />
        <Stack
          direction={"row"}
          justifyItems={"center"}
          alignItems={"center"}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {/*<DarkModeButton></DarkModeButton>*/}
          <IconButton
            sx={{
              width: 60,
              height: 60,
              marginLeft: 10,
            }}
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={() => {
              navigate(getLink(routs.MuiSignIn));
              dispatch(logout());
            }}
          >
            <LogoutOutlined
              sx={{
                width: 30,
                height: 30,
                paddingLeft: 0,
              }}
            />
          </IconButton>

          {useHasAuthorities(PrivilegesEnum.GestionCompte) && (
            <IconButton
              sx={{
                width: 60,
                height: 60,
                marginLeft: 10,
              }}
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                navigate(getLink(routs.SettingTabs));
              }}
            >
              <Settings
                sx={{
                  width: 30,
                  height: 30,
                  paddingLeft: 0,
                }}
              />
            </IconButton>
          )}

          {/*{*/}
          {/*  useHasAuthorities(PrivilegesEnum.Notifications) && <NotificationComponent/>*/}
          {/*}*/}

          {useHasAuthorities(PrivilegesEnum.ApplicationBugTracker) && (
            <IconButton
              sx={{
                width: 60,
                height: 60,
                marginLeft: 10,
              }}
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                navigate(getLink(routs.ProjectsHome));
              }}
            >
              <BugReport
                sx={{
                  width: 40,
                  height: 40,
                  paddingLeft: 0,
                  // bgcolor : '#ff0303' ,
                  color: "#a40101",
                }}
              />
            </IconButton>
          )}

          {/*<UserAvatarWithMenu></UserAvatarWithMenu>*/}
        </Stack>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
