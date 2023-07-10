import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderWelcome from "../components/Header/HeaderWelcome";

function Layout() {
  return (
    <>
      <HeaderWelcome />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
