import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  darkMode: boolean;
  selectedTheme: string;
}

const initialState: initialStateInterface = {
  darkMode: false,
  selectedTheme: "muiLight",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { toggleDarkMode, setSelectedTheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
