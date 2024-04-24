import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store.ts";

interface InitialStateInterface {
  user: { matricule?: string; token?: string };
  expirationTime: string | null;
  privileges: string[];
}

const initialState: InitialStateInterface = {
  user: {},
  expirationTime: null,
  privileges: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setExpirationTime: (state, action) => {
      state.expirationTime = action.payload;
    },
    setPrivileges: (state, action) => {
      state.privileges = action.payload;
    },
  },
});

export const { logout, setUser, setExpirationTime, setPrivileges } =
  userSlice.actions;

// clear the store on logout
export const selectLoggedInUser = (state: RootState) => state.loggedInUser.user;
export const selectExpirationTime = (state: RootState) =>
  state.loggedInUser.expirationTime;

export const selectPrivileges = (state: RootState) =>
  state.loggedInUser.privileges;

export default userSlice.reducer;
