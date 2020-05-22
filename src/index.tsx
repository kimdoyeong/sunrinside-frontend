import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Modal from "react-modal";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

const root = document.getElementById("root");

root && Modal.setAppElement(root);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  root
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
