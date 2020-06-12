import { combineReducers } from "redux";
import themeSlice from "./slices/theme";
import modalSlice from "./slices/modal";
import authSlice from "./slices/auth";
import threadSlice from "./slices/thread";

const reducers = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [threadSlice.name]: threadSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
