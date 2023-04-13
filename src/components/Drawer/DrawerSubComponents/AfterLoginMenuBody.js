import React, { memo } from "react";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../../Utils/navLinks";
import ModeComp from "../../../Utils/ModeComp";
import DialogBox from "../../../Utils/DialogBox";
import search from "../../../images/search.png"
import MenuWrapper from "../../../Utils/MenuWrapper";
import CustomDivider from "../../../Utils/CustomDivider";
import { Typography } from "@mui/material";
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
}) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuWrapper anchorEl={anchorEl} open={open} handleClose={handleClose}>
        <MenuItem onClick={() => handleNavigate()}>
          <Avatar
            variant="square"
            sx={{ width: "24px !important", height: "24px !important" }}
            src={userData?.profileImage}
          />
          <Typography sx={{ paddingTop: "inherit" }}>
            {userData?.firstName + " " + userData?.lastName}
          </Typography>
        </MenuItem>

        {searchCondition() && !upDown && data?.length > 0 && (
          <MenuItem
            onClick={() => {
              setUpDown(true);
              handleClose();
            }}
          >
            <Avatar
              variant="square"
              sx={{ width: "24px !important", height: "24px !important" }}
              src={search}
            />
            <Typography sx={{ paddingTop: "inherit" }}> Search</Typography>
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
        <MenuItem
          onClick={() => {
            setDialogOpen(true);
            handleClose();
          }}
        >
          <Avatar
            variant="square"
            sx={{ width: "24px !important", height: "24px !important" }}
            src={icon}
          />
          <Typography sx={{ paddingTop: "inherit" }}> Logout</Typography>
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
