import React, { memo, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import CustomTheme from "./CustomTheme";

const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const [updown, setupdown] = useState(false);
  useEffect(() => {
    if (matches) {
      setupdown(false);
    }
  }, [matches]);

  const CommonCode = (link, title) => {
    return (
      <CustomTheme>
        <Link
          variant="button"
          color="text.primary"
          onClick={() => navigate(link)}
          sx={{
            color: "#fff",
            cursor: "pointer",
            textTransform: "capitalize",
            padding:'5px',
            textDecoration: "none",
            width: "100%",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "#FFF",
              color: "#00AEEF",
            },
          }}
        >
          {title}
        </Link>
      </CustomTheme>
    );
  };

  const navigate = useNavigate();
  const redirectFn = () => {
    if (window.location !== "/") {
      navigate("/");
    }
  };
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        background: "#00AEEF",
        color: "#fff",
        boxShadow: "0px 10px 10px rgb(0 0 0 / 50%)",
      }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, cursor: "pointer" }}
          onClick={redirectFn}
        >
          Student Registration System
        </Typography>
        {!matches ? (
          <IconButton aria-label="menu" onClick={() => setupdown(!updown)}>
            <MenuIcon sx={{ fontSize: "24px", color: "white" }} />
          </IconButton>
        ) : (
          <nav>
            {CommonCode("/", "Dashboard")}
            {CommonCode("/view-records", "View Records")}
            {CommonCode("/about", "About")}
          </nav>
        )}
      </Toolbar>

      {updown && (
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
            {CommonCode("/", "Dashboard")}
            {CommonCode("/view-records", "View Records")}
            {CommonCode("/about", "About")}
          </nav>
        </Collapse>
      )}
    </AppBar>
  );
};

export default memo(Header);
