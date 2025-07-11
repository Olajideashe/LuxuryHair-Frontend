import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <Header isHome={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
