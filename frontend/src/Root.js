import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import { setCurrentUser, setToken } from "./components/login/LoginActions";

import rootReducer from "./Reducer";
import { isEmpty } from "./utils/Utils"; // new imports

const Root = ({ children }) => {
  const store = configureStore({
    reducer: rootReducer,
  });

  if (!isEmpty(localStorage.getItem("token"))) {
    store.dispatch(setToken(localStorage.getItem("token")));
  }
  if (!isEmpty(localStorage.getItem("user"))) {
    const user = JSON.parse(localStorage.getItem("user"));
    store.dispatch(setCurrentUser(user, ""));
  }

  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

export default Root;
