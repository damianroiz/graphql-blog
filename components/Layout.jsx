import React from "react";
import { SectionInfo } from "./";
import { Header } from "./";
import { Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <SectionInfo />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
