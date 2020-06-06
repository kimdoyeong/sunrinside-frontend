import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../lib/api/user";
import { setToken, getToken } from "../../lib/token";

interface AuthType {
  token: string | null;
  isLogin: boolean;
  error?: string;
}
export const Login = createAsyncThunk(
  "auth/Login",
  async ({ username, password }: { username: string; password: string }) => {
    const token = await User.auth({ username, password });
    setToken(token);
    return token;
  }
);
const initialState: AuthType = {
  token: getToken(),
  isLogin: !!getToken(),
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Login.pending, (state, action) => {
      delete state.error;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
    });
    builder.addCase(Login.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload.message;
    });
  },
});

export default authSlice;
