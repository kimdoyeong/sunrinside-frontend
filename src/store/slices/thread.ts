import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThreadType {
  subthreadId: string | null;
}

const initialState: ThreadType = {
  subthreadId: null,
};
const threadSlice = createSlice({
  name: "thread",
  initialState,
  reducers: {
    removeId(state) {
      state.subthreadId = null;
    },
    setId(state, action: PayloadAction<string>) {
      state.subthreadId = action.payload;
    },
  },
});

export default threadSlice;
