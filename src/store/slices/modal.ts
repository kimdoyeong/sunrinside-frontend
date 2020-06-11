import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  login: false,
  subthread: false,
};
export type Modals = keyof typeof initialState;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<{ name: Modals; value: boolean }>) {
      const { name, value } = action.payload;

      state[name] = value;
    },
  },
});

export default modalSlice;
