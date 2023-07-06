import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "@/styles/global.jsx";
import AppRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
