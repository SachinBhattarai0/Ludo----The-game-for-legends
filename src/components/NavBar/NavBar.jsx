import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div>NavBar</div>
      <Outlet />
    </>
  );
};

export default NavBar;
