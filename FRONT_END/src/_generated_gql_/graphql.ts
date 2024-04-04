/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Base64-encoded binary */
  Base64String: { input: any; output: any; }
  /** An arbitrary precision signed integer */
  BigInteger: { input: any; output: any; }
  /** Built-in scalar representing an instant in time */
  Date: { input: any; output: any; }
  /** Built-in scalar representing a local date */
  LocalDate: { input: any; output: any; }
  /** Built-in scalar representing a local date-time */
  LocalDateTime: { input: any; output: any; }
  /** A 64-bit signed integer */
  Long: { input: any; output: any; }
};

export type Attachment = {
  __typename?: 'Attachment';
  fileData?: Maybe<Scalars['Base64String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  issue?: Maybe<Issue>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
  size_?: Maybe<Scalars['Long']['output']>;
};

export type AttachmentDto = {
  __typename?: 'AttachmentDto';
  base64FileData?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  issueId?: Maybe<Scalars['Long']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Long']['output']>;
};

export type AttachmentDtoInput = {
  base64FileData?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issueId?: InputMaybe<Scalars['Long']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  originalFileName?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Long']['input']>;
};

export type AttachmentInput = {
  fileData?: InputMaybe<Scalars['Base64String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issue?: InputMaybe<IssueInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  originalFileName?: InputMaybe<Scalars['String']['input']>;
  size_?: InputMaybe<Scalars['Long']['input']>;
};

export type BBox = {
  __typename?: 'BBox';
  x1?: Maybe<Scalars['String']['output']>;
  x2?: Maybe<Scalars['String']['output']>;
  y1?: Maybe<Scalars['String']['output']>;
  y2?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  createdBy?: Maybe<User>;
  createdDate?: Maybe<Scalars['LocalDateTime']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  issue?: Maybe<Issue>;
  text?: Maybe<Scalars['String']['output']>;
};

export type CommentInput = {
  createdBy?: InputMaybe<UserInput>;
  createdDate?: InputMaybe<Scalars['LocalDateTime']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issue?: InputMaybe<IssueInput>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Confidentialite = {
  __typename?: 'Confidentialite';
  habilitations?: Maybe<Array<Maybe<Habilitation>>>;
  id?: Maybe<Scalars['String']['output']>;
  libConfidentialiteAr?: Maybe<Scalars['String']['output']>;
  libConfidentialiteFr?: Maybe<Scalars['String']['output']>;
};

export type ConfidentialiteInput = {
  habilitations?: InputMaybe<Array<InputMaybe<HabilitationInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  libConfidentialiteAr?: InputMaybe<Scalars['String']['input']>;
  libConfidentialiteFr?: InputMaybe<Scalars['String']['input']>;
};

export type CountParArme = {
  __typename?: 'CountParArme';
  count_?: Maybe<Scalars['Long']['output']>;
  idArme?: Maybe<Scalars['BigInteger']['output']>;
  libArme?: Maybe<Scalars['String']['output']>;
};

export type CountParCsn = {
  __typename?: 'CountParCsn';
  c?: Maybe<Scalars['String']['output']>;
  count_?: Maybe<Scalars['Long']['output']>;
  csn?: Maybe<Scalars['String']['output']>;
};

export type CountParDiplomeCivile = {
  __typename?: 'CountParDiplomeCivile';
  abrAr?: Maybe<Scalars['String']['output']>;
  abrFr?: Maybe<Scalars['String']['output']>;
  codeDipCiv?: Maybe<Scalars['String']['output']>;
  count_?: Maybe<Scalars['Long']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
};

export type CountParDiplomeMilitaire = {
  __typename?: 'CountParDiplomeMilitaire';
  abrAr?: Maybe<Scalars['String']['output']>;
  abrFr?: Maybe<Scalars['String']['output']>;
  codeDipMil?: Maybe<Scalars['String']['output']>;
  count_?: Maybe<Scalars['Long']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
};

export type CountParGradeDto = {
  __typename?: 'CountParGradeDto';
  count_?: Maybe<Scalars['Long']['output']>;
  g?: Maybe<Scalars['BigInteger']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
};

export type CountParPostes = {
  __typename?: 'CountParPostes';
  count_?: Maybe<Scalars['Long']['output']>;
  poste?: Maybe<Scalars['String']['output']>;
  trie_?: Maybe<Scalars['Int']['output']>;
};

export type CritereDePonderation = {
  __typename?: 'CritereDePonderation';
  chef: Scalars['Boolean']['output'];
  grade?: Maybe<RhRGrade>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
  poste?: Maybe<RhPoste>;
};

export type DPersonnel = {
  __typename?: 'DPersonnel';
  arme?: Maybe<RhRArme>;
  grade?: Maybe<RhRGrade>;
  id?: Maybe<Scalars['String']['output']>;
  matricule?: Maybe<Scalars['String']['output']>;
  nom?: Maybe<Scalars['String']['output']>;
  noma?: Maybe<Scalars['String']['output']>;
  pamOff2024?: Maybe<PamOff2024>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  pnom?: Maybe<Scalars['String']['output']>;
  pnoma?: Maybe<Scalars['String']['output']>;
  poste?: Maybe<RhPoste>;
};

export type DPersonnelDto = {
  __typename?: 'DPersonnelDto';
  id?: Maybe<Scalars['String']['output']>;
  matricule?: Maybe<Scalars['String']['output']>;
  nom?: Maybe<Scalars['String']['output']>;
  noma?: Maybe<Scalars['String']['output']>;
  pnom?: Maybe<Scalars['String']['output']>;
  pnomA?: Maybe<Scalars['String']['output']>;
};

export type DPersonnelInput = {
  arme?: InputMaybe<RhRArmeInput>;
  grade?: InputMaybe<RhRGradeInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  matricule?: InputMaybe<Scalars['String']['input']>;
  nom?: InputMaybe<Scalars['String']['input']>;
  noma?: InputMaybe<Scalars['String']['input']>;
  pamOff2024?: InputMaybe<PamOff2024Input>;
  photos?: InputMaybe<Array<InputMaybe<PhotoInput>>>;
  pnom?: InputMaybe<Scalars['String']['input']>;
  pnoma?: InputMaybe<Scalars['String']['input']>;
  poste?: InputMaybe<RhPosteInput>;
};

export type DemandeInscriptionUser = {
  __typename?: 'DemandeInscriptionUser';
  dateDemande?: Maybe<Scalars['LocalDateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  personnel?: Maybe<DPersonnel>;
  user?: Maybe<User>;
};

export type DemandeInscriptionUserInput = {
  dateDemande?: InputMaybe<Scalars['LocalDateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  personnel?: InputMaybe<DPersonnelInput>;
  user?: InputMaybe<UserInput>;
};

export type DemandeRadiation = {
  __typename?: 'DemandeRadiation';
  dateDemande?: Maybe<Scalars['LocalDate']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  pamOff2024?: Maybe<PamOff2024>;
};

export type DemandeRadiationInput = {
  dateDemande?: InputMaybe<Scalars['LocalDate']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  pamOff2024?: InputMaybe<PamOff2024Input>;
};

export enum Direction {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type EnumsWrapper = {
  __typename?: 'EnumsWrapper';
  privilegesEnum?: Maybe<PrivilegesEnum>;
  rolesEnum?: Maybe<RolesEnum>;
};

export type EnumsWrapperInput = {
  privilegesEnum?: InputMaybe<PrivilegesEnum>;
  rolesEnum?: InputMaybe<RolesEnum>;
};

export type FelicitationDtoInput = {
  idFelicitation?: InputMaybe<Scalars['String']['input']>;
  idPav?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['Long']['input']>;
};

export type FelicitationsPav = {
  __typename?: 'FelicitationsPav';
  felicitation?: Maybe<RFelicitation>;
  id?: Maybe<FelicitationsPavId>;
  nombre?: Maybe<Scalars['Long']['output']>;
  pav?: Maybe<Pav>;
};

export type FelicitationsPavId = {
  __typename?: 'FelicitationsPavId';
  felicitationsId?: Maybe<Scalars['String']['output']>;
  pavId?: Maybe<Scalars['String']['output']>;
};

export type FicheVoeux = {
  __typename?: 'FicheVoeux';
  id?: Maybe<FicheVoeuxId>;
  mvCsn?: Maybe<Scalars['String']['output']>;
  obs1?: Maybe<Scalars['String']['output']>;
  obs2?: Maybe<Scalars['String']['output']>;
  obs3?: Maybe<Scalars['String']['output']>;
  obsBsn?: Maybe<Scalars['String']['output']>;
  obsChef?: Maybe<Scalars['String']['output']>;
  obsDrsn?: Maybe<Scalars['String']['output']>;
  obsDsn?: Maybe<Scalars['String']['output']>;
  obsSdrh?: Maybe<Scalars['String']['output']>;
  pamOff2024?: Maybe<PamOff2024>;
  rhRunite1?: Maybe<RhRunite>;
  rhRunite2?: Maybe<RhRunite>;
  rhRunite3?: Maybe<RhRunite>;
};

export type FicheVoeuxId = {
  __typename?: 'FicheVoeuxId';
  annee?: Maybe<Scalars['String']['output']>;
  matricule?: Maybe<Scalars['String']['output']>;
};

export type FicheVoeuxIdInput = {
  annee?: InputMaybe<Scalars['String']['input']>;
  matricule?: InputMaybe<Scalars['String']['input']>;
};

export type FicheVoeuxInput = {
  id?: InputMaybe<FicheVoeuxIdInput>;
  mvCsn?: InputMaybe<Scalars['String']['input']>;
  obs1?: InputMaybe<Scalars['String']['input']>;
  obs2?: InputMaybe<Scalars['String']['input']>;
  obs3?: InputMaybe<Scalars['String']['input']>;
  obsBsn?: InputMaybe<Scalars['String']['input']>;
  obsChef?: InputMaybe<Scalars['String']['input']>;
  obsDrsn?: InputMaybe<Scalars['String']['input']>;
  obsDsn?: InputMaybe<Scalars['String']['input']>;
  obsSdrh?: InputMaybe<Scalars['String']['input']>;
  pamOff2024?: InputMaybe<PamOff2024Input>;
  rhRunite1?: InputMaybe<RhRuniteInput>;
  rhRunite2?: InputMaybe<RhRuniteInput>;
  rhRunite3?: InputMaybe<RhRuniteInput>;
};

export type FilteringParamsInput = {
  armes?: InputMaybe<Array<InputMaybe<Scalars['BigInteger']['input']>>>;
  csn?: InputMaybe<Scalars['String']['input']>;
  diplomesCiviles?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  diplomesMilitaires?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  formation?: InputMaybe<Scalars['String']['input']>;
  grades?: InputMaybe<Array<InputMaybe<Scalars['BigInteger']['input']>>>;
  idStructure?: InputMaybe<Scalars['String']['input']>;
  pam?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pav?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  postes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  searchToken?: InputMaybe<Scalars['String']['input']>;
  suds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  color?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['LocalDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  pdfFiles?: Maybe<Array<Maybe<OcrResultEntityJpa>>>;
  usersGranted?: Maybe<Array<Maybe<User>>>;
};

export type FolderInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['LocalDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserInput>;
  pdfFiles?: InputMaybe<Array<InputMaybe<OcrResultEntityJpaInput>>>;
  usersGranted?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type GrantedAuthority = {
  __typename?: 'GrantedAuthority';
  authority?: Maybe<Scalars['String']['output']>;
};

export type Habilitation = {
  __typename?: 'Habilitation';
  abbreviation?: Maybe<Scalars['String']['output']>;
  confidentialites?: Maybe<Array<Maybe<Confidentialite>>>;
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  id?: Maybe<Scalars['String']['output']>;
  libHabilitationAr?: Maybe<Scalars['String']['output']>;
  libHabilitationFr?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type HabilitationInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  confidentialites?: InputMaybe<Array<InputMaybe<ConfidentialiteInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  libHabilitationAr?: InputMaybe<Scalars['String']['input']>;
  libHabilitationFr?: InputMaybe<Scalars['String']['input']>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type ImageInfo = {
  __typename?: 'ImageInfo';
  height?: Maybe<Scalars['Float']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  translateX?: Maybe<Scalars['Float']['output']>;
  translateY?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Issue = {
  __typename?: 'Issue';
  assignee?: Maybe<User>;
  attachments?: Maybe<Array<Maybe<Attachment>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  creator?: Maybe<User>;
  dateCreation?: Maybe<Scalars['LocalDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  history?: Maybe<Array<Maybe<IssueHistory>>>;
  id?: Maybe<Scalars['Long']['output']>;
  issueType?: Maybe<IssueType>;
  priority?: Maybe<Priority>;
  project?: Maybe<Project>;
  sevirity?: Maybe<Sevirity>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type IssueHistory = {
  __typename?: 'IssueHistory';
  action?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  issue?: Maybe<Issue>;
  newValue?: Maybe<Scalars['String']['output']>;
  oldValue?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
};

export type IssueHistoryInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issue?: InputMaybe<IssueInput>;
  newValue?: InputMaybe<Scalars['String']['input']>;
  oldValue?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Date']['input']>;
  user?: InputMaybe<UserInput>;
};

export type IssueInput = {
  assignee?: InputMaybe<UserInput>;
  attachments?: InputMaybe<Array<InputMaybe<AttachmentInput>>>;
  comments?: InputMaybe<Array<InputMaybe<CommentInput>>>;
  creator?: InputMaybe<UserInput>;
  dateCreation?: InputMaybe<Scalars['LocalDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  history?: InputMaybe<Array<InputMaybe<IssueHistoryInput>>>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issueType?: InputMaybe<IssueTypeInput>;
  priority?: InputMaybe<PriorityInput>;
  project?: InputMaybe<ProjectInput>;
  sevirity?: InputMaybe<SevirityInput>;
  status?: InputMaybe<StatusInput>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IssueInputDtoInput = {
  attachmentDtos?: InputMaybe<Array<InputMaybe<AttachmentDtoInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Long']['input']>;
  sevirityId?: InputMaybe<Scalars['Long']['input']>;
  tagNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['Long']['input']>;
};

export type IssueType = {
  __typename?: 'IssueType';
  id?: Maybe<Scalars['Long']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  typeAn?: Maybe<Scalars['String']['output']>;
  typeAr?: Maybe<Scalars['String']['output']>;
  typeFr?: Maybe<Scalars['String']['output']>;
};

export type IssueTypeInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  issues?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  typeAn?: InputMaybe<Scalars['String']['input']>;
  typeAr?: InputMaybe<Scalars['String']['input']>;
  typeFr?: InputMaybe<Scalars['String']['input']>;
};

export type Line = {
  __typename?: 'Line';
  bbox?: Maybe<BBox>;
  fsize?: Maybe<Scalars['Int']['output']>;
  id_line?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type MemoryUsage = {
  __typename?: 'MemoryUsage';
  committed: Scalars['Long']['output'];
  init: Scalars['Long']['output'];
  max: Scalars['Long']['output'];
  used: Scalars['Long']['output'];
};

/** Mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  addDemandeRadiation: Scalars['Boolean']['output'];
  addIssueTag: Scalars['Boolean']['output'];
  addOcrResultsToFolder?: Maybe<Folder>;
  addPrivilegeToRole: Scalars['Boolean']['output'];
  changeNotificationState: Scalars['Boolean']['output'];
  changeOcrResultGrant?: Maybe<Array<Maybe<OcrResultUserGrant>>>;
  createFolder?: Maybe<Folder>;
  createIssue?: Maybe<Issue>;
  createIssueComment?: Maybe<Comment>;
  createOcrResultRelation?: Maybe<OcrResultRelation>;
  createPersonnelNote: Scalars['Boolean']['output'];
  createPhoto?: Maybe<PhotoWithFaces>;
  createProject?: Maybe<Project>;
  createRecrutement?: Maybe<Recrutement>;
  createRecrutementV2?: Maybe<RecrutementV2>;
  createRole?: Maybe<Role>;
  createSimAgent?: Maybe<SimAgent>;
  createSimulation?: Maybe<Simulation>;
  delete: Scalars['Boolean']['output'];
  deleteAttachment: Scalars['Boolean']['output'];
  deleteAuthorizedUser: Scalars['Boolean']['output'];
  deleteDemandeInscription: Scalars['Boolean']['output'];
  deleteDemandeRadiation: Scalars['Boolean']['output'];
  deleteFolder?: Maybe<Scalars['Long']['output']>;
  deleteIssue: Scalars['Boolean']['output'];
  deleteIssueComment: Scalars['Boolean']['output'];
  deleteNote: Scalars['Boolean']['output'];
  deleteOcrResultRelation: Scalars['Boolean']['output'];
  deleteOcrResultsFromFolder?: Maybe<Folder>;
  deletePdfFileFromFolder: Scalars['Boolean']['output'];
  deletePersonnelNote: Scalars['Boolean']['output'];
  deletePrivilegeFromRole: Scalars['Boolean']['output'];
  deleteProject: Scalars['Boolean']['output'];
  deleteRecrutement: Scalars['Boolean']['output'];
  deleteRecrutementV2: Scalars['Boolean']['output'];
  deleteSimAgent: Scalars['Boolean']['output'];
  deleteSimulation: Scalars['Boolean']['output'];
  evaluatePav?: Maybe<Scalars['Int']['output']>;
  generateThumbnails: Scalars['Boolean']['output'];
  grantFolderAccessToUser: Scalars['Boolean']['output'];
  pinOcrResult?: Maybe<OcrResultPinned>;
  revokeFolderAccessToUser: Scalars['Boolean']['output'];
  savePav?: Maybe<Pav>;
  setHablitation: Scalars['Boolean']['output'];
  setNumberOfSteps: Scalars['Boolean']['output'];
  startScheduler: Scalars['Boolean']['output'];
  startSimulation: Scalars['Boolean']['output'];
  stopScheduler: Scalars['Boolean']['output'];
  toggleFavorite?: Maybe<Scalars['Int']['output']>;
  unpinOcrResult: Scalars['Boolean']['output'];
  updateAttachment?: Maybe<Attachment>;
  updateConfidentialite: Scalars['Boolean']['output'];
  updateCostumSort: Scalars['Boolean']['output'];
  updateIssue?: Maybe<Issue>;
  updateIssueComment?: Maybe<Comment>;
  updateIssueSevirity?: Maybe<Issue>;
  updateIssueStatus?: Maybe<Issue>;
  updateIssueType?: Maybe<Issue>;
  updatePersonnelNote: Scalars['Boolean']['output'];
  updatePersonnelNoteContent: Scalars['Boolean']['output'];
  updatePersonnelNoteGrantedUsers: Scalars['Boolean']['output'];
  updateProject?: Maybe<Project>;
  updateRecrutemntNombre: Scalars['Boolean']['output'];
  updateRecrutemntV2: Scalars['Boolean']['output'];
  userAddPrivilege: Scalars['Boolean']['output'];
  userAddPrivilegeRestriction: Scalars['Boolean']['output'];
  userAddRole: Scalars['Boolean']['output'];
  userDeletePrivilege: Scalars['Boolean']['output'];
  userDeletePrivilegeRestriction: Scalars['Boolean']['output'];
  userDeleteRole: Scalars['Boolean']['output'];
  validateUserDemande?: Maybe<UserDto>;
};


/** Mutation root */
export type MutationAddDemandeRadiationArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddIssueTagArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
  tagname?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationAddOcrResultsToFolderArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  ocrResultIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationAddPrivilegeToRoleArgs = {
  privilegeId?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationChangeNotificationStateArgs = {
  notificationId?: InputMaybe<Scalars['Long']['input']>;
  notificationState?: InputMaybe<NotificationState>;
};


/** Mutation root */
export type MutationChangeOcrResultGrantArgs = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  ocrResultUserGrantKeysInput?: InputMaybe<Array<InputMaybe<OcrResultUserGrantKeyInputInput>>>;
};


/** Mutation root */
export type MutationCreateFolderArgs = {
  folder?: InputMaybe<FolderInput>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationCreateIssueArgs = {
  issueInputDto?: InputMaybe<IssueInputDtoInput>;
};


/** Mutation root */
export type MutationCreateIssueCommentArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationCreateOcrResultRelationArgs = {
  objectId?: InputMaybe<Scalars['String']['input']>;
  subjectId?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationCreatePersonnelNoteArgs = {
  note?: InputMaybe<PersonnelNoteInput>;
};


/** Mutation root */
export type MutationCreatePhotoArgs = {
  photoInput?: InputMaybe<PhotoInput>;
};


/** Mutation root */
export type MutationCreateProjectArgs = {
  project?: InputMaybe<ProjectInput>;
};


/** Mutation root */
export type MutationCreateRecrutementArgs = {
  recrutementDto?: InputMaybe<RecrutementDtoInput>;
};


/** Mutation root */
export type MutationCreateRecrutementV2Args = {
  recrutementV2Dto?: InputMaybe<RecrutementV2DtoInput>;
};


/** Mutation root */
export type MutationCreateRoleArgs = {
  role?: InputMaybe<RoleDtoInput>;
};


/** Mutation root */
export type MutationCreateSimAgentArgs = {
  simAgentDto?: InputMaybe<SimAgentDtoInput>;
};


/** Mutation root */
export type MutationCreateSimulationArgs = {
  simulationDto?: InputMaybe<SimulationDtoInput>;
};


/** Mutation root */
export type MutationDeleteArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteAttachmentArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteAuthorizedUserArgs = {
  noteId?: InputMaybe<Scalars['Long']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteDemandeInscriptionArgs = {
  demandeInscriptionUser?: InputMaybe<DemandeInscriptionUserInput>;
};


/** Mutation root */
export type MutationDeleteDemandeRadiationArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteFolderArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteIssueArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteIssueCommentArgs = {
  commentId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteNoteArgs = {
  pavId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteOcrResultRelationArgs = {
  ocrResultRelationKey?: InputMaybe<OcrResultRelationKeyInput>;
};


/** Mutation root */
export type MutationDeleteOcrResultsFromFolderArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  ocrResultIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationDeletePdfFileFromFolderArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  pdfId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeletePersonnelNoteArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeletePrivilegeFromRoleArgs = {
  privilegeId?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationDeleteProjectArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteRecrutementArgs = {
  recrutementId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationDeleteRecrutementV2Args = {
  recrutementId?: InputMaybe<Scalars['Int']['input']>;
};


/** Mutation root */
export type MutationDeleteSimAgentArgs = {
  simAgentId?: InputMaybe<SimAgentIdInput>;
};


/** Mutation root */
export type MutationDeleteSimulationArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationEvaluatePavArgs = {
  pavId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationGrantFolderAccessToUserArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationPinOcrResultArgs = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationRevokeFolderAccessToUserArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSavePavArgs = {
  pavDto?: InputMaybe<PavDtoInput>;
};


/** Mutation root */
export type MutationSetHablitationArgs = {
  habilitaitonId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationSetNumberOfStepsArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  steps: Scalars['Int']['input'];
};


/** Mutation root */
export type MutationStartSimulationArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationToggleFavoriteArgs = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUnpinOcrResultArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUpdateAttachmentArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
  updatedAttachment?: InputMaybe<AttachmentInput>;
};


/** Mutation root */
export type MutationUpdateConfidentialiteArgs = {
  confidentailteId?: InputMaybe<Scalars['String']['input']>;
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUpdateCostumSortArgs = {
  costumSort?: InputMaybe<Scalars['Int']['input']>;
  pavId?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUpdateIssueArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
  updatedIssue?: InputMaybe<IssueInput>;
};


/** Mutation root */
export type MutationUpdateIssueCommentArgs = {
  commentId?: InputMaybe<Scalars['Long']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUpdateIssueSevirityArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
  sevirityId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationUpdateIssueStatusArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
  statusId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationUpdateIssueTypeArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
  typeId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationUpdatePersonnelNoteArgs = {
  note?: InputMaybe<PersonnelNoteInput>;
};


/** Mutation root */
export type MutationUpdatePersonnelNoteContentArgs = {
  noteContent?: InputMaybe<Scalars['String']['input']>;
  personnelNoteId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationUpdatePersonnelNoteGrantedUsersArgs = {
  PsesonnelNoteId?: InputMaybe<Scalars['Long']['input']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Mutation root */
export type MutationUpdateProjectArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
  updatedProject?: InputMaybe<ProjectInput>;
};


/** Mutation root */
export type MutationUpdateRecrutemntNombreArgs = {
  nomber?: InputMaybe<Scalars['Int']['input']>;
  recrutemntId?: InputMaybe<Scalars['Long']['input']>;
};


/** Mutation root */
export type MutationUpdateRecrutemntV2Args = {
  recrutementV2Dto?: InputMaybe<RecrutementV2DtoInput>;
};


/** Mutation root */
export type MutationUserAddPrivilegeArgs = {
  privilegeName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUserAddPrivilegeRestrictionArgs = {
  privilegeName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUserAddRoleArgs = {
  roleName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUserDeletePrivilegeArgs = {
  privilegeName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUserDeletePrivilegeRestrictionArgs = {
  privilegeName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationUserDeleteRoleArgs = {
  roleName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation root */
export type MutationValidateUserDemandeArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};

export type NoteDiplome = {
  __typename?: 'NoteDiplome';
  grade?: Maybe<RhRGrade>;
  id?: Maybe<Scalars['String']['output']>;
  index_?: Maybe<Scalars['Int']['output']>;
  lib?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
};

export type Notification = {
  __typename?: 'Notification';
  dateTime?: Maybe<Scalars['LocalDateTime']['output']>;
  emmitter?: Maybe<User>;
  id?: Maybe<Scalars['Long']['output']>;
  issue?: Maybe<Issue>;
  notificationType?: Maybe<NotificationType>;
  owner?: Maybe<User>;
  state?: Maybe<NotificationState>;
};

export enum NotificationState {
  Archived = 'ARCHIVED',
  New = 'NEW',
  Read = 'READ'
}

export type NotificationType = {
  __typename?: 'NotificationType';
  id?: Maybe<Scalars['String']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
};

export enum NullHandling {
  Native = 'NATIVE',
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type OcrResultEntityElastic_2 = {
  __typename?: 'OcrResultEntityElastic_2';
  dateReference?: Maybe<Scalars['LocalDate']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  libConfidentialiteAr?: Maybe<Scalars['String']['output']>;
  libConfidentialiteFr?: Maybe<Scalars['String']['output']>;
  libTypeTexteAr?: Maybe<Scalars['String']['output']>;
  libTypeTexteFr?: Maybe<Scalars['String']['output']>;
  libUrgenceAr?: Maybe<Scalars['String']['output']>;
  libUrgenceFr?: Maybe<Scalars['String']['output']>;
  numberOfPapers?: Maybe<Scalars['Int']['output']>;
  originalFileName?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Array<Maybe<Page>>>;
  reference?: Maybe<Scalars['String']['output']>;
};

export type OcrResultEntityJpa = {
  __typename?: 'OcrResultEntityJpa';
  confidentialite?: Maybe<Confidentialite>;
  createdDate?: Maybe<Scalars['LocalDateTime']['output']>;
  dateReference?: Maybe<Scalars['LocalDate']['output']>;
  executedAt?: Maybe<Scalars['LocalDateTime']['output']>;
  folders?: Maybe<Array<Maybe<Folder>>>;
  id?: Maybe<Scalars['String']['output']>;
  numberOfPapers?: Maybe<Scalars['Int']['output']>;
  objects?: Maybe<Array<Maybe<OcrResultRelation>>>;
  ocrDone?: Maybe<Scalars['String']['output']>;
  ocrResultPagesAsImages?: Maybe<Array<Maybe<OcrResultPageAsImage>>>;
  ocrResultPinned?: Maybe<OcrResultPinned>;
  ocrResultUserGrants?: Maybe<Array<Maybe<OcrResultUserGrant>>>;
  originalFileName?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
  pdf?: Maybe<Scalars['Base64String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  subjects?: Maybe<Array<Maybe<OcrResultRelation>>>;
  terminatedAt?: Maybe<Scalars['LocalDateTime']['output']>;
  typeTexteReglementaire?: Maybe<TypeTexteReglementaire>;
  urgence?: Maybe<Urgence>;
};

export type OcrResultEntityJpaInput = {
  confidentialite?: InputMaybe<ConfidentialiteInput>;
  createdDate?: InputMaybe<Scalars['LocalDateTime']['input']>;
  dateReference?: InputMaybe<Scalars['LocalDate']['input']>;
  executedAt?: InputMaybe<Scalars['LocalDateTime']['input']>;
  folders?: InputMaybe<Array<InputMaybe<FolderInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfPapers?: InputMaybe<Scalars['Int']['input']>;
  objects?: InputMaybe<Array<InputMaybe<OcrResultRelationInput>>>;
  ocrDone?: InputMaybe<Scalars['String']['input']>;
  ocrResultPagesAsImages?: InputMaybe<Array<InputMaybe<OcrResultPageAsImageInput>>>;
  ocrResultPinned?: InputMaybe<OcrResultPinnedInput>;
  ocrResultUserGrants?: InputMaybe<Array<InputMaybe<OcrResultUserGrantInput>>>;
  originalFileName?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<UserInput>;
  pdf?: InputMaybe<Scalars['Base64String']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  subjects?: InputMaybe<Array<InputMaybe<OcrResultRelationInput>>>;
  terminatedAt?: InputMaybe<Scalars['LocalDateTime']['input']>;
  typeTexteReglementaire?: InputMaybe<TypeTexteReglementaireInput>;
  urgence?: InputMaybe<UrgenceInput>;
};

export type OcrResultPageAsImage = {
  __typename?: 'OcrResultPageAsImage';
  base64PngImage?: Maybe<Scalars['Base64String']['output']>;
  id?: Maybe<OcrResultPageAsImageEmbeddedId>;
  ocrResultEntityJpa?: Maybe<OcrResultEntityJpa>;
};

export type OcrResultPageAsImageEmbeddedId = {
  __typename?: 'OcrResultPageAsImageEmbeddedId';
  ocrResultId?: Maybe<Scalars['String']['output']>;
  pageIndex?: Maybe<Scalars['Int']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
};

export type OcrResultPageAsImageEmbeddedIdInput = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type OcrResultPageAsImageInput = {
  base64PngImage?: InputMaybe<Scalars['Base64String']['input']>;
  id?: InputMaybe<OcrResultPageAsImageEmbeddedIdInput>;
  ocrResultEntityJpa?: InputMaybe<OcrResultEntityJpaInput>;
};

export type OcrResultPinned = {
  __typename?: 'OcrResultPinned';
  id?: Maybe<Scalars['String']['output']>;
  ocrResult?: Maybe<OcrResultEntityJpa>;
};

export type OcrResultPinnedInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  ocrResult?: InputMaybe<OcrResultEntityJpaInput>;
};

export type OcrResultRelation = {
  __typename?: 'OcrResultRelation';
  id?: Maybe<OcrResultRelationKey>;
  object?: Maybe<OcrResultEntityJpa>;
  relationType?: Maybe<OcrResultRelationType>;
  subject?: Maybe<OcrResultEntityJpa>;
};

export type OcrResultRelationInput = {
  id?: InputMaybe<OcrResultRelationKeyInput>;
  object?: InputMaybe<OcrResultEntityJpaInput>;
  relationType?: InputMaybe<OcrResultRelationTypeInput>;
  subject?: InputMaybe<OcrResultEntityJpaInput>;
};

export type OcrResultRelationKey = {
  __typename?: 'OcrResultRelationKey';
  object?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  typeRelation?: Maybe<Scalars['String']['output']>;
};

export type OcrResultRelationKeyInput = {
  object?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
  typeRelation?: InputMaybe<Scalars['String']['input']>;
};

export type OcrResultRelationType = {
  __typename?: 'OcrResultRelationType';
  id?: Maybe<Scalars['String']['output']>;
  libTypRelationFr?: Maybe<Scalars['String']['output']>;
  libTypeRelationAr?: Maybe<Scalars['String']['output']>;
};

export type OcrResultRelationTypeInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  libTypRelationFr?: InputMaybe<Scalars['String']['input']>;
  libTypeRelationAr?: InputMaybe<Scalars['String']['input']>;
};

export type OcrResultUserGrant = {
  __typename?: 'OcrResultUserGrant';
  id?: Maybe<OcrResultUserGrantKey>;
  ocrResultEntityJpa?: Maybe<OcrResultEntityJpa>;
  user?: Maybe<User>;
};

export type OcrResultUserGrantInput = {
  id?: InputMaybe<OcrResultUserGrantKeyInput>;
  ocrResultEntityJpa?: InputMaybe<OcrResultEntityJpaInput>;
  user?: InputMaybe<UserInput>;
};

export type OcrResultUserGrantKey = {
  __typename?: 'OcrResultUserGrantKey';
  ocrResultId?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type OcrResultUserGrantKeyInput = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type OcrResultUserGrantKeyInputInput = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<UserGrants>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type Order = {
  __typename?: 'Order';
  direction?: Maybe<Direction>;
  ignoreCase?: Maybe<Scalars['Boolean']['output']>;
  nullHandlingHint?: Maybe<NullHandling>;
  property: Scalars['String']['output'];
};

export type OrderInput = {
  direction?: InputMaybe<Direction>;
  ignoreCase?: InputMaybe<Scalars['Boolean']['input']>;
  nullHandlingHint?: InputMaybe<NullHandling>;
  property: Scalars['String']['input'];
};

export type Page = {
  __typename?: 'Page';
  bbox?: Maybe<BBox>;
  id_page?: Maybe<Scalars['String']['output']>;
  paragraphs?: Maybe<Array<Maybe<Paragraph>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Page_CritereDePonderation = {
  __typename?: 'Page_CritereDePonderation';
  content?: Maybe<Array<Maybe<CritereDePonderation>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_DemandeInscriptionUser = {
  __typename?: 'Page_DemandeInscriptionUser';
  content?: Maybe<Array<Maybe<DemandeInscriptionUser>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Folder = {
  __typename?: 'Page_Folder';
  content?: Maybe<Array<Maybe<Folder>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Issue = {
  __typename?: 'Page_Issue';
  content?: Maybe<Array<Maybe<Issue>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_NoteDiplome = {
  __typename?: 'Page_NoteDiplome';
  content?: Maybe<Array<Maybe<NoteDiplome>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Notification = {
  __typename?: 'Page_Notification';
  content?: Maybe<Array<Maybe<Notification>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_OcrResultEntityJpa = {
  __typename?: 'Page_OcrResultEntityJpa';
  content?: Maybe<Array<Maybe<OcrResultEntityJpa>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_OcrResultUserGrant = {
  __typename?: 'Page_OcrResultUserGrant';
  content?: Maybe<Array<Maybe<OcrResultUserGrant>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_PamOff2024 = {
  __typename?: 'Page_PamOff2024';
  content?: Maybe<Array<Maybe<PamOff2024>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Pav = {
  __typename?: 'Page_Pav';
  content?: Maybe<Array<Maybe<Pav>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_PersonnelNote = {
  __typename?: 'Page_PersonnelNote';
  content?: Maybe<Array<Maybe<PersonnelNote>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Privilege = {
  __typename?: 'Page_Privilege';
  content?: Maybe<Array<Maybe<Privilege>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Project = {
  __typename?: 'Page_Project';
  content?: Maybe<Array<Maybe<Project>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_RFelicitation = {
  __typename?: 'Page_RFelicitation';
  content?: Maybe<Array<Maybe<RFelicitation>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_RSanction = {
  __typename?: 'Page_RSanction';
  content?: Maybe<Array<Maybe<RSanction>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_Role = {
  __typename?: 'Page_Role';
  content?: Maybe<Array<Maybe<Role>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_SimAgent = {
  __typename?: 'Page_SimAgent';
  content?: Maybe<Array<Maybe<SimAgent>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Page_User = {
  __typename?: 'Page_User';
  content?: Maybe<Array<Maybe<User>>>;
  first: Scalars['Boolean']['output'];
  hasContent: Scalars['Boolean']['output'];
  hasNext: Scalars['Boolean']['output'];
  hasPrevious: Scalars['Boolean']['output'];
  last: Scalars['Boolean']['output'];
  nextOrLastPageable?: Maybe<Pagination>;
  nextPageable?: Maybe<Pagination>;
  number: Scalars['Int']['output'];
  numberOfElements: Scalars['Int']['output'];
  pageable?: Maybe<Pagination>;
  previousOrFirstPageable?: Maybe<Pagination>;
  previousPageable?: Maybe<Pagination>;
  size: Scalars['Int']['output'];
  sort?: Maybe<Sorting>;
  totalElements: Scalars['Long']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Pagination = {
  __typename?: 'Pagination';
  pageNumber: Scalars['Int']['output'];
  pageSize?: Maybe<Scalars['Int']['output']>;
  sort?: Maybe<Sort>;
};

export type PaginationInput = {
  pageNumber: Scalars['Int']['input'];
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortInput>;
};

export type PamOff2024 = {
  __typename?: 'PamOff2024';
  DUREE_FONCT?: Maybe<Scalars['String']['output']>;
  NDureeS?: Maybe<Scalars['Int']['output']>;
  NMutation?: Maybe<Scalars['BigInteger']['output']>;
  arme?: Maybe<Scalars['BigInteger']['output']>;
  code_dip_civ?: Maybe<Scalars['String']['output']>;
  code_dip_mil?: Maybe<Scalars['String']['output']>;
  csn?: Maybe<Scalars['String']['output']>;
  demandeRadiations?: Maybe<Array<Maybe<DemandeRadiation>>>;
  dip_civ?: Maybe<Scalars['String']['output']>;
  dip_mil?: Maybe<Scalars['String']['output']>;
  dipcivil?: Maybe<RDiplomeCivile>;
  dipmil?: Maybe<RDiplomeMilitaire>;
  dureeN?: Maybe<Scalars['BigInteger']['output']>;
  dureeS?: Maybe<Scalars['String']['output']>;
  ens?: Maybe<Scalars['BigInteger']['output']>;
  ensFonction?: Maybe<Scalars['BigInteger']['output']>;
  ficheVoeuxes?: Maybe<Array<Maybe<FicheVoeux>>>;
  fonction?: Maybe<Scalars['String']['output']>;
  formation?: Maybe<Scalars['String']['output']>;
  g?: Maybe<Scalars['BigInteger']['output']>;
  grade?: Maybe<Scalars['String']['output']>;
  libArmeAr?: Maybe<Scalars['String']['output']>;
  matricule?: Maybe<Scalars['String']['output']>;
  noma?: Maybe<Scalars['String']['output']>;
  obs?: Maybe<Scalars['String']['output']>;
  personnel?: Maybe<DPersonnel>;
  personnelNotes?: Maybe<Array<Maybe<PersonnelNote>>>;
  pnoma?: Maybe<Scalars['String']['output']>;
  poste?: Maybe<Scalars['String']['output']>;
  promotionNumber?: Maybe<Scalars['Int']['output']>;
  structureSn?: Maybe<RhRStructureSn>;
  trieAnciennete?: Maybe<Scalars['String']['output']>;
};

export type PamOff2024Input = {
  arme?: InputMaybe<Scalars['BigInteger']['input']>;
  code_dip_civ?: InputMaybe<Scalars['String']['input']>;
  code_dip_mil?: InputMaybe<Scalars['String']['input']>;
  csn?: InputMaybe<Scalars['String']['input']>;
  demandeRadiations?: InputMaybe<Array<InputMaybe<DemandeRadiationInput>>>;
  dip_civ?: InputMaybe<Scalars['String']['input']>;
  dip_mil?: InputMaybe<Scalars['String']['input']>;
  dipcivil?: InputMaybe<RDiplomeCivileInput>;
  dipmil?: InputMaybe<RDiplomeMilitaireInput>;
  dureeN?: InputMaybe<Scalars['BigInteger']['input']>;
  dureeS?: InputMaybe<Scalars['String']['input']>;
  ens?: InputMaybe<Scalars['BigInteger']['input']>;
  ensFonction?: InputMaybe<Scalars['BigInteger']['input']>;
  ficheVoeuxes?: InputMaybe<Array<InputMaybe<FicheVoeuxInput>>>;
  fonction?: InputMaybe<Scalars['String']['input']>;
  formation?: InputMaybe<Scalars['String']['input']>;
  g?: InputMaybe<Scalars['BigInteger']['input']>;
  grade?: InputMaybe<Scalars['String']['input']>;
  libArmeAr?: InputMaybe<Scalars['String']['input']>;
  matricule?: InputMaybe<Scalars['String']['input']>;
  noma?: InputMaybe<Scalars['String']['input']>;
  obs?: InputMaybe<Scalars['String']['input']>;
  personnel?: InputMaybe<DPersonnelInput>;
  personnelNotes?: InputMaybe<Array<InputMaybe<PersonnelNoteInput>>>;
  pnoma?: InputMaybe<Scalars['String']['input']>;
  poste?: InputMaybe<Scalars['String']['input']>;
  promotionNumber?: InputMaybe<Scalars['Int']['input']>;
  structureSn?: InputMaybe<RhRStructureSnInput>;
  trieAnciennete?: InputMaybe<Scalars['String']['input']>;
};

export type Paragraph = {
  __typename?: 'Paragraph';
  bbox?: Maybe<BBox>;
  id_par?: Maybe<Scalars['String']['output']>;
  lang?: Maybe<Scalars['String']['output']>;
  lines?: Maybe<Array<Maybe<Line>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Pav = {
  __typename?: 'Pav';
  ancienneteDansLeGrade?: Maybe<Scalars['Int']['output']>;
  anne?: Maybe<Scalars['Int']['output']>;
  chef?: Maybe<Scalars['Boolean']['output']>;
  costumSort?: Maybe<Scalars['Int']['output']>;
  dureeExcercice?: Maybe<Scalars['Int']['output']>;
  dureeExcerciceUnite?: Maybe<Scalars['Int']['output']>;
  felicitations?: Maybe<Array<Maybe<FelicitationsPav>>>;
  id?: Maybe<Scalars['String']['output']>;
  nombreDeProposition?: Maybe<Scalars['Int']['output']>;
  noteArme?: Maybe<Scalars['Int']['output']>;
  noteDiplome?: Maybe<NoteDiplome>;
  noteGlobale?: Maybe<Scalars['Int']['output']>;
  noteRegionale?: Maybe<Scalars['Int']['output']>;
  personnel?: Maybe<DPersonnel>;
  ponderation?: Maybe<CritereDePonderation>;
  sanctions?: Maybe<Array<Maybe<SanctionsPav>>>;
};

export type PavDtoInput = {
  ancienneteDansLeGrade: Scalars['Int']['input'];
  anne: Scalars['Int']['input'];
  chef: Scalars['Boolean']['input'];
  dureeExcercice: Scalars['Int']['input'];
  dureeExcerciceUnite: Scalars['Int']['input'];
  felicitationsPavs?: InputMaybe<Array<InputMaybe<FelicitationDtoInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  idNoteDiplome?: InputMaybe<Scalars['String']['input']>;
  idPonderation?: InputMaybe<Scalars['String']['input']>;
  matricule?: InputMaybe<Scalars['String']['input']>;
  nombreDeProposition: Scalars['Int']['input'];
  noteArme: Scalars['Int']['input'];
  noteGlobale: Scalars['Int']['input'];
  noteRegionale: Scalars['Int']['input'];
  sanctionsPavs?: InputMaybe<Array<InputMaybe<SanctionDtoInput>>>;
};

export type PersonnelNote = {
  __typename?: 'PersonnelNote';
  authorizedUsers?: Maybe<Array<Maybe<User>>>;
  color?: Maybe<Scalars['String']['output']>;
  dateCreation?: Maybe<Scalars['LocalDateTime']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  observation?: Maybe<Scalars['String']['output']>;
  pamOff2024?: Maybe<PamOff2024>;
  user?: Maybe<User>;
};

export type PersonnelNoteInput = {
  authorizedUsers?: InputMaybe<Array<InputMaybe<UserInput>>>;
  color?: InputMaybe<Scalars['String']['input']>;
  dateCreation?: InputMaybe<Scalars['LocalDateTime']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  observation?: InputMaybe<Scalars['String']['input']>;
  pamOff2024?: InputMaybe<PamOff2024Input>;
  user?: InputMaybe<UserInput>;
};

export type PersonnelNoteSearchParamsInput = {
  ownership?: InputMaybe<Scalars['String']['input']>;
  searchToken?: InputMaybe<Scalars['String']['input']>;
};

export type Photo = {
  __typename?: 'Photo';
  dateTaken?: Maybe<Scalars['LocalDateTime']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  grade?: Maybe<RhRGrade>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  personnel?: Maybe<DPersonnel>;
  photoData?: Maybe<Scalars['Base64String']['output']>;
  rotation?: Maybe<Scalars['Float']['output']>;
  thumbnails?: Maybe<Array<Maybe<Thumbnail>>>;
  translateX?: Maybe<Scalars['Float']['output']>;
  translateY?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type PhotoInput = {
  dateTaken?: InputMaybe<Scalars['LocalDateTime']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<RhRGradeInput>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  personnel?: InputMaybe<DPersonnelInput>;
  photoData?: InputMaybe<Scalars['Base64String']['input']>;
  rotation?: InputMaybe<Scalars['Float']['input']>;
  thumbnails?: InputMaybe<Array<InputMaybe<ThumbnailInput>>>;
  translateX?: InputMaybe<Scalars['Float']['input']>;
  translateY?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type PhotoWithFaces = {
  __typename?: 'PhotoWithFaces';
  photo?: Maybe<Photo>;
  rect?: Maybe<Rect>;
};

export type Priority = {
  __typename?: 'Priority';
  id?: Maybe<Scalars['Long']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  priorityAR?: Maybe<Scalars['String']['output']>;
  priorityFR?: Maybe<Scalars['String']['output']>;
};

export type PriorityInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  issues?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  priorityAR?: InputMaybe<Scalars['String']['input']>;
  priorityFR?: InputMaybe<Scalars['String']['input']>;
};

export type Privilege = {
  __typename?: 'Privilege';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type PrivilegeDto = {
  __typename?: 'PrivilegeDto';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type PrivilegeInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<RoleInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export enum PrivilegesEnum {
  ApplicationBugTracker = 'APPLICATION_BUG_TRACKER',
  ApplicationPam = 'APPLICATION_PAM',
  ApplicationPamDashboard = 'APPLICATION_PAM_DASHBOARD',
  ApplicationPamEtats = 'APPLICATION_PAM_ETATS',
  ApplicationPamNote = 'APPLICATION_PAM_NOTE',
  ApplicationPamPam = 'APPLICATION_PAM_PAM',
  ApplicationPamPav = 'APPLICATION_PAM_PAV',
  ApplicationPamPhotoEditor = 'APPLICATION_PAM_PHOTO_EDITOR',
  ApplicationRecrutement = 'APPLICATION_RECRUTEMENT',
  ApplicationSimulation = 'APPLICATION_SIMULATION',
  ApplicationTextReglementaire = 'APPLICATION_TEXT_REGLEMENTAIRE',
  ElasticSearch = 'ELASTIC_SEARCH',
  GestionCompte = 'GESTION_COMPTE',
  HabilitaionsProfileInfo = 'HABILITAIONS_PROFILE_INFO',
  Notifications = 'NOTIFICATIONS',
  OcrMonitoring = 'OCR_MONITORING',
  OcrResultDirectGrant = 'OCR_RESULT_DIRECT_GRANT',
  OcrResultPin = 'OCR_RESULT_PIN',
  PersonnelNotesSeeAll = 'PERSONNEL_NOTES_SEE_ALL',
  Print = 'PRINT',
  TextReglementairePref = 'TEXT_REGLEMENTAIRE_PREF',
  TextReglementairePref111111 = 'TEXT_REGLEMENTAIRE_PREF111111',
  UpdateConfidentialite = 'UPDATE_CONFIDENTIALITE',
  UpdateHabilitation = 'UPDATE_HABILITATION',
  Upload = 'UPLOAD'
}

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  members?: Maybe<Array<Maybe<User>>>;
  name?: Maybe<Scalars['String']['output']>;
  nameAr?: Maybe<Scalars['String']['output']>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  issues?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  members?: InputMaybe<Array<InputMaybe<UserInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameAr?: InputMaybe<Scalars['String']['input']>;
};

/** Query root */
export type Query = {
  __typename?: 'Query';
  allArmes?: Maybe<Array<Maybe<RhRArme>>>;
  allCatGrades?: Maybe<Array<Maybe<RhRCatGrade>>>;
  allCommandements?: Maybe<Array<Maybe<RhRCommandement>>>;
  allConfidentialites?: Maybe<Array<Maybe<Confidentialite>>>;
  allFolders?: Maybe<Array<Maybe<Folder>>>;
  allFoldersPaged?: Maybe<Page_Folder>;
  allGrades?: Maybe<Array<Maybe<RhRGrade>>>;
  allIssueTypes?: Maybe<Array<Maybe<IssueType>>>;
  allIssueTypesCount?: Maybe<Array<Maybe<TypesCountDto>>>;
  allIssues?: Maybe<Page_Issue>;
  allIssuesByProject?: Maybe<Page_Issue>;
  allIssuesByUser?: Maybe<Page_Issue>;
  allNotifications?: Maybe<Page_Notification>;
  allOcrResultConfidentialteNotDefined?: Maybe<Array<Maybe<OcrResultEntityJpa>>>;
  allOcrResultRelatios?: Maybe<Array<Maybe<OcrResultRelation>>>;
  allOcrResultUsersGrantsPaged?: Maybe<Page_OcrResultEntityJpa>;
  allPriorities?: Maybe<Array<Maybe<Priority>>>;
  allPrivileges?: Maybe<Array<Maybe<Privilege>>>;
  allPrivilegesByName?: Maybe<Array<Maybe<Privilege>>>;
  allPrivilegesByNamePaged?: Maybe<Page_Privilege>;
  allPrivilegesPaged?: Maybe<Page_Privilege>;
  allProjects?: Maybe<Array<Maybe<Project>>>;
  allProjectsPaged?: Maybe<Page_Project>;
  allRecrutemnts?: Maybe<Array<Maybe<Recrutement>>>;
  allRecrutemntsBySimulation?: Maybe<Array<Maybe<Recrutement>>>;
  allRecrutemntsV2?: Maybe<Array<Maybe<RecrutementV2>>>;
  allRecrutemntsV2BySimulation?: Maybe<Array<Maybe<RecrutementV2>>>;
  allRegionsMilitaires?: Maybe<Array<Maybe<RhRRegionMilitaire>>>;
  allReports?: Maybe<Array<Maybe<ReportsNames>>>;
  allRolesPaged?: Maybe<Page_Role>;
  allSeverities?: Maybe<Array<Maybe<Sevirity>>>;
  allStatus?: Maybe<Array<Maybe<Status>>>;
  allStatuseCount?: Maybe<Array<Maybe<StatusCountDto>>>;
  allTags?: Maybe<Array<Maybe<Tag>>>;
  allTypeTexteReglementaires?: Maybe<Array<Maybe<TypeTexteReglementaire>>>;
  allUsersPaged?: Maybe<Page_User>;
  armeById?: Maybe<RhRArme>;
  attachmentById?: Maybe<AttachmentDto>;
  attachmentsByIssue?: Maybe<Array<Maybe<AttachmentDto>>>;
  authorities?: Maybe<Array<Maybe<GrantedAuthority>>>;
  catGradById?: Maybe<RhRCatGrade>;
  commandementById?: Maybe<RhRCommandement>;
  cpuUsage_?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createDemandeInscription?: Maybe<DemandeInscriptionUser>;
  diskUsage?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']['output']>>>>>;
  enumsWrapperForCodeGeneration?: Maybe<EnumsWrapper>;
  favorite: Scalars['Boolean']['output'];
  favoriteFolder?: Maybe<Folder>;
  findAllCritereDePonderation?: Maybe<Page_CritereDePonderation>;
  findAllDemande?: Maybe<Array<Maybe<DemandeInscriptionUser>>>;
  findAllDemandeInscriptionRemaining?: Maybe<Array<Maybe<DemandeInscriptionUser>>>;
  findAllDemandesPaged?: Maybe<Page_DemandeInscriptionUser>;
  findAllFelicitions?: Maybe<Page_RFelicitation>;
  findAllNoteDiplome?: Maybe<Page_NoteDiplome>;
  findAllOcrResultByIds?: Maybe<Array<Maybe<OcrResultEntityJpa>>>;
  findAllOcrResultEntityByFoldersContaining?: Maybe<Page_OcrResultEntityJpa>;
  findAllOcrResultsPaged?: Maybe<Page_OcrResultEntityJpa>;
  findAllPamOff2024?: Maybe<Array<Maybe<PamOff2024>>>;
  findAllPav?: Maybe<Page_Pav>;
  findAllPersonnelNotesPaged?: Maybe<Page_PersonnelNote>;
  findAllRSanctions?: Maybe<Page_RSanction>;
  findAllRoles?: Maybe<Array<Maybe<Role>>>;
  findById?: Maybe<Pav>;
  findByMatricule?: Maybe<Pav>;
  findCritereDePonderation?: Maybe<CritereDePonderation>;
  findDistinctArmes?: Maybe<Array<Maybe<CountParArme>>>;
  findDistinctCsn?: Maybe<Array<Maybe<CountParCsn>>>;
  findDistinctDiplomesCiviles?: Maybe<Array<Maybe<CountParDiplomeCivile>>>;
  findDistinctDiplomesMilitaires?: Maybe<Array<Maybe<CountParDiplomeMilitaire>>>;
  findDistinctGrade?: Maybe<Array<Maybe<CountParGradeDto>>>;
  findDistinctPostes?: Maybe<Array<Maybe<CountParPostes>>>;
  findNoteDiplome?: Maybe<NoteDiplome>;
  findOcrResultEntityESbyId?: Maybe<OcrResultEntityElastic_2>;
  findPam2024?: Maybe<Page_PamOff2024>;
  findPamOff2024ById?: Maybe<PamOff2024>;
  findPersonnelNoteById?: Maybe<PersonnelNote>;
  findPersonnelNotes?: Maybe<Array<Maybe<PersonnelNote>>>;
  findPersonnelNotesByUser?: Maybe<Page_PersonnelNote>;
  findPersonnelNotesByUserAndPersonnel?: Maybe<Array<Maybe<PersonnelNote>>>;
  findPinnedOcrResults?: Maybe<Array<Maybe<OcrResultPinned>>>;
  findRStructureSnById?: Maybe<RhRStructureSn>;
  findReportById?: Maybe<ReportsNames>;
  findRoleById?: Maybe<Role>;
  findeDemandeById?: Maybe<DemandeInscriptionUser>;
  folder?: Maybe<Folder>;
  getThumbnailByMatriculeAndSize?: Maybe<Thumbnail>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  gradeById?: Maybe<RhRGrade>;
  habilitations?: Maybe<Array<Maybe<Habilitation>>>;
  isOcrJobRunning: Scalars['Boolean']['output'];
  issueById?: Maybe<Issue>;
  issueTypeById?: Maybe<IssueType>;
  loggedInAuthorities?: Maybe<Array<Maybe<GrantedAuthority>>>;
  memoryUsage_?: Maybe<MemoryUsage>;
  ocrResultByid?: Maybe<OcrResultEntityJpa>;
  ocrResultImagePrepared?: Maybe<Scalars['String']['output']>;
  ocrResultPdf?: Maybe<Scalars['String']['output']>;
  ocrResultRelation?: Maybe<OcrResultRelation>;
  ocrResultUserGrantsPaged?: Maybe<Page_OcrResultUserGrant>;
  ownedFolders?: Maybe<Array<Maybe<Folder>>>;
  photoById?: Maybe<Photo>;
  photoByMatricule?: Maybe<Array<Maybe<Photo>>>;
  photoDetails?: Maybe<ImageInfo>;
  privilegeById?: Maybe<Privilege>;
  projectById?: Maybe<Project>;
  recrutementByClass?: Maybe<Array<Maybe<Recrutement>>>;
  recrutementByTypeRecrutement?: Maybe<Array<Maybe<Recrutement>>>;
  recrutementByTypeRecrutementAndClass?: Maybe<Array<Maybe<Recrutement>>>;
  recrutementV2ByClass?: Maybe<Array<Maybe<RecrutementV2>>>;
  report?: Maybe<Scalars['String']['output']>;
  reportPam?: Maybe<Scalars['String']['output']>;
  reportPosteRealise?: Maybe<Array<Maybe<ReportPosteRealise>>>;
  satusById?: Maybe<Status>;
  searchIssues?: Maybe<Page_Issue>;
  searchUsersByToken?: Maybe<Page_User>;
  sevirityById?: Maybe<Sevirity>;
  simAgentsByStepAndSimulation?: Maybe<Page_SimAgent>;
  simulationById?: Maybe<Simulation>;
  simulations?: Maybe<Array<Maybe<Simulation>>>;
  tag?: Maybe<Tag>;
  threadInfo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  typeTexteReglementaireByLibFr?: Maybe<TypeTexteReglementaire>;
  user?: Maybe<User>;
  waitingForOcrAll?: Maybe<Page_OcrResultEntityJpa>;
};


/** Query root */
export type QueryAllFoldersPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllIssueTypesCountArgs = {
  projectId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAllIssuesArgs = {
  pageRequest?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllIssuesByProjectArgs = {
  pageRequest?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAllIssuesByUserArgs = {
  pageRequest?: InputMaybe<PaginationInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryAllNotificationsArgs = {
  pageable?: InputMaybe<PaginationInput>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryAllOcrResultUsersGrantsPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllPrivilegesByNameArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryAllPrivilegesByNamePagedArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllPrivilegesPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllProjectsPagedArgs = {
  pageRequest?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllRecrutemntsBySimulationArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAllRecrutemntsV2BySimulationArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAllRolesPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryAllStatuseCountArgs = {
  projectId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAllUsersPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryArmeByIdArgs = {
  armeId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAttachmentByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAttachmentsByIssueArgs = {
  issueId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryAuthoritiesArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryCatGradByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryCommandementByIdArgs = {
  id?: InputMaybe<Scalars['BigInteger']['input']>;
};


/** Query root */
export type QueryCreateDemandeInscriptionArgs = {
  demandeInscriptionUser?: InputMaybe<DemandeInscriptionUserInput>;
};


/** Query root */
export type QueryEnumsWrapperForCodeGenerationArgs = {
  enumsWrapper?: InputMaybe<EnumsWrapperInput>;
};


/** Query root */
export type QueryFavoriteArgs = {
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFavoriteFolderArgs = {
  userName?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindAllCritereDePonderationArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllDemandesPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllFelicitionsArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllNoteDiplomeArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllOcrResultByIdsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Query root */
export type QueryFindAllOcrResultEntityByFoldersContainingArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllOcrResultsPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllPavArgs = {
  idGrade?: InputMaybe<Scalars['Long']['input']>;
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindAllPersonnelNotesPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
  searchParams?: InputMaybe<PersonnelNoteSearchParamsInput>;
};


/** Query root */
export type QueryFindAllRSanctionsArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindByMatriculeArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindCritereDePonderationArgs = {
  chef: Scalars['Boolean']['input'];
  grade?: InputMaybe<Scalars['Long']['input']>;
  poste?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindNoteDiplomeArgs = {
  idGrade?: InputMaybe<Scalars['Long']['input']>;
  index_?: InputMaybe<Scalars['Int']['input']>;
};


/** Query root */
export type QueryFindOcrResultEntityESbyIdArgs = {
  fileId?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindPam2024Args = {
  filteringParams?: InputMaybe<FilteringParamsInput>;
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryFindPamOff2024ByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindPersonnelNoteByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryFindPersonnelNotesByUserArgs = {
  pageable?: InputMaybe<PaginationInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindPersonnelNotesByUserAndPersonnelArgs = {
  includeAllNotes: Scalars['Boolean']['input'];
  personnelId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindRStructureSnByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindReportByIdArgs = {
  name?: InputMaybe<ReportNames>;
};


/** Query root */
export type QueryFindRoleByIdArgs = {
  roleId?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFindeDemandeByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryFolderArgs = {
  folderId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryGetThumbnailByMatriculeAndSizeArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
};


/** Query root */
export type QueryGradeByIdArgs = {
  gradeId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryIssueByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryIssueTypeByIdArgs = {
  typeId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryOcrResultByidArgs = {
  fileSignatue?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryOcrResultImagePreparedArgs = {
  ocrResultid?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** Query root */
export type QueryOcrResultPdfArgs = {
  ocrResultid?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryOcrResultRelationArgs = {
  ocrResultRelationKey?: InputMaybe<OcrResultRelationKeyInput>;
};


/** Query root */
export type QueryOcrResultUserGrantsPagedArgs = {
  pageable?: InputMaybe<PaginationInput>;
};


/** Query root */
export type QueryOwnedFoldersArgs = {
  username_?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryPhotoByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryPhotoByMatriculeArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryPhotoDetailsArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  photoData?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryPrivilegeByIdArgs = {
  PrivilegeId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryProjectByIdArgs = {
  id?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryRecrutementByClassArgs = {
  class_?: InputMaybe<Scalars['Int']['input']>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryRecrutementByTypeRecrutementArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  typeRecrutement?: InputMaybe<TypeRecrutement>;
};


/** Query root */
export type QueryRecrutementByTypeRecrutementAndClassArgs = {
  classe_?: InputMaybe<Scalars['Int']['input']>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  typeRecrutement?: InputMaybe<TypeRecrutement>;
};


/** Query root */
export type QueryRecrutementV2ByClassArgs = {
  class_?: InputMaybe<Scalars['Int']['input']>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryReportArgs = {
  format?: InputMaybe<ReportFormats>;
  reportName?: InputMaybe<ReportNames>;
  reportsSubFolder?: InputMaybe<ReportsSubFolder>;
};


/** Query root */
export type QueryReportPamArgs = {
  filteringParams?: InputMaybe<FilteringParamsInput>;
  format?: InputMaybe<ReportFormats>;
};


/** Query root */
export type QuerySatusByIdArgs = {
  satusId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QuerySearchIssuesArgs = {
  issueStatusId?: InputMaybe<Scalars['Long']['input']>;
  issueTypeId?: InputMaybe<Scalars['Long']['input']>;
  pageable?: InputMaybe<PaginationInput>;
  priorityId?: InputMaybe<Scalars['Long']['input']>;
  projectId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QuerySearchUsersByTokenArgs = {
  pageable?: InputMaybe<PaginationInput>;
  searchToken?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QuerySevirityByIdArgs = {
  sevirityId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QuerySimAgentsByStepAndSimulationArgs = {
  pageable?: InputMaybe<PaginationInput>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  step?: InputMaybe<Scalars['Int']['input']>;
};


/** Query root */
export type QuerySimulationByIdArgs = {
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryTagArgs = {
  tagId?: InputMaybe<Scalars['Long']['input']>;
};


/** Query root */
export type QueryTypeTexteReglementaireByLibFrArgs = {
  libFr?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryUserArgs = {
  matricule?: InputMaybe<Scalars['String']['input']>;
};


/** Query root */
export type QueryWaitingForOcrAllArgs = {
  pageable?: InputMaybe<PaginationInput>;
};

export type RDiplomeCivile = {
  __typename?: 'RDiplomeCivile';
  abrAr?: Maybe<Scalars['String']['output']>;
  abrFr?: Maybe<Scalars['String']['output']>;
  codeDipCiv?: Maybe<Scalars['String']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
};

export type RDiplomeCivileInput = {
  abrAr?: InputMaybe<Scalars['String']['input']>;
  abrFr?: InputMaybe<Scalars['String']['input']>;
  codeDipCiv?: InputMaybe<Scalars['String']['input']>;
  libAr?: InputMaybe<Scalars['String']['input']>;
  libFr?: InputMaybe<Scalars['String']['input']>;
};

export type RDiplomeMilitaire = {
  __typename?: 'RDiplomeMilitaire';
  abrAr?: Maybe<Scalars['String']['output']>;
  abrFr?: Maybe<Scalars['String']['output']>;
  codeDipMil?: Maybe<Scalars['String']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
};

export type RDiplomeMilitaireInput = {
  abrAr?: InputMaybe<Scalars['String']['input']>;
  abrFr?: InputMaybe<Scalars['String']['input']>;
  codeDipMil?: InputMaybe<Scalars['String']['input']>;
  libAr?: InputMaybe<Scalars['String']['input']>;
  libFr?: InputMaybe<Scalars['String']['input']>;
};

export type RFelicitation = {
  __typename?: 'RFelicitation';
  autorite?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
};

export type RSanction = {
  __typename?: 'RSanction';
  id?: Maybe<Scalars['String']['output']>;
  lib?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['Int']['output']>;
};

export type Recrutement = {
  __typename?: 'Recrutement';
  anneDeRecrutemnt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  nombre?: Maybe<Scalars['Int']['output']>;
  simulation?: Maybe<Simulation>;
  typeRecrutement?: Maybe<TypeRecrutement>;
};

export type RecrutementDtoInput = {
  anneDeRecrutemnt?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  nombre?: InputMaybe<Scalars['Int']['input']>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  typeRecrutement?: InputMaybe<TypeRecrutement>;
};

export type RecrutementV2 = {
  __typename?: 'RecrutementV2';
  EMP?: Maybe<Scalars['String']['output']>;
  FF?: Maybe<Scalars['String']['output']>;
  FS_L?: Maybe<Scalars['String']['output']>;
  FS_M?: Maybe<Scalars['String']['output']>;
  anneDeRecrutemnt?: Maybe<Scalars['Int']['output']>;
  simulation?: Maybe<Simulation>;
};

export type RecrutementV2DtoInput = {
  anneDeRecrutemnt?: InputMaybe<Scalars['Int']['input']>;
  emp?: InputMaybe<Scalars['String']['input']>;
  ff?: InputMaybe<Scalars['String']['input']>;
  fs_L?: InputMaybe<Scalars['String']['input']>;
  fs_M?: InputMaybe<Scalars['String']['input']>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
};

export type Rect = {
  __typename?: 'Rect';
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
  x: Scalars['Int']['output'];
  y: Scalars['Int']['output'];
};

export enum ReportFormats {
  Pdf = 'PDF',
  Word = 'WORD'
}

export enum ReportNames {
  CountPosteGradeCrossTab = 'CountPosteGradeCrossTab',
  PamRetretable = 'PamRetretable',
  TedPostes = 'TedPostes',
  ListPam = 'listPam',
  ListPav = 'listPav',
  PavNotminatifParGrade = 'pavNotminatifParGrade'
}

export type ReportPosteRealise = {
  __typename?: 'ReportPosteRealise';
  poste?: Maybe<Scalars['String']['output']>;
  pourcentage?: Maybe<Scalars['BigInteger']['output']>;
  realise?: Maybe<Scalars['BigInteger']['output']>;
  ted?: Maybe<Scalars['BigInteger']['output']>;
};

export type ReportsNames = {
  __typename?: 'ReportsNames';
  fileName?: Maybe<Scalars['String']['output']>;
  get_order?: Maybe<Scalars['Int']['output']>;
  nomAR?: Maybe<Scalars['String']['output']>;
  nomFR?: Maybe<Scalars['String']['output']>;
  obs?: Maybe<Scalars['String']['output']>;
};

export enum ReportsSubFolder {
  Pam = 'pam',
  Recrutement = 'recrutement',
  Rh = 'rh',
  TexteReglementaire = 'texteReglementaire'
}

export type RhPoste = {
  __typename?: 'RhPoste';
  idPoste?: Maybe<Scalars['String']['output']>;
  trie_?: Maybe<Scalars['Int']['output']>;
};

export type RhPosteInput = {
  idPoste?: InputMaybe<Scalars['String']['input']>;
  trie_?: InputMaybe<Scalars['Int']['input']>;
};

export type RhRArme = {
  __typename?: 'RhRArme';
  commandement?: Maybe<RhRCommandement>;
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  id?: Maybe<Scalars['Long']['output']>;
  libArmeAr?: Maybe<Scalars['String']['output']>;
  libArmeFr?: Maybe<Scalars['String']['output']>;
};

export type RhRArmeInput = {
  commandement?: InputMaybe<RhRCommandementInput>;
  id?: InputMaybe<Scalars['Long']['input']>;
  libArmeAr?: InputMaybe<Scalars['String']['input']>;
  libArmeFr?: InputMaybe<Scalars['String']['input']>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
};

export type RhRArmementTed = {
  __typename?: 'RhRArmementTed';
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  id?: Maybe<Scalars['BigInteger']['output']>;
  libArmementAr?: Maybe<Scalars['String']['output']>;
  libArmementFr?: Maybe<Scalars['String']['output']>;
};

export type RhRArmementTedInput = {
  id?: InputMaybe<Scalars['BigInteger']['input']>;
  libArmementAr?: InputMaybe<Scalars['String']['input']>;
  libArmementFr?: InputMaybe<Scalars['String']['input']>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
};

export type RhRCatGrade = {
  __typename?: 'RhRCatGrade';
  cat?: Maybe<Scalars['String']['output']>;
  catGrade?: Maybe<Scalars['String']['output']>;
  getrGrades?: Maybe<Array<Maybe<RhRGrade>>>;
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  libCatAr?: Maybe<Scalars['String']['output']>;
  libCatFr?: Maybe<Scalars['String']['output']>;
  libCatGradeAr?: Maybe<Scalars['String']['output']>;
  libCatGradeFr?: Maybe<Scalars['String']['output']>;
};

export type RhRCatGradeInput = {
  cat?: InputMaybe<Scalars['String']['input']>;
  catGrade?: InputMaybe<Scalars['String']['input']>;
  libCatAr?: InputMaybe<Scalars['String']['input']>;
  libCatFr?: InputMaybe<Scalars['String']['input']>;
  libCatGradeAr?: InputMaybe<Scalars['String']['input']>;
  libCatGradeFr?: InputMaybe<Scalars['String']['input']>;
  rGrades?: InputMaybe<Array<InputMaybe<RhRGradeInput>>>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
};

export type RhRCodeGeo = {
  __typename?: 'RhRCodeGeo';
  id?: Maybe<Scalars['Long']['output']>;
  libApcAr?: Maybe<Scalars['String']['output']>;
  libApcFr?: Maybe<Scalars['String']['output']>;
  libWilaya?: Maybe<Scalars['String']['output']>;
  runites?: Maybe<Array<Maybe<RhRunite>>>;
  trans?: Maybe<Scalars['String']['output']>;
};

export type RhRCodeGeoInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  libApcAr?: InputMaybe<Scalars['String']['input']>;
  libApcFr?: InputMaybe<Scalars['String']['input']>;
  libWilaya?: InputMaybe<Scalars['String']['input']>;
  runites?: InputMaybe<Array<InputMaybe<RhRuniteInput>>>;
  trans?: InputMaybe<Scalars['String']['input']>;
};

export type RhRCommandement = {
  __typename?: 'RhRCommandement';
  RArmes?: Maybe<Array<Maybe<RhRArme>>>;
  id?: Maybe<Scalars['BigInteger']['output']>;
  libCommandementAr?: Maybe<Scalars['String']['output']>;
  libCommandementFr?: Maybe<Scalars['String']['output']>;
};

export type RhRCommandementInput = {
  id?: InputMaybe<Scalars['BigInteger']['input']>;
  libCommandementAr?: InputMaybe<Scalars['String']['input']>;
  libCommandementFr?: InputMaybe<Scalars['String']['input']>;
  rarmes?: InputMaybe<Array<InputMaybe<RhRArmeInput>>>;
};

export type RhRGrade = {
  __typename?: 'RhRGrade';
  abrGradeAr?: Maybe<Scalars['String']['output']>;
  abrGradeFr?: Maybe<Scalars['String']['output']>;
  grade?: Maybe<Scalars['Long']['output']>;
  gradeInf?: Maybe<Scalars['BigInteger']['output']>;
  libGradeAr?: Maybe<Scalars['String']['output']>;
  libGradeArDetermine?: Maybe<Scalars['String']['output']>;
  libGradeFr?: Maybe<Scalars['String']['output']>;
  rhRCatGrade?: Maybe<RhRCatGrade>;
};

export type RhRGradeInput = {
  abrGradeAr?: InputMaybe<Scalars['String']['input']>;
  abrGradeFr?: InputMaybe<Scalars['String']['input']>;
  grade?: InputMaybe<Scalars['Long']['input']>;
  gradeInf?: InputMaybe<Scalars['BigInteger']['input']>;
  libGradeAr?: InputMaybe<Scalars['String']['input']>;
  libGradeArDetermine?: InputMaybe<Scalars['String']['input']>;
  libGradeFr?: InputMaybe<Scalars['String']['input']>;
  rhRCatGrade?: InputMaybe<RhRCatGradeInput>;
};

export type RhRQualification = {
  __typename?: 'RhRQualification';
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  id?: Maybe<Scalars['Long']['output']>;
  libQualificatinFr?: Maybe<Scalars['String']['output']>;
  libQualificationAr?: Maybe<Scalars['String']['output']>;
  tri?: Maybe<Scalars['Long']['output']>;
};

export type RhRQualificationInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  libQualificatinFr?: InputMaybe<Scalars['String']['input']>;
  libQualificationAr?: InputMaybe<Scalars['String']['input']>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
  tri?: InputMaybe<Scalars['Long']['input']>;
};

export type RhRRegionMilitaire = {
  __typename?: 'RhRRegionMilitaire';
  id?: Maybe<Scalars['Long']['output']>;
  libAbrRegionAr?: Maybe<Scalars['String']['output']>;
  libAbrRegionFr?: Maybe<Scalars['String']['output']>;
  libRegionAr?: Maybe<Scalars['String']['output']>;
  libRegionFr?: Maybe<Scalars['String']['output']>;
  runites?: Maybe<Array<Maybe<RhRunite>>>;
  trie?: Maybe<Scalars['String']['output']>;
};

export type RhRRegionMilitaireInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  libAbrRegionAr?: InputMaybe<Scalars['String']['input']>;
  libAbrRegionFr?: InputMaybe<Scalars['String']['input']>;
  libRegionAr?: InputMaybe<Scalars['String']['input']>;
  libRegionFr?: InputMaybe<Scalars['String']['input']>;
  runites?: InputMaybe<Array<InputMaybe<RhRuniteInput>>>;
  trie?: InputMaybe<Scalars['String']['input']>;
};

export type RhRSpecialiteTed = {
  __typename?: 'RhRSpecialiteTed';
  getrTeds?: Maybe<Array<Maybe<RhRTed>>>;
  id?: Maybe<Scalars['BigInteger']['output']>;
  libSpecialiteAr?: Maybe<Scalars['String']['output']>;
  libSpecialiteFr?: Maybe<Scalars['String']['output']>;
};

export type RhRSpecialiteTedInput = {
  id?: InputMaybe<Scalars['BigInteger']['input']>;
  libSpecialiteAr?: InputMaybe<Scalars['String']['input']>;
  libSpecialiteFr?: InputMaybe<Scalars['String']['input']>;
  rTeds?: InputMaybe<Array<InputMaybe<RhRTedInput>>>;
};

export type RhRStructureSn = {
  __typename?: 'RhRStructureSn';
  fils?: Maybe<Array<Maybe<RhRStructureSn>>>;
  id?: Maybe<Scalars['String']['output']>;
  pere?: Maybe<RhRStructureSn>;
  runite?: Maybe<RhRunite>;
  typeStructureSn?: Maybe<RhRTypeStructureSn>;
};

export type RhRStructureSnInput = {
  fils?: InputMaybe<Array<InputMaybe<RhRStructureSnInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  pere?: InputMaybe<RhRStructureSnInput>;
  runite?: InputMaybe<RhRuniteInput>;
  typeStructureSn?: InputMaybe<RhRTypeStructureSnInput>;
};

export type RhRTed = {
  __typename?: 'RhRTed';
  arme?: Maybe<RhRArme>;
  armementTed?: Maybe<RhRArmementTed>;
  catGrade?: Maybe<RhRCatGrade>;
  habilitation?: Maybe<Habilitation>;
  id?: Maybe<Scalars['Long']['output']>;
  nombre?: Maybe<Scalars['Int']['output']>;
  observation?: Maybe<Scalars['String']['output']>;
  qualification?: Maybe<RhRQualification>;
  specialiteTed?: Maybe<RhRSpecialiteTed>;
  typeStructureSn?: Maybe<RhRTypeStructureSn>;
};

export type RhRTedInput = {
  arme?: InputMaybe<RhRArmeInput>;
  armementTed?: InputMaybe<RhRArmementTedInput>;
  catGrade?: InputMaybe<RhRCatGradeInput>;
  habilitation?: InputMaybe<HabilitationInput>;
  id?: InputMaybe<Scalars['Long']['input']>;
  nombre?: InputMaybe<Scalars['Int']['input']>;
  observation?: InputMaybe<Scalars['String']['input']>;
  qualification?: InputMaybe<RhRQualificationInput>;
  specialiteTed?: InputMaybe<RhRSpecialiteTedInput>;
  typeStructureSn?: InputMaybe<RhRTypeStructureSnInput>;
};

export type RhRTypeStructureSn = {
  __typename?: 'RhRTypeStructureSn';
  abrAr?: Maybe<Scalars['String']['output']>;
  abrFr?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  libAr?: Maybe<Scalars['String']['output']>;
  libFr?: Maybe<Scalars['String']['output']>;
  structureSn?: Maybe<Array<Maybe<RhRStructureSn>>>;
};

export type RhRTypeStructureSnInput = {
  abrAr?: InputMaybe<Scalars['String']['input']>;
  abrFr?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  libAr?: InputMaybe<Scalars['String']['input']>;
  libFr?: InputMaybe<Scalars['String']['input']>;
  structureSn?: InputMaybe<Array<InputMaybe<RhRStructureSnInput>>>;
};

export type RhRunite = {
  __typename?: 'RhRunite';
  abreviationAr?: Maybe<Scalars['String']['output']>;
  abreviationFr?: Maybe<Scalars['String']['output']>;
  dessoute?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  libUniteeAr?: Maybe<Scalars['String']['output']>;
  libUniteeFr?: Maybe<Scalars['String']['output']>;
  lieuUnite?: Maybe<RhRCodeGeo>;
  regionMilitaire?: Maybe<RhRRegionMilitaire>;
};

export type RhRuniteInput = {
  abreviationAr?: InputMaybe<Scalars['String']['input']>;
  abreviationFr?: InputMaybe<Scalars['String']['input']>;
  dessoute?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  libUniteeAr?: InputMaybe<Scalars['String']['input']>;
  libUniteeFr?: InputMaybe<Scalars['String']['input']>;
  lieuUnite?: InputMaybe<RhRCodeGeoInput>;
  regionMilitaire?: InputMaybe<RhRRegionMilitaireInput>;
};

export type Role = {
  __typename?: 'Role';
  compositeRoles?: Maybe<Array<Maybe<Role>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  privileges?: Maybe<Array<Maybe<Privilege>>>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type RoleDto = {
  __typename?: 'RoleDto';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type RoleDtoInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type RoleInput = {
  compositeRoles?: InputMaybe<Array<InputMaybe<RoleInput>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privileges?: InputMaybe<Array<InputMaybe<PrivilegeInput>>>;
  users?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export enum RolesEnum {
  RoleBf = 'ROLE_BF',
  RoleHdt = 'ROLE_HDT',
  RoleOff = 'ROLE_OFF',
  RolePca = 'ROLE_PCA',
  RoleSdrh = 'ROLE_SDRH',
  RoleSoff = 'ROLE_SOFF'
}

export type SanctionDtoInput = {
  idPav?: InputMaybe<Scalars['String']['input']>;
  idSanction?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['Long']['input']>;
};

export type SanctionsPav = {
  __typename?: 'SanctionsPav';
  id?: Maybe<SanctionsPavId>;
  nombre?: Maybe<Scalars['Long']['output']>;
  pav?: Maybe<Pav>;
  sanctions?: Maybe<RSanction>;
};

export type SanctionsPavId = {
  __typename?: 'SanctionsPavId';
  pavId?: Maybe<Scalars['String']['output']>;
  sanctionsId?: Maybe<Scalars['String']['output']>;
};

export type Sevirity = {
  __typename?: 'Sevirity';
  id?: Maybe<Scalars['Long']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  sevirityAR?: Maybe<Scalars['String']['output']>;
  sevirityFR?: Maybe<Scalars['String']['output']>;
};

export type SevirityInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  issues?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  sevirityAR?: InputMaybe<Scalars['String']['input']>;
  sevirityFR?: InputMaybe<Scalars['String']['input']>;
};

export type SimAgent = {
  __typename?: 'SimAgent';
  age?: Maybe<Scalars['Int']['output']>;
  anicenneteGrade?: Maybe<Scalars['Int']['output']>;
  anneDeService?: Maybe<Scalars['Int']['output']>;
  arme?: Maybe<RhRArme>;
  class_?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<RhRGrade>;
  nom?: Maybe<Scalars['String']['output']>;
  noma?: Maybe<Scalars['String']['output']>;
  nombreDeProposition?: Maybe<Scalars['Int']['output']>;
  pnom?: Maybe<Scalars['String']['output']>;
  pnoma?: Maybe<Scalars['String']['output']>;
  simAgentId?: Maybe<SimAgentId>;
  simulation?: Maybe<Simulation>;
  typeRecrutement?: Maybe<TypeRecrutement>;
};

export type SimAgentDtoInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  anicenneteGrade?: InputMaybe<Scalars['Int']['input']>;
  anneDeService?: InputMaybe<Scalars['Int']['input']>;
  class_?: InputMaybe<Scalars['Int']['input']>;
  idArme?: InputMaybe<Scalars['Long']['input']>;
  idGrade?: InputMaybe<Scalars['Long']['input']>;
  idSimulation?: InputMaybe<Scalars['Long']['input']>;
  nom?: InputMaybe<Scalars['String']['input']>;
  noma?: InputMaybe<Scalars['String']['input']>;
  nombreDeProposition?: InputMaybe<Scalars['Int']['input']>;
  pnom?: InputMaybe<Scalars['String']['input']>;
  pnoma?: InputMaybe<Scalars['String']['input']>;
  simAgentId?: InputMaybe<SimAgentIdInput>;
  typeRecrutement?: InputMaybe<TypeRecrutement>;
};

export type SimAgentId = {
  __typename?: 'SimAgentId';
  id?: Maybe<Scalars['Long']['output']>;
  step?: Maybe<Scalars['Int']['output']>;
};

export type SimAgentIdInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  step?: InputMaybe<Scalars['Int']['input']>;
};

export type Simulation = {
  __typename?: 'Simulation';
  dateDebut?: Maybe<Scalars['LocalDateTime']['output']>;
  dateFin?: Maybe<Scalars['LocalDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfSteps?: Maybe<Scalars['Int']['output']>;
  recrutements?: Maybe<Array<Maybe<Recrutement>>>;
  simAgents?: Maybe<Array<Maybe<SimAgent>>>;
};

export type SimulationDtoInput = {
  dateDebut?: InputMaybe<Scalars['LocalDateTime']['input']>;
  dateFin?: InputMaybe<Scalars['LocalDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Long']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numberOfSteps?: InputMaybe<Scalars['Int']['input']>;
};

export type Sort = {
  __typename?: 'Sort';
  orders: Array<Order>;
};

export type SortInput = {
  orders: Array<OrderInput>;
};

export type Sorting = {
  __typename?: 'Sorting';
  orders: Array<Order>;
};

export type Status = {
  __typename?: 'Status';
  id?: Maybe<Scalars['Long']['output']>;
  issueList?: Maybe<Array<Maybe<Issue>>>;
  statusAn?: Maybe<Scalars['String']['output']>;
  statusAr?: Maybe<Scalars['String']['output']>;
  statusFr?: Maybe<Scalars['String']['output']>;
};

export type StatusCountDto = {
  __typename?: 'StatusCountDto';
  count_?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  statusAn?: Maybe<Scalars['String']['output']>;
  statusAr?: Maybe<Scalars['String']['output']>;
  statusFr?: Maybe<Scalars['String']['output']>;
};

export type StatusInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  issueList?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  statusAn?: InputMaybe<Scalars['String']['input']>;
  statusAr?: InputMaybe<Scalars['String']['input']>;
  statusFr?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  id?: Maybe<Scalars['Long']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export type TagInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  issues?: InputMaybe<Array<InputMaybe<IssueInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  id?: Maybe<Scalars['Long']['output']>;
  photo?: Maybe<Photo>;
  thumbData?: Maybe<Scalars['Base64String']['output']>;
  thumbSize: Scalars['Int']['output'];
};

export type ThumbnailInput = {
  id?: InputMaybe<Scalars['Long']['input']>;
  photo?: InputMaybe<PhotoInput>;
  thumbData?: InputMaybe<Scalars['Base64String']['input']>;
  thumbSize: Scalars['Int']['input'];
};

export enum TypeRecrutement {
  Emp = 'EMP',
  Ff = 'FF',
  FsL = 'FS_L',
  FsM = 'FS_M'
}

export type TypeTexteReglementaire = {
  __typename?: 'TypeTexteReglementaire';
  id?: Maybe<Scalars['String']['output']>;
  libTypeTexteAr?: Maybe<Scalars['String']['output']>;
  libTypeTexteFr?: Maybe<Scalars['String']['output']>;
};

export type TypeTexteReglementaireInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  libTypeTexteAr?: InputMaybe<Scalars['String']['input']>;
  libTypeTexteFr?: InputMaybe<Scalars['String']['input']>;
};

export type TypesCountDto = {
  __typename?: 'TypesCountDto';
  count_?: Maybe<Scalars['Long']['output']>;
  id?: Maybe<Scalars['Long']['output']>;
  typeAn?: Maybe<Scalars['String']['output']>;
  typeAr?: Maybe<Scalars['String']['output']>;
  typeFr?: Maybe<Scalars['String']['output']>;
};

export type Urgence = {
  __typename?: 'Urgence';
  id?: Maybe<Scalars['String']['output']>;
  libUrgenceAr?: Maybe<Scalars['String']['output']>;
  libUrgenceFr?: Maybe<Scalars['String']['output']>;
};

export type UrgenceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  libUrgenceAr?: InputMaybe<Scalars['String']['input']>;
  libUrgenceFr?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  accountNonExpired: Scalars['Boolean']['output'];
  accountNonLocked: Scalars['Boolean']['output'];
  authorities?: Maybe<Array<Maybe<GrantedAuthority>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  credentialsNonExpired: Scalars['Boolean']['output'];
  demandeInscription?: Maybe<DemandeInscriptionUser>;
  enabled: Scalars['Boolean']['output'];
  folders?: Maybe<Array<Maybe<Folder>>>;
  foldersGranted?: Maybe<Array<Maybe<Folder>>>;
  habilitation?: Maybe<Habilitation>;
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['String']['output']>;
  ocrResultUserGrants?: Maybe<Array<Maybe<OcrResultUserGrant>>>;
  password?: Maybe<Scalars['String']['output']>;
  personnel?: Maybe<DPersonnel>;
  personnelNotes?: Maybe<Array<Maybe<PersonnelNote>>>;
  privileges?: Maybe<Array<Maybe<Privilege>>>;
  privileges_restriction?: Maybe<Array<Maybe<Privilege>>>;
  roles?: Maybe<Array<Maybe<Role>>>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserDto = {
  __typename?: 'UserDto';
  id?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['String']['output']>;
  personnel?: Maybe<DPersonnelDto>;
  privileges?: Maybe<Array<Maybe<PrivilegeDto>>>;
  privileges_restriction?: Maybe<Array<Maybe<PrivilegeDto>>>;
  roles?: Maybe<Array<Maybe<RoleDto>>>;
};

export enum UserGrants {
  Grant = 'GRANT',
  No = 'NO',
  Revoke = 'REVOKE'
}

export type UserInput = {
  comments?: InputMaybe<Array<InputMaybe<CommentInput>>>;
  demandeInscription?: InputMaybe<DemandeInscriptionUserInput>;
  folders?: InputMaybe<Array<InputMaybe<FolderInput>>>;
  foldersGranted?: InputMaybe<Array<InputMaybe<FolderInput>>>;
  habilitation?: InputMaybe<HabilitationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  locked?: InputMaybe<Scalars['String']['input']>;
  ocrResultUserGrants?: InputMaybe<Array<InputMaybe<OcrResultUserGrantInput>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  personnel?: InputMaybe<DPersonnelInput>;
  personnelNotes?: InputMaybe<Array<InputMaybe<PersonnelNoteInput>>>;
  privileges?: InputMaybe<Array<InputMaybe<PrivilegeInput>>>;
  privileges_restriction?: InputMaybe<Array<InputMaybe<PrivilegeInput>>>;
  roles?: InputMaybe<Array<InputMaybe<RoleInput>>>;
};

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { __typename?: 'Query', allProjects?: Array<{ __typename?: 'Project', id?: any | null, description?: string | null, nameAr?: string | null, name?: string | null, members?: Array<{ __typename?: 'User', personnel?: { __typename?: 'DPersonnel', id?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null, matricule?: string | null } | null } | null> | null } | null> | null };

export type BugProjectByIdQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type BugProjectByIdQuery = { __typename?: 'Query', projectById?: { __typename?: 'Project', id?: any | null, name?: string | null, nameAr?: string | null, description?: string | null, members?: Array<{ __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, matricule?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null } | null } | null } | null> | null } | null };

export type BugAllStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type BugAllStatusesQuery = { __typename?: 'Query', allStatus?: Array<{ __typename?: 'Status', id?: any | null, statusAn?: string | null, statusAr?: string | null, statusFr?: string | null } | null> | null };

export type GetAllIssuesByProjectPagedQueryVariables = Exact<{
  pageRequest?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GetAllIssuesByProjectPagedQuery = { __typename?: 'Query', allIssuesByProject?: { __typename?: 'Page_Issue', totalElements: any, totalPages: number, pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null, sort?: { __typename?: 'Sort', orders: Array<{ __typename?: 'Order', direction?: Direction | null, property: string }> } | null } | null, content?: Array<{ __typename?: 'Issue', id?: any | null, description?: string | null, title?: string | null, issueType?: { __typename?: 'IssueType', id?: any | null, typeAr?: string | null, typeFr?: string | null, typeAn?: string | null } | null, sevirity?: { __typename?: 'Sevirity', id?: any | null, sevirityFR?: string | null, sevirityAR?: string | null } | null, priority?: { __typename?: 'Priority', id?: any | null, priorityFR?: string | null, priorityAR?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id?: any | null, createdDate?: any | null, text?: string | null, createdBy?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null } | null } | null } | null> | null, assignee?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, status?: { __typename?: 'Status', id?: any | null, statusFr?: string | null, statusAr?: string | null } | null, creator?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, abrGradeAr?: string | null, abrGradeFr?: string | null, libGradeAr?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeFr?: string | null, libArmeAr?: string | null } | null } | null } | null, tags?: Array<{ __typename?: 'Tag', name?: string | null, id?: any | null } | null> | null, attachments?: Array<{ __typename?: 'Attachment', id?: any | null } | null> | null } | null> | null } | null };

export type AllPrioritiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPrioritiesQuery = { __typename?: 'Query', allPriorities?: Array<{ __typename?: 'Priority', id?: any | null, priorityAR?: string | null, priorityFR?: string | null } | null> | null };

export type AllSeveritiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSeveritiesQuery = { __typename?: 'Query', allSeverities?: Array<{ __typename?: 'Sevirity', id?: any | null, sevirityAR?: string | null, sevirityFR?: string | null } | null> | null };

export type AllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsQuery = { __typename?: 'Query', allTags?: Array<{ __typename?: 'Tag', id?: any | null, name?: string | null } | null> | null };

export type IssueByIdQueryVariables = Exact<{
  issueId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type IssueByIdQuery = { __typename?: 'Query', issueById?: { __typename?: 'Issue', id?: any | null, description?: string | null, title?: string | null, dateCreation?: any | null, issueType?: { __typename?: 'IssueType', id?: any | null, typeAr?: string | null, typeFr?: string | null, typeAn?: string | null } | null, sevirity?: { __typename?: 'Sevirity', id?: any | null, sevirityFR?: string | null, sevirityAR?: string | null } | null, priority?: { __typename?: 'Priority', id?: any | null, priorityFR?: string | null, priorityAR?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id?: any | null, createdDate?: any | null, text?: string | null, createdBy?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeFr?: string | null } | null } | null } | null } | null> | null, assignee?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, status?: { __typename?: 'Status', id?: any | null, statusFr?: string | null, statusAr?: string | null } | null, creator?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, grade?: { __typename?: 'RhRGrade', libGradeAr?: string | null, libGradeFr?: string | null, grade?: any | null } | null } | null } | null, attachments?: Array<{ __typename?: 'Attachment', id?: any | null } | null> | null, tags?: Array<{ __typename?: 'Tag', id?: any | null, name?: string | null } | null> | null } | null };

export type GetStatusByIdQueryVariables = Exact<{
  statusId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GetStatusByIdQuery = { __typename?: 'Query', satusById?: { __typename?: 'Status', id?: any | null, statusAr?: string | null, statusFr?: string | null, statusAn?: string | null } | null };

export type GetIssueTypeByIdQueryVariables = Exact<{
  typeId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GetIssueTypeByIdQuery = { __typename?: 'Query', issueTypeById?: { __typename?: 'IssueType', id?: any | null, typeAn?: string | null, typeFr?: string | null, typeAr?: string | null } | null };

export type AllIssueTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllIssueTypesQuery = { __typename?: 'Query', allIssueTypes?: Array<{ __typename?: 'IssueType', id?: any | null, typeAn?: string | null, typeAr?: string | null, typeFr?: string | null } | null> | null };

export type SevirityByIdQueryVariables = Exact<{
  sevirityId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type SevirityByIdQuery = { __typename?: 'Query', sevirityById?: { __typename?: 'Sevirity', id?: any | null, sevirityAR?: string | null, sevirityFR?: string | null } | null };

export type AttachmentByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AttachmentByIdQuery = { __typename?: 'Query', attachmentById?: { __typename?: 'AttachmentDto', id?: any | null, mimeType?: string | null, base64FileData?: string | null, issueId?: any | null, originalFileName?: string | null, size?: any | null } | null };

export type AttachmentsByIssueQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AttachmentsByIssueQuery = { __typename?: 'Query', attachmentsByIssue?: Array<{ __typename?: 'AttachmentDto', issueId?: any | null, id?: any | null, size?: any | null, originalFileName?: string | null, base64FileData?: string | null, mimeType?: string | null } | null> | null };

export type AllStatuseCountQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AllStatuseCountQuery = { __typename?: 'Query', allStatuseCount?: Array<{ __typename?: 'StatusCountDto', id?: any | null, statusAn?: string | null, statusFr?: string | null, statusAr?: string | null, count_?: any | null } | null> | null };

export type AllIssueTypesCountQueryVariables = Exact<{
  projectId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AllIssueTypesCountQuery = { __typename?: 'Query', allIssueTypesCount?: Array<{ __typename?: 'TypesCountDto', count_?: any | null, id?: any | null, typeAn?: string | null, typeFr?: string | null, typeAr?: string | null } | null> | null };

export type SearchIssuesQueryVariables = Exact<{
  issueStatusId?: InputMaybe<Scalars['Long']['input']>;
  issueTypeId?: InputMaybe<Scalars['Long']['input']>;
  priorityId?: InputMaybe<Scalars['Long']['input']>;
  pageable?: InputMaybe<PaginationInput>;
  projectId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type SearchIssuesQuery = { __typename?: 'Query', searchIssues?: { __typename?: 'Page_Issue', totalElements: any, totalPages: number, pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null, sort?: { __typename?: 'Sort', orders: Array<{ __typename?: 'Order', direction?: Direction | null, property: string }> } | null } | null, content?: Array<{ __typename?: 'Issue', id?: any | null, description?: string | null, title?: string | null, dateCreation?: any | null, issueType?: { __typename?: 'IssueType', id?: any | null, typeAr?: string | null, typeFr?: string | null, typeAn?: string | null } | null, sevirity?: { __typename?: 'Sevirity', id?: any | null, sevirityFR?: string | null, sevirityAR?: string | null } | null, priority?: { __typename?: 'Priority', id?: any | null, priorityFR?: string | null, priorityAR?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id?: any | null, createdDate?: any | null, text?: string | null, createdBy?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null } | null } | null } | null> | null, assignee?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, status?: { __typename?: 'Status', id?: any | null, statusFr?: string | null, statusAr?: string | null } | null, creator?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, abrGradeAr?: string | null, abrGradeFr?: string | null, libGradeAr?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeFr?: string | null, libArmeAr?: string | null } | null } | null } | null, tags?: Array<{ __typename?: 'Tag', name?: string | null, id?: any | null } | null> | null, attachments?: Array<{ __typename?: 'Attachment', id?: any | null } | null> | null } | null> | null } | null };

export type CreateIssueMutationVariables = Exact<{
  issue?: InputMaybe<IssueInputDtoInput>;
}>;


export type CreateIssueMutation = { __typename?: 'Mutation', createIssue?: { __typename?: 'Issue', id?: any | null, title?: string | null, description?: string | null, priority?: { __typename?: 'Priority', id?: any | null, priorityFR?: string | null, priorityAR?: string | null } | null, status?: { __typename?: 'Status', id?: any | null, statusAr?: string | null, statusFr?: string | null, statusAn?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id?: any | null, name?: string | null } | null> | null, sevirity?: { __typename?: 'Sevirity', id?: any | null, sevirityFR?: string | null, sevirityAR?: string | null } | null, issueType?: { __typename?: 'IssueType', typeFr?: string | null, typeAr?: string | null, typeAn?: string | null, id?: any | null } | null } | null };

export type UpdateIssueTypeMutationVariables = Exact<{
  issueId?: InputMaybe<Scalars['Long']['input']>;
  typeId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type UpdateIssueTypeMutation = { __typename?: 'Mutation', updateIssueType?: { __typename?: 'Issue', id?: any | null } | null };

export type UpdateIssueStatusMutationVariables = Exact<{
  issueId?: InputMaybe<Scalars['Long']['input']>;
  statusId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type UpdateIssueStatusMutation = { __typename?: 'Mutation', updateIssueStatus?: { __typename?: 'Issue', id?: any | null } | null };

export type UpdateIssueSevirityMutationVariables = Exact<{
  issueId?: InputMaybe<Scalars['Long']['input']>;
  sevirityId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type UpdateIssueSevirityMutation = { __typename?: 'Mutation', updateIssueSevirity?: { __typename?: 'Issue', id?: any | null } | null };

export type DeleteIssueCommentMutationVariables = Exact<{
  commentId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteIssueCommentMutation = { __typename?: 'Mutation', deleteIssueComment: boolean };

export type UpdateIssueCommentMutationVariables = Exact<{
  commentId?: InputMaybe<Scalars['Long']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateIssueCommentMutation = { __typename?: 'Mutation', updateIssueComment?: { __typename?: 'Comment', text?: string | null, id?: any | null, createdDate?: any | null, createdBy?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null, matricule?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null } | null } | null } | null } | null };

export type CreateIssueCommentMutationVariables = Exact<{
  text?: InputMaybe<Scalars['String']['input']>;
  issueId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type CreateIssueCommentMutation = { __typename?: 'Mutation', createIssueComment?: { __typename?: 'Comment', text?: string | null, id?: any | null, createdDate?: any | null, createdBy?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null, matricule?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null } | null } | null } | null } | null };

export type AddIssueTagMutationVariables = Exact<{
  issueId?: InputMaybe<Scalars['Long']['input']>;
  tagname?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddIssueTagMutation = { __typename?: 'Mutation', addIssueTag: boolean };

export type NotificationsQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
  user?: InputMaybe<Scalars['String']['input']>;
}>;


export type NotificationsQuery = { __typename?: 'Query', allNotifications?: { __typename?: 'Page_Notification', totalElements: any, pageable?: { __typename?: 'Pagination', pageSize?: number | null, pageNumber: number } | null, content?: Array<{ __typename?: 'Notification', id?: any | null, dateTime?: any | null, state?: NotificationState | null, emmitter?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, matricule?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null } | null } | null } | null, issue?: { __typename?: 'Issue', id?: any | null, title?: string | null, issueType?: { __typename?: 'IssueType', id?: any | null, typeAr?: string | null, typeFr?: string | null } | null } | null, notificationType?: { __typename?: 'NotificationType', id?: string | null, libAr?: string | null, libFr?: string | null } | null } | null> | null } | null };

export type ChangeNotificationStateMutationVariables = Exact<{
  notificationState?: InputMaybe<NotificationState>;
  notificationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type ChangeNotificationStateMutation = { __typename?: 'Mutation', changeNotificationState: boolean };

export type FindPam2024QueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
  filteringParams?: InputMaybe<FilteringParamsInput>;
}>;


export type FindPam2024Query = { __typename?: 'Query', findPam2024?: { __typename?: 'Page_PamOff2024', totalElements: any, totalPages: number, pageable?: { __typename?: 'Pagination', pageSize?: number | null, pageNumber: number, sort?: { __typename?: 'Sort', orders: Array<{ __typename?: 'Order', property: string, direction?: Direction | null }> } | null } | null, content?: Array<{ __typename?: 'PamOff2024', grade?: string | null, g?: any | null, noma?: string | null, pnoma?: string | null, libArmeAr?: string | null, arme?: any | null, matricule?: string | null, dureeN?: any | null, dureeS?: string | null, fonction?: string | null, ensFonction?: any | null, ens?: any | null, NMutation?: any | null, NDureeS?: number | null, poste?: string | null, csn?: string | null, promotionNumber?: number | null, DUREE_FONCT?: string | null, dip_civ?: string | null, dip_mil?: string | null, code_dip_civ?: string | null, code_dip_mil?: string | null, formation?: string | null, obs?: string | null, personnelNotes?: Array<{ __typename?: 'PersonnelNote', id?: any | null } | null> | null, structureSn?: { __typename?: 'RhRStructureSn', id?: string | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationAr?: string | null, abreviationFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libRegionFr?: string | null, libRegionAr?: string | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null } | null, ficheVoeuxes?: Array<{ __typename?: 'FicheVoeux', id?: { __typename?: 'FicheVoeuxId', matricule?: string | null, annee?: string | null } | null, rhRunite1?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite2?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite3?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null } | null> | null, demandeRadiations?: Array<{ __typename?: 'DemandeRadiation', dateDemande?: any | null, id?: any | null } | null> | null, dipmil?: { __typename?: 'RDiplomeMilitaire', abrFr?: string | null, codeDipMil?: string | null } | null, dipcivil?: { __typename?: 'RDiplomeCivile', abrFr?: string | null } | null } | null> | null } | null };

export type FindPamOff2024ByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindPamOff2024ByIdQuery = { __typename?: 'Query', findPamOff2024ById?: { __typename?: 'PamOff2024', grade?: string | null, g?: any | null, noma?: string | null, pnoma?: string | null, libArmeAr?: string | null, arme?: any | null, matricule?: string | null, dureeN?: any | null, dureeS?: string | null, fonction?: string | null, ensFonction?: any | null, ens?: any | null, NMutation?: any | null, NDureeS?: number | null, poste?: string | null, csn?: string | null, promotionNumber?: number | null, DUREE_FONCT?: string | null, dip_civ?: string | null, dip_mil?: string | null, code_dip_civ?: string | null, code_dip_mil?: string | null, formation?: string | null, obs?: string | null, personnelNotes?: Array<{ __typename?: 'PersonnelNote', id?: any | null } | null> | null, structureSn?: { __typename?: 'RhRStructureSn', id?: string | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationAr?: string | null, abreviationFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libRegionFr?: string | null, libRegionAr?: string | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null } | null, ficheVoeuxes?: Array<{ __typename?: 'FicheVoeux', id?: { __typename?: 'FicheVoeuxId', matricule?: string | null, annee?: string | null } | null, rhRunite1?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite2?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite3?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null } | null> | null, demandeRadiations?: Array<{ __typename?: 'DemandeRadiation', dateDemande?: any | null, id?: any | null } | null> | null, dipmil?: { __typename?: 'RDiplomeMilitaire', abrFr?: string | null } | null, dipcivil?: { __typename?: 'RDiplomeCivile', abrFr?: string | null } | null } | null };

export type FindDistinctArmesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctArmesQuery = { __typename?: 'Query', findDistinctArmes?: Array<{ __typename?: 'CountParArme', idArme?: any | null, libArme?: string | null, count_?: any | null } | null> | null };

export type FindDistinctGradeQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctGradeQuery = { __typename?: 'Query', findDistinctGrade?: Array<{ __typename?: 'CountParGradeDto', grade?: string | null, g?: any | null, count_?: any | null } | null> | null };

export type FindDistinctPostesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctPostesQuery = { __typename?: 'Query', findDistinctPostes?: Array<{ __typename?: 'CountParPostes', poste?: string | null, count_?: any | null, trie_?: number | null } | null> | null };

export type FindDistinctDiplomesCivilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctDiplomesCivilesQuery = { __typename?: 'Query', findDistinctDiplomesCiviles?: Array<{ __typename?: 'CountParDiplomeCivile', codeDipCiv?: string | null, abrFr?: string | null, abrAr?: string | null, libFr?: string | null, count_?: any | null } | null> | null };

export type FindDistinctDiplomesMilitairesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctDiplomesMilitairesQuery = { __typename?: 'Query', findDistinctDiplomesMilitaires?: Array<{ __typename?: 'CountParDiplomeMilitaire', codeDipMil?: string | null, abrAr?: string | null, abrFr?: string | null, libFr?: string | null, libAr?: string | null, count_?: any | null } | null> | null };

export type FindByQueryVariables = Exact<{
  name?: InputMaybe<ReportNames>;
}>;


export type FindByQuery = { __typename?: 'Query', findReportById?: { __typename?: 'ReportsNames', obs?: string | null, fileName?: string | null, nomAR?: string | null, nomFR?: string | null } | null };

export type AllReportsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllReportsQuery = { __typename?: 'Query', allReports?: Array<{ __typename?: 'ReportsNames', nomFR?: string | null, nomAR?: string | null, fileName?: string | null, obs?: string | null, get_order?: number | null } | null> | null };

export type FindDistinctCsnQueryVariables = Exact<{ [key: string]: never; }>;


export type FindDistinctCsnQuery = { __typename?: 'Query', findDistinctCsn?: Array<{ __typename?: 'CountParCsn', count_?: any | null, c?: string | null, csn?: string | null } | null> | null };

export type ReportPosteRealiseQueryVariables = Exact<{ [key: string]: never; }>;


export type ReportPosteRealiseQuery = { __typename?: 'Query', reportPosteRealise?: Array<{ __typename?: 'ReportPosteRealise', poste?: string | null, realise?: any | null, ted?: any | null, pourcentage?: any | null } | null> | null };

export type GetReportQueryVariables = Exact<{
  reportName?: InputMaybe<ReportNames>;
  format?: InputMaybe<ReportFormats>;
  reportsSubFolder?: InputMaybe<ReportsSubFolder>;
}>;


export type GetReportQuery = { __typename?: 'Query', report?: string | null };

export type AllRegionsMilitairesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRegionsMilitairesQuery = { __typename?: 'Query', allRegionsMilitaires?: Array<{ __typename?: 'RhRRegionMilitaire', id?: any | null, libRegionFr?: string | null, libRegionAr?: string | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null, trie?: string | null } | null> | null };

export type FindRStructureSnByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindRStructureSnByIdQuery = { __typename?: 'Query', findRStructureSnById?: { __typename?: 'RhRStructureSn', id?: string | null, pere?: { __typename?: 'RhRStructureSn', id?: string | null } | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null, libAr?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, abreviationAr?: string | null, abreviationFr?: string | null, libUniteeAr?: string | null, libUniteeFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null, fils?: Array<{ __typename?: 'RhRStructureSn', id?: string | null, pere?: { __typename?: 'RhRStructureSn', id?: string | null } | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null, libAr?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, abreviationAr?: string | null, abreviationFr?: string | null, libUniteeAr?: string | null, libUniteeFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null, fils?: Array<{ __typename?: 'RhRStructureSn', id?: string | null, pere?: { __typename?: 'RhRStructureSn', id?: string | null } | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null, libAr?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, abreviationAr?: string | null, abreviationFr?: string | null, libUniteeAr?: string | null, libUniteeFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null, fils?: Array<{ __typename?: 'RhRStructureSn', id?: string | null, pere?: { __typename?: 'RhRStructureSn', id?: string | null } | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null, libAr?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, abreviationAr?: string | null, abreviationFr?: string | null, libUniteeAr?: string | null, libUniteeFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null, fils?: Array<{ __typename?: 'RhRStructureSn', id?: string | null } | null> | null } | null> | null } | null> | null } | null> | null } | null };

export type AddDemandeRadiationMutationVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddDemandeRadiationMutation = { __typename?: 'Mutation', addDemandeRadiation: boolean };

export type DeleteDemandeRadiationMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteDemandeRadiationMutation = { __typename?: 'Mutation', deleteDemandeRadiation: boolean };

export type PhotoByMaticuleWithThumbsQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type PhotoByMaticuleWithThumbsQuery = { __typename?: 'Query', photoByMatricule?: Array<{ __typename?: 'Photo', id?: any | null, photoData?: any | null, format?: string | null, translateX?: number | null, translateY?: number | null, rotation?: number | null, width?: number | null, height?: number | null, personnel?: { __typename?: 'DPersonnel', id?: string | null, matricule?: string | null, noma?: string | null, pnoma?: string | null } | null, thumbnails?: Array<{ __typename?: 'Thumbnail', thumbData?: any | null, id?: any | null, thumbSize: number } | null> | null } | null> | null };

export type CreatePhotoMutationVariables = Exact<{
  ff?: InputMaybe<PhotoInput>;
}>;


export type CreatePhotoMutation = { __typename?: 'Mutation', createPhoto?: { __typename?: 'PhotoWithFaces', photo?: { __typename?: 'Photo', photoData?: any | null, format?: string | null, width?: number | null, height?: number | null, translateY?: number | null, rotation?: number | null, id?: any | null } | null, rect?: { __typename?: 'Rect', x: number, y: number, width: number, height: number } | null } | null };

export type UpdatePersonnelNoteGrantedUsersMutationVariables = Exact<{
  PsesonnelNoteId?: InputMaybe<Scalars['Long']['input']>;
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type UpdatePersonnelNoteGrantedUsersMutation = { __typename?: 'Mutation', updatePersonnelNoteGrantedUsers: boolean };

export type CreatePersonnelNoteMutationVariables = Exact<{
  note?: InputMaybe<PersonnelNoteInput>;
}>;


export type CreatePersonnelNoteMutation = { __typename?: 'Mutation', createPersonnelNote: boolean };

export type FindPersonnelNoteByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type FindPersonnelNoteByIdQuery = { __typename?: 'Query', findPersonnelNoteById?: { __typename?: 'PersonnelNote', id?: any | null, observation?: string | null, color?: string | null, authorizedUsers?: Array<{ __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null> | null, user?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, pamOff2024?: { __typename?: 'PamOff2024', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null };

export type FindPersonnelNotesByUserAndPersonnelQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  pesonnelId?: InputMaybe<Scalars['String']['input']>;
  includeAllNotes: Scalars['Boolean']['input'];
}>;


export type FindPersonnelNotesByUserAndPersonnelQuery = { __typename?: 'Query', findPersonnelNotesByUserAndPersonnel?: Array<{ __typename?: 'PersonnelNote', id?: any | null, dateCreation?: any | null, observation?: string | null, color?: string | null, user?: { __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, authorizedUsers?: Array<{ __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null, pamOff2024?: { __typename?: 'PamOff2024', trieAnciennete?: string | null } | null } | null } | null> | null, pamOff2024?: { __typename?: 'PamOff2024', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null> | null };

export type FindPersonnelNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindPersonnelNotesQuery = { __typename?: 'Query', findPersonnelNotes?: Array<{ __typename?: 'PersonnelNote', id?: any | null, observation?: string | null, color?: string | null, dateCreation?: any | null, authorizedUsers?: Array<{ __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null> | null, user?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null, pamOff2024?: { __typename?: 'PamOff2024', matricule?: string | null, noma?: string | null, pnoma?: string | null } | null } | null> | null };

export type FindAllPersonnelNotesPagedQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
  searchParams?: InputMaybe<PersonnelNoteSearchParamsInput>;
}>;


export type FindAllPersonnelNotesPagedQuery = { __typename?: 'Query', findAllPersonnelNotesPaged?: { __typename?: 'Page_PersonnelNote', totalPages: number, totalElements: any, content?: Array<{ __typename?: 'PersonnelNote', id?: any | null, dateCreation?: any | null, observation?: string | null, pamOff2024?: { __typename?: 'PamOff2024', matricule?: string | null, noma?: string | null, pnoma?: string | null, arme?: any | null, personnel?: { __typename?: 'DPersonnel', grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeArDetermine?: string | null, libGradeAr?: string | null, libGradeFr?: string | null } | null } | null } | null, user?: { __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeArDetermine?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null } | null } | null, authorizedUsers?: Array<{ __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null, libGradeArDetermine?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null } | null } | null> | null } | null> | null } | null };

export type FindPersonnelNotesByUserQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
  pageable?: InputMaybe<PaginationInput>;
}>;


export type FindPersonnelNotesByUserQuery = { __typename?: 'Query', findPersonnelNotesByUser?: { __typename?: 'Page_PersonnelNote', totalPages: number, totalElements: any, content?: Array<{ __typename?: 'PersonnelNote', id?: any | null, dateCreation?: any | null, observation?: string | null, pamOff2024?: { __typename?: 'PamOff2024', matricule?: string | null, noma?: string | null, pnoma?: string | null, arme?: any | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeArDetermine?: string | null, libGradeAr?: string | null, libGradeFr?: string | null } | null } | null } | null, user?: { __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeArDetermine?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null } | null } | null, authorizedUsers?: Array<{ __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null, libGradeArDetermine?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null } | null } | null> | null } | null> | null } | null };

export type DeletePersonnelNoteMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeletePersonnelNoteMutation = { __typename?: 'Mutation', deletePersonnelNote: boolean };

export type DeleteAuthorizedUserMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
  noteId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteAuthorizedUserMutation = { __typename?: 'Mutation', deleteAuthorizedUser: boolean };

export type UpdatePersonnelNoteContentMutationVariables = Exact<{
  noteContent?: InputMaybe<Scalars['String']['input']>;
  personnelId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type UpdatePersonnelNoteContentMutation = { __typename?: 'Mutation', updatePersonnelNoteContent: boolean };

export type FindByMatriculeQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindByMatriculeQuery = { __typename?: 'Query', findByMatricule?: { __typename?: 'Pav', ancienneteDansLeGrade?: number | null, anne?: number | null, chef?: boolean | null, dureeExcercice?: number | null, nombreDeProposition?: number | null, noteArme?: number | null, noteRegionale?: number | null, noteDiplome?: { __typename?: 'NoteDiplome', note?: number | null, lib?: string | null, id?: string | null } | null, felicitations?: Array<{ __typename?: 'FelicitationsPav', nombre?: any | null, felicitation?: { __typename?: 'RFelicitation', autorite?: string | null, note?: number | null } | null } | null> | null, sanctions?: Array<{ __typename?: 'SanctionsPav', nombre?: any | null, sanctions?: { __typename?: 'RSanction', lib?: string | null, note?: number | null } | null } | null> | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null, libArmeFr?: string | null } | null } | null } | null };

export type FindAllPavQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
  idGrade?: InputMaybe<Scalars['Long']['input']>;
}>;


export type FindAllPavQuery = { __typename?: 'Query', findAllPav?: { __typename?: 'Page_Pav', totalElements: any, totalPages: number, content?: Array<{ __typename?: 'Pav', noteGlobale?: number | null, ancienneteDansLeGrade?: number | null, dureeExcerciceUnite?: number | null, anne?: number | null, chef?: boolean | null, dureeExcercice?: number | null, nombreDeProposition?: number | null, noteArme?: number | null, noteRegionale?: number | null, id?: string | null, costumSort?: number | null, noteDiplome?: { __typename?: 'NoteDiplome', note?: number | null, lib?: string | null, id?: string | null } | null, ponderation?: { __typename?: 'CritereDePonderation', id?: string | null } | null, felicitations?: Array<{ __typename?: 'FelicitationsPav', nombre?: any | null, felicitation?: { __typename?: 'RFelicitation', autorite?: string | null, note?: number | null } | null, id?: { __typename?: 'FelicitationsPavId', felicitationsId?: string | null, pavId?: string | null } | null } | null> | null, sanctions?: Array<{ __typename?: 'SanctionsPav', nombre?: any | null, sanctions?: { __typename?: 'RSanction', lib?: string | null, note?: number | null, id?: string | null } | null, id?: { __typename?: 'SanctionsPavId', pavId?: string | null, sanctionsId?: string | null } | null } | null> | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null, libArmeFr?: string | null } | null, pamOff2024?: { __typename?: 'PamOff2024', grade?: string | null, g?: any | null, noma?: string | null, pnoma?: string | null, libArmeAr?: string | null, arme?: any | null, matricule?: string | null, dureeN?: any | null, dureeS?: string | null, fonction?: string | null, ensFonction?: any | null, ens?: any | null, NMutation?: any | null, NDureeS?: number | null, poste?: string | null, csn?: string | null, promotionNumber?: number | null, DUREE_FONCT?: string | null, dip_civ?: string | null, dip_mil?: string | null, code_dip_civ?: string | null, code_dip_mil?: string | null, formation?: string | null, obs?: string | null, trieAnciennete?: string | null, personnelNotes?: Array<{ __typename?: 'PersonnelNote', id?: any | null } | null> | null, structureSn?: { __typename?: 'RhRStructureSn', id?: string | null, typeStructureSn?: { __typename?: 'RhRTypeStructureSn', id?: string | null } | null, runite?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationAr?: string | null, abreviationFr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libRegionFr?: string | null, libRegionAr?: string | null, libAbrRegionAr?: string | null, libAbrRegionFr?: string | null } | null } | null } | null, ficheVoeuxes?: Array<{ __typename?: 'FicheVoeux', id?: { __typename?: 'FicheVoeuxId', matricule?: string | null, annee?: string | null } | null, rhRunite1?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite2?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null, rhRunite3?: { __typename?: 'RhRunite', id?: any | null, libUniteeAr?: string | null, abreviationFr?: string | null, abreviationAr?: string | null, regionMilitaire?: { __typename?: 'RhRRegionMilitaire', id?: any | null, libAbrRegionFr?: string | null, libAbrRegionAr?: string | null, libRegionAr?: string | null, libRegionFr?: string | null } | null } | null } | null> | null, demandeRadiations?: Array<{ __typename?: 'DemandeRadiation', dateDemande?: any | null, id?: any | null } | null> | null, dipmil?: { __typename?: 'RDiplomeMilitaire', abrFr?: string | null, codeDipMil?: string | null } | null, dipcivil?: { __typename?: 'RDiplomeCivile', abrFr?: string | null } | null } | null } | null } | null> | null, pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null } | null } | null };

export type FindAllSanctionsQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type FindAllSanctionsQuery = { __typename?: 'Query', findAllRSanctions?: { __typename?: 'Page_RSanction', content?: Array<{ __typename?: 'RSanction', id?: string | null, lib?: string | null, note?: number | null } | null> | null } | null };

export type FindCritereDePonderationQueryVariables = Exact<{
  chef: Scalars['Boolean']['input'];
  grade?: InputMaybe<Scalars['Long']['input']>;
  poste?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindCritereDePonderationQuery = { __typename?: 'Query', findCritereDePonderation?: { __typename?: 'CritereDePonderation', note?: number | null, id?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null } | null, poste?: { __typename?: 'RhPoste', idPoste?: string | null } | null } | null };

export type FindAllNoteDiplomeQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type FindAllNoteDiplomeQuery = { __typename?: 'Query', findAllNoteDiplome?: { __typename?: 'Page_NoteDiplome', content?: Array<{ __typename?: 'NoteDiplome', id?: string | null, index_?: number | null, lib?: string | null, note?: number | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeFr?: string | null } | null } | null> | null } | null };

export type FindAllFelicitionsQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type FindAllFelicitionsQuery = { __typename?: 'Query', findAllFelicitions?: { __typename?: 'Page_RFelicitation', content?: Array<{ __typename?: 'RFelicitation', autorite?: string | null, id?: string | null, note?: number | null } | null> | null } | null };

export type AddPavMutationVariables = Exact<{
  pav?: InputMaybe<PavDtoInput>;
}>;


export type AddPavMutation = { __typename?: 'Mutation', savePav?: { __typename?: 'Pav', id?: string | null } | null };

export type DeletePavMutationVariables = Exact<{
  pavId?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeletePavMutation = { __typename?: 'Mutation', deleteNote: boolean };

export type UpdateCostumSortMutationVariables = Exact<{
  costumSort?: InputMaybe<Scalars['Int']['input']>;
  pavId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateCostumSortMutation = { __typename?: 'Mutation', updateCostumSort: boolean };

export type GetOwnedFoldersQueryVariables = Exact<{
  username_: Scalars['String']['input'];
}>;


export type GetOwnedFoldersQuery = { __typename?: 'Query', ownedFolders?: Array<{ __typename?: 'Folder', id?: any | null, name?: string | null, description?: string | null } | null> | null };

export type FindAllOcrResultEntityByFoldersContainingQueryVariables = Exact<{
  folderId?: InputMaybe<Scalars['Long']['input']>;
  pagination?: InputMaybe<PaginationInput>;
}>;


export type FindAllOcrResultEntityByFoldersContainingQuery = { __typename?: 'Query', findAllOcrResultEntityByFoldersContaining?: { __typename?: 'Page_OcrResultEntityJpa', totalElements: any, content?: Array<{ __typename?: 'OcrResultEntityJpa', id?: string | null, numberOfPapers?: number | null, originalFileName?: string | null, ocrDone?: string | null, ocrResultUserGrants?: Array<{ __typename?: 'OcrResultUserGrant', id?: { __typename?: 'OcrResultUserGrantKey', type?: string | null, userId?: string | null, ocrResultId?: string | null } | null, user?: { __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null } | null } | null } | null> | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteAr?: string | null, libTypeTexteFr?: string | null } | null, folders?: Array<{ __typename?: 'Folder', id?: any | null, description?: string | null, name?: string | null } | null> | null, ocrResultPinned?: { __typename?: 'OcrResultPinned', id?: string | null } | null, confidentialite?: { __typename?: 'Confidentialite', id?: string | null, libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null } | null> | null, pageable?: { __typename?: 'Pagination', pageSize?: number | null, pageNumber: number } | null } | null };

export type GetFovoriteFolderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFovoriteFolderQuery = { __typename?: 'Query', favoriteFolder?: { __typename?: 'Folder', id?: any | null, description?: string | null } | null };

export type GetFolderQueryVariables = Exact<{
  folderId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GetFolderQuery = { __typename?: 'Query', folder?: { __typename?: 'Folder', id?: any | null, description?: string | null } | null };

export type GetPdfFileQueryVariables = Exact<{
  fileSignatue?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPdfFileQuery = { __typename?: 'Query', ocrResultByid?: { __typename?: 'OcrResultEntityJpa', originalFileName?: string | null, id?: string | null, ocrDone?: string | null, numberOfPapers?: number | null, reference?: string | null, dateReference?: any | null, executedAt?: any | null, terminatedAt?: any | null, folders?: Array<{ __typename?: 'Folder', id?: any | null, name?: string | null, description?: string | null } | null> | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', libTypeTexteFr?: string | null, libTypeTexteAr?: string | null } | null, confidentialite?: { __typename?: 'Confidentialite', libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null, id?: string | null } | null } | null };

export type FindAllOcrResultsPagedQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type FindAllOcrResultsPagedQuery = { __typename?: 'Query', findAllOcrResultsPaged?: { __typename?: 'Page_OcrResultEntityJpa', totalElements: any, numberOfElements: number, totalPages: number, pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null } | null, content?: Array<{ __typename?: 'OcrResultEntityJpa', terminatedAt?: any | null, originalFileName?: string | null, dateReference?: any | null, createdDate?: any | null, executedAt?: any | null, ocrDone?: string | null, owner?: { __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, id?: string | null, nom?: string | null, noma?: string | null, pnom?: string | null, pnoma?: string | null } | null } | null, folders?: Array<{ __typename?: 'Folder', id?: any | null, createdDate?: any | null } | null> | null } | null> | null } | null };

export type CpuUsageQueryVariables = Exact<{ [key: string]: never; }>;


export type CpuUsageQuery = { __typename?: 'Query', cpuUsage_?: Array<string | null> | null };

export type ThreadInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ThreadInfoQuery = { __typename?: 'Query', threadInfo?: Array<string | null> | null };

export type MemoryUsageQueryVariables = Exact<{ [key: string]: never; }>;


export type MemoryUsageQuery = { __typename?: 'Query', memoryUsage_?: { __typename?: 'MemoryUsage', committed: any, init: any, max: any, used: any } | null };

export type AllTypeTexteReglementairesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTypeTexteReglementairesQuery = { __typename?: 'Query', allTypeTexteReglementaires?: Array<{ __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteAr?: string | null, libTypeTexteFr?: string | null } | null> | null };

export type TypeTexteReglementaireByLibFrQueryVariables = Exact<{
  libFr?: InputMaybe<Scalars['String']['input']>;
}>;


export type TypeTexteReglementaireByLibFrQuery = { __typename?: 'Query', typeTexteReglementaireByLibFr?: { __typename?: 'TypeTexteReglementaire', libTypeTexteFr?: string | null, libTypeTexteAr?: string | null, id?: string | null } | null };

export type AllConfidentialitesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllConfidentialitesQuery = { __typename?: 'Query', allConfidentialites?: Array<{ __typename?: 'Confidentialite', id?: string | null, libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null> | null };

export type IsOcrJobRunningQueryVariables = Exact<{ [key: string]: never; }>;


export type IsOcrJobRunningQuery = { __typename?: 'Query', isOcrJobRunning: boolean };

export type OcrResultImagePreparedQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OcrResultImagePreparedQuery = { __typename?: 'Query', ocrResultImagePrepared?: string | null };

export type OcrResultPdfQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type OcrResultPdfQuery = { __typename?: 'Query', ocrResultPdf?: string | null };

export type FindPinnedOcrResultsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindPinnedOcrResultsQuery = { __typename?: 'Query', findPinnedOcrResults?: Array<{ __typename?: 'OcrResultPinned', ocrResult?: { __typename?: 'OcrResultEntityJpa', dateReference?: any | null, originalFileName?: string | null, numberOfPapers?: number | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteFr?: string | null, libTypeTexteAr?: string | null } | null, confidentialite?: { __typename?: 'Confidentialite', id?: string | null, libConfidentialiteFr?: string | null, libConfidentialiteAr?: string | null } | null } | null } | null> | null };

export type _FindAllOcrResultsPagedQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type _FindAllOcrResultsPagedQuery = { __typename?: 'Query', findAllOcrResultsPaged?: { __typename?: 'Page_OcrResultEntityJpa', content?: Array<{ __typename?: 'OcrResultEntityJpa', ocrDone?: string | null, originalFileName?: string | null, createdDate?: any | null } | null> | null } | null };

export type FindAllPinnedFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllPinnedFilesQuery = { __typename?: 'Query', findPinnedOcrResults?: Array<{ __typename?: 'OcrResultPinned', ocrResult?: { __typename?: 'OcrResultEntityJpa', id?: string | null, originalFileName?: string | null, dateReference?: any | null, reference?: string | null, numberOfPapers?: number | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteAr?: string | null, libTypeTexteFr?: string | null } | null, objects?: Array<{ __typename?: 'OcrResultRelation', subject?: { __typename?: 'OcrResultEntityJpa', id?: string | null, reference?: string | null, dateReference?: any | null, numberOfPapers?: number | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteAr?: string | null, libTypeTexteFr?: string | null } | null } | null, relationType?: { __typename?: 'OcrResultRelationType', id?: string | null, libTypeRelationAr?: string | null, libTypRelationFr?: string | null } | null } | null> | null, subjects?: Array<{ __typename?: 'OcrResultRelation', object?: { __typename?: 'OcrResultEntityJpa', reference?: string | null, dateReference?: any | null, numberOfPapers?: number | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteFr?: string | null, libTypeTexteAr?: string | null } | null } | null, relationType?: { __typename?: 'OcrResultRelationType', id?: string | null, libTypRelationFr?: string | null, libTypeRelationAr?: string | null } | null } | null> | null, confidentialite?: { __typename?: 'Confidentialite', id?: string | null, libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null } | null } | null> | null };

export type GetLoggedInUserQueryVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetLoggedInUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: string | null, accountNonExpired: boolean, accountNonLocked: boolean, authorities?: Array<{ __typename?: 'GrantedAuthority', authority?: string | null } | null> | null, demandeInscription?: { __typename?: 'DemandeInscriptionUser', dateDemande?: any | null } | null, folders?: Array<{ __typename?: 'Folder', id?: any | null } | null> | null, habilitation?: { __typename?: 'Habilitation', id?: string | null, abbreviation?: string | null, libHabilitationAr?: string | null, libHabilitationFr?: string | null, confidentialites?: Array<{ __typename?: 'Confidentialite', id?: string | null, libConfidentialiteFr?: string | null, libConfidentialiteAr?: string | null } | null> | null } | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', libGradeAr?: string | null, grade?: any | null } | null, arme?: { __typename?: 'RhRArme', libArmeAr?: string | null, id?: any | null } | null } | null } | null };

export type GetHablitationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHablitationsQuery = { __typename?: 'Query', habilitations?: Array<{ __typename?: 'Habilitation', libHabilitationAr?: string | null, libHabilitationFr?: string | null, id?: string | null, confidentialites?: Array<{ __typename?: 'Confidentialite', libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null> | null } | null> | null };

export type AllOcrResultConfidentialteNotDefinedQueryVariables = Exact<{ [key: string]: never; }>;


export type AllOcrResultConfidentialteNotDefinedQuery = { __typename?: 'Query', allOcrResultConfidentialteNotDefined?: Array<{ __typename?: 'OcrResultEntityJpa', id?: string | null, originalFileName?: string | null, reference?: string | null, dateReference?: any | null, numberOfPapers?: number | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteAr?: string | null, libTypeTexteFr?: string | null } | null, confidentialite?: { __typename?: 'Confidentialite', id?: string | null, libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null } | null> | null };

export type EnumsWrapperForCodeGenerationQueryVariables = Exact<{
  enum?: InputMaybe<EnumsWrapperInput>;
}>;


export type EnumsWrapperForCodeGenerationQuery = { __typename?: 'Query', enumsWrapperForCodeGeneration?: { __typename?: 'EnumsWrapper', privilegesEnum?: PrivilegesEnum | null, rolesEnum?: RolesEnum | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', getUsers?: Array<{ __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null } | null, habilitation?: { __typename?: 'Habilitation', libHabilitationFr?: string | null, libHabilitationAr?: string | null } | null } | null> | null };

export type OcrResultUserGrantsQueryVariables = Exact<{
  fileSignatue?: InputMaybe<Scalars['String']['input']>;
}>;


export type OcrResultUserGrantsQuery = { __typename?: 'Query', ocrResultByid?: { __typename?: 'OcrResultEntityJpa', id?: string | null, reference?: string | null, dateReference?: any | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', libTypeTexteFr?: string | null } | null, confidentialite?: { __typename?: 'Confidentialite', libConfidentialiteAr?: string | null, libConfidentialiteFr?: string | null } | null, ocrResultUserGrants?: Array<{ __typename?: 'OcrResultUserGrant', user?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null } | null, habilitation?: { __typename?: 'Habilitation', libHabilitationFr?: string | null, confidentialites?: Array<{ __typename?: 'Confidentialite', libConfidentialiteFr?: string | null, libConfidentialiteAr?: string | null } | null> | null } | null } | null, id?: { __typename?: 'OcrResultUserGrantKey', type?: string | null, ocrResultId?: string | null, userId?: string | null } | null } | null> | null } | null };

export type AllOcrResultUsersGrantsPagedQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type AllOcrResultUsersGrantsPagedQuery = { __typename?: 'Query', allOcrResultUsersGrantsPaged?: { __typename?: 'Page_OcrResultEntityJpa', totalElements: any, totalPages: number, pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null } | null, content?: Array<{ __typename?: 'OcrResultEntityJpa', id?: string | null, dateReference?: any | null, reference?: string | null, numberOfPapers?: number | null, originalFileName?: string | null, confidentialite?: { __typename?: 'Confidentialite', libConfidentialiteFr?: string | null, libConfidentialiteAr?: string | null, id?: string | null } | null, typeTexteReglementaire?: { __typename?: 'TypeTexteReglementaire', id?: string | null, libTypeTexteFr?: string | null, libTypeTexteAr?: string | null } | null, ocrResultUserGrants?: Array<{ __typename?: 'OcrResultUserGrant', id?: { __typename?: 'OcrResultUserGrantKey', userId?: string | null, ocrResultId?: string | null, type?: string | null } | null, user?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null, matricule?: string | null } | null } | null } | null> | null } | null> | null } | null };

export type UserConfidentialitesQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserConfidentialitesQuery = { __typename?: 'Query', user?: { __typename?: 'User', habilitation?: { __typename?: 'Habilitation', libHabilitationFr?: string | null, confidentialites?: Array<{ __typename?: 'Confidentialite', id?: string | null, libConfidentialiteFr?: string | null, libConfidentialiteAr?: string | null } | null> | null } | null } | null };

export type UserQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id?: string | null, enabled: boolean, accountNonLocked: boolean, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null } | null, habilitation?: { __typename?: 'Habilitation', id?: string | null, libHabilitationAr?: string | null, libHabilitationFr?: string | null } | null, demandeInscription?: { __typename?: 'DemandeInscriptionUser', dateDemande?: any | null } | null, authorities?: Array<{ __typename?: 'GrantedAuthority', authority?: string | null } | null> | null, privileges?: Array<{ __typename?: 'Privilege', id?: string | null, description?: string | null, name?: string | null } | null> | null, privileges_restriction?: Array<{ __typename?: 'Privilege', name?: string | null, description?: string | null, id?: string | null } | null> | null, roles?: Array<{ __typename?: 'Role', id?: string | null, description?: string | null, name?: string | null, privileges?: Array<{ __typename?: 'Privilege', name?: string | null, description?: string | null, id?: string | null } | null> | null } | null> | null } | null };

export type AllUsersPagedQueryVariables = Exact<{
  pageable?: InputMaybe<PaginationInput>;
}>;


export type AllUsersPagedQuery = { __typename?: 'Query', allUsersPaged?: { __typename?: 'Page_User', totalElements: any, content?: Array<{ __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null } | null } | null> | null } | null };

export type UserAuthoritiesQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserAuthoritiesQuery = { __typename?: 'Query', user?: { __typename?: 'User', authorities?: Array<{ __typename?: 'GrantedAuthority', authority?: string | null } | null> | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null } | null } | null };

export type FindAllRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllRolesQuery = { __typename?: 'Query', findAllRoles?: Array<{ __typename?: 'Role', id?: string | null, description?: string | null, name?: string | null, privileges?: Array<{ __typename?: 'Privilege', id?: string | null, name?: string | null, description?: string | null } | null> | null } | null> | null };

export type FindAllRolesPagedQueryVariables = Exact<{
  paginationInput?: InputMaybe<PaginationInput>;
}>;


export type FindAllRolesPagedQuery = { __typename?: 'Query', allRolesPaged?: { __typename?: 'Page_Role', totalElements: any, content?: Array<{ __typename?: 'Role', id?: string | null, name?: string | null, description?: string | null, privileges?: Array<{ __typename?: 'Privilege', id?: string | null, name?: string | null, description?: string | null } | null> | null } | null> | null } | null };

export type FindRoleByIdQueryVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindRoleByIdQuery = { __typename?: 'Query', findRoleById?: { __typename?: 'Role', id?: string | null, name?: string | null, description?: string | null, privileges?: Array<{ __typename?: 'Privilege', name?: string | null, description?: string | null, id?: string | null } | null> | null } | null };

export type AllPrivilegesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPrivilegesQuery = { __typename?: 'Query', allPrivileges?: Array<{ __typename?: 'Privilege', id?: string | null, description?: string | null, name?: string | null } | null> | null };

export type PrivilegeByIdQueryVariables = Exact<{
  privilegeById?: InputMaybe<Scalars['Long']['input']>;
}>;


export type PrivilegeByIdQuery = { __typename?: 'Query', privilegeById?: { __typename?: 'Privilege', name?: string | null, description?: string | null, id?: string | null } | null };

export type AllPrivilegesPagedQueryVariables = Exact<{
  paginationInput?: InputMaybe<PaginationInput>;
}>;


export type AllPrivilegesPagedQuery = { __typename?: 'Query', allPrivilegesPaged?: { __typename?: 'Page_Privilege', totalElements: any, content?: Array<{ __typename?: 'Privilege', id?: string | null, description?: string | null, name?: string | null } | null> | null } | null };

export type FindAllDemandeInscriptionRemainingQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllDemandeInscriptionRemainingQuery = { __typename?: 'Query', findAllDemandeInscriptionRemaining?: Array<{ __typename?: 'DemandeInscriptionUser', id?: string | null, dateDemande?: any | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, nom?: string | null, pnom?: string | null } | null } | null> | null };

export type ValidateUserDemandeMutationVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type ValidateUserDemandeMutation = { __typename?: 'Mutation', validateUserDemande?: { __typename?: 'UserDto', personnel?: { __typename?: 'DPersonnelDto', matricule?: string | null, noma?: string | null, pnomA?: string | null, pnom?: string | null, nom?: string | null } | null } | null };

export type AddOcrResultToFolderMutationVariables = Exact<{
  folderId: Scalars['Long']['input'];
  ocrResultId: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
}>;


export type AddOcrResultToFolderMutation = { __typename?: 'Mutation', addOcrResultsToFolder?: { __typename?: 'Folder', id?: any | null, name?: string | null, pdfFiles?: Array<{ __typename?: 'OcrResultEntityJpa', id?: string | null, originalFileName?: string | null } | null> | null } | null };

export type CreateFolderMutationVariables = Exact<{
  folder?: InputMaybe<FolderInput>;
  username?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFolderMutation = { __typename?: 'Mutation', createFolder?: { __typename?: 'Folder', name?: string | null, description?: string | null, id?: any | null, color?: string | null } | null };

export type DeleteFolderMutationVariables = Exact<{
  folder_id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteFolderMutation = { __typename?: 'Mutation', deleteFolder?: any | null };

export type DeletePdfFileFromFolderMutationVariables = Exact<{
  folderId?: InputMaybe<Scalars['Long']['input']>;
  pdfId?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeletePdfFileFromFolderMutation = { __typename?: 'Mutation', deletePdfFileFromFolder: boolean };

export type StartSchedulerMutationVariables = Exact<{ [key: string]: never; }>;


export type StartSchedulerMutation = { __typename?: 'Mutation', startScheduler: boolean };

export type StopSchedulerMutationVariables = Exact<{ [key: string]: never; }>;


export type StopSchedulerMutation = { __typename?: 'Mutation', stopScheduler: boolean };

export type PinOcrResultMutationVariables = Exact<{
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
}>;


export type PinOcrResultMutation = { __typename?: 'Mutation', pinOcrResult?: { __typename?: 'OcrResultPinned', id?: string | null } | null };

export type UnpinOcrResultMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type UnpinOcrResultMutation = { __typename?: 'Mutation', unpinOcrResult: boolean };

export type SetHabilitationMutationVariables = Exact<{
  habilitaitonId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
}>;


export type SetHabilitationMutation = { __typename?: 'Mutation', setHablitation: boolean };

export type ChangeOcrResultGrantMutationVariables = Exact<{
  ocrResultUserGrantKeys?: InputMaybe<Array<InputMaybe<OcrResultUserGrantKeyInputInput>> | InputMaybe<OcrResultUserGrantKeyInputInput>>;
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ChangeOcrResultGrantMutation = { __typename?: 'Mutation', changeOcrResultGrant?: Array<{ __typename?: 'OcrResultUserGrant', id?: { __typename?: 'OcrResultUserGrantKey', ocrResultId?: string | null, type?: string | null, userId?: string | null } | null, user?: { __typename?: 'User', personnel?: { __typename?: 'DPersonnel', matricule?: string | null, id?: string | null, noma?: string | null, pnoma?: string | null } | null } | null } | null> | null };

export type UpdateConfidentialiteMutationVariables = Exact<{
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  confidentialiteId?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateConfidentialiteMutation = { __typename?: 'Mutation', updateConfidentialite: boolean };

export type UserAddPrivilegeMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>;
  privilegeName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserAddPrivilegeMutation = { __typename?: 'Mutation', userAddPrivilege: boolean };

export type UserAddPrivilegeRestrictionMutationVariables = Exact<{
  privilegeName?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserAddPrivilegeRestrictionMutation = { __typename?: 'Mutation', userAddPrivilegeRestriction: boolean };

export type UserAddRoleMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserAddRoleMutation = { __typename?: 'Mutation', userAddRole: boolean };

export type UserDeletePrivilegeMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
  privilegeName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserDeletePrivilegeMutation = { __typename?: 'Mutation', userDeletePrivilege: boolean };

export type UserDeletePrivilegeRestrictionMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
  privilegeName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserDeletePrivilegeRestrictionMutation = { __typename?: 'Mutation', userDeletePrivilegeRestriction: boolean };

export type UserDeleteRoleMutationVariables = Exact<{
  userName?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UserDeleteRoleMutation = { __typename?: 'Mutation', userDeleteRole: boolean };

export type AddPrivilegeToRoleMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']['input']>;
  privilegeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddPrivilegeToRoleMutation = { __typename?: 'Mutation', addPrivilegeToRole: boolean };

export type DeletePrivilegeFromRoleMutationVariables = Exact<{
  roleId?: InputMaybe<Scalars['String']['input']>;
  privilegeId?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeletePrivilegeFromRoleMutation = { __typename?: 'Mutation', deletePrivilegeFromRole: boolean };

export type GenerateThumbnailsMutationVariables = Exact<{ [key: string]: never; }>;


export type GenerateThumbnailsMutation = { __typename?: 'Mutation', generateThumbnails: boolean };

export type GetPhotoByMatriculeAndSizeQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Int']['input'];
}>;


export type GetPhotoByMatriculeAndSizeQuery = { __typename?: 'Query', getThumbnailByMatriculeAndSize?: { __typename?: 'Thumbnail', thumbData?: any | null, id?: any | null, thumbSize: number, photo?: { __typename?: 'Photo', format?: string | null } | null } | null };

export type PhotoByMatriculeQueryVariables = Exact<{
  matricule?: InputMaybe<Scalars['String']['input']>;
}>;


export type PhotoByMatriculeQuery = { __typename?: 'Query', photoByMatricule?: Array<{ __typename?: 'Photo', id?: any | null, format?: string | null, translateX?: number | null, translateY?: number | null, height?: number | null, width?: number | null, rotation?: number | null, photoData?: any | null, personnel?: { __typename?: 'DPersonnel', matricule?: string | null, noma?: string | null, pnoma?: string | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeArDetermine?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null } | null } | null, thumbnails?: Array<{ __typename?: 'Thumbnail', id?: any | null, thumbSize: number, thumbData?: any | null } | null> | null } | null> | null };

export type SearchUsersByTokenQueryVariables = Exact<{
  searchToken?: InputMaybe<Scalars['String']['input']>;
  pageable?: InputMaybe<PaginationInput>;
}>;


export type SearchUsersByTokenQuery = { __typename?: 'Query', searchUsersByToken?: { __typename?: 'Page_User', pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null } | null, content?: Array<{ __typename?: 'User', id?: string | null, personnel?: { __typename?: 'DPersonnel', id?: string | null, nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null, arme?: { __typename?: 'RhRArme', id?: any | null } | null, grade?: { __typename?: 'RhRGrade', grade?: any | null } | null } | null } | null> | null } | null };

export type CreateSimulationMutationVariables = Exact<{
  simulationDto?: InputMaybe<SimulationDtoInput>;
}>;


export type CreateSimulationMutation = { __typename?: 'Mutation', createSimulation?: { __typename?: 'Simulation', id?: any | null, name?: string | null, numberOfSteps?: number | null, description?: string | null, dateDebut?: any | null, dateFin?: any | null } | null };

export type SetNumberOfStepsMutationVariables = Exact<{
  simulationId?: InputMaybe<Scalars['Long']['input']>;
  steps: Scalars['Int']['input'];
}>;


export type SetNumberOfStepsMutation = { __typename?: 'Mutation', setNumberOfSteps: boolean };

export type StartSimulationMutationVariables = Exact<{
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type StartSimulationMutation = { __typename?: 'Mutation', startSimulation: boolean };

export type CreateSimAgentMutationVariables = Exact<{
  simAgentDto?: InputMaybe<SimAgentDtoInput>;
}>;


export type CreateSimAgentMutation = { __typename?: 'Mutation', createSimAgent?: { __typename?: 'SimAgent', simAgentId?: { __typename?: 'SimAgentId', step?: number | null, id?: any | null } | null } | null };

export type SimulationByIdQueryVariables = Exact<{
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type SimulationByIdQuery = { __typename?: 'Query', simulationById?: { __typename?: 'Simulation', id?: any | null, name?: string | null, numberOfSteps?: number | null, description?: string | null, dateDebut?: any | null, dateFin?: any | null } | null };

export type SimulationsQueryVariables = Exact<{ [key: string]: never; }>;


export type SimulationsQuery = { __typename?: 'Query', simulations?: Array<{ __typename?: 'Simulation', id?: any | null, name?: string | null, numberOfSteps?: number | null, description?: string | null, dateDebut?: any | null, dateFin?: any | null } | null> | null };

export type SimAgentsByStepAndSimulationQueryVariables = Exact<{
  simulaitonId?: InputMaybe<Scalars['Long']['input']>;
  pageable?: InputMaybe<PaginationInput>;
  step: Scalars['Int']['input'];
}>;


export type SimAgentsByStepAndSimulationQuery = { __typename?: 'Query', simAgentsByStepAndSimulation?: { __typename?: 'Page_SimAgent', pageable?: { __typename?: 'Pagination', pageNumber: number, pageSize?: number | null } | null, content?: Array<{ __typename?: 'SimAgent', nom?: string | null, pnom?: string | null, noma?: string | null, pnoma?: string | null, age?: number | null, anicenneteGrade?: number | null, anneDeService?: number | null, class_?: number | null, nombreDeProposition?: number | null, typeRecrutement?: TypeRecrutement | null, grade?: { __typename?: 'RhRGrade', grade?: any | null, libGradeAr?: string | null, libGradeFr?: string | null } | null, arme?: { __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null, libArmeFr?: string | null } | null, simAgentId?: { __typename?: 'SimAgentId', id?: any | null, step?: number | null } | null } | null> | null } | null };

export type DeleteSimAgentMutationVariables = Exact<{
  simAgentId?: InputMaybe<SimAgentIdInput>;
}>;


export type DeleteSimAgentMutation = { __typename?: 'Mutation', deleteSimAgent: boolean };

export type CreateRecrutementMutationVariables = Exact<{
  recrutemnt?: InputMaybe<RecrutementDtoInput>;
}>;


export type CreateRecrutementMutation = { __typename?: 'Mutation', createRecrutement?: { __typename?: 'Recrutement', id?: any | null, typeRecrutement?: TypeRecrutement | null, anneDeRecrutemnt?: number | null, nombre?: number | null } | null };

export type UpdateRecrutemntNombreMutationVariables = Exact<{
  nombre: Scalars['Int']['input'];
  recrutmentId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type UpdateRecrutemntNombreMutation = { __typename?: 'Mutation', updateRecrutemntNombre: boolean };

export type DeleteRecrutementMutationVariables = Exact<{
  recrutmentId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type DeleteRecrutementMutation = { __typename?: 'Mutation', deleteRecrutement: boolean };

export type AllRecrutemntsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecrutemntsQuery = { __typename?: 'Query', allRecrutemnts?: Array<{ __typename?: 'Recrutement', nombre?: number | null, anneDeRecrutemnt?: number | null, typeRecrutement?: TypeRecrutement | null, id?: any | null } | null> | null };

export type RecrutementByClassQueryVariables = Exact<{
  class: Scalars['Int']['input'];
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type RecrutementByClassQuery = { __typename?: 'Query', recrutementByClass?: Array<{ __typename?: 'Recrutement', id?: any | null, typeRecrutement?: TypeRecrutement | null, anneDeRecrutemnt?: number | null, nombre?: number | null } | null> | null };

export type RecrutementByTypeRecrutementQueryVariables = Exact<{
  typeRecrutment?: InputMaybe<TypeRecrutement>;
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type RecrutementByTypeRecrutementQuery = { __typename?: 'Query', recrutementByTypeRecrutement?: Array<{ __typename?: 'Recrutement', typeRecrutement?: TypeRecrutement | null, nombre?: number | null, anneDeRecrutemnt?: number | null, id?: any | null } | null> | null };

export type RecrutementByTypeRecrutementAndClassQueryVariables = Exact<{
  typeRecrutment?: InputMaybe<TypeRecrutement>;
  classe: Scalars['Int']['input'];
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type RecrutementByTypeRecrutementAndClassQuery = { __typename?: 'Query', recrutementByTypeRecrutementAndClass?: Array<{ __typename?: 'Recrutement', typeRecrutement?: TypeRecrutement | null, id?: any | null, anneDeRecrutemnt?: number | null, nombre?: number | null } | null> | null };

export type AllRecrutemntsBySimulationQueryVariables = Exact<{
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AllRecrutemntsBySimulationQuery = { __typename?: 'Query', allRecrutemntsBySimulation?: Array<{ __typename?: 'Recrutement', nombre?: number | null, anneDeRecrutemnt?: number | null, id?: any | null, typeRecrutement?: TypeRecrutement | null, simulation?: { __typename?: 'Simulation', id?: any | null, name?: string | null, description?: string | null } | null } | null> | null };

export type CreateRecrutementV2MutationVariables = Exact<{
  recrutemnt?: InputMaybe<RecrutementV2DtoInput>;
}>;


export type CreateRecrutementV2Mutation = { __typename?: 'Mutation', createRecrutementV2?: { __typename?: 'RecrutementV2', anneDeRecrutemnt?: number | null, EMP?: string | null, FF?: string | null, FS_L?: string | null, FS_M?: string | null, simulation?: { __typename?: 'Simulation', id?: any | null, description?: string | null, name?: string | null } | null } | null };

export type UpdateRecrutemntV2MutationVariables = Exact<{
  recrutementV2Dto?: InputMaybe<RecrutementV2DtoInput>;
}>;


export type UpdateRecrutemntV2Mutation = { __typename?: 'Mutation', updateRecrutemntV2: boolean };

export type DeleteRecrutementV2MutationVariables = Exact<{
  recrutmentId: Scalars['Int']['input'];
}>;


export type DeleteRecrutementV2Mutation = { __typename?: 'Mutation', deleteRecrutementV2: boolean };

export type AllRecrutemntsV2QueryVariables = Exact<{ [key: string]: never; }>;


export type AllRecrutemntsV2Query = { __typename?: 'Query', allRecrutemntsV2?: Array<{ __typename?: 'RecrutementV2', anneDeRecrutemnt?: number | null, FS_M?: string | null, FS_L?: string | null, FF?: string | null, EMP?: string | null, simulation?: { __typename?: 'Simulation', name?: string | null, description?: string | null, id?: any | null } | null } | null> | null };

export type RecrutementV2ByClassQueryVariables = Exact<{
  class: Scalars['Int']['input'];
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type RecrutementV2ByClassQuery = { __typename?: 'Query', recrutementV2ByClass?: Array<{ __typename?: 'RecrutementV2', anneDeRecrutemnt?: number | null, FS_M?: string | null, FS_L?: string | null, FF?: string | null, EMP?: string | null, simulation?: { __typename?: 'Simulation', name?: string | null, description?: string | null, id?: any | null } | null } | null> | null };

export type AllRecrutemntsV2BySimulationQueryVariables = Exact<{
  simulationId?: InputMaybe<Scalars['Long']['input']>;
}>;


export type AllRecrutemntsV2BySimulationQuery = { __typename?: 'Query', allRecrutemntsV2BySimulation?: Array<{ __typename?: 'RecrutementV2', anneDeRecrutemnt?: number | null, FS_M?: string | null, FS_L?: string | null, FF?: string | null, EMP?: string | null, simulation?: { __typename?: 'Simulation', name?: string | null, description?: string | null, id?: any | null } | null } | null> | null };

export type GradeByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type GradeByIdQuery = { __typename?: 'Query', gradeById?: { __typename?: 'RhRGrade', abrGradeAr?: string | null, abrGradeFr?: string | null, grade?: any | null, gradeInf?: any | null, libGradeAr?: string | null, libGradeFr?: string | null, rhRCatGrade?: { __typename?: 'RhRCatGrade', cat?: string | null, catGrade?: string | null, libCatAr?: string | null, libCatFr?: string | null, libCatGradeAr?: string | null, libCatGradeFr?: string | null } | null } | null };

export type AllGradesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGradesQuery = { __typename?: 'Query', allGrades?: Array<{ __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null, abrGradeFr?: string | null, abrGradeAr?: string | null, gradeInf?: any | null } | null> | null };

export type AllGradesWithCategrieQueryVariables = Exact<{ [key: string]: never; }>;


export type AllGradesWithCategrieQuery = { __typename?: 'Query', allGrades?: Array<{ __typename?: 'RhRGrade', grade?: any | null, libGradeFr?: string | null, libGradeAr?: string | null, abrGradeFr?: string | null, abrGradeAr?: string | null, gradeInf?: any | null, rhRCatGrade?: { __typename?: 'RhRCatGrade', catGrade?: string | null, cat?: string | null, libCatGradeFr?: string | null, libCatGradeAr?: string | null, libCatFr?: string | null, libCatAr?: string | null } | null } | null> | null };

export type ArmeByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['Long']['input']>;
}>;


export type ArmeByIdQuery = { __typename?: 'Query', armeById?: { __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null, libArmeFr?: string | null, commandement?: { __typename?: 'RhRCommandement', id?: any | null, libCommandementAr?: string | null, libCommandementFr?: string | null } | null } | null };

export type AllArmesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllArmesQuery = { __typename?: 'Query', allArmes?: Array<{ __typename?: 'RhRArme', id?: any | null, libArmeFr?: string | null, libArmeAr?: string | null } | null> | null };

export type CommandementByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['BigInteger']['input']>;
}>;


export type CommandementByIdQuery = { __typename?: 'Query', commandementById?: { __typename?: 'RhRCommandement', id?: any | null, libCommandementFr?: string | null, libCommandementAr?: string | null, RArmes?: Array<{ __typename?: 'RhRArme', id?: any | null, libArmeAr?: string | null, libArmeFr?: string | null } | null> | null } | null };

export type AllCommandemnetsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCommandemnetsQuery = { __typename?: 'Query', allCommandements?: Array<{ __typename?: 'RhRCommandement', id?: any | null, libCommandementAr?: string | null, libCommandementFr?: string | null } | null> | null };

export type FindOcrResultEntityESbyIdQueryVariables = Exact<{
  fildId?: InputMaybe<Scalars['String']['input']>;
}>;


export type FindOcrResultEntityESbyIdQuery = { __typename?: 'Query', findOcrResultEntityESbyId?: { __typename?: 'OcrResultEntityElastic_2', dateReference?: any | null, reference?: string | null, id?: string | null, libConfidentialiteAr?: string | null, libTypeTexteAr?: string | null, libUrgenceAr?: string | null, numberOfPapers?: number | null, originalFileName?: string | null, owner?: string | null, pages?: Array<{ __typename?: 'Page', id_page?: string | null, type?: string | null, bbox?: { __typename?: 'BBox', x1?: string | null, x2?: string | null, y1?: string | null, y2?: string | null } | null, paragraphs?: Array<{ __typename?: 'Paragraph', id_par?: string | null, lang?: string | null, type?: string | null, bbox?: { __typename?: 'BBox', x1?: string | null, x2?: string | null, y1?: string | null, y2?: string | null } | null } | null> | null } | null> | null } | null };

export type IsFavoriteQueryVariables = Exact<{
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
}>;


export type IsFavoriteQuery = { __typename?: 'Query', favorite: boolean };

export type ToggleFavoriteMutationVariables = Exact<{
  ocrResultId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ToggleFavoriteMutation = { __typename?: 'Mutation', toggleFavorite?: number | null };


export const AllProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllProjectsQuery, AllProjectsQueryVariables>;
export const BugProjectByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bugProjectById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projectById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nameAr"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BugProjectByIdQuery, BugProjectByIdQueryVariables>;
export const BugAllStatusesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"bugAllStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusAn"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}}]}}]}}]} as unknown as DocumentNode<BugAllStatusesQuery, BugAllStatusesQueryVariables>;
export const GetAllIssuesByProjectPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllIssuesByProjectPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageRequest"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allIssuesByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageRequest"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageRequest"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"sort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"property"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sevirity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priorityFR"}},{"kind":"Field","name":{"kind":"Name","value":"priorityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<GetAllIssuesByProjectPagedQuery, GetAllIssuesByProjectPagedQueryVariables>;
export const AllPrioritiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPriorities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPriorities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priorityAR"}},{"kind":"Field","name":{"kind":"Name","value":"priorityFR"}}]}}]}}]} as unknown as DocumentNode<AllPrioritiesQuery, AllPrioritiesQueryVariables>;
export const AllSeveritiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allSeverities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allSeverities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}}]}}]}}]} as unknown as DocumentNode<AllSeveritiesQuery, AllSeveritiesQueryVariables>;
export const AllTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllTagsQuery, AllTagsQueryVariables>;
export const IssueByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"issueById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sevirity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priorityFR"}},{"kind":"Field","name":{"kind":"Name","value":"priorityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<IssueByIdQuery, IssueByIdQueryVariables>;
export const GetStatusByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStatusById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"satusById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"satusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAn"}}]}}]}}]} as unknown as DocumentNode<GetStatusByIdQuery, GetStatusByIdQueryVariables>;
export const GetIssueTypeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIssueTypeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueTypeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"typeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}}]}}]}}]} as unknown as DocumentNode<GetIssueTypeByIdQuery, GetIssueTypeByIdQueryVariables>;
export const AllIssueTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allIssueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allIssueTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}}]}}]}}]} as unknown as DocumentNode<AllIssueTypesQuery, AllIssueTypesQueryVariables>;
export const SevirityByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"sevirityById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sevirityId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sevirityById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sevirityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sevirityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}}]}}]}}]} as unknown as DocumentNode<SevirityByIdQuery, SevirityByIdQueryVariables>;
export const AttachmentByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"attachmentById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"base64FileData"}},{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"size"}}]}}]}}]} as unknown as DocumentNode<AttachmentByIdQuery, AttachmentByIdQueryVariables>;
export const AttachmentsByIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"attachmentsByIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentsByIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issueId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"base64FileData"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}}]}}]}}]} as unknown as DocumentNode<AttachmentsByIssueQuery, AttachmentsByIssueQueryVariables>;
export const AllStatuseCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allStatuseCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allStatuseCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusAn"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}}]}}]}}]} as unknown as DocumentNode<AllStatuseCountQuery, AllStatuseCountQueryVariables>;
export const AllIssueTypesCountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allIssueTypesCount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allIssueTypesCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count_"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}}]}}]}}]} as unknown as DocumentNode<AllIssueTypesCountQuery, AllIssueTypesCountQueryVariables>;
export const SearchIssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchIssues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueStatusId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueTypeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"priorityId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchIssues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueStatusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueStatusId"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueTypeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueTypeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"priorityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"priorityId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"sort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"direction"}},{"kind":"Field","name":{"kind":"Name","value":"property"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sevirity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priorityFR"}},{"kind":"Field","name":{"kind":"Name","value":"priorityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<SearchIssuesQuery, SearchIssuesQueryVariables>;
export const CreateIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IssueInputDtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueInputDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"priorityFR"}},{"kind":"Field","name":{"kind":"Name","value":"priorityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"statusAr"}},{"kind":"Field","name":{"kind":"Name","value":"statusFr"}},{"kind":"Field","name":{"kind":"Name","value":"statusAn"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sevirity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityFR"}},{"kind":"Field","name":{"kind":"Name","value":"sevirityAR"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeFr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeAn"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateIssueMutation, CreateIssueMutationVariables>;
export const UpdateIssueTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateIssueType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIssueType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}},{"kind":"Argument","name":{"kind":"Name","value":"typeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateIssueTypeMutation, UpdateIssueTypeMutationVariables>;
export const UpdateIssueStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateIssueStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIssueStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}},{"kind":"Argument","name":{"kind":"Name","value":"statusId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"statusId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateIssueStatusMutation, UpdateIssueStatusMutationVariables>;
export const UpdateIssueSevirityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateIssueSevirity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sevirityId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIssueSevirity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sevirityId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sevirityId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateIssueSevirityMutation, UpdateIssueSevirityMutationVariables>;
export const DeleteIssueCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteIssueComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIssueComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<DeleteIssueCommentMutation, DeleteIssueCommentMutationVariables>;
export const UpdateIssueCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateIssueComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateIssueComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateIssueCommentMutation, UpdateIssueCommentMutationVariables>;
export const CreateIssueCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createIssueComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIssueComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}},{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateIssueCommentMutation, CreateIssueCommentMutationVariables>;
export const AddIssueTagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addIssueTag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagname"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addIssueTag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"issueId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"issueId"}}},{"kind":"Argument","name":{"kind":"Name","value":"tagname"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagname"}}}]}]}}]} as unknown as DocumentNode<AddIssueTagMutation, AddIssueTagMutationVariables>;
export const NotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"notifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dateTime"}},{"kind":"Field","name":{"kind":"Name","value":"emmitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeAr"}},{"kind":"Field","name":{"kind":"Name","value":"typeFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notificationType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}},{"kind":"Field","name":{"kind":"Name","value":"libFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"state"}}]}}]}}]}}]} as unknown as DocumentNode<NotificationsQuery, NotificationsQueryVariables>;
export const ChangeNotificationStateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeNotificationState"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NotificationState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeNotificationState"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notificationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"notificationState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationState"}}}]}]}}]} as unknown as DocumentNode<ChangeNotificationStateMutation, ChangeNotificationStateMutationVariables>;
export const FindPam2024Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPam2024"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filteringParams"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilteringParamsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPam2024"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"filteringParams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filteringParams"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"sort"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"property"}},{"kind":"Field","name":{"kind":"Name","value":"direction"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"arme"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"personnelNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dureeN"}},{"kind":"Field","name":{"kind":"Name","value":"dureeS"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"fonction"}},{"kind":"Field","name":{"kind":"Name","value":"ensFonction"}},{"kind":"Field","name":{"kind":"Name","value":"ens"}},{"kind":"Field","name":{"kind":"Name","value":"NMutation"}},{"kind":"Field","name":{"kind":"Name","value":"NDureeS"}},{"kind":"Field","name":{"kind":"Name","value":"poste"}},{"kind":"Field","name":{"kind":"Name","value":"csn"}},{"kind":"Field","name":{"kind":"Name","value":"promotionNumber"}},{"kind":"Field","name":{"kind":"Name","value":"DUREE_FONCT"}},{"kind":"Field","name":{"kind":"Name","value":"ficheVoeuxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"annee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"demandeRadiations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"formation"}},{"kind":"Field","name":{"kind":"Name","value":"obs"}},{"kind":"Field","name":{"kind":"Name","value":"dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"dipmil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}},{"kind":"Field","name":{"kind":"Name","value":"codeDipMil"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dipcivil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindPam2024Query, FindPam2024QueryVariables>;
export const FindPamOff2024ByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPamOff2024ById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPamOff2024ById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"arme"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"personnelNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dureeN"}},{"kind":"Field","name":{"kind":"Name","value":"dureeS"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"fonction"}},{"kind":"Field","name":{"kind":"Name","value":"ensFonction"}},{"kind":"Field","name":{"kind":"Name","value":"ens"}},{"kind":"Field","name":{"kind":"Name","value":"NMutation"}},{"kind":"Field","name":{"kind":"Name","value":"NDureeS"}},{"kind":"Field","name":{"kind":"Name","value":"poste"}},{"kind":"Field","name":{"kind":"Name","value":"csn"}},{"kind":"Field","name":{"kind":"Name","value":"promotionNumber"}},{"kind":"Field","name":{"kind":"Name","value":"DUREE_FONCT"}},{"kind":"Field","name":{"kind":"Name","value":"ficheVoeuxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"annee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"demandeRadiations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"formation"}},{"kind":"Field","name":{"kind":"Name","value":"obs"}},{"kind":"Field","name":{"kind":"Name","value":"dipmil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dipcivil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}}]}}]}}]}}]} as unknown as DocumentNode<FindPamOff2024ByIdQuery, FindPamOff2024ByIdQueryVariables>;
export const FindDistinctArmesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctArmes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctArmes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idArme"}},{"kind":"Field","name":{"kind":"Name","value":"libArme"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}}]}}]}}]} as unknown as DocumentNode<FindDistinctArmesQuery, FindDistinctArmesQueryVariables>;
export const FindDistinctGradeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctGrade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctGrade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}}]}}]}}]} as unknown as DocumentNode<FindDistinctGradeQuery, FindDistinctGradeQueryVariables>;
export const FindDistinctPostesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctPostes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctPostes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poste"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}},{"kind":"Field","name":{"kind":"Name","value":"trie_"}}]}}]}}]} as unknown as DocumentNode<FindDistinctPostesQuery, FindDistinctPostesQueryVariables>;
export const FindDistinctDiplomesCivilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctDiplomesCiviles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctDiplomesCiviles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeDipCiv"}},{"kind":"Field","name":{"kind":"Name","value":"abrFr"}},{"kind":"Field","name":{"kind":"Name","value":"abrAr"}},{"kind":"Field","name":{"kind":"Name","value":"libFr"}},{"kind":"Field","name":{"kind":"Name","value":"libFr"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}}]}}]}}]} as unknown as DocumentNode<FindDistinctDiplomesCivilesQuery, FindDistinctDiplomesCivilesQueryVariables>;
export const FindDistinctDiplomesMilitairesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctDiplomesMilitaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctDiplomesMilitaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"codeDipMil"}},{"kind":"Field","name":{"kind":"Name","value":"abrAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrFr"}},{"kind":"Field","name":{"kind":"Name","value":"libFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}},{"kind":"Field","name":{"kind":"Name","value":"count_"}}]}}]}}]} as unknown as DocumentNode<FindDistinctDiplomesMilitairesQuery, FindDistinctDiplomesMilitairesQueryVariables>;
export const FindByDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findBy"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportNames"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findReportById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"obs"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"nomAR"}},{"kind":"Field","name":{"kind":"Name","value":"nomFR"}}]}}]}}]} as unknown as DocumentNode<FindByQuery, FindByQueryVariables>;
export const AllReportsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allReports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allReports"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nomFR"}},{"kind":"Field","name":{"kind":"Name","value":"nomAR"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"obs"}},{"kind":"Field","name":{"kind":"Name","value":"get_order"}}]}}]}}]} as unknown as DocumentNode<AllReportsQuery, AllReportsQueryVariables>;
export const FindDistinctCsnDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findDistinctCsn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findDistinctCsn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count_"}},{"kind":"Field","name":{"kind":"Name","value":"c"}},{"kind":"Field","name":{"kind":"Name","value":"csn"}}]}}]}}]} as unknown as DocumentNode<FindDistinctCsnQuery, FindDistinctCsnQueryVariables>;
export const ReportPosteRealiseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"reportPosteRealise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reportPosteRealise"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poste"}},{"kind":"Field","name":{"kind":"Name","value":"realise"}},{"kind":"Field","name":{"kind":"Name","value":"ted"}},{"kind":"Field","name":{"kind":"Name","value":"pourcentage"}}]}}]}}]} as unknown as DocumentNode<ReportPosteRealiseQuery, ReportPosteRealiseQueryVariables>;
export const GetReportDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReport"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reportName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportNames"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"format"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportFormats"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reportsSubFolder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ReportsSubFolder"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"report"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reportName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reportName"}}},{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"Variable","name":{"kind":"Name","value":"format"}}},{"kind":"Argument","name":{"kind":"Name","value":"reportsSubFolder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reportsSubFolder"}}}]}]}}]} as unknown as DocumentNode<GetReportQuery, GetReportQueryVariables>;
export const AllRegionsMilitairesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRegionsMilitaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRegionsMilitaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"trie"}}]}}]}}]} as unknown as DocumentNode<AllRegionsMilitairesQuery, AllRegionsMilitairesQueryVariables>;
export const FindRStructureSnByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRStructureSnById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRStructureSnById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pere"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pere"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pere"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pere"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"fils"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindRStructureSnByIdQuery, FindRStructureSnByIdQueryVariables>;
export const AddDemandeRadiationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addDemandeRadiation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addDemandeRadiation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}]}]}}]} as unknown as DocumentNode<AddDemandeRadiationMutation, AddDemandeRadiationMutationVariables>;
export const DeleteDemandeRadiationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDemandeRadiation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDemandeRadiation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteDemandeRadiationMutation, DeleteDemandeRadiationMutationVariables>;
export const PhotoByMaticuleWithThumbsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"photoByMaticuleWithThumbs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoByMatricule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photoData"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"translateX"}},{"kind":"Field","name":{"kind":"Name","value":"translateY"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbData"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbSize"}}]}}]}}]}}]} as unknown as DocumentNode<PhotoByMaticuleWithThumbsQuery, PhotoByMaticuleWithThumbsQueryVariables>;
export const CreatePhotoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPhoto"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ff"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PhotoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPhoto"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"photoInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ff"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoData"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"translateY"}},{"kind":"Field","name":{"kind":"Name","value":"translateY"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rect"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePhotoMutation, CreatePhotoMutationVariables>;
export const UpdatePersonnelNoteGrantedUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePersonnelNoteGrantedUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"PsesonnelNoteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonnelNoteGrantedUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PsesonnelNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"PsesonnelNoteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userIds"}}}]}]}}]} as unknown as DocumentNode<UpdatePersonnelNoteGrantedUsersMutation, UpdatePersonnelNoteGrantedUsersMutationVariables>;
export const CreatePersonnelNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPersonnelNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"note"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonnelNoteInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPersonnelNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"note"},"value":{"kind":"Variable","name":{"kind":"Name","value":"note"}}}]}]}}]} as unknown as DocumentNode<CreatePersonnelNoteMutation, CreatePersonnelNoteMutationVariables>;
export const FindPersonnelNoteByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPersonnelNoteById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPersonnelNoteById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observation"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}}]} as unknown as DocumentNode<FindPersonnelNoteByIdQuery, FindPersonnelNoteByIdQueryVariables>;
export const FindPersonnelNotesByUserAndPersonnelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPersonnelNotesByUserAndPersonnel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pesonnelId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"includeAllNotes"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPersonnelNotesByUserAndPersonnel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"personnelId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pesonnelId"}}},{"kind":"Argument","name":{"kind":"Name","value":"includeAllNotes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"includeAllNotes"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trieAnciennete"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observation"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}}]} as unknown as DocumentNode<FindPersonnelNotesByUserAndPersonnelQuery, FindPersonnelNotesByUserAndPersonnelQueryVariables>;
export const FindPersonnelNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPersonnelNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPersonnelNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observation"}},{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}}]} as unknown as DocumentNode<FindPersonnelNotesQuery, FindPersonnelNotesQueryVariables>;
export const FindAllPersonnelNotesPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllPersonnelNotesPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchParams"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonnelNoteSearchParamsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllPersonnelNotesPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"searchParams"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchParams"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"arme"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observation"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}}]}}]}}]} as unknown as DocumentNode<FindAllPersonnelNotesPagedQuery, FindAllPersonnelNotesPagedQueryVariables>;
export const FindPersonnelNotesByUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findPersonnelNotesByUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPersonnelNotesByUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"arme"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateCreation"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"observation"}},{"kind":"Field","name":{"kind":"Name","value":"authorizedUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}}]}}]}}]} as unknown as DocumentNode<FindPersonnelNotesByUserQuery, FindPersonnelNotesByUserQueryVariables>;
export const DeletePersonnelNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePersonnelNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePersonnelNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeletePersonnelNoteMutation, DeletePersonnelNoteMutationVariables>;
export const DeleteAuthorizedUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAuthorizedUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAuthorizedUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"noteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteId"}}}]}]}}]} as unknown as DocumentNode<DeleteAuthorizedUserMutation, DeleteAuthorizedUserMutationVariables>;
export const UpdatePersonnelNoteContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePersonnelNoteContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"noteContent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"personnelId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePersonnelNoteContent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"noteContent"},"value":{"kind":"Variable","name":{"kind":"Name","value":"noteContent"}}},{"kind":"Argument","name":{"kind":"Name","value":"personnelNoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"personnelId"}}}]}]}}]} as unknown as DocumentNode<UpdatePersonnelNoteContentMutation, UpdatePersonnelNoteContentMutationVariables>;
export const FindByMatriculeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findByMatricule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findByMatricule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteDiplome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ancienneteDansLeGrade"}},{"kind":"Field","name":{"kind":"Name","value":"felicitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"felicitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"autorite"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sanctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"sanctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"anne"}},{"kind":"Field","name":{"kind":"Name","value":"chef"}},{"kind":"Field","name":{"kind":"Name","value":"dureeExcercice"}},{"kind":"Field","name":{"kind":"Name","value":"ancienneteDansLeGrade"}},{"kind":"Field","name":{"kind":"Name","value":"nombreDeProposition"}},{"kind":"Field","name":{"kind":"Name","value":"noteArme"}},{"kind":"Field","name":{"kind":"Name","value":"noteRegionale"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"noteRegionale"}}]}}]}}]} as unknown as DocumentNode<FindByMatriculeQuery, FindByMatriculeQueryVariables>;
export const FindAllPavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllPav"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idGrade"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllPav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"idGrade"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idGrade"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"noteDiplome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"noteGlobale"}},{"kind":"Field","name":{"kind":"Name","value":"ancienneteDansLeGrade"}},{"kind":"Field","name":{"kind":"Name","value":"dureeExcerciceUnite"}},{"kind":"Field","name":{"kind":"Name","value":"ponderation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"felicitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"felicitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"autorite"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"felicitationsId"}},{"kind":"Field","name":{"kind":"Name","value":"pavId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sanctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"sanctions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pavId"}},{"kind":"Field","name":{"kind":"Name","value":"sanctionsId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"anne"}},{"kind":"Field","name":{"kind":"Name","value":"chef"}},{"kind":"Field","name":{"kind":"Name","value":"dureeExcercice"}},{"kind":"Field","name":{"kind":"Name","value":"ancienneteDansLeGrade"}},{"kind":"Field","name":{"kind":"Name","value":"nombreDeProposition"}},{"kind":"Field","name":{"kind":"Name","value":"noteArme"}},{"kind":"Field","name":{"kind":"Name","value":"noteRegionale"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pamOff2024"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"g"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"arme"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"personnelNotes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"structureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeStructureSn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"runite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dureeN"}},{"kind":"Field","name":{"kind":"Name","value":"dureeS"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"fonction"}},{"kind":"Field","name":{"kind":"Name","value":"ensFonction"}},{"kind":"Field","name":{"kind":"Name","value":"ens"}},{"kind":"Field","name":{"kind":"Name","value":"NMutation"}},{"kind":"Field","name":{"kind":"Name","value":"NDureeS"}},{"kind":"Field","name":{"kind":"Name","value":"poste"}},{"kind":"Field","name":{"kind":"Name","value":"csn"}},{"kind":"Field","name":{"kind":"Name","value":"promotionNumber"}},{"kind":"Field","name":{"kind":"Name","value":"DUREE_FONCT"}},{"kind":"Field","name":{"kind":"Name","value":"ficheVoeuxes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"annee"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rhRunite3"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"regionMilitaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionFr"}},{"kind":"Field","name":{"kind":"Name","value":"libAbrRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionAr"}},{"kind":"Field","name":{"kind":"Name","value":"libRegionFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"libUniteeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationFr"}},{"kind":"Field","name":{"kind":"Name","value":"abreviationAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"demandeRadiations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_civ"}},{"kind":"Field","name":{"kind":"Name","value":"code_dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"formation"}},{"kind":"Field","name":{"kind":"Name","value":"obs"}},{"kind":"Field","name":{"kind":"Name","value":"dip_mil"}},{"kind":"Field","name":{"kind":"Name","value":"dipmil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}},{"kind":"Field","name":{"kind":"Name","value":"codeDipMil"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dipcivil"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"trieAnciennete"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"noteRegionale"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"costumSort"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<FindAllPavQuery, FindAllPavQueryVariables>;
export const FindAllSanctionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllSanctions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllRSanctions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllSanctionsQuery, FindAllSanctionsQueryVariables>;
export const FindCritereDePonderationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findCritereDePonderation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chef"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"grade"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"poste"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findCritereDePonderation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chef"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chef"}}},{"kind":"Argument","name":{"kind":"Name","value":"grade"},"value":{"kind":"Variable","name":{"kind":"Name","value":"grade"}}},{"kind":"Argument","name":{"kind":"Name","value":"poste"},"value":{"kind":"Variable","name":{"kind":"Name","value":"poste"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"poste"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"idPoste"}}]}}]}}]}}]} as unknown as DocumentNode<FindCritereDePonderationQuery, FindCritereDePonderationQueryVariables>;
export const FindAllNoteDiplomeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllNoteDiplome"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllNoteDiplome"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"index_"}},{"kind":"Field","name":{"kind":"Name","value":"lib"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllNoteDiplomeQuery, FindAllNoteDiplomeQueryVariables>;
export const FindAllFelicitionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllFelicitions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllFelicitions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"autorite"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllFelicitionsQuery, FindAllFelicitionsQueryVariables>;
export const AddPavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPav"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pav"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PavDtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"savePav"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pavDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pav"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AddPavMutation, AddPavMutationVariables>;
export const DeletePavDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePav"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pavId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pavId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pavId"}}}]}]}}]} as unknown as DocumentNode<DeletePavMutation, DeletePavMutationVariables>;
export const UpdateCostumSortDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCostumSort"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"costumSort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pavId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCostumSort"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"costumSort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"costumSort"}}},{"kind":"Argument","name":{"kind":"Name","value":"pavId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pavId"}}}]}]}}]} as unknown as DocumentNode<UpdateCostumSortMutation, UpdateCostumSortMutationVariables>;
export const GetOwnedFoldersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnedFolders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username_"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownedFolders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username_"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username_"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetOwnedFoldersQuery, GetOwnedFoldersQueryVariables>;
export const FindAllOcrResultEntityByFoldersContainingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllOcrResultEntityByFoldersContaining"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllOcrResultEntityByFoldersContaining"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"folderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"ocrDone"}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultUserGrants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultPinned"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSize"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllOcrResultEntityByFoldersContainingQuery, FindAllOcrResultEntityByFoldersContainingQueryVariables>;
export const GetFovoriteFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFovoriteFolder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favoriteFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"StringValue","value":"ddf","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetFovoriteFolderQuery, GetFovoriteFolderQueryVariables>;
export const GetFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"folder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"folderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetFolderQuery, GetFolderQueryVariables>;
export const GetPdfFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPdfFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileSignatue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResultByid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileSignatue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileSignatue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ocrDone"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"executedAt"}},{"kind":"Field","name":{"kind":"Name","value":"terminatedAt"}}]}}]}}]} as unknown as DocumentNode<GetPdfFileQuery, GetPdfFileQueryVariables>;
export const FindAllOcrResultsPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllOcrResultsPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllOcrResultsPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"terminatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}},{"kind":"Field","name":{"kind":"Name","value":"executedAt"}},{"kind":"Field","name":{"kind":"Name","value":"terminatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"ocrDone"}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindAllOcrResultsPagedQuery, FindAllOcrResultsPagedQueryVariables>;
export const CpuUsageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CpuUsage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpuUsage_"}}]}}]} as unknown as DocumentNode<CpuUsageQuery, CpuUsageQueryVariables>;
export const ThreadInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ThreadInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadInfo"}}]}}]} as unknown as DocumentNode<ThreadInfoQuery, ThreadInfoQueryVariables>;
export const MemoryUsageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MemoryUsage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memoryUsage_"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"committed"}},{"kind":"Field","name":{"kind":"Name","value":"init"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"used"}}]}}]}}]} as unknown as DocumentNode<MemoryUsageQuery, MemoryUsageQueryVariables>;
export const AllTypeTexteReglementairesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllTypeTexteReglementaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTypeTexteReglementaires"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}}]}}]} as unknown as DocumentNode<AllTypeTexteReglementairesQuery, AllTypeTexteReglementairesQueryVariables>;
export const TypeTexteReglementaireByLibFrDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TypeTexteReglementaireByLibFr"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"libFr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaireByLibFr"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"libFr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"libFr"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<TypeTexteReglementaireByLibFrQuery, TypeTexteReglementaireByLibFrQueryVariables>;
export const AllConfidentialitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllConfidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allConfidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}}]}}]} as unknown as DocumentNode<AllConfidentialitesQuery, AllConfidentialitesQueryVariables>;
export const IsOcrJobRunningDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"IsOcrJobRunning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isOcrJobRunning"}}]}}]} as unknown as DocumentNode<IsOcrJobRunningQuery, IsOcrJobRunningQueryVariables>;
export const OcrResultImagePreparedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OcrResultImagePrepared"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResultImagePrepared"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageIndex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}]}]}}]} as unknown as DocumentNode<OcrResultImagePreparedQuery, OcrResultImagePreparedQueryVariables>;
export const OcrResultPdfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OcrResultPdf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResultPdf"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultid"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<OcrResultPdfQuery, OcrResultPdfQueryVariables>;
export const FindPinnedOcrResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindPinnedOcrResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPinnedOcrResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}}]}}]}}]}}]} as unknown as DocumentNode<FindPinnedOcrResultsQuery, FindPinnedOcrResultsQueryVariables>;
export const _FindAllOcrResultsPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"_FindAllOcrResultsPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllOcrResultsPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrDone"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"createdDate"}}]}}]}}]}}]} as unknown as DocumentNode<_FindAllOcrResultsPagedQuery, _FindAllOcrResultsPagedQueryVariables>;
export const FindAllPinnedFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindAllPinnedFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findPinnedOcrResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResult"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"objects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subject"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeRelationAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypRelationFr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relationType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypRelationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeRelationAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindAllPinnedFilesQuery, FindAllPinnedFilesQueryVariables>;
export const GetLoggedInUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLoggedInUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"accountNonExpired"}},{"kind":"Field","name":{"kind":"Name","value":"accountNonLocked"}},{"kind":"Field","name":{"kind":"Name","value":"authorities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authority"}}]}},{"kind":"Field","name":{"kind":"Name","value":"demandeInscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}}]}},{"kind":"Field","name":{"kind":"Name","value":"folders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"habilitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"abbreviation"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationAr"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetLoggedInUserQuery, GetLoggedInUserQueryVariables>;
export const GetHablitationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHablitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habilitations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libHabilitationAr"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}}]}}]}}]} as unknown as DocumentNode<GetHablitationsQuery, GetHablitationsQueryVariables>;
export const AllOcrResultConfidentialteNotDefinedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allOcrResultConfidentialteNotDefined"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allOcrResultConfidentialteNotDefined"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}}]}}]}}]} as unknown as DocumentNode<AllOcrResultConfidentialteNotDefinedQuery, AllOcrResultConfidentialteNotDefinedQueryVariables>;
export const EnumsWrapperForCodeGenerationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"enumsWrapperForCodeGeneration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"enum"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EnumsWrapperInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enumsWrapperForCodeGeneration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"enumsWrapper"},"value":{"kind":"Variable","name":{"kind":"Name","value":"enum"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privilegesEnum"}},{"kind":"Field","name":{"kind":"Name","value":"rolesEnum"}}]}}]}}]} as unknown as DocumentNode<EnumsWrapperForCodeGenerationQuery, EnumsWrapperForCodeGenerationQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"habilitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationAr"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const OcrResultUserGrantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OcrResultUserGrants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileSignatue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResultByid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileSignatue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileSignatue"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultUserGrants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}},{"kind":"Field","name":{"kind":"Name","value":"habilitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OcrResultUserGrantsQuery, OcrResultUserGrantsQueryVariables>;
export const AllOcrResultUsersGrantsPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllOcrResultUsersGrantsPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allOcrResultUsersGrantsPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialite"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeTexteReglementaire"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultUserGrants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"ocrResultId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"matricule"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<AllOcrResultUsersGrantsPagedQuery, AllOcrResultUsersGrantsPagedQueryVariables>;
export const UserConfidentialitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userConfidentialites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habilitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}},{"kind":"Field","name":{"kind":"Name","value":"confidentialites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteFr"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserConfidentialitesQuery, UserConfidentialitesQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}},{"kind":"Field","name":{"kind":"Name","value":"habilitation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationAr"}},{"kind":"Field","name":{"kind":"Name","value":"libHabilitationFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enabled"}},{"kind":"Field","name":{"kind":"Name","value":"demandeInscription"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}}]}},{"kind":"Field","name":{"kind":"Name","value":"authorities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authority"}}]}},{"kind":"Field","name":{"kind":"Name","value":"accountNonLocked"}},{"kind":"Field","name":{"kind":"Name","value":"accountNonLocked"}},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"privileges_restriction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const AllUsersPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allUsersPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allUsersPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalElements"}}]}}]}}]} as unknown as DocumentNode<AllUsersPagedQuery, AllUsersPagedQueryVariables>;
export const UserAuthoritiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserAuthorities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authority"}}]}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}}]}}]}}]}}]} as unknown as DocumentNode<UserAuthoritiesQuery, UserAuthoritiesQueryVariables>;
export const FindAllRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllRoles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<FindAllRolesQuery, FindAllRolesQueryVariables>;
export const FindAllRolesPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllRolesPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRolesPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindAllRolesPagedQuery, FindAllRolesPagedQueryVariables>;
export const FindRoleByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findRoleById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRoleById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"privileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<FindRoleByIdQuery, FindRoleByIdQueryVariables>;
export const AllPrivilegesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPrivileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPrivileges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllPrivilegesQuery, AllPrivilegesQueryVariables>;
export const PrivilegeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"privilegeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeById"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"privilegeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"PrivilegeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeById"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PrivilegeByIdQuery, PrivilegeByIdQueryVariables>;
export const AllPrivilegesPagedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allPrivilegesPaged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPrivilegesPaged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalElements"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AllPrivilegesPagedQuery, AllPrivilegesPagedQueryVariables>;
export const FindAllDemandeInscriptionRemainingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findAllDemandeInscriptionRemaining"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findAllDemandeInscriptionRemaining"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateDemande"}}]}}]}}]} as unknown as DocumentNode<FindAllDemandeInscriptionRemainingQuery, FindAllDemandeInscriptionRemainingQueryVariables>;
export const ValidateUserDemandeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"validateUserDemande"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"validateUserDemande"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnomA"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"nom"}}]}}]}}]}}]} as unknown as DocumentNode<ValidateUserDemandeMutation, ValidateUserDemandeMutationVariables>;
export const AddOcrResultToFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddOcrResultToFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addOcrResultsToFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"folderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ocrResultIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pdfFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}}]}}]}}]}}]} as unknown as DocumentNode<AddOcrResultToFolderMutation, AddOcrResultToFolderMutationVariables>;
export const CreateFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FolderInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}},{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]}}]} as unknown as DocumentNode<CreateFolderMutation, CreateFolderMutationVariables>;
export const DeleteFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"folderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder_id"}}}]}]}}]} as unknown as DocumentNode<DeleteFolderMutation, DeleteFolderMutationVariables>;
export const DeletePdfFileFromFolderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePdfFileFromFolder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pdfId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePdfFileFromFolder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"folderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pdfId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pdfId"}}}]}]}}]} as unknown as DocumentNode<DeletePdfFileFromFolderMutation, DeletePdfFileFromFolderMutationVariables>;
export const StartSchedulerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartScheduler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startScheduler"}}]}}]} as unknown as DocumentNode<StartSchedulerMutation, StartSchedulerMutationVariables>;
export const StopSchedulerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StopScheduler"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stopScheduler"}}]}}]} as unknown as DocumentNode<StopSchedulerMutation, StopSchedulerMutationVariables>;
export const PinOcrResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PinOcrResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pinOcrResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PinOcrResultMutation, PinOcrResultMutationVariables>;
export const UnpinOcrResultDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnpinOcrResult"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unpinOcrResult"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<UnpinOcrResultMutation, UnpinOcrResultMutationVariables>;
export const SetHabilitationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetHabilitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"habilitaitonId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setHablitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"habilitaitonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"habilitaitonId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}]}}]} as unknown as DocumentNode<SetHabilitationMutation, SetHabilitationMutationVariables>;
export const ChangeOcrResultGrantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeOcrResultGrant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultUserGrantKeys"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OcrResultUserGrantKeyInputInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeOcrResultGrant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}},{"kind":"Argument","name":{"kind":"Name","value":"ocrResultUserGrantKeysInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultUserGrantKeys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ocrResultId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChangeOcrResultGrantMutation, ChangeOcrResultGrantMutationVariables>;
export const UpdateConfidentialiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateConfidentialite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confidentialiteId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateConfidentialite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}},{"kind":"Argument","name":{"kind":"Name","value":"confidentailteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confidentialiteId"}}}]}]}}]} as unknown as DocumentNode<UpdateConfidentialiteMutation, UpdateConfidentialiteMutationVariables>;
export const UserAddPrivilegeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAddPrivilege"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddPrivilege"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"privilegeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}}}]}]}}]} as unknown as DocumentNode<UserAddPrivilegeMutation, UserAddPrivilegeMutationVariables>;
export const UserAddPrivilegeRestrictionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAddPrivilegeRestriction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddPrivilegeRestriction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"privilegeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}}},{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}]}}]} as unknown as DocumentNode<UserAddPrivilegeRestrictionMutation, UserAddPrivilegeRestrictionMutationVariables>;
export const UserAddRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAddRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAddRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleName"}}}]}]}}]} as unknown as DocumentNode<UserAddRoleMutation, UserAddRoleMutationVariables>;
export const UserDeletePrivilegeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeletePrivilege"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeletePrivilege"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"privilegeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}}}]}]}}]} as unknown as DocumentNode<UserDeletePrivilegeMutation, UserDeletePrivilegeMutationVariables>;
export const UserDeletePrivilegeRestrictionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeletePrivilegeRestriction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeletePrivilegeRestriction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"privilegeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeName"}}}]}]}}]} as unknown as DocumentNode<UserDeletePrivilegeRestrictionMutation, UserDeletePrivilegeRestrictionMutationVariables>;
export const UserDeleteRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserDeleteRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userDeleteRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleName"}}}]}]}}]} as unknown as DocumentNode<UserDeleteRoleMutation, UserDeleteRoleMutationVariables>;
export const AddPrivilegeToRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPrivilegeToRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPrivilegeToRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}},{"kind":"Argument","name":{"kind":"Name","value":"privilegeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeId"}}}]}]}}]} as unknown as DocumentNode<AddPrivilegeToRoleMutation, AddPrivilegeToRoleMutationVariables>;
export const DeletePrivilegeFromRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePrivilegeFromRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"privilegeId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePrivilegeFromRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"privilegeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"privilegeId"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}]}]}}]} as unknown as DocumentNode<DeletePrivilegeFromRoleMutation, DeletePrivilegeFromRoleMutationVariables>;
export const GenerateThumbnailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateThumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generateThumbnails"}}]}}]} as unknown as DocumentNode<GenerateThumbnailsMutation, GenerateThumbnailsMutationVariables>;
export const GetPhotoByMatriculeAndSizeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPhotoByMatriculeAndSize"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"size"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getThumbnailByMatriculeAndSize"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}},{"kind":"Argument","name":{"kind":"Name","value":"size"},"value":{"kind":"Variable","name":{"kind":"Name","value":"size"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbData"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"format"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbSize"}}]}}]}}]} as unknown as DocumentNode<GetPhotoByMatriculeAndSizeQuery, GetPhotoByMatriculeAndSizeQueryVariables>;
export const PhotoByMatriculeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"photoByMatricule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoByMatricule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"matricule"},"value":{"kind":"Variable","name":{"kind":"Name","value":"matricule"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"format"}},{"kind":"Field","name":{"kind":"Name","value":"translateX"}},{"kind":"Field","name":{"kind":"Name","value":"translateY"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"rotation"}},{"kind":"Field","name":{"kind":"Name","value":"photoData"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"matricule"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeArDetermine"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnails"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"thumbSize"}},{"kind":"Field","name":{"kind":"Name","value":"thumbData"}}]}}]}}]}}]} as unknown as DocumentNode<PhotoByMatriculeQuery, PhotoByMatriculeQueryVariables>;
export const SearchUsersByTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchUsersByToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchUsersByToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"personnel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchUsersByTokenQuery, SearchUsersByTokenQueryVariables>;
export const CreateSimulationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSimulation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SimulationDtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfSteps"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateDebut"}},{"kind":"Field","name":{"kind":"Name","value":"dateFin"}}]}}]}}]} as unknown as DocumentNode<CreateSimulationMutation, CreateSimulationMutationVariables>;
export const SetNumberOfStepsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setNumberOfSteps"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"steps"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setNumberOfSteps"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"steps"},"value":{"kind":"Variable","name":{"kind":"Name","value":"steps"}}}]}]}}]} as unknown as DocumentNode<SetNumberOfStepsMutation, SetNumberOfStepsMutationVariables>;
export const StartSimulationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"startSimulation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startSimulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}]}]}}]} as unknown as DocumentNode<StartSimulationMutation, StartSimulationMutationVariables>;
export const CreateSimAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createSimAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simAgentDto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SimAgentDtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSimAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simAgentDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simAgentDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simAgentId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"step"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateSimAgentMutation, CreateSimAgentMutationVariables>;
export const SimulationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"simulationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulationById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfSteps"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateDebut"}},{"kind":"Field","name":{"kind":"Name","value":"dateFin"}}]}}]}}]} as unknown as DocumentNode<SimulationByIdQuery, SimulationByIdQueryVariables>;
export const SimulationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"simulations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simulations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfSteps"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"dateDebut"}},{"kind":"Field","name":{"kind":"Name","value":"dateFin"}}]}}]}}]} as unknown as DocumentNode<SimulationsQuery, SimulationsQueryVariables>;
export const SimAgentsByStepAndSimulationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"simAgentsByStepAndSimulation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulaitonId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"step"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"simAgentsByStepAndSimulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulaitonId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageable"}}},{"kind":"Argument","name":{"kind":"Name","value":"step"},"value":{"kind":"Variable","name":{"kind":"Name","value":"step"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"arme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nom"}},{"kind":"Field","name":{"kind":"Name","value":"pnom"}},{"kind":"Field","name":{"kind":"Name","value":"noma"}},{"kind":"Field","name":{"kind":"Name","value":"pnoma"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"anicenneteGrade"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeService"}},{"kind":"Field","name":{"kind":"Name","value":"class_"}},{"kind":"Field","name":{"kind":"Name","value":"nombreDeProposition"}},{"kind":"Field","name":{"kind":"Name","value":"simAgentId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"step"}}]}},{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}}]}}]}}]}}]} as unknown as DocumentNode<SimAgentsByStepAndSimulationQuery, SimAgentsByStepAndSimulationQueryVariables>;
export const DeleteSimAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteSimAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simAgentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SimAgentIdInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteSimAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simAgentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simAgentId"}}}]}]}}]} as unknown as DocumentNode<DeleteSimAgentMutation, DeleteSimAgentMutationVariables>;
export const CreateRecrutementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecrutement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutemnt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RecrutementDtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecrutement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recrutementDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutemnt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}}]}}]}}]} as unknown as DocumentNode<CreateRecrutementMutation, CreateRecrutementMutationVariables>;
export const UpdateRecrutemntNombreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRecrutemntNombre"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRecrutemntNombre"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nomber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nombre"}}},{"kind":"Argument","name":{"kind":"Name","value":"recrutemntId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}}}]}]}}]} as unknown as DocumentNode<UpdateRecrutemntNombreMutation, UpdateRecrutemntNombreMutationVariables>;
export const DeleteRecrutementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteRecrutement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRecrutement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recrutementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}}}]}]}}]} as unknown as DocumentNode<DeleteRecrutementMutation, DeleteRecrutementMutationVariables>;
export const AllRecrutemntsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRecrutemnts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRecrutemnts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<AllRecrutemntsQuery, AllRecrutemntsQueryVariables>;
export const RecrutementByClassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recrutementByClass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"class"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recrutementByClass"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"class_"},"value":{"kind":"Variable","name":{"kind":"Name","value":"class"}}},{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}}]}}]}}]} as unknown as DocumentNode<RecrutementByClassQuery, RecrutementByClassQueryVariables>;
export const RecrutementByTypeRecrutementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recrutementByTypeRecrutement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeRecrutment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeRecrutement"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recrutementByTypeRecrutement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"typeRecrutement"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeRecrutment"}}},{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<RecrutementByTypeRecrutementQuery, RecrutementByTypeRecrutementQueryVariables>;
export const RecrutementByTypeRecrutementAndClassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recrutementByTypeRecrutementAndClass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"typeRecrutment"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TypeRecrutement"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"classe"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recrutementByTypeRecrutementAndClass"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"typeRecrutement"},"value":{"kind":"Variable","name":{"kind":"Name","value":"typeRecrutment"}}},{"kind":"Argument","name":{"kind":"Name","value":"classe_"},"value":{"kind":"Variable","name":{"kind":"Name","value":"classe"}}},{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"nombre"}}]}}]}}]} as unknown as DocumentNode<RecrutementByTypeRecrutementAndClassQuery, RecrutementByTypeRecrutementAndClassQueryVariables>;
export const AllRecrutemntsBySimulationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRecrutemntsBySimulation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRecrutemntsBySimulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"typeRecrutement"}},{"kind":"Field","name":{"kind":"Name","value":"simulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<AllRecrutemntsBySimulationQuery, AllRecrutemntsBySimulationQueryVariables>;
export const CreateRecrutementV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecrutementV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutemnt"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RecrutementV2DtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecrutementV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recrutementV2Dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutemnt"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"EMP"}},{"kind":"Field","name":{"kind":"Name","value":"FF"}},{"kind":"Field","name":{"kind":"Name","value":"FS_L"}},{"kind":"Field","name":{"kind":"Name","value":"FS_M"}},{"kind":"Field","name":{"kind":"Name","value":"simulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateRecrutementV2Mutation, CreateRecrutementV2MutationVariables>;
export const UpdateRecrutemntV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateRecrutemntV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutementV2Dto"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RecrutementV2DtoInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateRecrutemntV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recrutementV2Dto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutementV2Dto"}}}]}]}}]} as unknown as DocumentNode<UpdateRecrutemntV2Mutation, UpdateRecrutemntV2MutationVariables>;
export const DeleteRecrutementV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteRecrutementV2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteRecrutementV2"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"recrutementId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"recrutmentId"}}}]}]}}]} as unknown as DocumentNode<DeleteRecrutementV2Mutation, DeleteRecrutementV2MutationVariables>;
export const AllRecrutemntsV2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRecrutemntsV2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRecrutemntsV2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"FS_M"}},{"kind":"Field","name":{"kind":"Name","value":"FS_L"}},{"kind":"Field","name":{"kind":"Name","value":"FF"}},{"kind":"Field","name":{"kind":"Name","value":"EMP"}},{"kind":"Field","name":{"kind":"Name","value":"simulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AllRecrutemntsV2Query, AllRecrutemntsV2QueryVariables>;
export const RecrutementV2ByClassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"recrutementV2ByClass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"class"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recrutementV2ByClass"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"class_"},"value":{"kind":"Variable","name":{"kind":"Name","value":"class"}}},{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"FS_M"}},{"kind":"Field","name":{"kind":"Name","value":"FS_L"}},{"kind":"Field","name":{"kind":"Name","value":"FF"}},{"kind":"Field","name":{"kind":"Name","value":"EMP"}},{"kind":"Field","name":{"kind":"Name","value":"simulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RecrutementV2ByClassQuery, RecrutementV2ByClassQueryVariables>;
export const AllRecrutemntsV2BySimulationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allRecrutemntsV2BySimulation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allRecrutemntsV2BySimulation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"simulationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"simulationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"anneDeRecrutemnt"}},{"kind":"Field","name":{"kind":"Name","value":"FS_M"}},{"kind":"Field","name":{"kind":"Name","value":"FS_L"}},{"kind":"Field","name":{"kind":"Name","value":"FF"}},{"kind":"Field","name":{"kind":"Name","value":"EMP"}},{"kind":"Field","name":{"kind":"Name","value":"simulation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<AllRecrutemntsV2BySimulationQuery, AllRecrutemntsV2BySimulationQueryVariables>;
export const GradeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"gradeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gradeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gradeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"abrGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"gradeInf"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"rhRCatGrade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cat"}},{"kind":"Field","name":{"kind":"Name","value":"catGrade"}},{"kind":"Field","name":{"kind":"Name","value":"libCatAr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatFr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatGradeFr"}}]}}]}}]}}]} as unknown as DocumentNode<GradeByIdQuery, GradeByIdQueryVariables>;
export const AllGradesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allGrades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGrades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"gradeInf"}}]}}]}}]} as unknown as DocumentNode<AllGradesQuery, AllGradesQueryVariables>;
export const AllGradesWithCategrieDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allGradesWithCategrie"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGrades"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grade"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"abrGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"gradeInf"}},{"kind":"Field","name":{"kind":"Name","value":"rhRCatGrade"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"catGrade"}},{"kind":"Field","name":{"kind":"Name","value":"cat"}},{"kind":"Field","name":{"kind":"Name","value":"libCatGradeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatGradeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatFr"}},{"kind":"Field","name":{"kind":"Name","value":"libCatAr"}}]}}]}}]}}]} as unknown as DocumentNode<AllGradesWithCategrieQuery, AllGradesWithCategrieQueryVariables>;
export const ArmeByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"armeById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Long"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"armeById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"armeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}},{"kind":"Field","name":{"kind":"Name","value":"commandement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementAr"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementFr"}}]}}]}}]}}]} as unknown as DocumentNode<ArmeByIdQuery, ArmeByIdQueryVariables>;
export const AllArmesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allArmes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allArmes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}}]}}]}}]} as unknown as DocumentNode<AllArmesQuery, AllArmesQueryVariables>;
export const CommandementByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"commandementById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BigInteger"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"commandementById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementFr"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementAr"}},{"kind":"Field","name":{"kind":"Name","value":"RArmes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeAr"}},{"kind":"Field","name":{"kind":"Name","value":"libArmeFr"}}]}}]}}]}}]} as unknown as DocumentNode<CommandementByIdQuery, CommandementByIdQueryVariables>;
export const AllCommandemnetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCommandemnets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allCommandements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementAr"}},{"kind":"Field","name":{"kind":"Name","value":"libCommandementFr"}}]}}]}}]} as unknown as DocumentNode<AllCommandemnetsQuery, AllCommandemnetsQueryVariables>;
export const FindOcrResultEntityESbyIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"findOcrResultEntityESbyId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fildId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOcrResultEntityESbyId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fildId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateReference"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"libConfidentialiteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libTypeTexteAr"}},{"kind":"Field","name":{"kind":"Name","value":"libUrgenceAr"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfPapers"}},{"kind":"Field","name":{"kind":"Name","value":"originalFileName"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"pages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x1"}},{"kind":"Field","name":{"kind":"Name","value":"x2"}},{"kind":"Field","name":{"kind":"Name","value":"y1"}},{"kind":"Field","name":{"kind":"Name","value":"y2"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id_page"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"paragraphs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bbox"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x1"}},{"kind":"Field","name":{"kind":"Name","value":"x2"}},{"kind":"Field","name":{"kind":"Name","value":"y1"}},{"kind":"Field","name":{"kind":"Name","value":"y2"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id_par"}},{"kind":"Field","name":{"kind":"Name","value":"lang"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FindOcrResultEntityESbyIdQuery, FindOcrResultEntityESbyIdQueryVariables>;
export const IsFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"isFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}}]}]}}]} as unknown as DocumentNode<IsFavoriteQuery, IsFavoriteQueryVariables>;
export const ToggleFavoriteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleFavorite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleFavorite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ocrResultId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ocrResultId"}}}]}]}}]} as unknown as DocumentNode<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;