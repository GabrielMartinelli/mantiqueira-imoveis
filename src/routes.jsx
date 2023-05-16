import BasePage from "@/pages/BasePage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Initial";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Initial />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
