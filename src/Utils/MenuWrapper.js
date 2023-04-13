import React, { memo } from "react";
import Menu from "@mui/material/Menu";
const MenuWrapper = ({ anchorEl, open, handleClose, children }) => {

  const PaperProps = {
    elevation: 0,
    sx: {
      padding: "0px 6px",
      overflow: "visible",
      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
      mt: 1.5,
      "& .MuiAvatar-root": {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      "&:before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        transform: "translateY(-50%) rotate(45deg)",
        zIndex: 0,
      },
    },
  };
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={PaperProps}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {children}
      </Menu>
    </>
  );
};

export default memo(MenuWrapper);
