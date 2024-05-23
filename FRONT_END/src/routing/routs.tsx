import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Dashboard,
  Folder,
  ListAlt,
  Map,
  Memory,
  Search,
  SummarizeOutlined,
  SwapHoriz,
  Tune,
  Upload,
  Camera,
  Note,
} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import { RouteProtected } from "../redux/RtkQueryApis/constants.ts";
import AllOutIcon from "@mui/icons-material/AllOut";
import { darken } from "@mui/material";
import ASSETS from "../resources/ASSETS.ts";

export const routs = {
  MuiSignIn: {
    name: "MuiSignIn",
    protected: false,
  },
  MuiSingUp: {
    name: "MuiSingUp",
    protected: false,
  },
  ForgottenPassword: {
    name: "ForgottenPassword",
    protected: false,
  },
  // RDiplomeSpecialite: {
  //    name: 'RDiplomeSpecialite',
  //    protected: true
  // },
  DemandeInscriptionSuccess: {
    name: "DemandeInscriptionSuccess",
    protected: false,
  },
  MainPage: {
    name: "MainPage",
    protected: true,
  },
  TypeRecrutement: {
    name: "TypeRecrutement",
    protected: true,
  },
  RStruct: {
    name: "RStruct",
    protected: true,
  },
  DragAndDrop: {
    name: "DragAndDrop",
    protected: true,
  },
  BacParSpecialiteBarChart: {
    name: "BacParSpecialiteBarChart",
    protected: true,
  },
  RecrutementList: {
    name: "RecrutementList",
    protected: true,
  },
  UploadMainPage: {
    name: "UploadMainPage",
    protected: true,
  },
  report: {
    name: "report",
    protected: true,
  },
  SearchUI: {
    name: "SearchUI",
    protected: true,
  },
  OcrJobMain: {
    name: "OcrJobMain",
    protected: true,
  },
  UserAdministrationMain: {
    name: "UserAdministrationMain",
    protected: true,
  },
  RTypeRecrutement: {
    name: "RTypeRecrutement",
    protected: true,
  },
  SettingTabs: {
    name: "SettingTabs",
    protected: true,
  },
  User: {
    name: "User",
    protected: true,
    label: "ملفاتي",
  },
  RolesPrivileges: {
    name: "RolesPrivileges",
    protected: true,
  },
  ApplicationChoice: {
    name: "ApplicationChoice",
    protected: true,
  },
  OcrUserMain: {
    name: "OcrUserMain",
    protected: true,
  },
  HomeTextReglementairePage: {
    name: "HomeTextReglementairePage",
    protected: true,
    label: "صفحة البداية",
  },
  PdfFilePage: {
    name: "PdfFilePage",
    protected: true,
  },
  LandingPageTextReglementaire: {
    name: "LandingPageTextReglementaire",
    protected: true,
    label: "صفحة البداية",
  },
  LandingPageRecrutement: {
    name: "LandingPageRecrutement",
    protected: true,
  },
  TextReglementairePrefrences: {
    name: "TextReglementairePrefrences",
    protected: true,
  },
  MapComponent: {
    name: "MapComponent",
    protected: true,
  },
  ProjectsHome: {
    name: "ProjectsHome",
    protected: true,
  },
  ProjectView: {
    name: "ProjectView",
    protected: true,
  },
  IssueView: {
    name: "IssueView",
    protected: true,
  },
  PamHome: {
    name: "PamHome",
    protected: true,
  },
  SimulationHome: {
    name: "SimulationHome",
    protected: true,
  },
  PamDashboard: {
    name: "PamDashboard",
    protected: true,
  },
  PamReports: {
    name: "PamReports",
    protected: true,
  },
  PhotoEditing: {
    name: "PhotoEditing",
    protected: true,
  },
  PersonnelNoteDataGrid: {
    name: "PersonnelNoteDataGrid",
    protected: true,
  },
  PersonnelNotesSuperUserDataGrid: {
    name: "PersonnelNotesSuperUserDataGrid",
    protected: true,
  },
  PavHome: {
    name: "PavHome",
    protected: true,
  },
  RhHome: {
    name: "RhHome",
    protected: true,
  },
};

export const getLink = (item: { protected: boolean; name: string }) => {
  if (!item.protected) return "/" + item.name;
  else return "/" + RouteProtected + "/" + item.name;
};

//
// const DrawerListItems = (application) => {
//
//    const navigate = useNavigate()
//
//    switch (application) {
//       case APPLICATIONS.TEXT_REGLEMENTAIRE : {
//          LINKS_TEXT_REGLEMENTAIRE_1.map((item) => {
//             return (
//                <ListItem
//                   key={item.text}
//                   disablePadding
//                   sx={{display: 'block'}}
//                >
//                   <ListItemButton
//                      selected={location.pathname === item.navigateTo}
//                      onClick={() => navigate(item.navigateTo)}
//                      sx={{
//                         minHeight: 80,
//                         px: 2.5,
//                      }}
//                   >
//                      {item.icon}
//                      <ListItemText primary={<Typography>{item.text}</Typography>}
//                                    sx={{opacity: open ? 1 : 0, paddingLeft: 1}}/>
//                   </ListItemButton>
//                </ListItem>
//             )
//          })
//       }
//    }
// }

export const LINKS_TEXT_REGLEMENTAIRE_1 = [
  {
    text: routs.LandingPageTextReglementaire.label,
    navigateTo: getLink(routs.LandingPageTextReglementaire),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <HomeIcon sx={{ width: 40, height: 40 }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.User.name,
    navigateTo: getLink(routs.HomeTextReglementairePage),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        {/*<IconWrapper Icon={<AccountBox />}></IconWrapper>*/}
        <Folder sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },

  {
    text: routs.UploadMainPage.name,
    navigateTo: getLink(routs.UploadMainPage),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Upload sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.SearchUI.name,
    navigateTo: getLink(routs.SearchUI),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Search sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
];

export const LINKS_TEXT_REGLEMENTAIRE_2 = [
  {
    text: routs.OcrJobMain.name,
    navigateTo: getLink(routs.OcrJobMain),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Memory sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.ApplicationChoice.name,
    navigateTo: getLink(routs.ApplicationChoice),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <SwapHoriz sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.TextReglementairePrefrences.name,
    navigateTo: getLink(routs.TextReglementairePrefrences),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Tune sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
];

export const LINKS_RECRUTEMENT_1 = [
  {
    text: routs.MapComponent.name,
    navigateTo: getLink(routs.MapComponent),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Map sx={{ width: 45, height: 45 }} />
      </ListItemIcon>
    ),
  },
];

export const LINKS_PAM = [
  {
    text: routs.PamHome.name,
    navigateTo: getLink(routs.PamHome),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <ListAlt sx={{ width: 45, height: 45, color: "#005b9b" }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PamDashboard.name,
    navigateTo: getLink(routs.PamDashboard),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Dashboard sx={{ width: 45, height: 45, color: "#ffa200" }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PamReports.name,
    navigateTo: getLink(routs.PamReports),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <SummarizeOutlined sx={{ width: 45, height: 45, color: "#71a9ac" }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PhotoEditing.name,
    navigateTo: getLink(routs.PhotoEditing),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Camera sx={{ width: 45, height: 45, color: "#54a3a8" }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PersonnelNoteDataGrid.name,
    navigateTo: getLink(routs.PersonnelNoteDataGrid),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
        }}
      >
        <Note sx={{ width: 45, height: 45 }} color={"warning"} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PersonnelNotesSuperUserDataGrid.name,
    navigateTo: getLink(routs.PersonnelNotesSuperUserDataGrid),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
          color: (theme) => darken(theme.palette.warning.main, 0.2),
        }}
      >
        <AllOutIcon sx={{ width: 45, height: 45, color: "warning" }} />
      </ListItemIcon>
    ),
  },
  {
    text: routs.PavHome.name,
    navigateTo: getLink(routs.PavHome),
    icon: (
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: "auto",
          justifyContent: "center",
          color: (theme) => darken(theme.palette.warning.main, 0.2),
        }}
      >
        {/*<AllOutIcon sx={{width: 45, height: 45, color: 'warning'}}/>*/}
        <img
          style={{ width: 45, height: 45 }}
          src={ASSETS.promotion}
          alt={"a"}
        ></img>
      </ListItemIcon>
    ),
  },
];
