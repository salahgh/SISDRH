import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "../../store.ts";
import { FilteringFieldsInterface } from "../../../applications/pam/mainDataGrid/types.ts";

interface ElasticSearchInputInterface {
  dateReferenceDebut: string,
  dateReferenceFin: string,
  reference: string,
  searchToken: string,
  idsTypeTextReglementaire: string[],
  isConfidentialite: string[],
}

interface InitialStateInterface {
  selectedOcrResult: {
    selectedFileId: string,
    selectedPageIndex: string,
    selectedLine: string,
  },
  selectedSinglePdfViewer: {
    selectedFileId: string,
    selectedPageIndex: string,
  },
  elasticSearchInput: ElasticSearchInputInterface
}


const initialState : InitialStateInterface = {
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
    idsTypeTextReglementaire: [],
    isConfidentialite: [],
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
    setelasticSearchInput: (state, action : PayloadAction<ElasticSearchInputInterface>) => {
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
