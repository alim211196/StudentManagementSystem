import React, { memo } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { navLinks } from "./navLinks";
import ModeComp from "./ModeComp";
import MenuWrapper from "./MenuWrapper";
import CustomDivider from "./CustomDivider";
import { ListItemIcon, ListItemText } from "@mui/material";
import { useCookies } from "react-cookie";
import { DarkFF4F } from "./CommonCookies";
const BeforeLoginMenuBody = ({ anchorEl, open, handleClose }) => {
    const [cookies] = useCookies(["theme"]);
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
                <ListItemIcon
                  sx={{
                    width: "24px !important",
                    height: "24px !important",
                    color: DarkFF4F(cookies),
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ paddingTop: "inherit" }}
                />
              </MenuItem>
            );
          })}
        <CustomDivider title={"Settings"} />
        <MenuItem sx={{ padding: "initial" }}>
          <ListItemIcon>
            <ModeComp />
          </ListItemIcon>
          <ListItemText
            primary={" Change Mode"}
            sx={{ paddingTop: "inherit" }}
          />
        </MenuItem>
      </MenuWrapper>
    </>
  );
};

export default memo(BeforeLoginMenuBody);
