import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { MenuDrawer } from "./MenuDrawer";
export const NavbarAndMenuDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const togggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <Navbar onMenuClick={togggleDrawerOpen} />
      <MenuDrawer open={drawerOpen} toggleOpen={togggleDrawerOpen} />
    </>
  );
};
