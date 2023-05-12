import React, { memo } from "react";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Divider,
  CircularProgress,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {
  CardBorder,
  Dark00FF,
  DarkFFF,
} from "../../Utils/CommonCookies";

const UserDataList = ({
  cookies,
  icon,
  title,
  bgColor,
  data,
  loading,
  userData,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Box sx={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            background: bgColor,
            color: "#fff",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          {icon}
          <Typography>{title}</Typography>
        </Box>
        {data &&
        data.filter(
          (i) =>
            i?.course === userData?.course &&
            i?.course_year === userData?.course_year
        ).length > 0 ? (
          <Paper
            elevation={0}
            sx={{
              borderRadius: 0,
              height: "231px",
              paddingBottom: "10px",
              overflowY: "scroll",
              background: Dark00FF(cookies),
              border: CardBorder(cookies, bgColor),
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              scrollbarWidth: "none", // hide scrollbar on Firefox
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
            }}
          >
            <List
              sx={{
                width: "100%",
              }}
            >
              {data
                .filter(
                  (i) =>
                    i?.course === userData?.course &&
                    i?.course_year === userData?.course_year
                )
                .map((item, index) => {
                  return (
                    <Box key={index}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar
                            src={item?.profileImage}
                            sx={{ border: `1px solid ${bgColor}` }}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              sx={{
                                textTransform: "capitalize",
                                fontSize: "14px",
                                fontWeight: "bold",
                                color: DarkFFF(cookies),
                              }}
                            >
                              {item?.fullname}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              sx={{
                                fontSize: "13px",
                                color: DarkFFF(cookies),
                              }}
                            >
                              {item?.email}
                            </Typography>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </Box>
                  );
                })}
            </List>
          </Paper>
        ) : (
          <Paper
            elevation={0}
            sx={{
              borderRadius: 0,
              height: "231px",
              paddingBottom: "10px",
              overflowY: "scroll",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: Dark00FF(cookies),
              border: CardBorder(cookies, bgColor),
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              scrollbarWidth: "none", // hide scrollbar on Firefox
              "&::-webkit-scrollbar": {
                width: 0,
                height: 0,
              },
            }}
          >
            {" "}
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              <Typography sx={{ color: DarkFFF(cookies) }}>
                Data not found
              </Typography>
            )}
          </Paper>
        )}
      </Box>
    </Grid>
  );
};

export default memo(UserDataList);
