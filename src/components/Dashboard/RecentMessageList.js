import React, { memo } from "react";
import { Typography, Grid, Paper, Box, Divider, CircularProgress } from "@mui/material";
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
const RecentMessageList = ({
  cookies,
  icon,
  title,
  bgColor,
  data,
  loading,
  userData,
}) => {
  return (
    <Grid item xs={12} sm={12} md={8} lg={8}>
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
              height: "280px",
              paddingBottom: "10px",
              overflowY: "scroll",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              background: Dark00FF(cookies),
              border: CardBorder(cookies, bgColor),
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
                      <ListItem alignItems="flex-start">
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
                                fontWeight: "bold",
                                textTransform: "capitalize",
                                color: DarkFFF(cookies),
                              }}
                            >
                              {item?.fullname}
                            </Typography>
                          }
                          secondary={
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  display: "inline",
                                  color: DarkFFF(cookies),
                                  fontWeight: "bold",
                                }}
                                component="span"
                                variant="body2"
                              >
                                {item?.email}
                              </Typography>{" "}
                              <Typography
                                sx={{
                                  textTransform: "capitalize",
                                  color: DarkFFF(cookies),
                                }}
                                component="p"
                              >
                                {"-"} {item?.comment}{" "}
                              </Typography>
                            </Box>
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
              height: "280px",
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

export default memo(RecentMessageList);
