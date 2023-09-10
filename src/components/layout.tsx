import React from "react";
import NavBar from "./navbar/nav-bar";

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
