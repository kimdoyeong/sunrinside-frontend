import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import User from "../../lib/api/user";
import { setToken, getToken } from "../../lib/token";

interface AuthType {
  token: string | null;
  isLogin: boolean;
  pending: boolean;
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
  pending: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(Login.pending, (state, action) => {
      state.pending = true;
      delete state.error;
    });
    builder.addCase(Login.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLogin = true;
      state.pending = false;
    });
    builder.addCase(Login.rejected, (state, action: any) => {
      state.error = action.error.message;
      state.pending = false;
    });
  },
});

export default authSlice;
