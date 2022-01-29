import React from "react";

import { SideBar } from "../SideBar";

export const Layout = ({ children }) => {
  return (
    <>
      <SideBar />
      {children}
    </>
  );
};
