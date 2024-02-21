import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import './index.css'
import { SocialNextApp } from "./SocialNextApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SocialNextApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
