import React, { memo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const DynamicList = ({ title, subtitle, icon }) => {
   let mainBox = {
       display: "flex",
       border: "1px solid #d4d4d4",
       borderRadius: "10px",
       boxShadow: "2px 2px 5px rgba(0,0,0,0.3)",
     },
     Box1 = {
       display: "flex",
       alignItems: "center",
     },
     Box2 = {
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
       paddingLeft: "5px",
     },
     typo1 = {
       fontSize: "18px",
       fontWeight: "bold",
       color: "#292929",
     },
     typo2 = {
       fontSize: "14px",
       color: "#5c5c5c",
     };

  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <ListItem alignItems="flex-start" sx={mainBox}>
        <ListItemAvatar sx={Box1}>
          <Avatar
            src={icon}
            variant="square"
            alt={title}
            sx={{ width: 48, height: 48, textAlign: "center" }}
          />
        </ListItemAvatar>
        <ListItemText
          sx={Box2}
          primary={<Typography sx={typo1}>{title}</Typography>}
          secondary={<Typography sx={typo2}>{subtitle}</Typography>}
        />
      </ListItem>
    </List>
  );
};

export default memo(DynamicList);
