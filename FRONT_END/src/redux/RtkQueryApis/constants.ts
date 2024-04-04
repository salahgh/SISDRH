// export const baseUrl_ = `http://${process.env['REACT_APP_BACKEND_HOST']}:${process.env['REACT_APP_BACKEND_PORT']}/GRH_N_war_exploded`
// export const baseUrl_ = `http://${process.env['REACT_APP_BACKEND_HOST']}:${process.env['REACT_APP_BACKEND_PORT']}/${process.env['REACT_APP_BACKEND_CONTEXT']}`

export const baseUrl_ = `http://localhost:8090/SI_RH_DSN`;

// export const baseUrl_ = `http://192.213.71.243:8090/SI_RH_DSN`;
export const exportToPhotoUrl = baseUrl_ + "/api/images/exportPhotos";
export const exportToExcelUrl = baseUrl_ + "/api/images/exportToExcel";
export const exportToPdfUrl = baseUrl_ + "/api/images/exportToPdf";
export const exportToPdfListPav = baseUrl_ + "/api/images/exportToPdfListPav";
export const authUrl = baseUrl_ + "/api/auth/";
export const elasticUrl = `https://${import.meta.env.REACT_APP_ELASTIC_HOST}:${import.meta.env.REACT_APP_ELASTIC_PORT}/`;

const swagger_url = "/v3/api-docs";

export const directeur = "198324004044";

export const openApiUrl = baseUrl_ + swagger_url;
export const TOOLS = {
  formatMatricule: (matriculate: string | undefined) =>
    matriculate?.substring(0, 4) +
    "." +
    matriculate?.substring(4, 7) +
    "." +
    matriculate?.substring(7, 12),
  getSrcFromBase64String: (base64: string | null | undefined) =>
    "data:image/jpeg;base64," + base64,
};

export const errorTexts = [
  "كلمة المرور إجبارية",
  "كلمة المرور يجب أن تحتوي على حرف واحد صغير على الأقل",
  "كلمة المرور يجب أن تحتوي على حرف واحد كبير على الأقل",
  "كلمة المرور يجب أن تحتوي على رقم واحد على الأقل",
  "كلمة المرور يجب أن تحتوي على حرف خاص واحد على الأقل",
];

export const APPLICATIONS = {
  TEXT_REGLEMENTAIRE: "TEXT_REGLEMENTAIRE",
  RECRUTEMENT: "RECRUTEMENT",
  FORMATION: "FORMATION",
  RH: "RH",
  PAM: "PAM",
  SIMULATION: "SIMULATION",
};

export const RouteProtected = "protected";
