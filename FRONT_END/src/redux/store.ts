import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import candidatReducer from "./features/candidat/candidatSlice";
import userReducer from "./features/auth/userSlice";
import elasticSelectionReducer from "./features/elasticSearch/selectedResultLineSlice";
import { OcrJobSlice } from "./features/elasticSearch/OcrJobSlice";
import { emptySplitApi } from "./emptyApi";
import { foldersSlice } from "./features/folderAndFiles/foldersSlice";
import { appNavigationSlice } from "./features/appNavigation/appNavigationSlice";
import { userAdministrationSlice } from "./features/userAdministration/userAdministrationSlice";
import { bugTrackerSlice } from "./features/bugTracker/bugTrackerSlice";
import { darkModeSlice } from "./features/darkModeSlice";
import pamSliceReducer from "./features/pam/pamSlice";
import  textReglemetaireUIReducer  from "./features/elasticSearch/textReglemetaireUISlice.ts";

export const store = configureStore({
  reducer: {
    pam: pamSliceReducer,
    counter: counterReducer,
    candidat: candidatReducer,
    loggedInUser: userReducer,
    elastic: elasticSelectionReducer,
    textReglemetaireUI : textReglemetaireUIReducer ,
    job: OcrJobSlice.reducer,
    folder: foldersSlice.reducer,
    userAdministration: userAdministrationSlice.reducer,
    appNavigation: appNavigationSlice.reducer,
    bugTracker: bugTrackerSlice.reducer,
    darkMode: darkModeSlice.reducer,
    [emptySplitApi.reducerPath]: emptySplitApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emptySplitApi.middleware),
  // .concat(apiMiddleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
