import { combineReducers } from "redux";
import themeSlice from "./slices/theme";
import modalSlice from "./slices/modal";

const reducers = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
