import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

interface Page {
  pageNumber: number;
  pageSize: number;
}

interface InitialState {
  selectedFolder: string;
  selectedPdfViewer: string;
  page: Page;
}

const initialState: InitialState = {
  selectedFolder: null,
  selectedPdfViewer: "PDF",
  page: {
    pageNumber: 0,
    pageSize: 10,
  },
};

export const foldersSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    setSelectedFolder: (state, action) => {
      state.selectedFolder = action.payload;
    },
    setSelectedPdfViewer: (state, action) => {
      state.selectedPdfViewer = action.payload;
    },
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
  },
});

export const { setSelectedFolder, setSelectedPdfViewer, setPage } =
  foldersSlice.actions;

export const selectSelectedFolder = (state: RootState) =>
  state.folder.selectedFolder;
export const selectSelectedPdfViewer = (state: RootState) =>
  state.folder.selectedPdfViewer;

export const selectPage = (state: RootState) => state.folder.page;

export default foldersSlice.reducer;
