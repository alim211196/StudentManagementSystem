import React, { memo, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Tooltip } from "@mui/material";
import { AppBar, StyledBadge } from "../../../Utils/stylingMethods.js";
import { avatarName } from "../../../Utils/AvatarName";
import CircularProgress from "@mui/material/CircularProgress";
import CustomAvatar from "../../../Utils/CustomAvatar";
import SearchAppBar from "../../../Utils/SearchAppBar";
import ClearIcon from "@mui/icons-material/Clear";
import AfterLoginMenuBody from "./AfterLoginMenuBody";
const DrawerAppBar = ({
  open,
  handleDrawerOpen,
  loading,
  userData,
  navigate,
  query,
  setQuery,
  setUpDown,
  upDown,
  data,
  styles,
  matches,
  icon,
  logoutFn,
  dialogOpen,
  DialogClose,
  setDialogOpen,
  cookies,
  flag,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const MenuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const searchCondition = () => {
    if (["/view-students", "/messages"].includes(window.location.pathname)) {
      return true;
    } else {
      return false;
    }
  };

  const handleNavigate = () => {
    if (window.location.pathname !== "/edit-profile") {
      navigate("/edit-profile");
    }
  };
  const removeSearch = () => {
    setUpDown(false);
    setQuery("");
  };

  useEffect(() => {
    if (matches) {
      handleClose();
    }
  }, [matches]);

  return (
    <AppBar position="fixed" open={open} sx={styles.appBar}>
      <Toolbar sx={{ padding: !matches && "0px 6px" }}>
        {matches && (
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={styles.toolbarIconBtn}
          >
            <MenuIcon sx={styles.toolbarIconBtnAvatar} />
          </IconButton>
        )}
        <Box sx={styles.innerBox3}>
          <Typography variant="h6" noWrap component="div" sx={styles.titleTypo}>
            Student Management System
          </Typography>
          <Box sx={styles.childBox1}>
            {matches &&
              searchCondition() &&
              data?.length > 0 &&
              flag === false && (
                <SearchAppBar
                  setQuery={setQuery}
                  query={query}
                  cookies={cookies}
                  matches={matches.toString()}
                />
              )}
            {matches && (
              <Tooltip
                title={`${userData?.fullname && userData?.fullname}`}
                placement="bottom"
              >
                <IconButton onClick={() => handleNavigate()}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    {userData?.profileImage ? (
                      <CustomAvatar>
                        {" "}
                        <Avatar alt="profile" src={userData?.profileImage} />
                      </CustomAvatar>
                    ) : (
                      <CustomAvatar>
                        {loading ? (
                          <CircularProgress color="inherit" />
                        ) : (
                          <>
                            {avatarName(
                              `${userData?.fullname && userData?.fullname}`
                            )}
                          </>
                        )}
                      </CustomAvatar>
                    )}
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            )}
            {!matches && (
              <IconButton
                aria-label="menu"
                onClick={handleClick}
                size="small"
                aria-controls={MenuOpen ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={MenuOpen ? "true" : undefined}
              >
                <MenuIcon sx={styles.toolbarIconBtnAvatar} />
              </IconButton>
            )}
          </Box>
        </Box>
      </Toolbar>
      {!matches && upDown && data?.length > 0 && flag === false && (
        <Box sx={styles.searchToolbar}>
          {searchCondition() && (
            <SearchAppBar
              setQuery={setQuery}
              query={query}
              matches={matches}
              cookies={cookies}
            />
          )}
          <Tooltip title="Close search" placement="bottom">
            <IconButton onClick={() => removeSearch()}>
              <ClearIcon sx={styles.searchIcon} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
      <AfterLoginMenuBody
        anchorEl={anchorEl}
        open={MenuOpen}
        handleClose={handleClose}
        icon={icon}
        logoutFn={logoutFn}
        dialogOpen={dialogOpen}
        DialogClose={DialogClose}
        setDialogOpen={setDialogOpen}
        setUpDown={setUpDown}
        searchCondition={searchCondition}
        upDown={upDown}
        data={data}
        userData={userData}
        handleNavigate={handleNavigate}
        cookies={cookies}
      />
    </AppBar>
  );
};

export default memo(DrawerAppBar);
