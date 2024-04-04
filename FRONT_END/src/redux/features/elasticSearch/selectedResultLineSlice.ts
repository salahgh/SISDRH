import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "../../store.ts";

const initialState = {
  selectedOcrResult: {
    selectedFileId: null,
    selectedPageIndex: null,
    selectedLine: null,
  },
  selectedSinglePdfViewer: {
    selectedFileId: null,
    selectedPageIndex: null,
  },
  elasticSearchInput: {
    dateReferenceDebut: "1970-01-01",
    dateReferenceFin: format(new Date(), "yyyy-MM-dd"),
    reference: "",
    searchToken: "",
    idsTypeTextReglementaire: [
      "DECRET",
      "NOTE",
      "INSTRUCTION",
      "DECISION",
      "ARRETE",
      "BROJET_DECRET",
    ],
    isConfidentialite: [
      "NORMAL",
      "CONFIDENTIEL",
      "SECRET",
      "TRES SECRET",
      "SECRET DEFENSE",
      "NON ENCORE DEFINIE",
    ],
  },
};

export const elasticSelectionSlice = createSlice({
  name: "elastic",
  initialState,
  reducers: {
    setselectedOcrResult: (state, action) => {
      state.selectedOcrResult = action.payload;
    },
    setselectedFileId: (state, action) => {
      state.selectedOcrResult.selectedFileId = action.payload;
    },
    setselectedPageIndex: (state, action) => {
      state.selectedOcrResult.selectedPageIndex = action.payload;
    },
    setselectedLine: (state, action) => {
      state.selectedOcrResult.selectedLine = action.payload;
    },
    setselectedSinglePdfViewerFileId: (state, action) => {
      state.selectedSinglePdfViewer.selectedFileId = action.payload;
    },
    setselectedSinglePdfViewerPageIndex: (state, action) => {
      state.selectedSinglePdfViewer.selectedPageIndex = action.payload;
    },
    setelasticSearchInput: (state, action) => {
      state.elasticSearchInput = action.payload;
    },
  },
});

export const {
  setselectedOcrResult,
  setselectedFileId,
  setselectedPageIndex,
  setselectedLine,
  setelasticSearchInput,
  setselectedSinglePdfViewerFileId,
  setselectedSinglePdfViewerPageIndex,
} = elasticSelectionSlice.actions;

export const selectelectedOcrResult = (state: RootState) =>
  state.elastic.selectedOcrResult;
export const selectselectedFileId = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedFileId;
export const selectselectedPageIndex = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedPageIndex;
export const selectselectedLine = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedLine;
export const selectelasticSearchInput = (state: RootState) =>
  state.elastic.elasticSearchInput;
export const selectselectedSinglePdfViewerFileId = (state: RootState) =>
  state.elastic.selectedSinglePdfViewer.selectedFileId;
export const selectselectedSinglePdfViewerPageIndex = (state: RootState) =>
  state.elastic.selectedSinglePdfViewer.selectedPageIndex;

export default elasticSelectionSlice.reducer;
