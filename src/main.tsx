import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "@/app/App";

import store from "@/lib/redux/store";

import "@/lib/i18n/root";

import "@/assets/scss/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
