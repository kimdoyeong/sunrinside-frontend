import { combineReducers } from "redux";
import themeSlice from "./slices/theme";

const reducers = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
