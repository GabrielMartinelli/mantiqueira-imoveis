import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/global.css";
import AppRoutes from "./routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
