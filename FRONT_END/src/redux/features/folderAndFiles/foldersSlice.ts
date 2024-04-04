import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  selectedFolder: null,
  selectedFile: null,
  selectedPdfViewer: "PDF",
};

export const foldersSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setSelectedFolder: (state, action) => {
      state.selectedFolder = action.payload;
    },
    setSelectedFile: (state, action) => {
      state.selectedFile = action.payload;
    },
    setSelectedPdfViewer: (state, action) => {
      state.selectedPdfViewer = action.payload;
    },
  },
});

export const { setSelectedFolder, setSelectedFile, setSelectedPdfViewer } =
  foldersSlice.actions;

export const selectSelectedFolder = (state: RootState) =>
  state.folder.selectedFolder;
export const selectSelectedFile = (state: RootState) =>
  state.folder.selectedFile;
export const selectselectedPdfViewer = (state: RootState) =>
  state.folder.selectedPdfViewer;

export default foldersSlice.reducer;
