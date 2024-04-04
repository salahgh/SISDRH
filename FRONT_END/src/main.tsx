import React, { Dispatch, SetStateAction } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RTL from "./theme/RTL.tsx";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import local from "date-fns/locale/ar-DZ";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
// import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/router.tsx";
import { IssueType, RhRGrade } from "./_generated_gql_/graphql.ts";
import { baseUrl_ } from "./redux/RtkQueryApis/constants.ts";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { SnackbarProvider } from "notistack";
import { SingleNotification } from "./applications/common/notifications/SingleNotification.tsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

declare module "notistack" {
  interface VariantOverrides {
    copiedInfo: true;
    reportComplete: {
      allowDownload: boolean;
    };
    refetchedNotification: true;
    singleNotification: {
      notificationType: string;
      matricule: string;
      noma: string;
      pnoma: string;
      nom: string;
      pnom: string;
      grade: RhRGrade;
      fonction: string;
      issueId: string;
      statusTitle: string;
      issueTitle: string;
      dateTime: string;
      issueType: IssueType;
      style: string;
      state: string;
      setOpen: Dispatch<SetStateAction<boolean>>;
      id: number;
    };
  }
}

const httpLink = new HttpLink({
  uri: baseUrl_ + "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const storedUser = localStorage.getItem("user");
  const user = JSON.parse(storedUser !== null ? storedUser : " ");
  return {
    headers: {
      ...headers,
      authorization: user ? `Bearer ${user.token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = errorLink.concat(authLink).concat(httpLink);

const client = new ApolloClient({
  link,
  uri: baseUrl_ + "/graphql",
  cache: new InMemoryCache(),
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RTL>
        <DndProvider backend={HTML5Backend}>
        <ApolloProvider client={client}>
          <SnackbarProvider
            maxSnack={5}
            autoHideDuration={3000}
            Components={{
              singleNotification: SingleNotification,
              // reportComplete: ReportComplete,
              // copiedInfo: CopiedNotification,
              // refetchedNotification: RefetchedNotification,
            }}
          >
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={local}
          >
            <RouterProvider router={router} />
          </LocalizationProvider>
          </SnackbarProvider>
        </ApolloProvider>
        </DndProvider>
      </RTL>
    </Provider>
  </React.StrictMode>
)
