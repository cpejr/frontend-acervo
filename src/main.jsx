import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { AntdStyles } from "./styles/AntdStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AntdStyles />
    <GlobalStyles />
    <AppProvider />
  </React.StrictMode>
);
