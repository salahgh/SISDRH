import { emptySplitApi as api } from "./emptyApi";
export const addTagTypes = [
  "ocr-controller",
  "default-graph-ql-controller",
  "product-search-service",
  "authentication-controller",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      generateOcrResult: build.mutation<
        GenerateOcrResultApiResponse,
        GenerateOcrResultApiArg
      >({
        query: (queryArg) => ({
          url: `/ocr`,
          method: "POST",
          body: queryArg.body,
          params: {
            ocrResultEntityJpaRequestsJson:
              queryArg.ocrResultEntityJpaRequestsJson,
          },
        }),
        invalidatesTags: ["ocr-controller"],
      }),
      executeGetEventStream1: build.query<
        ExecuteGetEventStream1ApiResponse,
        ExecuteGetEventStream1ApiArg
      >({
        query: (queryArg) => ({
          url: `/graphql`,
          headers: { Connection: queryArg.connection },
          params: { arg0: queryArg.arg0 },
        }),
        providesTags: ["default-graph-ql-controller"],
      }),
      executeJsonPostEventStream111: build.mutation<
        ExecuteJsonPostEventStream111ApiResponse,
        ExecuteJsonPostEventStream111ApiArg
      >({
        query: (queryArg) => ({
          url: `/graphql`,
          method: "POST",
          body: queryArg.graphQlRequest,
          params: { arg1: queryArg.arg1, arg0: queryArg.arg0 },
        }),
        invalidatesTags: ["default-graph-ql-controller"],
      }),
      findByid: build.query<FindByidApiResponse, FindByidApiArg>({
        query: (queryArg) => ({
          url: `/elastic_`,
          params: { fileId: queryArg.fileId },
        }),
        providesTags: ["product-search-service"],
      }),
      findElasticOcrResultsAllCriterias: build.mutation<
        FindElasticOcrResultsAllCriteriasApiResponse,
        FindElasticOcrResultsAllCriteriasApiArg
      >({
        query: (queryArg) => ({
          url: `/elastic_`,
          method: "POST",
          body: queryArg.elasticSearchInput,
        }),
        invalidatesTags: ["product-search-service"],
      }),
      register: build.mutation<RegisterApiResponse, RegisterApiArg>({
        query: (queryArg) => ({
          url: `/api/auth/register`,
          method: "POST",
          body: queryArg.registerRequest,
        }),
        invalidatesTags: ["authentication-controller"],
      }),
      authorizeUser: build.mutation<
        AuthorizeUserApiResponse,
        AuthorizeUserApiArg
      >({
        query: (queryArg) => ({
          url: `/api/auth/authorizeUser`,
          method: "POST",
          params: { matricule: queryArg.matricule },
        }),
        invalidatesTags: ["authentication-controller"],
      }),
      authenticate: build.mutation<AuthenticateApiResponse, AuthenticateApiArg>(
        {
          query: (queryArg) => ({
            url: `/api/auth/authenticate`,
            method: "POST",
            body: queryArg.authenticationRequest,
          }),
          invalidatesTags: ["authentication-controller"],
        },
      ),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as myApi };
export type GenerateOcrResultApiResponse =
  /** status 200 OK */ PdfFileUploadResponse[];
export type GenerateOcrResultApiArg = {
  ocrResultEntityJpaRequestsJson: string[];
  body: {
    file: Blob[];
  };
};
export type ExecuteGetEventStream1ApiResponse = /** status 200 OK */ object;
export type ExecuteGetEventStream1ApiArg = {
  arg0: GraphQlRequest;
  connection?: string;
};
export type ExecuteJsonPostEventStream111ApiResponse =
  /** status 200 OK */ object;
export type ExecuteJsonPostEventStream111ApiArg = {
  arg1: GraphQlRequest;
  arg0: {
    [key: string]: string;
  };
  graphQlRequest: GraphQlRequest;
};
export type FindByidApiResponse = /** status 200 OK */ OcrResultEntityElastic2;
export type FindByidApiArg = {
  fileId: string;
};
export type FindElasticOcrResultsAllCriteriasApiResponse =
  /** status 200 OK */ SearchHitsOcrResultEntityElastic2;
export type FindElasticOcrResultsAllCriteriasApiArg = {
  elasticSearchInput: ElasticSearchInput;
};
export type RegisterApiResponse = /** status 200 OK */ DPersonnelDto;
export type RegisterApiArg = {
  registerRequest: RegisterRequest;
};
export type AuthorizeUserApiResponse = /** status 200 OK */ UserDto;
export type AuthorizeUserApiArg = {
  matricule: string;
};
export type AuthenticateApiResponse =
  /** status 200 OK */ AuthenticationResponse;
export type AuthenticateApiArg = {
  authenticationRequest: AuthenticationRequest;
};
export type PdfFileUploadResponse = {
  originalFilename?: string;
  signature?: string;
  status?: string;
};
export type StackTraceElementDto = {
  classLoaderName?: string;
  moduleName?: string;
  moduleVersion?: string;
  methodName?: string;
  fileName?: string;
  className?: string;
  lineNumber?: number;
};
export type ErrorDetails = {
  fieldName?: string;
  message?: string;
};
export type ErrorResponse = {
  endpoint?: string;
  functionName?: string;
  inCodeStackTrace?: StackTraceElementDto[];
  errors?: ErrorDetails[];
  exception?: string;
  localDateTime?: string;
};
export type GraphQlRequest = {
  id?: string;
  query?: string;
  operationName?: string;
  variables?: {
    [key: string]: object;
  };
};
export type BBox = {
  x1?: string;
  y1?: string;
  x2?: string;
  y2?: string;
};
export type Line = {
  id_line?: string;
  type?: string;
  bbox?: BBox;
  text?: string;
  fsize?: number;
};
export type Paragraph = {
  id_par?: string;
  type?: string;
  lang?: string;
  bbox?: BBox;
  lines?: Line[];
};
export type Page = {
  id_page?: string;
  type?: string;
  bbox?: BBox;
  paragraphs?: Paragraph[];
};
export type OcrResultEntityElastic2 = {
  id?: string;
  originalFileName?: string;
  dateReference?: string;
  reference?: string;
  libTypeTexteAr?: string;
  libTypeTexteFr?: string;
  libConfidentialiteAr?: string;
  libConfidentialiteFr?: string;
  libUrgenceAr?: string;
  libUrgenceFr?: string;
  numberOfPapers?: number;
  owner?: string;
  pages?: Page[];
};
export type NestedMetaData = {
  field?: string;
  offset?: number;
  child?: NestedMetaData;
};
export type Explanation = {
  match?: boolean;
  value?: number;
  description?: string;
  details?: Explanation[];
};
export type SearchHitObject = {
  index?: string;
  id?: string;
  score?: number;
  sortValues?: object[];
  content?: object;
  highlightFields?: {
    [key: string]: string[];
  };
  nestedMetaData?: NestedMetaData;
  routing?: string;
  explanation?: Explanation;
  matchedQueries?: string[];
};
export type AggregationsContainerObject = object;
export type Option = {
  text?: string;
  highlighted?: string;
  score?: number;
  collateMatch?: boolean;
};
export type EntryOption = {
  text?: string;
  offset?: number;
  length?: number;
  options?: Option[];
};
export type SuggestionEntryOption = {
  name?: string;
  size?: number;
  entries?: EntryOption[];
};
export type Suggest = {
  suggestions?: SuggestionEntryOption[];
};
export type SearchHitsObject = {
  totalHits?: number;
  searchHits?: SearchHitObject[];
  aggregations?: AggregationsContainerObject;
  suggest?: Suggest;
  maxScore?: number;
  pointInTimeId?: string;
  totalHitsRelation?: "EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "OFF";
  empty?: boolean;
};
export type SearchHitOcrResultEntityElastic2 = {
  index?: string;
  id?: string;
  score?: number;
  sortValues?: object[];
  content?: OcrResultEntityElastic2;
  highlightFields?: {
    [key: string]: string[];
  };
  innerHits?: {
    [key: string]: SearchHitsObject;
  };
  nestedMetaData?: NestedMetaData;
  routing?: string;
  explanation?: Explanation;
  matchedQueries?: string[];
};
export type SearchHitsOcrResultEntityElastic2 = {
  totalHits?: number;
  searchHits?: SearchHitOcrResultEntityElastic2[];
  aggregations?: AggregationsContainerObject;
  suggest?: Suggest;
  maxScore?: number;
  pointInTimeId?: string;
  totalHitsRelation?: "EQUAL_TO" | "GREATER_THAN_OR_EQUAL_TO" | "OFF";
  empty?: boolean;
};
export type ElasticSearchInput = {
  dateReferenceDebut?: string;
  dateReferenceFin?: string;
  reference?: string;
  searchToken?: string;
  idsTypeTextReglementaire?: string[];
  isConfidentialite?: string[];
  domaines?: string[];
  autorites?: string[];
  page?: number;
  size?: number;
  innerPage?: number;
  innerSize?: number;
};
export type DPersonnelDto = {
  id?: string;
  matricule?: string;
  nom?: string;
  pnom?: string;
  noma?: string;
  pnoma?: string;
};
export type RegisterRequest = {
  matricule: string;
  password: string;
};
export type RoleDto = {
  id?: number;
  name?: string;
  description?: string;
};
export type PrivilegeDto = {
  id?: number;
  name?: string;
  description?: string;
};
export type UserDto = {
  id?: string;
  locked?: string;
  roles?: RoleDto[];
  privileges?: PrivilegeDto[];
  privileges_restriction?: PrivilegeDto[];
  personnel?: DPersonnelDto;
};
export type GrantedAuthority = {
  authority?: string;
};
export type AuthenticationResponse = {
  token?: string;
  nom?: string;
  pnom?: string;
  noma?: string;
  pnoma?: string;
  matricule?: string;
  expirationDate?: string;
  grantedAuthorities?: GrantedAuthority[];
};
export type AuthenticationRequest = {
  matricule?: string;
  password?: string;
};
export const {
  useGenerateOcrResultMutation,
  useExecuteGetEventStream1Query,
  useExecuteJsonPostEventStream111Mutation,
  useFindByidQuery,
  useFindElasticOcrResultsAllCriteriasMutation,
  useRegisterMutation,
  useAuthorizeUserMutation,
  useAuthenticateMutation,
} = injectedRtkApi;
