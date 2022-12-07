import React from "react";
import "./styles/SidebarSection.scss";

// IMAGES
import avatarImg from "./images/avatar.svg";

// MATERIAL UI
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
// MUI ICONS
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ExitToApp } from "@mui/icons-material";

function SidebarSection(props) {
  const { anchor, toggleDrawer } = props;

  return (
    <Box
      className="SidebarSection"
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="sidebar-content-wrap">
        <div className="avatar-wrap">
          <Avatar
            alt="User picture"
            src={avatarImg}
            sx={{ width: 127, height: 127 }}
            className="avatar"
          />
          <Typography className="avatar-text">user 1234</Typography>
        </div>
        <div className="sidebar-streak-wrap">
          <div className="sidebar-streak">
            <Typography>BEST STREAK: 23 DAYS</Typography>
          </div>
          <div className="sidebar-streak">
            <Typography>CURRENT STREAK: 3 DAYS</Typography>
          </div>
        </div>
        {/* LOGGING BUTTONS */}
        <Stack className="log-stack">
          <div className="log-wrap">
            <IconButton>
              <ExitToAppIcon />
            </IconButton>
            <a href="#">LOG IN</a>
          </div>
          {/* <div className="log-wrap">
          <IconButton>
            <LogoutIcon />
          </IconButton>
          <a href="#">LOG OUT</a>
        </div> */}

          <div className="s-wrap">
            <a href="#">Create New Account</a>
          </div>
        </Stack>
      </div>
    </Box>
  );
}

export default SidebarSection;
