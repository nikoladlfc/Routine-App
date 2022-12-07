import * as React from "react";
import SidebarSection from "./SidebarSection";

// MATERIAL UI
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IconButton, Typography } from "@mui/material";

// MUI ICONS
import MenuIcon from "@mui/icons-material/Menu";
export default function Sidebar() {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <SidebarSection
          anchor="left"
          toggleDrawer={toggleDrawer}
          sx={{ backgroundColor: "#d14343" }}
        />
      </SwipeableDrawer>
      <IconButton onClick={toggleDrawer("left", true)} sx={{ p: 0 }}>
        <MenuIcon sx={{ color: "#ffffff", fontSize: 30 }} />
      </IconButton>
    </>
  );
}
