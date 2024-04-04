import { green, orange, red, yellow } from "@mui/material/colors";
import orphanage from "../resources/icons/orphanage.png";
import process from "../resources/icons/process.png";
import TEXT_REGLEMONTAIRE from "../resources/icons/timbre.png";
import under_construction_gif from "../resources/gifs/under_construction.gif";
import pinned from "../resources/icons/pinned.png";
import paperPin from "../resources/icons/paper-pin.png";
import pdf from "../resources/icons/textReglementaire/pdf.png";
import pdf_128 from "../resources/icons/textReglementaire/pdf_128.png";
import pdf_64 from "../resources/icons/textReglementaire/pdf_64.png";
import image_viewer from "../resources/icons/textReglementaire/image_viewer.jpg";
import hand from "../resources/icons/textReglementaire/hand.png";
import rolesAndPriviliges from "../resources/icons/rolesAndPriviliges.png";
import emptyInbox from "../resources/icons/allAps/empty-inbox.png";
import simulationHomePage from "../resources/images/simulationHomePage.png";
import lock from "../resources/icons/allAps/lock.png";
import Turnover from "../resources/icons/allAps/Turnover-rate_Plan.png";
import Turnover2 from "../resources/icons/allAps/turnOver2.jpg";
import officePapers from "../resources/icons/allAps/office_papers.jpg";
import doctorat from "../resources/logs_anp/medaille_diplomes/9.png";
import liscince from "../resources/logs_anp/medaille_diplomes/8.png";
import master from "../resources/logs_anp/medaille_diplomes/10.png";
import cpo from "../resources/logs_anp/medaille_diplomes/4_.png";
import etaMajor from "../resources/logs_anp/medaille_diplomes/5_.png";
import ecoleDeGuerre from "../resources/logs_anp/medaille_diplomes/6.png";
import application from "../resources/logs_anp/medaille_diplomes/3_.png";
import empty from "../resources/icons/allAps/empty.png";
import retard from "../resources/gifs/en-retard.gif";
import promotion from "../resources/icons/promotion-de-carriere.png";
import reward from "../resources/icons/reward.png";

const ASSETS = {
  BIRTH_ICON: orphanage,
  BAC_SVG: "ressources/icons/BAC.svg",
  BAC_MATH_SVG: "ressources/icons/MATH.svg",
  BAC_MATH_TEC_GMECH_SVG: "ressources/icons/gmechanique.png",
  BAC_MATH_TEC_GCIVIL_SVG: "ressources/icons/compa.png",
  BAC_MATH_TEC_GMETHODE_SVG: "ressources/icons/procede.svg",
  BAC_MATH_TEC_GMELECTR_SVG: "ressources/icons/plug.png",
  BAC_SCIENCE_SVG: "ressources/icons/sciense.svg",
  BAC_LANGUE_ETRANGERE_SVG: "ressources/icons/MATH.svg",
  BAC_GESTION_SVG: "ressources/icons/gestion.svg",
  AVATAR_MALE: "ressources/avatars/mailAvatar2.png",
  AVATAR_FEMALE: "ressources/avatars/femailAvatar.png",
  NO_RESULTS_FOUND: "ressources/icons/no-results.png",
  PROFILE_MILITAIRE: "ressources/icons/profile_picute_militaire.png",
  TEXT_REGLEMONTAIRE: TEXT_REGLEMONTAIRE,
  PROCESS: process,
  OCR_DONE: "ressources/icons/generic/ocr_3.svg",
  UNDER_CONSTRUCTION_GIF: under_construction_gif,
  PINNED: pinned,
  PAPER_PIN: paperPin,
  PDF: pdf,
  PDF_128: pdf_128,
  PDF_64: pdf_64,
  IMAGE_VIEWER: image_viewer,
  HAND: hand,
  rolesAndPriviliges: rolesAndPriviliges,
  emptyInbox: emptyInbox,
  simulationHomePage: simulationHomePage,
  lock: lock,
  Turnover: Turnover,
  Turnover2: Turnover2,
  officePapers: officePapers,
  doctorat: doctorat,
  master: master,
  liscince: liscince,
  cpo: cpo,
  ecoleDeGuerre: ecoleDeGuerre,
  etaMajor: etaMajor,
  application: application,
  empty: empty,
  retard: retard,
  promotion: promotion,
  reward: reward,
};

export function getDiplomeIcon(idDiplome) {
  switch (idDiplome) {
    case "1004      ":
      return ASSETS.BAC_SVG;
  }
}

export function getSpecialiteIcon(idSpecialite) {
  let src = "not found";
  switch (idSpecialite) {
    case "93001 ":
      src = ASSETS.BAC_MATH_SVG;
      break;
    case "93002 ":
      src = ASSETS.BAC_GESTION_SVG;
      break;
    case "93003 ":
      src = ASSETS.BAC_SCIENCE_SVG;
      break;
    case "93004 ":
      src = ASSETS.BAC_MATH_TEC_GMETHODE_SVG;
      break;
    case "93005 ":
      src = ASSETS.BAC_MATH_TEC_GMELECTR_SVG;
      break;
    case "93006 ":
      src = ASSETS.BAC_MATH_TEC_GCIVIL_SVG;
      break;
    case "93007 ":
      src = ASSETS.BAC_MATH_TEC_GMECH_SVG;
      break;
  }
  return src;
}

export function getMoyenneColor(moyenne) {
  if (moyenne >= 16) return yellow["500"];
  if (moyenne >= 15 && moyenne < 16) return green["500"];
  if (moyenne >= 14 && moyenne < 15) return green["300"];
  if (moyenne >= 12 && moyenne < 14) return orange["500"];
  if (moyenne < 12) return red["500"];
}

export function getProjectImage(projectId: number) {
  switch (projectId) {
    case 1:
      return ASSETS.TEXT_REGLEMONTAIRE;
    case 2:
      return ASSETS.PROCESS;
    case 3:
      return "";
    case 4:
      return "";
  }
}

export const buildPhotoSrc = (
  photo: string | null | undefined,
  type: string | undefined | null,
): string => {
  return "data:image/" + type + ";base64," + photo;
};

export const splitPhotoSrc = (
  photo: string,
): { image: string; typeImage: string } => {
  return {
    image: photo.split(",")[1],
    typeImage: photo.split(";")[0].split("/")[1],
  };
};

export default ASSETS;
