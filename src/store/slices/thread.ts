import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import Thread from "../../lib/api/Thread";

interface ThreadType {
  subthreadId: string | null;
  thread: any | null;
  error: any | null;
  loading: boolean;
}

export const getThreadThunk = createAsyncThunk(
  "thread/GET_THREADS",
  Thread.getThread
);
const initialState: ThreadType = {
  subthreadId: null,
  thread: null,
  error: null,
  loading: false,
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
  extraReducers(builder) {
    builder.addCase(getThreadThunk.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getThreadThunk.fulfilled, (state, action) => {
      state.thread = action.payload;
      state.loading = false;
    });
    builder.addCase(getThreadThunk.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default threadSlice;
