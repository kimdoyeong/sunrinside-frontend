import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    setDark(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    },
  },
});

export default themeSlice;
