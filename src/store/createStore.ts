import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

function createStore() {
  const store = configureStore({
    reducer: reducers,
    devTools: process.env.NODE_ENV === "development",
  });

  return store;
}

export default createStore;
