import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function BasePage() {
  const [active, setActivate] = useState(false);

  useEffect(function () {
    function positionScroll() {
      if (window.scrollY > 130) {
        setActivate(true);
      } else {
        setActivate(false);
      }
    }
    window.addEventListener("scroll", positionScroll);
  }, []);
  return (
    <main>
      <Header action={active} />
      <Outlet />
      <Footer />
    </main>
  );
}
