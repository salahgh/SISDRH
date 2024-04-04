import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  selectedProjectId: null,
  selectedIssueId: null,
  page: 0,
  size: 10,
  selectedIssueSatus: -1,
  selectedIssueType: -1,
};

export const bugTrackerSlice = createSlice({
  name: "bugTracker",
  initialState,
  reducers: {
    setSelectedProjectId: (state, action) => {
      state.selectedProjectId = action.payload;
    },
    setSelectedIssueId: (state, action) => {
      state.selectedIssueId = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setPageModel: (state, action) => {
      state.page = action.payload.page;
      state.size = action.payload.size;
    },
    setSelectedIssueType: (state, action) => {
      state.selectedIssueType = action.payload;
    },
    setSelectedIssueSatus: (state, action) => {
      state.selectedIssueSatus = action.payload;
    },
  },
});

export const {
  setPageModel,
  setSelectedProjectId,
  setSelectedIssueId,
  setPage,
  setSize,
  setSelectedIssueSatus,
  setSelectedIssueType,
} = bugTrackerSlice.actions;

export const selectSelectedProjectId = (state: RootState) =>
  state.bugTracker.selectedProjectId;

export const selectSelectedIssueId = (state: RootState) =>
  state.bugTracker.selectedIssueId;
export const selectPage = (state: RootState) => state.bugTracker.page;
export const selectSize = (state: RootState) => state.bugTracker.size;
export const selectSelectedIssueType = (state: RootState) =>
  state.bugTracker.selectedIssueType;
export const selectSelectedIssueSatus = (state: RootState) =>
  state.bugTracker.selectedIssueSatus;

export default bugTrackerSlice.reducer;
