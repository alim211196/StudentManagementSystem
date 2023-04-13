import React, { memo } from "react";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./navLinks";
import ModeComp from "./ModeComp";
import MenuWrapper from "./MenuWrapper";
import CustomDivider from "./CustomDivider";
import { Typography } from "@mui/material";
const BeforeLoginMenuBody = ({ anchorEl, open, handleClose }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper anchorEl={anchorEl} open={open} handleClose={handleClose}>
        {navLinks
          .filter(
            (nav) =>
              nav.path !== window.location.pathname && nav.LoggedIn === false
          )
          .map((item, index) => {
            return (
              <MenuItem key={index} onClick={() => navigate(item.path)}>
                {" "}
                <Avatar
                  variant="square"
                  sx={{ width: "24px !important", height: "24px !important" }}
                  src={item.icon}
                />
                <Typography sx={{ paddingTop: "inherit" }}>
                  {" "}
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
        <CustomDivider title={"Settings"} />
        <MenuItem sx={{ padding: "initial" }}>
          <ModeComp />
          <Typography sx={{ paddingTop: "inherit" }}> Change Mode</Typography>
        </MenuItem>
      </MenuWrapper>
    </>
  );
};

export default memo(BeforeLoginMenuBody);
