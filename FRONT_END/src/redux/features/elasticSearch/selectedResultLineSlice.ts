import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "../../store.ts";

interface ElasticSearchInputInterface {
  dateReferenceDebut: string;
  dateReferenceFin: string;
  reference: string;
  searchToken: string;
  idsTypeTextReglementaire: string[];
  isConfidentialite: string[];
}

interface InitialStateInterface {
  selectedOcrResult: {
    selectedFileId: string;
    selectedPageIndex: string;
    selectedLine: any;
  };
  selectedSinglePdfViewer: {
    selectedFileId: string;
    selectedPageIndex: string;
  };
  elasticSearchInput: ElasticSearchInputInterface;
}

const initialState: InitialStateInterface = {
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
    setSelectedOcrResult: (state, action) => {
      state.selectedOcrResult = action.payload;
    },
    setSelectedFileId: (state, action) => {
      state.selectedOcrResult.selectedFileId = action.payload;
    },
    setSelectedPageIndex: (state, action) => {
      state.selectedOcrResult.selectedPageIndex = action.payload;
    },
    setSelectedLine: (state, action) => {
      state.selectedOcrResult.selectedLine = action.payload;
    },
    setSelectedSinglePdfViewerFileId: (state, action) => {
      state.selectedSinglePdfViewer.selectedFileId = action.payload;
    },
    setSelectedSinglePdfViewerPageIndex: (state, action) => {
      state.selectedSinglePdfViewer.selectedPageIndex = action.payload;
    },
    setElasticSearchInput: (
      state,
      action: PayloadAction<ElasticSearchInputInterface>,
    ) => {
      state.elasticSearchInput = action.payload;
    },
  },
});

export const {
  setSelectedOcrResult,
  setSelectedFileId,
  setSelectedPageIndex,
  setSelectedLine,
  setElasticSearchInput,
  setSelectedSinglePdfViewerFileId,
  setSelectedSinglePdfViewerPageIndex,
} = elasticSelectionSlice.actions;

export const selectSelectedFileId = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedFileId;
export const selectSelectedPageIndex = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedPageIndex;
export const selectSelectedLine = (state: RootState) =>
  state.elastic.selectedOcrResult.selectedLine;
export const selectElasticSearchInput = (state: RootState) =>
  state.elastic.elasticSearchInput;
export const selectSelectedSinglePdfViewerFileId = (state: RootState) =>
  state.elastic.selectedSinglePdfViewer.selectedFileId;
export const selectSelectedSinglePdfViewerPageIndex = (state: RootState) =>
  state.elastic.selectedSinglePdfViewer.selectedPageIndex;

export default elasticSelectionSlice.reducer;
