import React from "react";
// STYLES
import "./styles/MobileNavbar.scss";
// HOOKS
import { AppBar, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

function MobileNavbar(props) {
  return (
    <AppBar className="MobileNavbar">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Sidebar></Sidebar>
        <Typography className="navbar-date">{props.currentDate}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MobileNavbar;
