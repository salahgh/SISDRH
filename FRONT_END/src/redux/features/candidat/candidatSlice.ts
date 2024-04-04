import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  selectedCandidatId: 0,
};

export const candidatSlice = createSlice({
  name: "candidat",
  initialState,
  reducers: {
    setSelectedCandidatId: (state, action) => {
      state.selectedCandidatId = action.payload;
    },
  },
});

export const { setSelectedCandidatId } = candidatSlice.actions;

export const selectSelectedCandidatId = (state: RootState) =>
  state.candidat.selectedCandidatId;

export default candidatSlice.reducer;
