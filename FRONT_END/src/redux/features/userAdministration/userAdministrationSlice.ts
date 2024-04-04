import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

const initialState = {
  selectedUser: null,
};

export const userAdministrationSlice = createSlice({
  name: "userAdministration",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setSelectedUser } = userAdministrationSlice.actions;

export const selectSelectedUser = (state: RootState) =>
  state.userAdministration.selectedUser;

export default userAdministrationSlice.reducer;
