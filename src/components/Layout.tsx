import React from "react";
import Footer from "./Footer";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={` w-full h-full inline-block bg-light p-32 z-0 dark:bg-dark
        xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
