import React, { useState, memo } from "react";
import { Grid, Paper, Box, Divider } from "@mui/material";
import { Settings, PowerSettingsNew } from "@mui/icons-material/";
import Avatar from "@mui/material/Avatar";
import { StyledBadge } from "../../Utils/stylingMethods";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../Utils/DialogBox";
import { fetchData } from "../../app/reducer/getUserProfile";
import {
  CardBorder,
  Dark00FF,
  DarkFF4F,
  DarkFFF,
} from "../../Utils/CommonCookies";
const ProfileSection = ({ removeCookie, cookies, matches }) => {
  const { userData } = useSelector((state) => state.getUserProfile);
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
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
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <Paper
          elevation={0}
          sx={{
            height: "275px",
            background: Dark00FF(cookies),
            border: CardBorder(cookies, "#1976D2"),
            borderRadius: 0,
            overflowY: "scroll",
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            scrollbarWidth: "none", // hide scrollbar on Firefox
            "&::-webkit-scrollbar": {
              width: 0,
              height: 0,
            },
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
              }}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{
                    width: 90,
                    height: 90,
                    border: "1px solid #1976D2",
                  }}
                  src={userData?.profileImage}
                />
              </StyledBadge>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ListItemText
                sx={{
                  fontSize: "20px !important",
                  color: DarkFFF(cookies),
                  fontWeight: "bold",
                }}
                primary={userData?.fullname}
              />

              <ListItemText
                sx={{
                  fontSize: "15px",
                  color: DarkFF4F(cookies),
                }}
                primary={`Email: ${userData?.email}`}
              />
              <ListItemText
                sx={{
                  fontSize: "15px",
                  color: DarkFF4F(cookies),
                }}
                primary={`Phone: ${userData?.phone}`}
              />

              <ListItemText
                sx={{
                  fontSize: "15px",
                  color: DarkFF4F(cookies),
                }}
                primary={`Role: ${userData?.role}`}
              />
            </Box>
          </Box>
          <Divider />
          <Box sx={{ padding: "20px" }}>
            <ListItemButton
              sx={{
                borderRadius: 1,
                background: "#0288D1",
                mb: 1,
                color: "#fff",
                "&:hover": {
                  background: "#0288D1",
                  mb: 1,
                  color: "#fff",
                },
              }}
              onClick={() => navigate("/manage-account")}
            >
              <ListItemIcon>
                <Settings sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Account Settings" />
            </ListItemButton>
            <ListItemButton
              sx={{
                borderRadius: 1,
                background: "#00796B",
                color: "#fff",
                "&:hover": {
                  background: "#00796B",
                  color: "#fff",
                },
              }}
              onClick={() => setDialogOpen(true)}
            >
              <ListItemIcon>
                <PowerSettingsNew sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Box>
        </Paper>
      </Grid>
      <DialogBox
        open={dialogOpen}
        handleClose={handleClose}
        handleChange={logoutFn}
        text={"Are your sure you want to exit?"}
        cookies={cookies}
      />
    </>
  );
};

export default memo(ProfileSection);
