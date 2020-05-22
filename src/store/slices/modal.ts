import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(
      state,
      action: PayloadAction<{ name: keyof typeof initialState; value: boolean }>
    ) {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export default modalSlice;
