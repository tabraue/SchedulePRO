import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderWelcome from "../components/Header/HeaderWelcome";
import HeaderMain from "../components/Header/HeaderMain";

function Layout() {
  const [header, setHeader] = useState();

  const checklogin = () => {
    localStorage.getItem("token")
      ? setHeader(<HeaderMain />)
      : setHeader(<HeaderWelcome />);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      checklogin();
    }, 100);
    return () => clearTimeout(delay);
  }, [header]);

  return (
    <>
      {header}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
