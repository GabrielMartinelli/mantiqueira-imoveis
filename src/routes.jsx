import BasePage from "@/pages/BasePage";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./pages/Initial";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { MenuOpenProvider } from "./common/context/MenuOpen";
import ScrollToTop from "./components/ScrollToTop";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuOpenProvider>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Initial />}></Route>
            <Route path="/imoveis" element={<Properties />}></Route>
            <Route path="/quem-somos" element={<About />}></Route>
            <Route path="/contato" element={<Contact />}></Route>
          </Route>
        </Routes>
      </MenuOpenProvider>
    </BrowserRouter>
  );
}
