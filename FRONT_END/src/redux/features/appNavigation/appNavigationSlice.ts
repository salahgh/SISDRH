import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  selectedApplication: null,
  selectedDrawerNavigation: null,
};

export const appNavigationSlice = createSlice({
  name: "appNavigation",
  initialState,
  reducers: {
    setselectedApplication: (state, action) => {
      state.selectedApplication = action.payload;
    },
    setselectedDrawerNavigation: (state, action) => {
      state.selectedDrawerNavigation = action.payload;
    },
  },
});

export const { setselectedApplication, setselectedDrawerNavigation } =
  appNavigationSlice.actions;

export const selectselectedApplication = (state: RootState) =>
  state.appNavigation.selectedApplication;
export const selectselectedDrawerNavigation = (state: RootState) =>
  state.appNavigation.selectedDrawerNavigation;

export default appNavigationSlice.reducer;
