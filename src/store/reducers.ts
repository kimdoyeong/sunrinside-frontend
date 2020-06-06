import { combineReducers } from "redux";
import themeSlice from "./slices/theme";
import modalSlice from "./slices/modal";
import authSlice from "./slices/auth";

const reducers = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
