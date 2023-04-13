import React, { memo,useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../Utils/DialogBox";
import { useCookies } from "react-cookie";
import { Drawer, DrawerHeader } from "../../Utils/stylingMethods";
import { navLinks } from "../../Utils/navLinks";
import CustomListItem from "./DrawerSubComponents/CustomListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../app/reducer/getUserProfile";
import LowerIcons from "./DrawerSubComponents/LowerIcons";
import DrawerAppBar from "./DrawerSubComponents/DrawerAppBar";
import ArrowBackIcon from "../../images/Back.png";
import { Avatar, useMediaQuery } from "@mui/material";
import logout from "../../images/logout.png";
import { GET_USER } from "../../ApiFunctions/users";
import { errorHandler } from "../../ApiFunctions/ErrorHandler";
import ModeComp from "../../Utils/ModeComp";
import { DrawerStyle } from "./styles";
import CustomTheme from "../../Utils/CustomTheme";
const MiniDrawer = ({children,setQuery,query,data}) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.getUserProfile);
  const matches = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = React.useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [cookies, removeCookie] = useCookies(["loggedIn", "UserId", "theme"]);
  const [loading, setLoading] = useState(true);
  const [upDown, setUpDown] = useState(false);
  const navigate = useNavigate();
  const styles = DrawerStyle(cookies, matches, upDown, open);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const logoutFn = () => {
    removeCookie("loggedIn");
    removeCookie("UserId");
    dispatch(
      fetchData({
        userData: {},
      })
    );
    navigate("/");
  };

  useEffect(() => {
    if (!userData?._id) {
      setLoading(true);
      GET_USER(cookies?.UserId)
        .then((response) => {
          setLoading(false);
          dispatch(
            fetchData({
              userData: response?.data,
            })
          );
        })
        .catch((err) => {
          setLoading(false);
          errorHandler(err?.status, err?.data, dispatch);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch, cookies.UserId, userData]);

  useEffect(() => {
    if (matches) {
      setUpDown(false);
    }
    if (!matches) {
      setOpen(false);
    }
  }, [matches]);

  return (
    <CustomTheme>
      <Box sx={styles.parentBox}>
        <CssBaseline />
        <DrawerAppBar
          setQuery={setQuery}
          query={query}
          data={data}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          loading={loading}
          userData={userData}
          navigate={navigate}
          upDown={upDown}
          setUpDown={setUpDown}
          styles={styles}
          matches={matches}
          icon={logout}
          logoutFn={logoutFn}
          dialogOpen={dialogOpen}
          DialogClose={handleClose}
          setDialogOpen={setDialogOpen}
          cookies={cookies}
        />
        <Drawer
          variant="permanent"
          open={open}
          sx={{ display: !matches && "none" }}
        >
          <DrawerHeader sx={styles.drawerHeader1}>
            <Box sx={styles.innerBox1}>
              <IconButton onClick={handleDrawerClose} sx={styles.iconBtn}>
                <Avatar
                  src={ArrowBackIcon}
                  variant="square"
                  alt="back"
                  sx={styles.iconBtnAvatar}
                />
              </IconButton>
              <ModeComp />
            </Box>
          </DrawerHeader>
          <List sx={styles.dynamicList}>
            <Box sx={styles.dynamicListBox}>
              {navLinks
                .filter((nav) => nav.LoggedIn === true)
                .map((item, index) => {
                  return (
                    <ListItem
                      key={index}
                      disablePadding
                      sx={styles.dynamicListItem}
                    >
                      <CustomListItem item={item} open={open} styles={styles} />
                    </ListItem>
                  );
                })}
            </Box>
            <LowerIcons
              icon={logout}
              text={"Logout"}
              altText={"logout"}
              open={open}
              setDialogOpen={setDialogOpen}
              styles={styles}
            />
          </List>
        </Drawer>
        <Box component="main" sx={styles.innerBox2}>
          {/* <DrawerHeader /> */}
          {children}
        </Box>
        <DialogBox
          open={dialogOpen}
          handleClose={handleClose}
          handleChange={logoutFn}
          text={"Are your sure you want to exit?"}
        />
      </Box>
    </CustomTheme>
  );
};
export default memo(MiniDrawer);
