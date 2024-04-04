import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  status: "stopped",
  selectedItem: null,
  errorMessage: null,
};

export const OcrJobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setSelectedItem, setStatus, setErrorMessage } =
  OcrJobSlice.actions;
export const selectStatus = (state: RootState) => state.job.status;
export const selectSelectedItem = (state: RootState) => state.job.selectedItem;
export const selectErrorMessage = (state: RootState) => state.job.errorMessage;

export default OcrJobSlice.reducer;
