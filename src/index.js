import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

const init = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : "",
};

const ACTIONS = {
  SET_TOKEN: "set-token",
  RESET_TOKEN: "reset-token",
};

function reducer(state = init, action) {
  switch (action.type) {
    case ACTIONS.SET_TOKEN:
      return { ...state, token: action.payload };
    case ACTIONS.RESET_TOKEN:
      localStorage.removeItem("token");
      return { ...state, token: "" };
    default:
      return state;
  }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
