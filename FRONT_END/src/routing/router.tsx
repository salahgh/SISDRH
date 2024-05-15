import { createBrowserRouter } from "react-router-dom";

import { routs } from "./routs.tsx";
import MuiSignIn from "../applications/common/components/Login/SignIn/MuiSignIn.tsx";
import MuiSignUp from "../applications/common/components/Login/SighUp/MuiSignUp.tsx";
import ApplicationChoice from "../applications/common/ApplicationChoice.tsx";
import { RouteProtected } from "../redux/RtkQueryApis/constants.ts";
import App from "../App.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import PamHome from "../applications/pam/PamHome.tsx";
import { PersonnelNoteDataGrid } from "../applications/pam/mainDataGrid/personnelNote/PersonnelNoteDataGrid.tsx";
import { PersonnelNotesSuperUserDataGrid } from "../applications/pam/mainDataGrid/personnelNote/PersonnelNotesSuperUserDataGrid.tsx";
import { PavHome } from "../applications/pav/PavHome.tsx";
import HomePageTextReglementaire from "../applications/textReglementaire/pages/HomeTextReglementairePage/HomePageTextReglementaire.tsx";
import FoldersTextReglementairePage from "../applications/textReglementaire/pages/FoldersTexteReglementaire/FoldersTextReglementairePage.tsx";
import PdfFile from "../applications/textReglementaire/pages/PdfFile/PdfFile.tsx";
import UploadMainPage from "../applications/textReglementaire/pages/upload/uploadMainPage/UploadMainPage.tsx";
import SearchUI from "../applications/textReglementaire/pages/ocr/searchPage/searchUI.tsx";
import OcrJobMain from "../applications/textReglementaire/pages/OcrJobMonitoring/OcrJobMain.tsx";
import { Home } from "../applications/rh/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MuiSignIn />,
  },
  {
    path: routs.MuiSignIn.name,
    element: <MuiSignIn />,
  },
  {
    path: routs.MuiSingUp.name,
    element: <MuiSignUp />,
  },
  // {
  //   path: routs.ForgottenPassword.name,
  //   element: <ForgottenPassword />,
  // },
  // {
  //   path: routs.DemandeInscriptionSuccess.name,
  //   element: <DemandeInscriptionSuccessPage />,
  // },
  {
    path: "/" + RouteProtected,
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      //     {
      //       path: routs.PhotoEditing.name,
      //       element: <PhotoEditing />,
      //     },
      {
        path: routs.PersonnelNoteDataGrid.name,
        element: <PersonnelNoteDataGrid />,
      },
      {
        path: routs.RhHome.name,
        element: <Home />,
      },

      //
      //     {
      //       path: routs.User.name,
      //       element: <User />,
      //     },
      {
        path: routs.PersonnelNotesSuperUserDataGrid.name,
        element: <PersonnelNotesSuperUserDataGrid />,
      },
      {
        path: routs.HomeTextReglementairePage.name,
        element: <FoldersTextReglementairePage />,
      },
      //     {
      //       path: routs.OcrUserMain.name,
      //       element: <OcrUserMain />,
      //     },
      //     {
      //       path: routs.SettingTabs.name,
      //       element: <SettingTabs />,
      //     },
      //     // {
      //     //    path: routs.RDiplomeSpecialite.name,
      //     //    element: <RDiplomeSpecialite/>
      //     // },
      //     {
      //       path: routs.MainPage.name,
      //       element: <MainPage />,
      //     },
      //     {
      //       path: routs.RTypeRecrutement.name,
      //       element: <RTypeRecrutement />,
      //     },
      //     {
      //       path: routs.RStruct.name,
      //       element: <RStruct />,
      //     },
      //     {
      //       path: routs.DragAndDrop.name,
      //       element: <RStruct />,
      //     },
      //     {
      //       path: routs.RecrutementList.name,
      //       element: <RecrutementList />,
      //     },
      //     {
      //       path: routs.BacParSpecialiteBarChart.name,
      //       element: <BacParSpecialiteBarChart />,
      //     },
      {
        path: routs.UploadMainPage.name,
        element: <UploadMainPage />,
      },
      {
        path: routs.SearchUI.name,
        element: <SearchUI />,
      },
      {
        path: routs.OcrJobMain.name,
        element: <OcrJobMain />,
      },
      //     {
      //       path: routs.UserAdministrationMain.name,
      //       element: <DemandeInscriptionManageemnt />,
      //     },
      //     {
      //       path: routs.RolesPrivileges.name,
      //       element: <RolesPrivileges />,
      //     },
      {
        path: routs.ApplicationChoice.name,
        element: <ApplicationChoice />,
      },
      {
        path: routs.PdfFilePage.name,
        element: <PdfFile />,
      },
      {
        path: routs.LandingPageTextReglementaire.name,
        element: <HomePageTextReglementaire />,
      },
      //     {
      //       path: routs.LandingPageRecrutement.name,
      //       element: <LandingPageRecrutement />,
      //     },
      //     {
      //       path: routs.TextReglementairePrefrences.name,
      //       element: <TextReglementairePrefrences />,
      //     },
      //     {
      //       path: routs.MapComponent.name,
      //       element: <MapComponent />,
      //     },
      //     {
      //       path: routs.ProjectsHome.name,
      //       element: <ProjectsHome />,
      //     },
      //     {
      //       path: routs.ProjectView.name,
      //       element: <ProjectView />,
      //     },
      //     {
      //       path: routs.IssueView.name,
      //       element: <IssueViewHome />,
      //     },
      {
        path: routs.PamHome.name,
        element: <PamHome />,
      },
      //     {
      //       path: routs.SimulationHome.name,
      //       element: <SimulationHome />,
      //     },
      //     {
      //       path: routs.PamDashboard.name,
      //       element: <PamDashboard />,
      //     },
      //     {
      //       path: routs.PamReports.name,
      //       element: <PamReports />,
      //     },
      {
        path: routs.PavHome.name,
        element: <PavHome />,
      },
    ],
  },
]);
