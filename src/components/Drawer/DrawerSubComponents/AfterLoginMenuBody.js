import React, { memo } from "react";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../../Utils/navLinks";
import ModeComp from "../../../Utils/ModeComp";
import DialogBox from "../../../Utils/DialogBox";
import MenuWrapper from "../../../Utils/MenuWrapper";
import CustomDivider from "../../../Utils/CustomDivider";
import { Typography, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DarkFF4F } from "../../../Utils/CommonCookies";
const AfterLoginMenuBody = ({
  anchorEl,
  open,
  handleClose,
  icon,
  logoutFn,
  dialogOpen,
  DialogClose,
  setDialogOpen,
  setUpDown,
  searchCondition,
  upDown,
  data,
  userData,
  handleNavigate,
  cookies,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper anchorEl={anchorEl} open={open} handleClose={handleClose}>
        <MenuItem onClick={() => handleNavigate()}>
          <ListItemIcon>
            <Avatar
              variant="square"
              sx={{ width: "24px !important", height: "24px !important" }}
              src={userData?.profileImage}
            />
          </ListItemIcon>
          <ListItemText
            primary={userData?.fullname}
            sx={{ paddingTop: "inherit" }}
          />
        </MenuItem>

        {searchCondition() && !upDown && data?.length > 0 && (
          <MenuItem
            onClick={() => {
              setUpDown(true);
              handleClose();
            }}
          >
            <ListItemIcon>
              <SearchIcon sx={{ color: DarkFF4F(cookies) }} />
            </ListItemIcon>
            <ListItemText primary={"Search"} sx={{ paddingTop: "inherit" }} />
          </MenuItem>
        )}

        {navLinks
          .filter(
            (nav) =>
              nav.path !== window.location.pathname && nav.LoggedIn === true
          )
          .map((item, index) => {
            return (
              <MenuItem key={index} onClick={() => navigate(item.path)}>
                <ListItemIcon sx={{ color: DarkFF4F(cookies) }}>
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
          <ModeComp />
          <Typography sx={{ paddingTop: "inherit" }}> Change Mode</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setDialogOpen(true);
            handleClose();
          }}
        >
          <ListItemIcon sx={{ color: DarkFF4F(cookies) }}>{icon}</ListItemIcon>
          <ListItemText primary={"Logout"} sx={{ paddingTop: "inherit" }} />
        </MenuItem>
      </MenuWrapper>
      <DialogBox
        open={dialogOpen}
        handleClose={DialogClose}
        handleChange={logoutFn}
        text={"Are your sure you want to exit?"}
      />
    </>
  );
};

export default memo(AfterLoginMenuBody);
