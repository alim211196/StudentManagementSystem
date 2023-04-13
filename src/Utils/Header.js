import React, { memo, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CustomTheme from "./CustomTheme";
import Menu from "../images/menu.png";
import { Avatar, useMediaQuery } from "@mui/material";
import ModeComp from "./ModeComp";
import BeforeLoginMenuBody from "./BeforeLoginMenuBody";
const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const MenuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const CommonCode = (link, title) => {
    if (window.location.pathname === link) {
      return null;
    } else {
      return (
        <CustomTheme>
          <Link
            variant="button"
            color="text.primary"
            onClick={() => navigate(link)}
            sx={{
              cursor: "pointer",
              textTransform: "capitalize",
              padding: "5px",
              textDecoration: "none",
              width: "100%",
              textAlign: "center",
              color: "#fff",
              "&:hover": {
                background:
                  !matches &&
                  "radial-gradient(circle at center, #DC143C , #292929)",
                color: !matches && "#fff",
              },
            }}
          >
            {title}
          </Link>
        </CustomTheme>
      );
    }
  };
  useEffect(() => {
    if (matches) {
      handleClose();
    }
  }, [matches]);
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "radial-gradient(circle at center, #DC143C , #292929)",
        color: "#fff",
      }}
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Student Management System
        </Typography>
        {!matches ? (
          <>
            <IconButton
              aria-label="menu"
              onClick={handleClick}
              size="small"
              aria-controls={MenuOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={MenuOpen ? "true" : undefined}
            >
              <Avatar
                src={Menu}
                variant="square"
                alt="menu"
                sx={{ width: 24, height: 24 }}
              />
            </IconButton>
          </>
        ) : (
          <nav>
            {CommonCode("/", "Home")}
            {/* {CommonCode("/about", "AboutMe")} */}
            {/* {CommonCode("/contact", "Contact")} */}
            {CommonCode("/sign_in", "Sign in")}
            {CommonCode("/sign_up", "Sign up")}
            <ModeComp />
          </nav>
        )}
      </Toolbar>

      {/* {updown && (
        <Collapse in={updown} timeout={1000}>
          {" "}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {CommonCode("/", "Home")}
            {CommonCode("/sign_in", "Sign in")}
            {CommonCode("/sign_up", "Sign up")}
          </nav>
        </Collapse>
      )} */}
      <BeforeLoginMenuBody
        anchorEl={anchorEl}
        open={MenuOpen}
        handleClose={handleClose}
      />
    </AppBar>
  );
};

export default memo(Header);
