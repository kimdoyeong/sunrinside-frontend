import { createStore as createReduxStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

function createStore() {
  const store = createReduxStore(reducers);

  return store;
}

export default createStore;
