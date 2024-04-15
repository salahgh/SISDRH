import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

interface TexteReglementaireUiInitialState {
  searchPanelOpen: boolean;
}

const initialState: TexteReglementaireUiInitialState = {
  searchPanelOpen: false
};

export const textReglemetaireUISlice = createSlice({
  name: "textReglemetaireUI",
  initialState,
  reducers: {
    openSearchPanel: (state) => {
      state.searchPanelOpen = true;
    },
    closeSearchPanel: (state) => {
      state.searchPanelOpen = false;
    },
  }
});

export const { openSearchPanel , closeSearchPanel } =
  textReglemetaireUISlice.actions;

export const selectTextReglementaireSearchPanelOpen = (s : RootState) => s.textReglemetaireUI.searchPanelOpen

export default textReglemetaireUISlice.reducer;
