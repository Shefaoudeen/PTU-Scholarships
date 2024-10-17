import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Accordian from "../Components/Accordian";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Accordian />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
