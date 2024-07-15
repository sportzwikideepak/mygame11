"use client";
import NavMenu from "@/components/Home/NavMenu";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Layout = ({ children }) => {
  const currentMenuStatus = useAppSelector((state) => state?.menu?.value);
  return (
    <>
      {currentMenuStatus == true && <NavMenu />}
      <div className={currentMenuStatus == true ? "hidden" : ""}>
        {children}
      </div>
    </>
  );
};

export default Layout;
