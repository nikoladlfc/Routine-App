import React from "react";
// STYLES
import "./styles/MobileNavbar.scss";
// HOOKS
import useToggleState from "./hooks/useToggleState";
import { AppBar, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";

function MobileNavbar() {
  const [isSidebarOpen, setSidebarOpen] = useToggleState(false);

  return (
    <AppBar>
      <Toolbar>
        <Sidebar></Sidebar>
      </Toolbar>
    </AppBar>
  );
}

export default MobileNavbar;
