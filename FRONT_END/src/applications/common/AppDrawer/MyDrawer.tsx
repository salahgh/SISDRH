import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LINKS_PAM,
  LINKS_RECRUTEMENT_1,
  LINKS_TEXT_REGLEMENTAIRE_1,
  LINKS_TEXT_REGLEMENTAIRE_2,
  routs,
} from "../../../routing/routs";
import { MyAppBar } from "./MyAppBar";
import { Drawer, DrawerHeader } from "./StyledDrawerComponents";
import { useSelector } from "react-redux";
import { selectselectedApplication } from "../../../redux/features/appNavigation/appNavigationSlice";
import { APPLICATIONS } from "../../../redux/RtkQueryApis/constants";
import { Typography } from "@mui/material";
import { PrivilegesEnum } from "../../../_generated_gql_/graphql";
import { useHasAuthorities } from "../../../security/useHasAuthoritie.ts";

function Nav() {
  return (
    <nav>
      {/*<li>*/}
      {/*   <Link to={`RDiplomeSpecialite`}>RDiplomeSpecialite</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*   <Link to={`RTypeRecrutement`}>RTypeRecrutement</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*   <Link to={`RStruct`}>RStruct</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*   <Link to={`BacParSpecialiteBarChart`}>BacParSpecialiteBarChart</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*   <Link to={`Report`}>Report</Link>*/}
      {/*</li>*/}

      {/*<li>*/}
      {/*   <Link to={`DemandeInscriptionManageemnt`}>DemandeInscriptionManageemnt</Link>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*   <Link to={routs.RolesPrivileges.name}>{routs.RolesPrivileges.name}</Link>*/}
      {/*</li>*/}
    </nav>
  );
}

export default function MyDrawer() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const selectedApplication = useSelector(selectselectedApplication);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const canSeeAll = useHasAuthorities(
    PrivilegesEnum.PersonnelNotesSeeAll,
  ).hasAthoritie;
  const canSeeApplicationPamDashboard = useHasAuthorities(
    PrivilegesEnum.ApplicationPamDashboard,
  ).hasAthoritie;
  const canSeeApplicationPamEtats = useHasAuthorities(
    PrivilegesEnum.ApplicationPamEtats,
  ).hasAthoritie;
  const canSeeApplicationPamNote = useHasAuthorities(
    PrivilegesEnum.ApplicationPamNote,
  ).hasAthoritie;
  const canSeeApplicationPamPam = useHasAuthorities(
    PrivilegesEnum.ApplicationPamPam,
  ).hasAthoritie;
  const canSeeApplicationPamPav = useHasAuthorities(
    PrivilegesEnum.ApplicationPamPav,
  ).hasAthoritie;
  const canSeeApplicationPamPhotoEditor = useHasAuthorities(
    PrivilegesEnum.ApplicationPamPhotoEditor,
  ).hasAthoritie;

  return (
    <>
      <MyAppBar open={open} onClick={handleDrawerOpen} />
      <Drawer variant="permanent" open={open} hidden={!selectedApplication}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Nav />
        {selectedApplication === APPLICATIONS.TEXT_REGLEMENTAIRE && (
          <>
            <List
              sx={{
                paddingTop: 2,
              }}
            >
              {LINKS_TEXT_REGLEMENTAIRE_1.map((item) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    selected={location.pathname === item.navigateTo}
                    onClick={() => navigate(item.navigateTo)}
                    sx={{
                      minHeight: 80,
                      px: 2.5,
                      // '&.Mui-selected': {
                      //     backgroundColor: '#ababab', // Change to desired background color
                      // },
                      // '&:hover': {
                      //
                      //     backgroundColor: '#c2c2c2', // Change to desired background color
                      // },
                      // '&:hover.Mui-selected': {
                      //     backgroundColor: '#d9d9d9', // Change to desired background color
                      // },
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primary={<Typography>{item.text}</Typography>}
                      sx={{ opacity: open ? 1 : 0, paddingLeft: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider></Divider>
            <List
              sx={{
                paddingTop: 2,
              }}
            >
              {LINKS_TEXT_REGLEMENTAIRE_2.map((item) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    selected={location.pathname === item.navigateTo}
                    onClick={() => navigate(item.navigateTo)}
                    sx={{
                      minHeight: 80,
                      px: 2.5,
                      // '&.Mui-selected': {
                      //     backgroundColor: '#ababab', // Change to desired background color
                      // },
                      // '&:hover': {
                      //
                      //     backgroundColor: '#c2c2c2', // Change to desired background color
                      // },
                      // '&:hover.Mui-selected': {
                      //     backgroundColor: '#d9d9d9', // Change to desired background color
                      // },
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0, paddingLeft: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}
        {selectedApplication === APPLICATIONS.RECRUTEMENT && (
          <>
            <List
              sx={{
                paddingTop: 2,
              }}
            >
              {LINKS_RECRUTEMENT_1.map((item) => (
                <ListItem
                  key={item.text}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    selected={location.pathname === item.navigateTo}
                    onClick={() => navigate(item.navigateTo)}
                    sx={{
                      minHeight: 80,
                      px: 2.5,
                      // '&.Mui-selected': {
                      //     backgroundColor: '#ababab', // Change to desired background color
                      // },
                      // '&:hover': {
                      //
                      //     backgroundColor: '#c2c2c2', // Change to desired background color
                      // },
                      // '&:hover.Mui-selected': {
                      //     backgroundColor: '#d9d9d9', // Change to desired background color
                      // },
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primary={item.text}
                      sx={{ opacity: open ? 1 : 0, paddingLeft: 1 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider></Divider>
          </>
        )}
        {selectedApplication === APPLICATIONS.PAM && (
          <>
            <List
              sx={{
                paddingTop: 2,
              }}
            >
              {LINKS_PAM.map((item) => {
                if (
                  item.text == routs.PersonnelNotesSuperUserDataGrid.name &&
                  !canSeeAll
                )
                  return;
                if (item.text == routs.PavHome.name && !canSeeApplicationPamPav)
                  return;
                if (
                  item.text == routs.PersonnelNoteDataGrid.name &&
                  !canSeeApplicationPamNote
                )
                  return;
                if (
                  item.text == routs.PhotoEditing.name &&
                  !canSeeApplicationPamPhotoEditor
                )
                  return;
                if (
                  item.text == routs.PamReports.name &&
                  !canSeeApplicationPamEtats
                )
                  return;
                if (
                  item.text == routs.PamDashboard.name &&
                  !canSeeApplicationPamDashboard
                )
                  return;
                if (item.text == routs.PamHome.name && !canSeeApplicationPamPam)
                  return;

                return (
                  <ListItem
                    key={item.text}
                    disablePadding
                    sx={{ display: "block" }}
                  >
                    <ListItemButton
                      selected={location.pathname === item.navigateTo}
                      onClick={() => navigate(item.navigateTo)}
                      sx={{
                        minHeight: 80,
                        px: 2.5,
                        "&.Mui-selected": {
                          backgroundColor: "#ababab", // Change to desired background color
                        },
                        "&:hover": {
                          backgroundColor: "#c2c2c2", // Change to desired background color
                        },
                        "&:hover.Mui-selected": {
                          backgroundColor: "#d9d9d9", // Change to desired background color
                        },
                      }}
                    >
                      {item.icon}
                      <ListItemText
                        primary={item.text}
                        sx={{ opacity: open ? 1 : 0, paddingLeft: 1 }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Divider></Divider>
          </>
        )}
        <Divider />
      </Drawer>
      <DrawerHeader />
      <Box
        flexGrow={1}
        sx={{
          // bgcolor: theme.palette.background.default,
          height: "calc(100% - 64px)",
          // marginLeft: !selectedApplication ? 0 : open ? drawerWidth / 10 : 10,
          marginLeft : 10
        }}
        // className={'bg-amber-600'}
      >
        <Outlet />
      </Box>
    </>
  );
}
