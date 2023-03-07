import { Toolbar, Typography } from '@mui/material';
import React, { memo } from "react";

const Footer = () => {
  return (
    <Toolbar
      sx={{
        flexWrap: "wrap",
        background: "#00AEEF",
        position: "fixed",
        right: 0,
        bottom: 0,
        width: "100%",
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        boxShadow: "0px -10px 10px rgb(0 0 0 / 50%)",
        zIndex: 1
      }}
    >
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, textAlign: "center", color: "#fff" }}
      >
        Student Registration System
      </Typography>
    </Toolbar>
  );
};

export default memo(Footer);