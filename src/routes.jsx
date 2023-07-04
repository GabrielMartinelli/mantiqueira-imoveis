import BasePage from "@/pages/BasePage";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Initial from "./pages/Initial";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MenuOpenProvider } from "./common/context/MenuOpen";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuOpenProvider>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Initial />} />
            <Route path="/imoveis" element={<Properties />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </MenuOpenProvider>
    </BrowserRouter>
  );
}
