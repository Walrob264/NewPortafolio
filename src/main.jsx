import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import { HashRouter } from "react-router-dom";

import i18next from "i18next";

import globalEs from "./translate/es/global.json";
import globalEn from "./translate/en/global.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <HashRouter>
        <App />
      </HashRouter>
    </I18nextProvider>
  </React.StrictMode>
);
